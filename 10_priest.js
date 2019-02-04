game_log("---Priest Script Start---");
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
    //Use mana pots and heal yourself, use healing pots if low
    if (character.hp / character.max_hp < 0.25) {
        use('use_hp');
        heal(character);
    } else if (character.mp / character.max_mp < 0.75) {
        use('use_mp');
    } else if (character.hp / character.max_hp < 0.75) {
        heal(character);
    } else if (character.hp / character.max_hp < 0.45) {
        use('use_hp');
        heal(character);
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

let alerted;
let lastHurt;
function farm()
{
    let lowest_health = lowest_health_partymember();
    let curseTarget = find_leader_target();
    // Handle kiting
    if (curseTarget && distance_to_point(curseTarget.real_x, curseTarget.real_y) <= character.range * 0.7) {
        let kiteLocation = getKitePosition(curseTarget);
        if (kiteLocation) move_to_position(kiteLocation)
    }
    if (party_hurt_count(0.75) > 1 && can_use('partyheal')) {//MASS HEAL WHEN NEEDED
        use('partyheal');
    } else if (lowest_health && lowest_health.health_ratio < 0.85) { //HEAL WOUNDED
        lastHurt = lowest_health;
        if (!alerted) pm (lowest_health.name, 'Healing You!!');
        alerted = true;
        if (distance_to_point(lowest_health.real_x, lowest_health.real_y) <= character.range) {
            heal(lowest_health);
        } else {
            move_to_target(lowest_health);
        }
    } else if (dead_partymember()) { //REVIVE DEAD
        let dead_party = dead_partymember();
        if (can_use('revive') && distance_to_point(dead_party.real_x, dead_party.real_y) <= character.range) {
            use('revive', dead_party);
        } else {
            move_to_target(dead_party);
        }
    } else if (curseTarget) {
            if (can_use('curse')) {
                use('curse', curseTarget, character.range * 0.5, character.range * 0.99);
            } else {
                if (distance_to_point(curseTarget.real_x, curseTarget.real_y) <= character.range) {
                    attack(curseTarget);
                } else {
                    move_to_target(curseTarget, character.range * 0.5, character.range * 0.99);
                }
            }
    } else {
        alerted = undefined;
        move_to_leader(character.range * 0.5, character.range * 0.99);
    }
}