game_log("---Warrior Script Start---");
load_code(2);
let currentTarget, target, combat, pendingReboot, tackling, state, primary, movingPull;
let xpTarget = 750;
let lastCombat = Date.now();

//State Controller
setInterval(function () {
    state = stateController(state);
}, 5000);

//Primary Loop
setInterval(function () {
    if (character.rip) {
        primary = undefined;
        currentTarget = undefined;
        state = 99;
    }
    if (!state) return;
    if (checkPartyAggro() || getMonstersTargeting()[0] || !stateTasks(state, checkPartyAggro())) farm();
}, 500);

//Fast Loop
setInterval(function () {
    // Update your data
    updateCharacterData();
    // Kiting
    if ((combat || !is_moving(character)) && nearbyAggressors().length && moveTackled(get_target(), nearbyAggressors())) {
        movingPull = true;
        moveToPosition(moveTackled(get_target(), nearbyAggressors()));
    } else {
        movingPull = undefined;
    }
}, 75);

function farm() {
    loot();
    potionController();
    let party_aggro = checkPartyAggro();
    // Hardshell when health is low
    if (character.hp < character.max_hp * 0.5 && can_use('hardshell')) use('hardshell');
    if (!currentTarget && !party_aggro) {
        target = findBestMonster(1000 * (character.level / 2));
        if (target) {
            farmWait = undefined;
            currentTarget = target;
            game_log('New target is a ' + target);
            whisperParty('Lets go kill ' + currentTarget + "'s.");
            stop();
        }
    }
    // Handle the healer disappearing
    if (character.hp < character.max_hp * 0.5)
    // Handle target refreshing
    refreshTarget();
    // Mark in combat if anyone in the party is being targeted
    combat = party_aggro;
    let mainTarget;
    if (currentTarget) mainTarget = findLocalMonsters(currentTarget);
    let opportunisticTarget = findLocalMonstersFromArray(findBestMonster(xpTarget * 0.3, true));
    if (primary && primary.dead) primary = undefined;
    if (!primary) {
        if (getMonstersTargeting()[0]) {
            stop('move');
            primary = getMonstersTargeting()[0];
        } else if (mainTarget && state === 1) {
            primary = mainTarget;
        }
    }
    if (party_aggro && character.target !== party_aggro.name) {
        stop('move');
        primary = party_aggro;
    } else if (!primary && getMonstersTargeting()[0]) {
        primary = getMonstersTargeting()[0];
    } else if (!primary && opportunisticTarget && (!lastCombat || lastCombat + 11000 < Date.now())) {
        primary = opportunisticTarget;
    } else if (primary) {
        // Warcry
        if (can_use('warcry')) use('warcry');
        // Pull more if we can handle it
        pullAdds();
        if (can_attack(primary)) {
            lastCombat = Date.now();
            attack(primary);
        } else {
            // Pull if he's attacking someone else
            if (primary.target !== character.name) {
                if (can_use('taunt', primary)) use('taunt', primary); else tackle(primary, false);
            } else if (parent.distance(character, primary) <= 100 && !waitForHealer()) {
                tackle(primary);
            }
        }
    } else {
        tackling = undefined;
        if (currentTarget) {
            shibMove(currentTarget);
        }
    }
}

// Pull additional monsters
function pullAdds() {
    let currentThreats = getMonstersTargeting();
    // Get total incoming attack damage
    let totalAttack = 0;
    currentThreats.forEach((t) => totalAttack += t.attack * 1.25);
    // If attack is greater than 25% of remaining health, return
    let possibleAdds = findAdds();
    if (state !== 1 || (possibleAdds.length && totalAttack + possibleAdds[0].attack > character.hp * 0.125) || currentThreats.length > 2) return;
    if (possibleAdds.length && distanceToEntity(possibleAdds[0]) < 200) {
        tackle(possibleAdds[0], false);
        return true;
    }
}

// Refresh your target if the spawn is empty
let farmWait, lastPos;
function refreshTarget() {
    if (!currentTarget) return;
    // Initial pos set
    if (!lastPos) return lastPos = {x: character.x, y: character.y};
    // Spot is crowded
    if (distanceToPoint(lastPos.x, lastPos.y) < 25 && getNearbyCharacters(200, true).length >= 4) {
        whisperParty('There is too many people farming here, so I will look for a new target.');
        lastCombat = Date.now();
        primary = undefined;
        currentTarget = undefined;
        return;
    }
    // If it's been a REALLY long time we probably bugged out so refresh
    if (lastCombat && lastCombat + 180000 < Date.now()) {
        whisperParty('We have not been in combat for 3 minutes, going to head to town and figure this out.');
        stop();
        lastCombat = Date.now();
        primary = undefined;
        currentTarget = undefined;
        return shibMove('main');
    }
    // If range doesn't change much start counter
    if (distanceToPoint(lastPos.x, lastPos.y) < 25) {
        if (!farmWait) farmWait = Date.now();
        let cutoff = 20000; // Wait 20 seconds
        if (farmWait + cutoff < Date.now()) {
            whisperParty('There are no ' + currentTarget + "'s here, so time for a new target.");
            lastCombat = Date.now();
            primary = undefined;
            currentTarget = undefined;
        }
    } else {
        farmWait = undefined;
    }
    lastPos = {x: character.x, y: character.y};
}

//Move as fast as the slowest man
let combatSet;

function slowestMan() {
    let speed = character.speed;
    if (parent.party_list.length) {
        for (id in parent.party_list) {
            let member = parent.party_list[id];
            let entity = parent.entities[member];
            if (!entity || member === character.name || entity.ctype === 'merchant') continue;
            if (entity.speed < speed) speed = entity.speed - 3;
        }
    }
    if (!combatSet && combat) {
        combatSet = true;
        cruise(9999);
    } else if (!combat && speed !== character.speed) {
        combatSet = undefined;
        cruise(speed);
    }
}

//Tackle a target
function tackle(target, slowMove = true) {
    tackling = true;
    if (can_use('taunt', target)) use('taunt', target); else if (can_use('charge', target)) use('charge', target); else if (can_attack(target)) attack(target); else if (slowMove) moveToTarget(target);
}

///
///
/// OTHER LOOPS
///
///

//Party Management (30s)
setInterval(function () {
    // If reboot is pending do it when out of combat
    if (!combat && pendingReboot) {
        refreshCharacters(true);
        pendingReboot = undefined;
    }
    // Handle restarting/starting other characters when needed
    refreshCharacters();
    // Handles sending invites
    for (let char of pveCharacters) {
        if (char.name === character.name || (character.party && parent.party_list.includes(char.name))) continue;
        send_party_invite(char.name);
    }
}, 30000);

// Party Move Speed Management
setInterval(function () {
    slowestMan();
}, 500);

//Force reboot of character (1h)
setInterval(function () {
    // Update and reboot
    updateCode();
    if (!combat) refreshCharacters(true); else pendingReboot = true;
}, 3600000);

// Farm target refreshes every 10 minutes
setInterval(function () {
    currentTarget = undefined;
}, 600000);