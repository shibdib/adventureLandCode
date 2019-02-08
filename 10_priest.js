game_log("---Priest Script Start---");
load_code(2);
let combat, state, alerted, kiting;

//State Controller
setInterval(function () {
    state = stateController(state);
}, 5000);

//Primary Loop
setInterval(function () {
    if (!state) return;
    if (checkPartyAggro() || !stateTasks(state, checkPartyAggro())) farm();
}, 500);

//Kite Loop
setInterval(function () {
    if (nearbyAggressors().length) {
        kiting = true;
        moveToPosition(getKitePosition(get_target(), nearbyAggressors()));
    } else {
        kiting = undefined;
    }
}, 75);

function farm() {
    loot();
    potionController(true);
    // Mark in combat if anyone in the party is being targeted
    if (character.party) combat = checkPartyAggro();
    let lowest_health = lowHealth();
    let wounded = lowest_health && lowest_health.health_ratio < 0.75;
    let tankTarget = findLeaderTarget();
    // Do Damage if possible
    if (tankTarget && character.mp > character.max_mp * 0.5 && checkTankAggro()) {
        if (can_use('curse', tankTarget)) use('curse', tankTarget);
        if (can_attack(tankTarget)) attack(tankTarget);
    }
    if (lowest_health && lowest_health.health_ratio < 0.20 && can_use('revive', lowest_health)) { //Max heal with revive
        if (in_attack_range(lowest_health)) {
            if (!alerted) pm(lowest_health.name, 'Max Heal Incoming!');
            alerted = true;
            // Use revive as a mega heal
            use('revive', lowest_health);
        } else {
            if (!kiting) moveToTarget(lowest_health, character.range * 0.425, character.range * 0.99);
        }
    } else if (partyHurtCount(0.75) > 1 && can_use('partyheal')) { //MASS HEAL WHEN NEEDED
        use('partyheal');
    } else if (wounded) { //HEAL WOUNDED
        if (in_attack_range(lowest_health)) {
            if (!alerted) pm(lowest_health.name, 'Healing You!!');
            alerted = true;
            // Heal
            heal(lowest_health);
        } else {
            if (!kiting) moveToTarget(lowest_health, character.range * 0.425, character.range * 0.99);
        }
    } else if (!wounded && deadParty()) { //REVIVE DEAD
        alerted = undefined;
        let dead_party = deadParty();
        if (can_use('revive', dead_party)) {
            use('revive', dead_party);
        } else {
            if (!kiting) moveToTarget(dead_party);
        }
    } else {
        alerted = undefined;
        if (lowest_health && lowest_health.health_ratio <= 0.99 && in_attack_range(lowest_health)) heal(lowest_health);
        if (!kiting) moveToLeader(character.range * 0.425, character.range * 0.5);
    }
}