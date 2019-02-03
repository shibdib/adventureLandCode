

//Returns an ordered array of all relevant targets as determined by the following:
////1. The monsters' type is contained in the 'monsterTargets' array.
////2. The monster is attacking you or a party member.
////3. The monster is not targeting someone outside your party.
//The order of the list is as follows:
////Monsters attacking you or party members are ordered first.
////Monsters are then ordered by distance.
function find_farming_targets(maxAttack, minXp, leader) {
    let monsters = Object.values(parent.entities).filter(mob => mob.type === "monster" && mob.attack > 0 && mob.attack < maxAttack
        && mob.xp >= minXp && !monsters_ref[mob.mtype].dreturn);
    if (leader) {
        return find_leader_target();
    }
    //Order monsters by whether they're attacking us, then by distance.
    monsters.sort(function (current, next) {
        let dist_current = parent.distance(character, current);
        let dist_next = parent.distance(character, next);
        // Else go to the 2nd item
        if (dist_current < dist_next) {
            return -1;
        }
        else if (dist_current > dist_next) {
            return 1
        }
        else {
            return 0;
        }
    });
    return monsters;
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