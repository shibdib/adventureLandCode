game_log("---Priest Script Start---");
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
}, 250);

//Fast Loop
setInterval(function () {
    // Update your data
    updateCharacterData();
}, 75);

function farm() {
    loot();
    potionController(true);
    // Mark in combat if anyone in the party is being targeted
    if (character.party) combat = checkPartyAggro(); else return kite();
    let leader = get_player(character.party);
    // Fleet if tank is gone
    if (!leader) return moveToLeader(character.range * 0.5, character.range * 0.7);
    let mostHurtMember = lowHealth(0.75);
    let tankTarget = getEntitiesTargeting(leader)[0] || findLeaderTarget() || checkPartyAggro();
    // Alert when OOM
    if (character.mp === 0) whisperParty('I just went OOM!');
    // If tank target is a kitey player CURSE THEM!!!!
    if (tankTarget && is_character(tankTarget) && (tankTarget.ctype === 'mage' || tankTarget.ctype === 'ranger') && can_use('curse', tankTarget)) use('curse', tankTarget);
    // Do Damage if possible
    if (!mostHurtMember && tankTarget && character.mp > character.max_mp * 0.5 && (checkIfSafeToAggro(tankTarget) || canOneShot(tankTarget))) {
        parent.d_text("ATTACKING!",character,{color:"#E83E1A"});
        if (can_use('curse', tankTarget)) use('curse', tankTarget);
        if (can_attack(tankTarget)) attack(tankTarget);
        kite();
    }
    if (mostHurtMember && mostHurtMember.hp < mostHurtMember.max_hp * 0.20 && can_use('revive', mostHurtMember)) { //Max heal with revive
        if (in_attack_range(mostHurtMember)) {
            // Use revive as a mega heal
            use('revive', mostHurtMember);
            kite();
        } else {
            if (nearbyAggressors(150, true).length) kite(); else moveToTarget(mostHurtMember, character.range * 0.425, character.range * 0.7);
        }
    } else if (partyHurtCount(0.75) > 1 && can_use('partyheal')) { //MASS HEAL WHEN NEEDED
        whisperParty('Mass heal for everyone!');
        use('partyheal');
        kite();
    } else if (mostHurtMember && !mostHurtMember.rip) { //HEAL WOUNDED
        if (in_attack_range(mostHurtMember)) {
            parent.d_text("HEALING " + mostHurtMember.name + "!",character,{color:"#36e80a"});
            // Heal
            heal(mostHurtMember);
            kite();
        } else {
            if (nearbyAggressors(150, true).length) kite(); else moveToTarget(mostHurtMember, character.range * 0.425, character.range * 0.7);
        }
    } else if (!mostHurtMember && deadParty()) { //REVIVE DEAD
        let deadMember = deadParty();
        if (can_use('revive', deadMember)) {
            parent.d_text("REVIVING " + deadMember.name + "!",character,{color:"#27ffeb"});
            use('revive', deadMember);
            kite();
        }
    } else {
        if (lowHealth(1) && in_attack_range(lowHealth(1))) {
            heal(lowHealth(1));
        }
        if (nearbyAggressors(150, true).length) kite(); else moveToLeader(character.range * 0.1, character.range * 0.15);
    }
}