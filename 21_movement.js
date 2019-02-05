//This function will ether move straight towards the target entity,
//or utilize smart_move to find their way there.
function move_to_target(target, min = 0, max = 0) {
    let range;
    if (target) range = distance_to_point(target.real_x, target.real_y) + 0.1;
    // If range is good stay
    if (range && (range <= max && range >= min)) return stop();
    // If smart moving past them stop
    if (range && smart.moving && range <= character.range) return stop();
    // If moving continue
    if (is_moving(character)) return;
    // Handle different map
    if (parent.party[character.party].map !== character.map) return shib_move(parent.party[character.party].map);
    // Handle same map but far away
    if (!range || !parent.entities[character.party] || range >= character.range * 4) {
        if (target) move_to_coords(target.real_x, target.real_y); else return shib_move(target);
    }
    // Handle close
    if (target && (range > max || range < min || !range)) move_to_coords(target.real_x, target.real_y);
}

function move_to_leader (min = 5, max = 10) {
    let leader = get_player(character.party);
    let range;
    if (leader) range = distance_to_point(leader.real_x, leader.real_y) + 0.1;
    // If range is good stay
    if (range && (range <= max && range >= min)) return stop();
    // If smart moving past them stop
    if (range && smart.moving && range <= character.range) return stop();
    // If moving continue
    if (is_moving(character)) return;
    // Handle different map
    if (parent.party[character.party].map !== character.map) return shib_move(parent.party[character.party].map);
    // Handle same map but far away
    if (!range || !parent.entities[character.party] || range >= character.range * 4) {
        if (leader) {
            return move_to_coords(leader.real_x, leader.real_y);
        } else {
            return shib_move(parent.party[character.party].x, parent.party[character.party].y);
        }
    }
    // Handle close
    if (leader && (range > max || range < min || !range)) move_to_coords(leader.real_x, leader.real_y); else if (!leader) shib_move(parent.party[character.party].x, parent.party[character.party].y);
}

//This function will ether move straight towards the target entity,
//or utilize smart_move to find their way there.
function move_to_position(position) {
    if (is_moving(character)) return;
    move_to_coords(position.x, position.y)
}

function move_to_coords(x, y) {
    if (is_moving(character)) return;
    if(can_move_to(x,y)) {
        if (smart.moving) stop();
        move(x,y);
    }
    else smart_move({x:x,y:y});
}

function shib_move(destination, y = undefined) {
    if (is_moving(character)) return;
    smart_move(destination, y);
}