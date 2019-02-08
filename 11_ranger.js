game_log("---Ranger Script Start---");
load_code(2);
let combat, state;

//State Controller
setInterval(function () {
    state = stateController(state);
}, 5000);

//Primary Loop
setInterval(function () {
    if (!state) return;
    if (checkPartyAggro() || !stateTasks(state, checkPartyAggro())) farm();
}, 100);

function farm() {
    loot();
    potionController();
    // Mark in combat if anyone in the party is being targeted
    if (character.party) combat = checkPartyAggro();
    let target = findLeaderTarget() || checkPartyAggro();
    // Handle kiting
    let kiteLocation;
    let aggressiveMonsters = nearbyAggressors();
    if (target) kiteLocation = getKitePosition(target, aggressiveMonsters);
    if (target) {
        if (in_attack_range(target) && checkTankAggro()) {
            // Poison arrow
            if (can_use('poisonarrow', target)) use('poisonarrow', target);
            // If you need to kite do so
            if (kiteLocation) moveToPosition(kiteLocation);
            // Attack
            if (can_attack(target))  attack(target);
        } else {
            // Long range
            if (can_use('supershot', target)) use('supershot', target);
            // If you need to kite do so, otherwise get in range
            if (kiteLocation) moveToPosition(kiteLocation); else moveToTarget(target, character.range * 0.5, character.range * 0.99);
        }
    } else {
        moveToLeader(character.range * 0.5, character.range * 0.7);
    }
}