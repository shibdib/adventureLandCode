game_log("---Ranger Script Start---");
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
}, 500);

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
    if (leader) {
        let pulledMonsters = getMonstersTargeting(leader);
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
    let target = getMonstersTargeting(leader)[0] || findLeaderTarget() || checkPartyAggro();
    if (target) {
        if (in_attack_range(target) && (checkTankAggro() || canOneShot(target))) {
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
            if ((checkTankAggro() || canOneShot(target) && can_use('supershot', target))) {
                parent.d_text("SUPERSHOT!",character,{color:"#ffc230"});
                use('supershot', target);
            }
            // If you need to kite do so, otherwise get in range
            moveToTarget(target, character.range * 0.5, character.range * 0.99);
        }
    } else {
        if (!combat) moveToLeader(); else moveToLeader(character.range * 0.425, character.range * 0.99);
    }
}