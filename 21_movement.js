

//This function will ether move straight towards the target entity,
//or utilize smart_move to find their way there.
function move_to_target(target) {
    xmove(target.real_x, target.real_y)
}

//This function will ether move straight towards the target entity,
//or utilize smart_move to find their way there.
function move_to_position(position) {
    xmove(position.x, position.y)
}