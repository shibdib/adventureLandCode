game_log("---Warrior Script Start---");
load_code(2);

let currentTarget, target;
let state = "farm";
//Party Management
setInterval(function () {
    for (let char of pve_characters) {
        if (char.name === character.name || (character.party && parent.party_list.includes(char.name))) continue;
        send_party_invite(char.name);
    }
}, 12400);
//Movement And Attacking
setInterval(function () {
    loot(true);
    //If you have a party, farm things
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

// Farm target refreshes every 10 minutes
setInterval(function () {
    currentTarget = undefined;
}, 600000);//Execute 10 times per second

function farm() {
    let party_aggro;
    let attack_threshold = character.attack * 0.8;
    if (character.party) {
        party_aggro = check_for_party_aggro()[0];
        attack_threshold = character.attack * 1.6;
    }
    if (!currentTarget) target = find_best_monster(attack_threshold, 10000);
    currentTarget = target;
    let in_range_target = find_local_targets(currentTarget);
    if (party_aggro) {
        let range = distance_to_point(party_aggro.real_x, party_aggro.real_y);
        if (range <= character.range) {
            if (can_use('taunt')) use('taunt', party_aggro);
            if (can_attack(party_aggro)) attack(party_aggro);
        } else {
            if (can_use('taunt')) use('taunt', party_aggro);
            if (can_use('charge') && range > 110 && range < 500) use('charge');
            move_to_target(party_aggro);
        }
    } else if (in_range_target) {
        let range = distance_to_point(in_range_target.real_x, in_range_target.real_y);
        if (range <= character.range) {
            if (can_attack(in_range_target)) attack(in_range_target);
        } else {
            if (wait_for_party() || wait_for_healer()) return stop();
            if (can_use('taunt')) use('taunt', in_range_target);
            if (can_use('charge') && range > 110 && range < 500) use('charge');
            move_to_target(in_range_target);
        }
    } else {
        if (wait_for_party() || wait_for_healer()) return stop();
        shib_move(target);
    }
}