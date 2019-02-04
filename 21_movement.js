//This function will ether move straight towards the target entity,
//or utilize smart_move to find their way there.
function move_to_target(target, min = 0, max = 0) {
    let range = distance_to_point(target.real_x, target.real_y);
    if (range && smart.moving && range <= character.range) return stop();
    // If moving continue
    if (is_moving(character)) return;
    // Handle different map
    if (target.map !== character.map) return shib_move(target.map);
    // Handle same map but far away
    if (!range || !parent.entities[character.party] || range >= character.range * 4) return shib_move(target);
    // Handle close
    if (range > max || range < min || !range) xmove(target.real_x, target.real_y)
}

function move_to_leader (min = 5, max = 10) {
    let leader = get_player(character.party);
    let range = distance_to_point(leader.real_x, leader.real_y);
    if (range && smart.moving && range <= character.range) return stop();
    // If moving continue
    if (is_moving(character)) return;
    // Handle different map
    if (parent.party[character.party].map !== character.map) return shib_move(parent.party[character.party].map);
    // Handle same map but far away
    if (!range || !parent.entities[character.party] || range >= character.range * 4) return shib_move(character.party);
    // Handle close
    if (range > max || range < min || !range) move_to_target(leader, min, max);
}

//This function will ether move straight towards the target entity,
//or utilize smart_move to find their way there.
function move_to_position(position) {
    if (is_moving(character)) return;
    xmove(position.x, position.y)
}

function move_to_coords(x, y) {
    if (is_moving(character)) return;
    xmove(x, y)
}

function shib_move(destination) {
    if (is_moving(character)) return;
    smart_move(destination);
}