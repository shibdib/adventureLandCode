game_log("---Warrior Script Start---");
load_code(2);
let currentTarget, target, combat, pendingReboot, tackling, primary, lastPos, traveling, lastTarget, targetSetAt;
let lowLevelCount = 0;
let state = stateController();
let lastCombat = Date.now();
let lastRealTarget = Date.now();

//State Controller
setInterval(function () {
    state = stateController(state);
}, 5000);

//Primary Loop
setInterval(function () {
    if (character.rip && state !== 99) {
        if (currentTarget) {
            lastTarget = currentTarget;
            currentTarget = undefined;
        }
        primary = undefined;
        state = 99;
    }
    if (!state) return;
    if (!stateTasks(state)) farm();

    //Add button to refresh target
    let label = 'No Target';
    if (currentTarget) label = G.monsters[currentTarget].name;
    add_bottom_button(3, label, function () {
        lastTarget = currentTarget;
        currentTarget = undefined;
        whisperParty('Manual target refresh requested..');
    });
}, 250);

//Fast Loop
setInterval(function () {
    // Update your data
    updateCharacterData();
}, 75);

function farm() {
    // Initial pos set
    if (!lastPos) return lastPos = {x: character.x, y: character.y};
    loot();
    potionController();
    // Hardshell when health is low
    if (character.hp < character.max_hp * 0.5 && can_use('hardshell')) use('hardshell');
    // Check if anyone besides you has aggro
    let party_aggro = checkPartyAggro();
    // Find a mtype to kill
    if (!currentTarget && !party_aggro && character.party) {
        target = findBestMonster(75 * (character.level / 2), lastTarget);
        if (target && (!lastTarget || lastTarget !== target)) {
            farmWait = undefined;
            lastRealTarget = Date.now();
            traveling = true;
            targetSetAt = Date.now();
            currentTarget = target;
            game_log('New target is a ' + target);
            whisperParty('Lets go kill ' + G.monsters[currentTarget].name + "'s.");
            if (Math.random() > 0.9) parent.d_text('Lets go kill ' + G.monsters[currentTarget].name + "'s.", character, {color: "#354de8"});
            return stop();
        } else if (lastTarget) {
            lastTarget = undefined;
        }
    }
    // Handle target refreshing
    refreshTarget();
    // Mark in combat if anyone in the party is being targeted
    combat = party_aggro;
    // Handle various target declarations
    let mainTarget;
    if (currentTarget) mainTarget = findLocalTargets(currentTarget);
    if (mainTarget) draw_circle(mainTarget.x, mainTarget.y, 30, 3, 0xFFBF00);
    let opportunisticTarget = getEasyKills(false)[0];
    if (opportunisticTarget) draw_circle(opportunisticTarget.x, opportunisticTarget.y, 30, 3, 0x00FFFF);
    let secondaryTarget = getSecondary();
    if (secondaryTarget) draw_circle(secondaryTarget.x, secondaryTarget.y, 30, 3, 0x00E639);
    // If we had a primary and he died clear it
    if (primary && primary.dead) primary = undefined;
    if (!primary) {
        let readyToPull = character.hp >= character.max_hp * 0.8 && character.mp >= character.max_mp * 0.8;
        if (getMonstersTargeting()[0]) {
            stop('move');
            primary = getMonstersTargeting()[0];
        } else if (readyToPull && mainTarget) {
            lastRealTarget = Date.now();
            stop('move');
            traveling = false;
            primary = mainTarget;
            // Is main target level 1-2??
            if (mainTarget.level <= 2) lowLevelCount++; else lowLevelCount = 0;
        } else if (readyToPull && opportunisticTarget && !traveling) {
            primary = opportunisticTarget;
        } else if (!readyToPull) {
            use_hp_or_mp();
        }
    }
    // If someone in the party has aggro set them primary
    if (party_aggro && get_target_of(party_aggro) !== character) {
        primary = party_aggro;
    }
    // If you have a target deal with it
    if (primary) {
        // Warcry
        if (can_use('warcry')) use('warcry');
        if (can_attack(primary) && (!waitForHealer() || get_target_of(primary) === character)) {
            if (primary.mtype === currentTarget) lastRealTarget = Date.now();
            // If we have adds queued and we have aggro, get them
            if (currentTarget && secondaryTarget && get_target_of(primary) === character && !traveling) {
                if (Math.random() > 0.9) parent.d_text("PULLING MORE!", character, {color: "#FF0000"});
                primary = secondaryTarget;
            }
            tackle(primary);
        } else {
            // Pull if he's attacking someone else
            if (parent.party_list.includes(primary.target) && get_target_of(primary) !== character) {
                if (Math.random() > 0.9) parent.d_text("GETTING AGGRO!", character, {color: "#E83E1A"});
                tackle(primary);
                if (!secondaryTarget && !kite(primary)) moveToTarget(primary)
            } else if (!waitForHealer() || primary.target === character.name) {
                if (Math.random() > 0.9) parent.d_text("GO TIME!", character, {color: "#A23720"});
                tackle(primary);
            } else {
                if (Math.random() > 0.9) parent.d_text("WAITING", character, {color: "#209CA2"});
                primary = undefined;
                kite();
            }
        }
    } else {
        if (nearbyAggressors(175, true).length) kite(); else if (currentTarget) shibMove(currentTarget);
        tackling = undefined;
    }
}

