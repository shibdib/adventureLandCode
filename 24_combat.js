function find_local_targets(type) {
    let monsters;
    // Look for targets in range
    monsters = Object.values(parent.entities).filter(mob => mob.mtype === type);
    if (!monsters.length) return false;
    //Order monsters by distance.
    monsters = sort_by_distance(monsters);
    return monsters[0];
}

// Returns the best monster based off of a minXp var and relative attack power. This is slightly random and will usually return a different
// monster every run as multiple monsters typically meet the criteria so make sure to cache the target or edit this to return the same.
function find_best_monster(minXp) {
    let sorted, monsterSpawns;
    // Max attack is 90% of your attack when solo, or a combination of attacks 80% when partied
    let maxAttack = character.attack * 0.9;
    /**if (character.party) {
        maxAttack = character.attack * 0.8;
        for (let key in parent.party_list) {
            let member = parent.party_list[key];
            if (member === character.name) continue;
            let entity = parent.entities[member];
            // Don't count merchants
            if (!entity || entity.ctype === 'merchant') continue;
            maxAttack += entity.attack * 0.8;
        }
    }**/
        // Make G.maps an array
    let maps = Object.values(G.maps);
    let monsterTypes = [];
    // Get all monster types from G.maps
    for (let key of maps) {
        if (key.monsters) monsterSpawns = key.monsters.forEach((s) => monsterTypes.push(s.type))
    }
    // Set your XP threshold
    let xpTarget = minXp;
    // This will loop until it finds 2+ targets that meet the XP threshold which is progressively lowered 10% every loop.
    for (let x = 0; x < 150; x++) {
        // Filter out duplicates, then filter out targets based on maxAttack/xp and some other things that cause outliers
        // TODO: add more args to the filter to allow this to find the mini boss esque people (Green jr)
        sorted = sort_by_xp(monsterTypes.filter((v, i, a) => a.indexOf(v) === i)).filter((m) => G.monsters[m].attack < maxAttack && G.monsters[m].xp >= xpTarget
            && !G.monsters[m].dreturn && !G.monsters[m].rage && !G.monsters[m].stationary && (!G.monsters[m].evasion || G.monsters[m].evasion <= 80));
        if (sorted.length > 2) break;
        // Lower the XP target per loop
        xpTarget *= 0.9;
    }
    // If it doesn't find anything return false
    if (!sorted || !sorted.length) return false;
    // If it finds something it returns a random entity in the top half of the list
    // Uncomment the below and comment the other return to get the same return every time
    // return sorted[0];
    return sorted[getRndInteger(0, sorted.length / 2)];
}

function find_leader_target() {
    if (!character.party) return;
    let target = get_target_of(get_player(character.party));
    if (!target) return;
    if (parent.party_list.length) {
        for (id in parent.party_list) {
            let member = parent.party_list[id];
            if (member === target.name) return;
        }
    }
    if (target) return target;
}

function check_tank_aggro() {
    if (!character.party) return;
    let target = get_target_of(get_player(character.party));
    let targetsTarget = get_target_of(target);
    if (target && targetsTarget === get_player(character.party) || targetsTarget === character.party) return true;
}

function check_for_party_aggro() {
    if (!character.party) return;
    if (parent.party_list.length) {
        let monsters = Object.values(parent.entities).filter(mob => mob.type === "monster");
        let bad_aggro = monsters.filter((m) => parent.party_list.includes(m.target));
        if (bad_aggro) return bad_aggro[0];
    }
}

function nearbyAggressors() {
    let aggressiveMonsters = Object.values(parent.entities).filter(mob => mob.type === "monster" && G.monsters[mob.mtype] && G.monsters[mob.mtype].aggro);
    //Order monsters by distance.
    return sort_by_distance(aggressiveMonsters);
}

function findAdds(attack = 0.07) {
    let adds = Object.values(parent.entities).filter(mob => mob.type === "monster" && mob.attack < character.hp * attack);
    //Order monsters by distance.
    return sort_by_distance(adds);
}

function getMonstersTargettingMe() {
    let all = Object.values(parent.entities).filter(mob => mob.type === "monster" && mob.target === character.name);
    //Order monsters by distance.
    return sort_by_distance(all);
}

function getPositionAtRange(target, desiredRangeMin, desiredRangeMax) {
    for (let x = 0; x < 100; x++) {
        let xChange = getRndInteger(-character.range, character.range);
        let yChange = getRndInteger(-character.range, character.range);
        if (can_move_to(character.real_x + xChange, character.real_y + yChange)) {
            let newRange = distance_between_points(character.real_x + xChange, character.real_y + yChange, target.real_x, target.real_y);
            if (newRange >= desiredRangeMin && newRange <= desiredRangeMax) return {x: character.real_x + xChange, y: character.real_y + yChange};
        }
    }
}

// This tries to deal with combined damage;
function meleeCombat(target) {
    if (character.range < 40) {
        for (let id in parent.party_list) {
            let member = parent.party_list[id];
            let entity = parent.entities[member];
            if (entity && (entity.ctype === 'rogue' || entity.ctype === 'warrior') && distance_to_point(entity.real_x, entity.real_y) + 0.1 < 45) {
                for (let x = 0; x < 50; x++) {
                    let xChange = getRndInteger(-5, 5);
                    let yChange = getRndInteger(-5, 5);
                    if (can_move_to(character.real_x + xChange, character.real_y + yChange)) {
                        let newRange = distance_between_points(character.real_x + xChange, character.real_y + yChange, entity.real_x, entity.real_y);
                        let newTargetRange = distance_between_points(character.real_x + xChange, character.real_y + yChange, target.real_x, target.real_y);
                        if (newRange > 40 && newTargetRange <= character.range) move_to_coords(character.real_x + xChange, character.real_y + yChange);
                    }
                }
            }
        }
    }
    attack(target);
}

//Returns the party member with the lowest hp -> max_hp ratio.
function lowest_health_partymember() {
    var party = [];
    if (parent.party_list.length > 0) {
        for (let id in parent.party_list) {
            var member = parent.party_list[id];
            var entity = parent.entities[member];
            if (member == character.name) {
                entity = character;
            }
            if (entity != null) {
                party.push({name: member, entity: entity});
            }
        }
    } else {
        //Add Self to Party Array
        party.push({
            name: character.name,
            entity: character
        });
    }
    //Populate health percentages
    for (let id in party) {
        var member = party[id];
        if (member.entity != null) {
            member.entity.health_ratio = member.entity.hp / member.entity.max_hp;
        } else {
            member.health_ratio = 1;
        }
    }
    //Order our party array by health percentage
    party.sort(function (current, next) {
        return current.entity.health_ratio - member.entity.health_ratio;
    });
    //Return the lowest health
    return party[0].entity;
}

function party_hurt_count(amount = 0.75) {
    let count = 0;
    if (parent.party_list.length > 0) {
        for (let id in parent.party_list) {
            let member = parent.party_list[id];
            let entity = parent.entities[member];
            if (entity && entity.hp < entity.max_hp * amount) count += 1;
        }
    }
    return count;
}

function dead_partymember() {
    if (parent.party_list.length > 0) {
        for (let id in parent.party_list) {
            let member = parent.party_list[id];
            let entity = parent.entities[member];
            if (!entity || member === character.name) continue;
            if (!entity.rip) continue;
            if (entity) return entity;
        }
    }
}