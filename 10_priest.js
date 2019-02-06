game_log("---Priest Script Start---");
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
    //Use mana pots and heal yourself, use healing pots if low
    if (character.hp < character.max_hp * 0.25) {
        if (can_use('use_hp')) use('use_hp');
        heal(character);
    } else if (can_use('use_mp') && character.mp < character.max_mp * 0.98) {
        use('use_mp');
    } else if (character.hp < character.max_hp * 0.75) {
        heal(character);
    } else if (character.hp < character.max_hp * 0.45) {
        if (can_use('use_hp')) use('use_hp');
        heal(character);
    }
    // Check for BIS
    equipBIS();
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

let alerted;
function farm()
{
    // Mark in combat if anyone in the party is being targeted
    if (character.party) combat = checkPartyAggro();
    let lowest_health = lowHealth();
    let wounded = lowest_health && lowest_health.health_ratio < 0.75;
    let curseTarget = findLeaderTarget();
    // Handle kiting
    let kiteLocation;
    let aggressiveMonsters = nearbyAggressors();
    if (curseTarget && distanceToPoint(curseTarget.real_x, curseTarget.real_y) <= character.range * 0.4) kiteLocation = getKitePosition(curseTarget, aggressiveMonsters);
    if (curseTarget && aggressiveMonsters.length && distanceToPoint(aggressiveMonsters[0].real_x, aggressiveMonsters[0].real_y) < 65) kiteLocation = getKitePosition(curseTarget, aggressiveMonsters);
    if (lowest_health && lowest_health.health_ratio < 0.20 && can_use('revive', lowest_health)) { //Max heal with revive
        if (in_attack_range(lowest_health)) {
            if (!alerted) pm(lowest_health.name, 'Max Heal Incoming!');
            alerted = true;
            // If you need to kite do so
            if (kiteLocation) moveToPosition(kiteLocation);
            // Use revive as a mega heal
            use('revive', lowest_health);
        } else {
            if (kiteLocation) moveToPosition(kiteLocation); else moveToTarget(lowest_health, character.range * 0.425, character.range * 0.99);
        }
    } else if (partyHurtCount(0.75) > 1 && can_use('partyheal')) { //MASS HEAL WHEN NEEDED
        use('partyheal');
    } else if (wounded) { //HEAL WOUNDED
        if (in_attack_range(lowest_health)) {
            if (!alerted) pm(lowest_health.name, 'Healing You!!');
            alerted = true;
            // If you need to kite do so
            if (kiteLocation) moveToPosition(kiteLocation);
            // Heal
            heal(lowest_health);
        } else {
            if (kiteLocation) moveToPosition(kiteLocation); else moveToTarget(lowest_health, character.range * 0.425, character.range * 0.99);
        }
    } else if (!wounded && deadParty()) { //REVIVE DEAD
        alerted = undefined;
        let dead_party = deadParty();
        if (can_use('revive', dead_party)) {
            use('revive', dead_party);
        } else {
            if (kiteLocation) moveToPosition(kiteLocation); else moveToTarget(dead_party);
        }
    } else if (!wounded && curseTarget && character.mp > character.max_mp * 0.85 && checkTankAggro()) { //ATTACK IF YOU HAVE MANA
        alerted = undefined;
            if (can_use('curse', curseTarget) && checkTankAggro()) {
                use('curse', curseTarget);
            } else {
                if (in_attack_range(curseTarget)) {
                    if (can_attack(target) && checkTankAggro())  attack(target);
                } else {
                    if (kiteLocation) moveToPosition(kiteLocation); else moveToTarget(curseTarget, character.range * 0.425, character.range * 0.99);
                }
            }
    } else if (!wounded) {
        alerted = undefined;
        if (lowest_health && lowest_health.health_ratio !== 1 && in_attack_range(lowest_health)) heal(lowest_health);
        moveToLeader(character.range * 0.425, character.range * 0.5);
    }
}