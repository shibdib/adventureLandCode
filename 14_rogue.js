game_log("---Rogue Script Start---");
if (get_active_characters()[character.name] === 'self') load_code(2);
let combat;
let state;

//State Controller
setInterval(function () {
    if (character.rip && state !== 99) state = 99;
    if (combat) state = 1; else state = stateController(state);
}, 5000);

//Combat Loop
setInterval(function () {
    if (!state || state !== 1) return;
    if (!pvpMode) farm(); else gank();
}, 350);

//Other Task Loop
setInterval(function () {
    loot();
    potionController();
    // Speedy rogue
    if (can_use('rspeed', character)) {
        use('rspeed', character);
    } else {
        let slowParty = speedParty();
        if (slowParty) use('rspeed', slowParty);
    }
    if (!state) return;
    if (isPvP()) use('invis');
    stateTasks(state);
}, 3000);

// Update your data
setInterval(function () {
    updateCharacterData();
}, 5000);

function farm() {
    // If you get aggro from a monster try to invis flash to lose it
    if (getEntitiesTargeting()[0] && is_monster(getEntitiesTargeting()[0])) use('invis');
    // Mark in combat if anyone in the party is being targeted
    if (character.party) {
        combat = checkPartyAggro();
    } else {
        use('invis');
        kite();
    }
    let leader = get_player(character.party);
    // Fleet if tank is gone
    if (!leader) {
        use('invis');
        moveToLeader(character.range * 0.5, character.range * 0.7);
    }
    let target = getEntitiesTargeting(leader, true)[0] || findLeaderTarget() || checkPartyAggro() || getEntitiesTargeting()[0];
    if (target && (checkIfSafeToAggro(target) || canOneShot(target))) {
        let range = distanceToPoint(target.real_x, target.real_y);
        if (range <= character.range * 0.9) {
            // Killy rogue
            use('quickstab', target);
            use('quickpunch', target);
            if (can_attack(target)) {
                smartAttack(target);
            }
        } else {
            // Poison
            use('pcoat');
            // Sneaky rogue
            use('invis');
            moveToTarget(target, character.range * 0.5, character.range * 0.7);
        }
    } else {
        // Only invis if near baddies
        if (nearbyAggressors(100, true).length) use('invis'); else if (!target) stop('invis');
        moveToLeader();
    }
}

function gank() {
    // If you get aggro from a monster try to invis flash to lose it
    if (getEntitiesTargeting()[0] && is_monster(getEntitiesTargeting()[0])) use('invis');
    let target = getEntitiesTargeting()[0] || getGankTargets()[0];
    if (target) {
        let range = distanceToPoint(target.real_x, target.real_y);
        if (range <= character.range * 0.9) {
            // Killy rogue
            use('quickstab', target);
            use('quickpunch', target);
            if (can_attack(target)) {
                smartAttack(target);
            }
        } else {
            // Poison
            use('pcoat');
            // Sneaky rogue
            use('invis');
            moveToTarget(target, character.range * 0.5, character.range * 0.7);
        }
    } else {
        // Be invisible if moving
        use('invis');
        patrolMap();
    }
}

function speedParty() {
    for (let key in parent.party_list) {
        let member = parent.entities[parent.party_list[key]];
        if (member && can_use('rspeed', member)) return member;
    }
}