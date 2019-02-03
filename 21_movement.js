

//This function will ether move straight towards the target entity,
//or utilize smart_move to find their way there.
function move_to_target(target, range = 0, maxRange = 0) {
    range = getRndInteger(range,maxRange);
    if (can_move_to(target.real_x, target.real_y)) {
        smart.moving = false;
        smart.searching = false;
        move(
            (character.real_x + (target.real_x - character.real_x) / 2) + range,
            (character.real_y + (target.real_y - character.real_y) / 2) + range
        );
    }
    else {
        if (!smart.moving) {
            smart_move({x: target.real_x + range, y: target.real_y + range});
        }
    }
}

//This function will ether move straight towards the target entity,
//or utilize smart_move to find their way there.
function move_to_position(position) {
    if (can_move_to(position.x, position.y)) {
        smart.moving = false;
        smart.searching = false;
        move(
            character.real_x + (position.x - character.real_x) / 2,
            character.real_y + (position.y - character.real_y) / 2
        );
    }
    else {
        if (!smart.moving) {
            smart_move({x: position.x, y: position.y});
        }
    }
}