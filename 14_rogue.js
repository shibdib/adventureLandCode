game_log("---Rogue Script Start---");
load_code(2);
let combat, state, kiting;

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
    if ((combat || !is_moving(character)) && nearbyAggressors().length && getKitePosition(get_target(), nearbyAggressors())) {
        kiting = true;
        moveToPosition(getKitePosition(get_target(), nearbyAggressors()));
    } else {
        kiting = undefined;
    }
}, 75);

function farm() {
    loot();
    potionController();
    let leader = get_player(character.party);
    // Fleet if tank is gone
    if (!leader) {
        if (getEasyKills().length) attack(getEasyKills()[0]);
        if (!kiting) return moveToLeader(character.range * 0.5, character.range * 0.7);
    }
    // Mark in combat if anyone in the party is being targeted
    if (character.party) combat = checkPartyAggro();
    let target = getMonstersTargeting(leader)[0] || findLeaderTarget() || checkPartyAggro()
    if (target && (checkTankAggro() || canOneShot(target))) {
        let range = distanceToPoint(target.real_x, target.real_y);
        if (range <= character.range) {
            // Killy rogue
            if (can_use('quickstab', target)) use('quickstab', target); else if (can_use('quickpunch', target)) use('quickpunch', target);
            if (can_attack(target))  attack(target);
        } else {
            // Poison
            if (can_use('pcoat')) use('pcoat');
            // Sneaky rogue
            if (can_use('invis')) use('invis');
            moveToTarget(target, character.range * 0.5, character.range * 0.99);
        }
    } else {
        // No invis on long moves
        stop('invis');
        // Speedy rogue
        if (can_use('rspeed', character)) use('rspeed', character);
        if (getEasyKills().length) attack(getEasyKills()[0]);
        if (!kiting) moveToLeader(character.range * 0.5, character.range * 0.7);
    }
}