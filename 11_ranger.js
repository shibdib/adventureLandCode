game_log("---Ranger Script Start---");
load_code(2);
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
    farm();
}, 350);

//Other Task Loop
setInterval(function () {
    loot();
    potionController();
    // Use track on pvp servers
    if (isPvP() && can_use('track')) use('track');
    if (!state) return;
    stateTasks(state);
}, 3000);

// Update your data
setInterval(function () {
    updateCharacterData();
}, 5000);

function farm() {
    // Mark in combat if anyone in the party is being targeted
    if (character.party) combat = checkPartyAggro(); else return kite();
    let leader = get_player(character.party);
    // Fleet if tank is gone
    if (leader) {
        let pulledMonsters = getEntitiesTargeting(leader);
        if (pulledMonsters.length >= 5 && can_use['5shot']) {
            parent.d_text("5-SHOT!",character,{color:"#ffc230"});
            use('5shot', pulledMonsters);
        } else if (pulledMonsters.length >= 3 && can_use['3shot']) {
            parent.d_text("3-SHOT!",character,{color:"#ffc230"});
            use('3shot', pulledMonsters);
        }
    } else {
        return moveToLeader(character.range * 0.5, character.range * 0.7);
    }
    let target = getEntitiesTargeting(leader)[0] || findLeaderTarget() || checkPartyAggro() || getEntitiesTargeting()[0];
    if (target) {
        if (in_attack_range(target) && (checkIfSafeToAggro(target) || canOneShot(target))) {
            // Long range
            if (can_use('supershot', target)) {
                parent.d_text("SUPERSHOT!",character,{color:"#ffc230"});
                use('supershot', target);
            }
            // Poison arrow
            if (can_use('poisonarrow', target)) {
                parent.d_text("POISON ARROW!",character,{color:"#ffc230"});
                use('poisonarrow', target);
            }
            // Attack
            if (can_attack(target))  attack(target);
            kite();
        } else {
            // Long range
            if ((checkIfSafeToAggro(target) || canOneShot(target) && can_use('supershot', target))) {
                parent.d_text("SUPERSHOT!",character,{color:"#ffc230"});
                use('supershot', target);
            }
            // If you need to kite do so, otherwise get in range
            if (nearbyAggressors(150, true).length) kite(); else moveToTarget(target, character.range * 0.5, character.range * 0.7);
        }
    } else {
        if (!kite()) moveToLeader(character.range * 0.1, character.range * 0.15);
    }
}