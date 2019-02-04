//This function will ether move straight towards the target entity,
//or utilize smart_move to find their way there.
function move_to_target(target, min = 0, max = 0) {
    if (is_moving(character)) return;
    let range = distance_to_point(target.real_x, target.real_y);
    if (!range || range > max || range < min || !range) xmove(target.real_x, target.real_y)
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