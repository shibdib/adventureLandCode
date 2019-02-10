game_log("---Ranger Script Start---");
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

//Fast Loop
setInterval(function () {
    // Update your data
    updateCharacterData();
}, 75);

function farm() {
    loot();
    potionController();
    let leader = get_player(character.party);
    // Fleet if tank is gone
    if (leader) {
        let pulledMonsters = getMonstersTargeting(leader);
        if (pulledMonsters.length >= 5 && can_use['5shot']) use('5shot', pulledMonsters); else if (pulledMonsters.length >= 3 && can_use['3shot']) use('3shot', pulledMonsters);
    } else {
        return moveToLeader(character.range * 0.5, character.range * 0.7);
    }
    // Mark in combat if anyone in the party is being targeted
    if (character.party) combat = checkPartyAggro();
    let target = getMonstersTargeting(leader)[0] || findLeaderTarget() || checkPartyAggro();
    if (target) {
        if (in_attack_range(target) && (checkTankAggro() || canOneShot(target))) {
            // Long range
            if (can_use('supershot', target)) use('supershot', target);
            // Poison arrow
            if (can_use('poisonarrow', target)) use('poisonarrow', target);
            // Attack
            if (can_attack(target))  attack(target);
            kite();
        } else {
            // Long range
            if ((checkTankAggro() || canOneShot(target) && can_use('supershot', target))) use('supershot', target);
            // If you need to kite do so, otherwise get in range
            moveToTarget(target, character.range * 0.5, character.range * 0.99);
        }
    } else {
        if (!combat) moveToLeader(); else moveToLeader(character.range * 0.425, character.range * 0.99);
    }
}