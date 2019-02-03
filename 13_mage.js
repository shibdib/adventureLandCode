game_log("---Mage Script Start---");
load_code(2);
//Put monsters you want to kill in here
//If your character has no target, it will travel to a spawn of the first monster in the list below.
let state = "farm";

//Movement And Attacking
setInterval(function () {
    if (character.party && state === 'farm') farm();
    if (state === 'resupply_potions') resupply_potions();
}, 100);//Execute 10 times per second

//Potions and state
setInterval(function () {
    state_controller();
    if (character.hp / character.max_hp < 0.25) {
        use('use_hp');
    } else if (character.mp / character.max_mp < 0.75) {
        use('use_mp');
    } else if (character.hp / character.max_hp < 0.45) {
        use('use_hp');
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
    let target = find_leader_target();
    let teleport_target = get_teleport_target();
    if (teleport_target && can_use('magiport')) {
        use('magiport', teleport_target)
    } else if (target) {
        let range = distance_to_point(target.real_x, target.real_y);
        if (range <= character.range) {
            if (can_attack(target))  attack(target);
            if (range <= character.range * 0.7) {
                let kiteLocation = getKitePosition(target);
                if (kiteLocation) move_to_position(kiteLocation)
            }
        } else {
            move_to_target(target);
        }
    } else {
        move_to_leader(character.range * 0.5, character.range * 0.7);
    }
}