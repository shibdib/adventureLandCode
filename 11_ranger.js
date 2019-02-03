game_log("---Ranger Script Start---");
load_code(2);
//Put monsters you want to kill in here
//If your character has no target, it will travel to a spawn of the first monster in the list below.
let state = "farm";
//Movement And Attacking
setInterval(function () {
    //if (state === 'farm') farm();
    if (state === 'resupply_potions') resupply_potions();
}, 100);//Execute 10 times per second

//Potions and state
setInterval(function () {
    state_controller();
    //Heal With Potions if we're below 75% hp.
    if (character.hp / character.max_hp < 0.75 || character.mp / character.max_mp < 0.75) {
        use_hp_or_mp();
    }
}, 500);//Execute 2 times per second

function state_controller() {
    //If dead respawn
    if (character.rip) return respawn();
    //Default to farming
    let new_state = "farm";
    //Do we need potions?
    new_state = potion_check(new_state)
    //If state changed set it and announce
    if (state != new_state) {
        game_log("---NEW STATE " + new_state + "---");
        state = new_state;
    }
}

function farm() {
    let target = find_farming_targets(50);
    if (target) {
        let range = distance_to_point(target.real_x, target.real_y);
        if (range <= character.range) {
            if (can_attack(target)) attack(target);
        } else {
            move(
                character.real_x + (target.real_x - character.real_x),
                character.real_y + (target.real_y - character.real_y)
            );
        }
    }
}

//This function will ether move straight towards the target entity,
//or utilize smart_move to find their way there.
function move_to_target(target) {
    if (can_move_to(target.real_x, target.real_y)) {
        smart.moving = false;
        smart.searching = false;
        move(
            character.real_x + (target.real_x - character.real_x) / 2,
            character.real_y + (target.real_y - character.real_y) / 2
        );
    }
    else {
        if (!smart.moving) {
            smart_move({x: target.real_x, y: target.real_y});
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