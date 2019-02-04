
function find_farming_targets(maxAttack, minXp) {
    let monsters;
    // If in party attack the leaders target
    if (character.party && character.party !== character.name) return find_leader_target();
    // Search for monsters, for loop 15 times with slowly lowering xp demands to find the best possible target xp wise
    let xpTarget = minXp;
    let xpScaleDown = 0.9;
    for (let x = 0; x < 15; x++) {
        monsters = Object.values(parent.entities).filter(mob => mob.type === "monster" && mob.attack > 0 && mob.attack < maxAttack
            && mob.xp >= xpTarget && !monsters_ref[mob.mtype].dreturn && !mob.target);
        if (monsters.length) break;
        // Lower xp every cycle
        xpTarget *= xpScaleDown;
        xpScaleDown *= 0.95;
    }
    //If you still don't have a target find anything
    if (!monsters.length) find_farming_targets(maxAttack, 1);
    //Order monsters by whether they're attacking us, then by distance.
    monsters.sort(function (current, next) {
        let dist_current = parent.distance(character, current);
        let dist_next = parent.distance(character, next);
        if (dist_current < dist_next) return -1; else if (dist_current > dist_next) return 1; else return 0;
    });
    if (monsters.length) {
        return {
            'target': monsters[0],
            'x': monsters[0].real_x,
            'y': monsters[0].real_y
        };
    }
}

function find_leader_target() {
    let target = get_target_of(get_player(character.party));
    if (target) return target;
}

function check_for_party_aggro() {
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