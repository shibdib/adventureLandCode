game_log("---Warrior Script Start---");
load_code(2);
let currentTarget, target, combat, pendingReboot, tackling, state, primary, lastCombat;
let xpTarget = 1000;

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
    if (checkPartyAggro() || !stateTasks(state, checkPartyAggro())) farm();
}, 500);

//Kite Loop
setInterval(function () {
    if (nearbyAggressors().length) moveToPosition(moveTackled(get_target(), nearbyAggressors()));
}, 75);

function farm() {
    loot();
    potionController();
    let party_aggro = checkPartyAggro();
    // Hardshell when health is low
    if (character.hp < character.max_hp * 0.5 && can_use('hardshell')) use('hardshell');
    if (!currentTarget && !party_aggro) {
        target = findBestMonster(xpTarget);
        if (target) {
            farmWait = undefined;
            currentTarget = target;
            whisperParty('New target is a ' + target);
            game_log('New target is a ' + target);
            stop();
        }
    }
    // Mark in combat if anyone in the party is being targeted
    combat = party_aggro;
    let mainTarget = findLocalMonsters(currentTarget);
    let opportunisticTarget = findLocalMonstersFromArray(findBestMonster(xpTarget * 0.3, true));
    if (primary && primary.dead) primary = undefined;
    if (mainTarget && !primary) primary = mainTarget;
    if (party_aggro && (party_aggro.target !== character.name || !currentTarget || !mainTarget)) {
        if (in_attack_range(party_aggro)) {
            lastCombat = Date.now();
            if (can_attack(party_aggro)) attack(party_aggro);
        } else {
            tackle(party_aggro);
        }
    } else if (primary) {
        // Warcry
        if (can_use('warcry')) use('warcry');
        // Pull more if we can handle it
        if (primary.attack < character.max_hp * 0.12 && pullAdds()) return;
        if (in_attack_range(primary)) {
            lastCombat = Date.now();
            if (can_attack(primary)) attack(primary);
        } else {
            // If waiting on the healer don't pull and make sure you're not in range of aggro
            if (!tackling && waitForHealer()) {
                return stop();
            } else {
                tackle(primary);
            }
        }
    } else if (opportunisticTarget && (!lastCombat || lastCombat + 30000 < Date.now())) {
        // Warcry
        if (can_use('warcry')) use('warcry');
        // Pull more if we can handle it
        if (opportunisticTarget.attack < character.max_hp * 0.12 && pullAdds()) return;
        if (in_attack_range(opportunisticTarget)) {
            lastCombat = Date.now();
            if (can_attack(opportunisticTarget)) attack(opportunisticTarget);
        } else {
            // If waiting on the healer don't pull and make sure you're not in range of aggro
            if (!tackling && waitForHealer()) {
                return stop();
            } else {
                tackle(opportunisticTarget);
            }
        }
    } else if (!party_aggro) {
        tackling = undefined;
        if (currentTarget) {
            shibMove(currentTarget);
            refreshTarget();
        }
    }
}

// Pull additional monsters
function pullAdds () {
    let currentThreats = getMonstersTargetingMe();
    // Get total incoming attack damage
    let totalAttack = 0;
    currentThreats.forEach((t) => totalAttack += t.attack * 1.2);
    // If attack is greater than 25% of remaining health, return
    let possibleAdds = findAdds();
    if ((possibleAdds.length && totalAttack + possibleAdds[0].attack > character.hp * 0.1) || currentThreats.length > 2) return;
    if (possibleAdds.length && distanceToEntity(possibleAdds[0]) < 90) {
        tackle(possibleAdds[0]);
        return true;
    }
}

// Refresh your target if the spawn is empty
let farmWait, lastPos;
function refreshTarget () {
    // Initial pos set
    if (!lastPos) return lastPos = {x: character.x, y: character.y};
    // If range doesn't change much start counter
    if (distanceToPoint(lastPos.x, lastPos.y) < 5) {
        if (!farmWait) farmWait = Date.now();
        let cutoff = 20000; // Wait 20 seconds
        if (getNearbyCharacters().length > 4) cutoff = 3000; // Wait 3 seconds if the area is crowded
        if (farmWait + cutoff < Date.now()) {
            if (cutoff === 20000) whisperParty('There are no ' + currentTarget + ' here, so time for a new target.'); else whisperParty('There is too many people farming here, so I will look for a new target.');
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
function tackle(target) {
    tackling = true;
    if (can_use('taunt', target)) use('taunt', target); else if (can_use('charge', target)) use('charge', target); else if (can_attack(target)) attack(target); else moveToTarget(target);
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
}, 1500);

//Force reboot of character (1h)
setInterval(function () {
    // Update and reboot
    updateCode();
    if (!combat) refreshCharacters(true); else pendingReboot = true;
}, 3600000 );

// Farm target refreshes every 10 minutes
setInterval(function () {
    currentTarget = undefined;
}, 600000);