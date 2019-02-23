game_log("---Priest Script Start---");
if (get_active_characters()[character.name] === 'self') load_code(2);
let combat;
let state;

//State Controller
setInterval(function () {
    if (character.rip && state !== 99) state = 99;
    if (combat || partyHurtCount(0.75)) state = 1; else state = stateController(state);
}, 5000);

//Combat Loop
setInterval(function () {
    if (!state || state !== 1) return;
    farm();
}, 350);

//Other Task Loop1
setInterval(function () {
    loot();
    potionController(true);
    if (!state || combat) return;
    stateTasks(state);
}, 3000);

// Update your data
setInterval(function () {
    updateCharacterData();
}, 5000);

function farm() {
    // Mark in combat if anyone in the party is being targeted
    if (character.party) combat = checkPartyAggro(); else return kite();
    // Heal yourself
    if (character.hp < character.max_hp * 0.45) heal(character);
    // Find attack target
    let target = getEntitiesTargeting(get_player(character.party), true)[0] || findLeaderTarget() || checkPartyAggro() || getEntitiesTargeting()[0];
    // Find heal target
    let mostHurtMember = lowHealth(0.7);
    // Alert when OOM
    if (character.mp === 0) whisperParty('I just went OOM!');
    // If tank target is a player CURSE THEM!!!!
    if (target && is_character(target)) use('curse', target);
    // Always stay with leader
    if (!combat) moveToLeader(15, 20); else if (!kite()) moveToLeader(character.range * 0.25, character.range * 0.45);
    // Do Damage if possible
    if (!mostHurtMember && target && character.mp > character.max_mp * 0.5 && (checkIfSafeToAggro(target) || canOneShot(target))) {
        use('curse', target);
        if (can_attack(target)) attack(target);
    }
    if (mostHurtMember && mostHurtMember.hp < mostHurtMember.max_hp * 0.20 && can_use('revive', mostHurtMember)) { //Max heal with revive
        if (in_attack_range(mostHurtMember)) {
            // Use revive as a mega heal
            use('revive', mostHurtMember);
        }
    } else if (partyHurtCount(0.75) > 1 && can_use('partyheal')) { //MASS HEAL WHEN NEEDED
        whisperParty('Mass heal for everyone!');
        use('partyheal');
    } else if (mostHurtMember && !mostHurtMember.rip) { //HEAL WOUNDED
        if (in_attack_range(mostHurtMember)) {
            // Heal
            heal(mostHurtMember);
        }
    } else if (!mostHurtMember && deadParty()) { //REVIVE DEAD
        let deadMember = deadParty();
        if (can_use('revive', deadMember)) {
            use('revive', deadMember);
        }
    } else {
        if (lowHealth(1) && in_attack_range(lowHealth(1))) heal(lowHealth(1));
    }
}