game_log("---Rogue Script Start---");
load_code(2);
let combat;
let state = stateController();

//State Controller
setInterval(function () {
    state = stateController(state);
}, 5000);

//Primary Loop
setInterval(function () {
    if (!state) return;
    if (!stateTasks(state)) farm();
}, 100);

//Fast Loop
setInterval(function () {
    // Update your data
    updateCharacterData();
}, 75);

function farm() {
    loot();
    potionController();
    // Mark in combat if anyone in the party is being targeted
    if (character.party) combat = checkPartyAggro(); else return shibMove('main');
    let leader = get_player(character.party);
    // Fleet if tank is gone
    if (!leader) return moveToLeader(character.range * 0.5, character.range * 0.7);
    let target = getMonstersTargeting(leader)[0] || findLeaderTarget() || checkPartyAggro()
    if (target && (checkTankAggro() || canOneShot(target))) {
        let range = distanceToPoint(target.real_x, target.real_y);
        if (range <= character.range) {
            // Killy rogue
            if (can_use('quickstab', target)) {
                parent.d_text("QUICK STAB!",character,{color:"#ff4c25"});
                use('quickstab', target);
            } else if (can_use('quickpunch', target)) {
                parent.d_text("QUICK PUNCH!",character,{color:"#ff4130"});
                use('quickpunch', target);
            }
            if (can_attack(target)) {
                smartAttack(target);
            }
        } else {
            // Poison
            if (can_use('pcoat')) {
                parent.d_text("POISON COAT!",character,{color:"#80ff3a"});
                use('pcoat');
            }
            // Sneaky rogue
            if (can_use('invis')) {
                parent.d_text("VANISH!",character,{color:"#6786ff"});
                use('invis');
            }
            moveToTarget(target, character.range * 0.5, character.range * 0.99);
        }
    } else {
        // Only invis if near baddies
        if (nearbyAggressors(100, true).length && can_use('invis')) use('invis'); else stop('invis');
        // Speedy rogue
        if (can_use('rspeed', character)) use('rspeed', character);
        moveToLeader();
    }
}