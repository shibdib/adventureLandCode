//This function will ether move straight towards the target entity,
//or utilize smart_move to find their way there.
function move_to_target(target, min = 0, max = 0) {
    let range = distance_to_point(target.real_x, target.real_y);
    if (!range || range > max || range < min || !range) xmove(target.real_x, target.real_y)
}

//This function will ether move straight towards the target entity,
//or utilize smart_move to find their way there.
function move_to_position(position) {
    xmove(position.x, position.y)
}

function move_to_coords(x, y) {
    xmove(x, y)
}

function shib_move(destination) {
    if (!is_moving(character)) smart_move(destination);
}