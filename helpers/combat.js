

//Returns an ordered array of all relevant targets as determined by the following:
////1. The monsters' type is contained in the 'monsterTargets' array.
////2. The monster is attacking you or a party member.
////3. The monster is not targeting someone outside your party.
//The order of the list is as follows:
////Monsters attacking you or party members are ordered first.
////Monsters are then ordered by distance.
function find_farming_targets(maxAttack, minXp) {
    let monsters = Object.values(parent.entities).filter(mob => mob.type === "monster" && mob.target === character.name);
    if (!monsters.length) monsters = Object.values(parent.entities).filter(mob => mob.type === "monster" && can_attack(mob) && mob.attack > 0 && mob.attack < maxAttack);
    let partyTargets = monsters.filter((m) => parent.party_list.includes(m.target));
    if (partyTargets.length) monsters = partyTargets;
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
    let target = get_target_of(get_player('Shibdib'));
    if (target) return target;
    move_to_target(player);
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

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function distance_to_point(x, y) {
    return Math.sqrt(Math.pow(character.real_x - x, 2) + Math.pow(character.real_y - y, 2));
}

function distance_between_points(x, y, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x, 2) + Math.pow(y2 - y, 2));
}

//Returns the distance of the character to a point in the world.
function distance_to_point(x, y) {
    return Math.sqrt(Math.pow(character.real_x - x, 2) + Math.pow(character.real_y - y, 2));
}

//Returns the distance of the character to a point in the world.
function distance_between_points(x, y, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x, 2) + Math.pow(y2 - y, 2));
}