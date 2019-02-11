game_log("---Priest Script Start---");
load_code(2);
let combat, alerted;
let state = stateController();

//State Controller
setInterval(function () {
    state = stateController(state);
}, 5000);

//Primary Loop
setInterval(function () {
    if (!state) return;
    if (!stateTasks(state)) farm();
}, 500);

//Fast Loop
setInterval(function () {
    // Update your data
    updateCharacterData();
}, 75);

function farm() {
    loot();
    potionController(true);
    let leader = get_player(character.party);
    // Fleet if tank is gone
    if (!leader) return moveToLeader(character.range * 0.5, character.range * 0.7);
    // Mark in combat if anyone in the party is being targeted
    if (character.party) combat = checkPartyAggro(); else return shibMove('main');
    let lowest_health = lowHealth(0.75);
    let tankTarget = getMonstersTargeting(leader)[0] || findLeaderTarget() || checkPartyAggro();
    // Alert when OOM
    if (character.mp === 0) whisperParty('I just went OOM!');
    // Do Damage if possible
    if (!lowest_health && tankTarget && character.mp > character.max_mp * 0.5 && (checkTankAggro() || canOneShot(tankTarget))) {
        if (can_use('curse', tankTarget)) use('curse', tankTarget);
        if (can_attack(tankTarget)) attack(tankTarget);
    }
    if (lowest_health && lowest_health.health_ratio < 0.20 && can_use('revive', lowest_health)) { //Max heal with revive
        if (in_attack_range(lowest_health)) {
            //if (!alerted) pm(lowest_health.name, 'Max Heal Incoming!');
            alerted = true;
            // Use revive as a mega heal
            use('revive', lowest_health);
            kite();
        } else {
            moveToTarget(lowest_health, character.range * 0.425, character.range * 0.99);
        }
    } else if (partyHurtCount(0.75) > 1 && can_use('partyheal')) { //MASS HEAL WHEN NEEDED
        whisperParty('Mass heal for everyone!');
        use('partyheal');
        kite();
    } else if (lowest_health && !lowest_health.rip) { //HEAL WOUNDED
        if (in_attack_range(lowest_health)) {
            //if (!alerted) pm(lowest_health.name, 'Healing You!!');
            alerted = true;
            // Heal
            heal(lowest_health);
            kite();
        } else {
            moveToTarget(lowest_health, character.range * 0.425, character.range * 0.99);
        }
    } else if (!lowest_health && deadParty()) { //REVIVE DEAD
        alerted = undefined;
        let dead_party = deadParty();
        if (can_use('revive', dead_party)) {
            use('revive', dead_party);
            kite();
        }
    } else {
        alerted = undefined;
        if (lowest_health && in_attack_range(lowest_health)) {
            heal(lowest_health);
        }
        if (!combat) moveToLeader(); else kite();
    }
}