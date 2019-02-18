game_log("---Warrior Script Start---");
load_code(2);
let currentTarget, target, combat, pendingReboot, tackling,
    primary, lastPos, traveling, targetSetAt, targetArray, eventMap, eventCoords;
let lowLevelCount = 0;
let lowLevelTotalCount = 0;
let state;
let lastCombat = Date.now();
let lastRealTarget = Date.now();
let levelTracker = {};
let respawnTracker = {};

//State Controller
setInterval(function () {
    if (!character.rip && combat) state = 1; else state = stateController(state);
    if (lowLevelTotalCount >= 10) {
        whisperParty('We encountered too many low level mobs, going to rotate realms');
        lowLevelTotalCount = 0;
        return realmSwap();
    }
}, 5000);

//Combat Loop
setInterval(function () {
    if (state !== 99 && character.rip) {
        mainTarget = undefined;
        primary = undefined;
        currentTarget = undefined;
        return state = stateController(state);
    }
    if (state && state === 1) farm();
}, 350);

//Other Task Loop
setInterval(function () {
    // Initial pos set
    if (!lastPos) return lastPos = {x: character.x, y: character.y};
    loot();
    potionController();
    // Warcry
    use('warcry');
    // Hardshell when health is low
    if (character.hp < character.max_hp * 0.5) use('hardshell');
    // Get array of mtypes
    if ((!targetArray || !targetArray.length) && character.party && partyHPS() > 100) {
        targetArray = findBestMonster(75 * (character.level / 2), undefined, true);
        targetArray.filter((m) => (!levelTracker[m] || levelTracker[m] <= Date.now()) && (!respawnTracker[m] || respawnTracker[m] <= Date.now()));
        whisperParty('NEW MTYPE ARRAY: ' + JSON.stringify(targetArray));
    }
    // Handle target refreshing
    refreshTarget();
    // State tasks
    stateTasks(state);
}, 3000);

//Target finding loop
let mainTarget, opportunisticTarget, secondaryTarget;
setInterval(function () {
    targetFinding();
}, 1500);

function targetFinding() {
    // Handle various target declarations
    if (currentTarget) mainTarget = findLocalTargets(currentTarget);
    if (mainTarget) draw_circle(mainTarget.x, mainTarget.y, 30, 3, 0xFFBF00);
    opportunisticTarget = getEasyKills(false)[0];
    if (opportunisticTarget) draw_circle(opportunisticTarget.x, opportunisticTarget.y, 30, 3, 0x00FFFF);
    secondaryTarget = getSecondary();
    if (secondaryTarget) draw_circle(secondaryTarget.x, secondaryTarget.y, 30, 3, 0x00E639);
}

//Primary loop
function farm() {
    updateCharacterData();
    if (character.party) combat = checkPartyAggro(); else return kite();
    // Handle switching maps for an event
    if (!combat && eventMap && eventMap !== character.map) {
        return shibMove(eventMap);
    } else if (eventMap && eventMap === character.map) {
        eventMap = undefined;
    }
    // Check if anyone besides you has aggro
    let party_aggro = checkPartyAggro();
    // Stay with healer on pvp
    if (isPvP() && waitForHealer() && !combat && !tackling) return;
    // Find a mtype to kill
    if (!currentTarget && targetArray) {
        currentTarget = random_one(targetArray);
        targetSetAt = Date.now();
        lastCombat = Date.now();
        lastRealTarget = Date.now();
        primary = undefined;
        mainTarget = undefined;
        traveling = true;
        lowLevelCount = 0;
        game_log('New target is a ' + currentTarget);
        whisperParty('Lets go kill ' + G.monsters[currentTarget].name + "'s.");
        targetArray = targetArray.filter((m) => m !== currentTarget);
        game_log(JSON.stringify(targetArray));
    }
    // If we had a primary and he died clear it
    if (primary && primary.dead) {
        primary = undefined;
        targetFinding();
    }
    // If someone in the party has aggro set them primary
    if (party_aggro && get_target_of(party_aggro) !== character) {
        primary = party_aggro;
    }
    // If you don't have a target find one
    if (!primary) {
        tackling = undefined;
        let readyToPull = character.hp >= character.max_hp * 0.8 && character.mp >= character.max_mp * 0.8;
        if (getEntitiesTargeting()[0]) {
            primary = getEntitiesTargeting()[0];
        } else if (readyToPull && mainTarget) {
            primary = mainTarget;
            traveling = false;
            // Is main target level 1-2??
            if (mainTarget.level <= 2) lowLevelCount++; else lowLevelCount = 0;
        } else if (readyToPull && opportunisticTarget && !traveling) {
            primary = opportunisticTarget;
        } else if (!readyToPull) {
            if (character.hp < character.max_hp * 0.8) useHealthPotion(); else useManaPotion()
        }
    }
    // Handle stomping things
    stompControl();
    // If you have a target deal with it
    if (primary) {
        if (tackling || get_target_of(primary) === character || !waitForHealer()) {
            combat = true;
            if (primary.mtype === currentTarget) lastRealTarget = Date.now();
            // If we have adds queued and we have aggro, get them
            if (currentTarget && secondaryTarget && get_target_of(primary) === character && !traveling) {
                primary = secondaryTarget;
            }
            tackle(primary);
        } else {
            // Pull if he's attacking someone else
            if (get_target_of(primary) && get_target_of(primary) !== character && get_target_of(primary).ctype !== 'warrior' && parent.party_list.includes(get_target_of(primary))) {
                combat = true;
                tackle(primary);
                if (!secondaryTarget && !kite(primary)) moveToTarget(primary)
            } else {
                primary = undefined;
                kite();
            }
        }
    } else {
        if (!tackling && !combat && smart.moving && get_nearest_monster({type: currentTarget})) return stop('move');
        if (!kite()) shibMove(currentTarget);
        tackling = undefined;
    }
}

