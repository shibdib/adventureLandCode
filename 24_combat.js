function find_local_targets(type) {
    let monsters;
    // Look for targets in range
    monsters = Object.values(parent.entities).filter(mob => mob.mtype === type);
    if (!monsters.length) return false;
    //Order monsters by distance.
    monsters = sort_by_distance(monsters);
    return monsters[0];
}

function move_to_far_target(maxAttack, minXp) {
    let sorted, monsterSpawns;
    let maps = Object.values(G.maps);
    let monsterTypes = [];
    for (let key of maps) {
        if (key.monsters) monsterSpawns = key.monsters.forEach((s) => monsterTypes.push(s.type))
    }
    let xpTarget = minXp;
    for (let x = 0; x < 50; x++) {
        sorted = sort_by_xp(monsterTypes.filter((v, i, a) => a.indexOf(v) === i)).filter((m) => G.monsters[m].attack < maxAttack && G.monsters[m].xp >= xpTarget && !G.monsters[m].dreturn);
        if (sorted.length) break;
        xpTarget *= 0.9;
    }
    if (!sorted || !sorted.length) return false;
    smart_move(sorted[0])
}

function find_best_monster(maxAttack, minXp) {
    let sorted, monsterSpawns;
    let maps = Object.values(G.maps);
    let monsterTypes = [];
    for (let key of maps) {
        if (key.monsters) monsterSpawns = key.monsters.forEach((s) => monsterTypes.push(s.type))
    }
    let xpTarget = minXp;
    for (let x = 0; x < 50; x++) {
        sorted = sort_by_xp(monsterTypes.filter((v, i, a) => a.indexOf(v) === i)).filter((m) => G.monsters[m].attack < maxAttack && G.monsters[m].xp >= xpTarget && !G.monsters[m].dreturn);
        if (sorted.length) break;
        xpTarget *= 0.9;
    }
    if (!sorted || !sorted.length) return false;
    return sorted[0];
}

function find_leader_target() {
    let target = get_target_of(get_player(character.party));
    if (target) return target;
}

function check_for_party_aggro() {
    if (!character.party) return;
    if (parent.party_list.length) {
        let monsters = Object.values(parent.entities).filter(mob => mob.type === "monster");
        let bad_aggro = monsters.filter((m) => parent.party_list.includes(m.target));
        if (bad_aggro) return bad_aggro;
    }
}

function getKitePosition(target) {
    let range = distance_to_point(target.real_x, target.real_y);
    for (let x = 0; x < 20; x++) {
        let xChange = getRndInteger(-character.range, character.range);
        let yChange = getRndInteger(-character.range, character.range);
        if (can_move_to(character.real_x + xChange, character.real_y + yChange)) {
            let newRange = distance_between_points(character.real_x + xChange, character.real_y + yChange, target.real_x, target.real_y);
            if (newRange > range && newRange >= character.range * 0.95 && newRange <= character.range) return {x: character.real_x + xChange, y: character.real_y + yChange};
        }
    }
}

//Returns the party member with the lowest hp -> max_hp ratio.
function lowest_health_partymember() {
    var party = [];
    if (parent.party_list.length > 0) {
        for(id in parent.party_list)
        {
            var member = parent.party_list[id];
            var entity = parent.entities[member];
            if (member == character.name) {
                entity = character;
            }
            if (entity != null) {
                party.push({name: member, entity: entity});
            }
        }
    }
    else
    {
        //Add Self to Party Array
        party.push(
            {
                name: character.name,
                entity: character
            });
    }
    //Populate health percentages
    for (id in party) {
        var member = party[id];
        if (member.entity != null) {
            member.entity.health_ratio = member.entity.hp / member.entity.max_hp;
        }
        else {
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
        for (id in parent.party_list) {
            let member = parent.party_list[id];
            let entity = parent.entities[member];
            if (entity && entity.hp < entity.max_hp * amount) count += 1;
        }
    }
    return count;
}

function dead_partymember() {
    if (parent.party_list.length > 0) {
        for (id in parent.party_list) {
            let member = parent.party_list[id];
            let entity = parent.entities[member];
            if (member === character.name) continue;
            if (!entity.rip) continue;
            if (entity) return entity;
        }
    }
}

function sort_by_distance(array) {
    array.sort(function (current, next) {
        let dist_current = parent.distance(character, current);
        let dist_next = parent.distance(character, next);
        if (dist_current < dist_next) return -1; else if (dist_current > dist_next) return 1; else return 0;
    });
    return array;
}

function sort_by_xp(array) {
    array.sort(function (current, next) {
        let xp_current = G.monsters[current].xp;
        let xp_next = G.monsters[next].xp;
        if (xp_current < xp_next) return -1; else if (xp_current > xp_next) return 1; else return 0;
    });
    return array;
}