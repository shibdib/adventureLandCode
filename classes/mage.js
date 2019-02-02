game_log("---Script Start---");
//Put monsters you want to kill in here
//If your character has no target, it will travel to a spawn of the first monster in the list below.
let state = "farm";
let min_potions = 50; //The number of potions at which to do a resupply run.
let purchase_amount = 50;//How many potions to buy at once.
let potion_types = ["hpot0", "mpot0"];//The types of potions to keep supplied.

//Movement And Attacking
setInterval(function () {
    loot(true);
    if (state === 'farm') farm();
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
    for (type_id in potion_types) {
        let type = potion_types[type_id];
        let num_potions = num_items(type);
        if (num_potions < min_potions) {
            new_state = "resupply_potions";
            break;
        }
    }
    if (state != new_state) {
        game_log("---NEW STATE " + new_state + "---");
        state = new_state;
    }
}

function farm() {
    let target = find_farming_targets(character.attack * 0.8, character.max_xp * 0.05)[0];
    if (target) {
        let range = distance_to_point(target.real_x, target.real_y);
        if (range < character.range) {
            if (can_attack(target))  attack(target);
            if (range <= character.range * 0.7) {
                let kiteLocation = getKitePosition(target);
                if (kiteLocation) move_to_position(kiteLocation)
            }
        } else {
            move_to_target(target);
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