//Tackle a target
function tackle(target, slowMove = true) {
    lastCombat = Date.now();
    tackling = true;
    if (!kite(target) && !targetFriends(target)) {
        if (target.target !== character.name) use('taunt', target);
        if (parent.distance(character, target) > 120 && parent.distance(character, target) < 250) use('charge');
        if (slowMove) moveToTarget(target);
        if (can_attack(target)) smartAttack(target);
    } else {
        kite(target);
        if (target.target !== character.name) use('taunt', target);
        if (can_attack(target)) attack(target);
    }
}

// handle basher swap and stomp
let lastStomp, stompReady, reEquip, equipped;
let originalWeapons = {};

function stompControl() {
    // If you bashed you need to re-equip
    if (reEquip || (!stompReady && originalWeapons['mainHand'] && !equipped)) {
        use('stomp');
        let mainSlot = getInventorySlot(originalWeapons['mainHand'].name, false, originalWeapons['mainHand'].level);
        equip(mainSlot);
        if (originalWeapons['offHand']) {
            let offSlot = getInventorySlot(originalWeapons['offHand'].name, false, originalWeapons['offHand'].level);
            equip(offSlot);
        }
        equipped = true;
        lastStomp = Date.now();
        reEquip = undefined;
        stompReady = undefined;
        return;
    }
    // Don't bash without a target
    if (!primary) return;
    // Don't bash when not needed
    if (!stompReady && getEntitiesTargeting().length < 2 && primary.hp < primary.max_hp * 0.15) return;
    let basherSlot = getInventorySlot('basher');
    if (stompReady) {
        equipped = false;
        unequip('offhand');
        equip(basherSlot);
        reEquip = true;
    } else if ((tackling || nearbyAggressors().length) && basherSlot && (!lastStomp || lastStomp + 25000 < Date.now())) {
        originalWeapons['mainHand'] = {
            name: character.slots['mainhand'].name,
            level: character.slots['mainhand'].level
        };
        if (character.slots['offhand']) {
            originalWeapons['offHand'] = {
                name: character.slots['offhand'].name,
                level: character.slots['offhand'].level
            };
        }
        unequip('offhand');
        stompReady = true;
    }
}