// Pull additional monsters
function getSecondary() {
    let currentThreats = getMonstersTargeting();
    // Get total incoming attack damage
    let totalAttack = 0;
    currentThreats.forEach((t) => totalAttack += getMonsterDPS(t, true));
    // If attack is greater than 25% of remaining health, return
    let possibleAdds = findAdds();
    if (state !== 1 ||
        (possibleAdds.length && totalAttack + getMonsterDPS(possibleAdds[0], true) > partyHPS() * 0.9)
        || currentThreats.length > 2) return;
    if (possibleAdds.length) {
        return possibleAdds[0];
    }
}

// Refresh your target if the spawn is empty
let farmWait;
function refreshTarget() {
    // Reset target if we've been there for hours
    if (targetSetAt && targetSetAt + (60000 * 180) < Date.now()) {
        whisperParty("We've been killing " + currentTarget + "'s for 3 hours, time to rotate to something new.");
        stop();
        lastCombat = Date.now();
        lastRealTarget = Date.now();
        lastTarget = currentTarget;
        primary = undefined;
        currentTarget = undefined;
        lowLevelCount = 0;
        traveling = true;
        return shibMove('main');
    }
    // No target or waiting for healer check
    if (!currentTarget || waitForHealer(325, true)) return;
    // We're only fighting low level main targets, time to rotate to let them build up
    if (lowLevelCount && lowLevelCount >= 4) {
        whisperParty('These ' + currentTarget + "'s have been over farmed and need to level up, time to rotate to something new.");
        stop();
        lastCombat = Date.now();
        lastRealTarget = Date.now();
        lastTarget = currentTarget;
        primary = undefined;
        currentTarget = undefined;
        lowLevelCount = 0;
        traveling = true;
        return shibMove('main');
    }
    // We haven't seen our actual target in awhile
    if (lastRealTarget + (60000 * 2.5) < Date.now()) {
        whisperParty('Have not seen a ' + currentTarget + "'s for a couple minutes, moving onto something new.");
        stop();
        lastCombat = Date.now();
        lastRealTarget = Date.now();
        lastTarget = currentTarget;
        primary = undefined;
        currentTarget = undefined;
        traveling = true;
        return shibMove('main');
    }
    // If it's been a REALLY long time we probably bugged out so refresh
    if (lastCombat && lastCombat + (60000 * 10) < Date.now()) {
        whisperParty('We have not been in combat for 10 minutes, going to head to town and figure this out.');
        stop();
        lastCombat = Date.now();
        lastRealTarget = Date.now();
        lastTarget = currentTarget;
        primary = undefined;
        currentTarget = undefined;
        traveling = true;
        return shibMove('main');
    }
    // It's crowded time to move on
    if (!smart.moving && lastRealTarget + (60000 * 0.5) < Date.now() && getNearbyCharacters(200, true).length >= 4) {
        whisperParty('There is too many people farming here, so I will look for a new target.');
        stop();
        lastCombat = Date.now();
        lastRealTarget = Date.now();
        lastTarget = currentTarget;
        primary = undefined;
        currentTarget = undefined;
        traveling = true;
        return shibMove('main');
    }
    // PVP server, dont farm near other players
    if (!smart.moving && isPvP() && lastRealTarget + (60000 * 0.5) < Date.now() && getNearbyCharacters(200, true).length) {
        whisperParty('Do no want to farm near another player on this realm, switching target.');
        stop();
        lastCombat = Date.now();
        lastRealTarget = Date.now();
        lastTarget = currentTarget;
        primary = undefined;
        currentTarget = undefined;
        traveling = true;
        return shibMove('main');
    }
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
            if (entity.speed < speed) speed = entity.speed - 6;
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
    lastCombat = Date.now();
    farmWait = undefined;
    tackling = true;
    if (!kite(target)) {
        if (can_use('taunt', target) && target.target !== character.name) use('taunt', target);
        if (can_use('charge') && parent.distance(character, target) > 120) use('charge');
        if (can_attack(target)) smartAttack(target);
        if (slowMove) moveToTarget(target);
    } else {
        kite(target);
        if (can_use('taunt', target) && target.target !== character.name) use('taunt', target);
        if (can_attack(target)) attack(target);
    }
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
        updateCode();
        load_code(12);
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
}, 5000);

// Party Move Speed Management
setInterval(function () {
    slowestMan();
}, 500);

//Force reboot of character (1h)
setInterval(function () {
    // Update and reboot
    if (!combat) {
        updateCode();
        load_code(12);
        refreshCharacters(true);
    } else {
        pendingReboot = true;
    }
}, 60000 * 60);

//Handle events
function on_game_event(event) {
    if (eventMobs.includes(event.name)) {
        whisperParty('An event mob spawned, lets go kill a ' + G.monsters[event.name].name);
        stop();
        lastCombat = Date.now();
        lastRealTarget = Date.now();
        currentTarget = event.name;
        lastTarget = undefined;
        primary = undefined;
        traveling = true;
        return shibMove('main');
    }
}