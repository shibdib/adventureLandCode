game_log("---Ranger Script Start---");
load_code(2);
let combat;
let state = "farm";

//Movement And Attacking
setInterval(function () {
    if (character.party && (state === 'farm' || combat)) {
        farm();
    } else if (state === 'resupply_potions') resupply_potions();
}, 100);//Execute 10 times per second

//Potions and state
setInterval(function () {
    state_controller();
    if (can_use('use_hp') && character.hp < character.max_hp * 0.25) {
        use('use_hp');
    } else if (can_use('use_mp') && character.mp < character.max_mp * 0.75) {
        use('use_mp');
    } else if (can_use('use_hp') && character.hp < character.max_hp * 0.45) {
        use('use_hp');
    }
    // Check for BIS
    equip_best_available();
}, 500);//Execute 2 times per second

function state_controller() {
    //If dead respawn
    if (character.rip) return respawn();
    //Default to farming
    let new_state = "farm";
    //Do we need potions?
    new_state = potion_check(new_state)
    //If state changed set it and announce
    if (state !== new_state) {
        game_log("---NEW STATE " + new_state + "---");
        state = new_state;
    }
}

function farm() {
    // Mark in combat if anyone in the party is being targeted
    if (character.party) combat = check_for_party_aggro();
    let target = find_leader_target() || check_for_party_aggro();
    // Handle kiting
    let kiteLocation;
    let aggressiveMonsters = nearbyAggressors();
    if (target && distanceToEntity(target) <= character.range * 0.4) kiteLocation = getKitePosition(target, aggressiveMonsters);
    if (target && aggressiveMonsters.length && distanceToEntity(aggressiveMonsters[0]) < 65) kiteLocation = getKitePosition(target, aggressiveMonsters);
    if (target) {
        let range = distance_to_point(target.real_x, target.real_y);
        if (range <= character.range && check_tank_aggro()) {
            // Poison arrow
            if (can_use('poisonarrow')) use('poisonarrow', target);
            // If you need to kite do so
            if (kiteLocation) move_to_position(kiteLocation);
            // Attack
            if (can_attack(target))  attack(target);
        } else {
            // Long range
            if (can_use('supershot')) use('supershot', target);
            // If you need to kite do so, otherwise get in range
            if (kiteLocation) move_to_position(kiteLocation); else move_to_target(target, character.range * 0.5, character.range * 0.99);
        }
    } else {
        move_to_leader(character.range * 0.5, character.range * 0.7);
    }
}