// Refresh your target if the spawn is empty
function refreshTarget() {
    // No target or waiting for healer check
    if (!currentTarget || waitForHealer(325, true) || !G.monsters[currentTarget] || targetSetAt + 35000 > Date.now()) return;
    // We're only fighting low level main targets, time to rotate to let them build up
    let refreshCase;
    if (lowLevelCount && lowLevelCount >= 5) refreshCase = 'overFarm';
    if (!smart.moving && lastRealTarget + (60000 * 1.5) < Date.now()) refreshCase = 'noSee';
    if (lastCombat && lastCombat + (60000 * 5) < Date.now()) refreshCase = 'buggedTarget';
    if (!smart.moving && lastRealTarget + (60000 * 0.5) < Date.now() && getNearbyCharacters(200, true).length >= 3) refreshCase = 'crowded';
    if (refreshCase) {
        switch (refreshCase) {
            case 'overFarm': {
                game_log('Overfarm');
                levelTracker[currentTarget] = Date.now() + (60000 * 5);
                whisperParty('These ' + G.monsters[currentTarget].name + "'s have been over farmed and need to level up, time to rotate to something new.");
                break;
            }
            case 'noSee': {
                game_log('NoSee');
                whisperParty('Have not seen a ' + G.monsters[currentTarget].name + "'s for a couple minutes, moving onto something new.");
                // Handle longer respawns
                if (G.monsters[currentTarget].respawn > 90) {
                    respawnTracker[currentTarget] = Date.now() + ((G.monsters[currentTarget].respawn - 90) * 1000) * 0.9;
                    whisperParty('Have not seen a ' + G.monsters[currentTarget].name + "'s for a couple minutes, they have a respawn of " + G.monsters[currentTarget].respawn + " seconds so going to wait a bit before we come back here.");
                } else {
                    whisperParty('Have not seen a ' + G.monsters[currentTarget].name + "'s for a couple minutes, moving onto something new.");
                }
                break;
            }
            case 'buggedTarget': {
                game_log('buggedTarget');
                whisperParty('We have not been in combat for 5 minutes, going to head to town and figure this out.');
                break;
            }
            case 'crowded': {
                game_log('crowded');
                whisperParty('There is too many people farming here, so I will look for a new target.');
                break;
            }
        }
        lastCombat = Date.now();
        lastRealTarget = Date.now();
        primary = undefined;
        currentTarget = undefined;
        lowLevelCount = 0;
        lowLevelTotalCount++;
        traveling = true;
    }
}

//Handle events
function on_game_event(event) {
    if (eventMobs.includes(event.name)) {
        let eventTarget = get_nearest_monster({type: event.name});
        if (eventTarget) {
            whisperParty('An event mob spawned, lets go kill a ' + G.monsters[event.name].name);
            lastCombat = Date.now();
            lastRealTarget = Date.now();
            lowLevelCount = 0;
            currentTarget = event.name;
            primary = eventTarget;
            traveling = true;
            stop();
        } else if (event.map) {
            lastCombat = Date.now();
            lastRealTarget = Date.now();
            lowLevelCount = 0;
            currentTarget = event.name;
            primary = undefined;
            traveling = true;
            eventMap = event.map;
            eventCoords = {x: event.x, y: event.y};
            stop();
            if (character.map === event.map) {
                whisperParty('An event mob spawned, lets go kill a ' + G.monsters[event.name].name);
                return shibMove({x: eventCoords.x, y: eventCoords.y, map: event.map});
            } else if (eventCoords.x && eventCoords.y) {
                whisperParty('An event mob spawned on a different map, lets go kill a ' + G.monsters[event.name].name);
                return shibMove({x: eventCoords.x, y: eventCoords.y, map: event.map});
            }
        }
    }
}

// Party Move Speed Management

let combatSet;
setInterval(function () {
    let speed = character.speed;
    if (parent.party_list.length) {
        for (let id in parent.party_list) {
            let member = parent.party_list[id];
            let entity = parent.entities[member];
            if (!entity || member === character.name || entity.ctype === 'merchant') continue;
            if (entity.speed < speed) speed = entity.speed - 6;
        }
    }
    if (!combatSet && (combat || primary)) {
        combatSet = true;
        cruise(9999);
    } else if (!combat && !primary && speed !== character.speed) {
        combatSet = undefined;
        cruise(speed);
    }
}, 500);

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
        if (char.name === character.name || (character.party && parent.party_list.includes(char.name)) || char.class === 'merchant') continue;
        send_party_invite(char.name);
    }
}, 5000);

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

//CM Loop
setInterval(function () {
    for (let key of parent.party_list) {
        let type = 'moving';
        if (primary || combat || tackling) if (is_monster(get_target_of(character))) type = get_target_of(character).mtype; else if (is_character(get_target_of(character))) type = 'player';
        send_cm(key, {type: 'combatLocation', data: {x: character.x, y: character.y, map: character.map, mtype: type}});
        let state = 'party';
        switch (state) {
            case 1: {
                send_cm(key, {type: 'stateChange', data: {state: 'party'}});
                break;
            }
            case 2:
            case 3:
            case 4: {
                send_cm(key, {type: 'stateChange', data: {state: 'banking'}});
                break;
            }
        }
    }
}, 5000);