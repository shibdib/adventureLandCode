game_log("---Rogue Script Start---");
load_code(2);
let combat, state;

//State Controller
setInterval(function () {
    state = stateController(state);
}, 5000);

//Primary Loop
setInterval(function () {
    if (!state) return;
    if (combat || !stateTasks(state, combat)) farm();
}, 100);

function farm() {
    loot();
    potionController();
    // Mark in combat if anyone in the party is being targeted
    if (character.party) combat = checkPartyAggro();
    let target = findLeaderTarget() || checkPartyAggro();
    if (target && checkTankAggro()) {
        let range = distanceToPoint(target.real_x, target.real_y);
        if (range <= character.range) {
            // Killy rogue
            if (can_use('quickstab', target)) use('quickstab', target); else if (can_use('quickpunch', target)) use('quickpunch', target);
            if (can_attack(target))  meleeCombat(target);
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
        moveToLeader(character.range * 0.5, character.range * 0.7);
    }
}