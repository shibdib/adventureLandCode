game_log("---Warrior Script Start---");
let currentTarget, target, combat, pendingReboot, tackling, primary, lastPos, traveling, targetSetAt, targetArray,
    eventMap, eventCoords, eventMonster, eventSearch, searchRoute;
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
    if (character.hp < character.max_hp * 0.25) use('hardshell');
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
    if (currentTarget) {
        mainTarget = findLocalTargets(currentTarget);
        if (G.monsters[currentTarget].respawn !== -1 && G.monsters[currentTarget].respawn < 120) secondaryTarget = getSecondary();
    }
    if (mainTarget) draw_circle(mainTarget.x, mainTarget.y, 30, 3, 0xFFBF00);
    opportunisticTarget = getEasyKills(false)[0];
    if (opportunisticTarget) draw_circle(opportunisticTarget.x, opportunisticTarget.y, 30, 3, 0x00FFFF);
    if (secondaryTarget) draw_circle(secondaryTarget.x, secondaryTarget.y, 30, 3, 0x00E639);
}

//Primary loop
function farm() {
    updateCharacterData();
    if (character.party) combat = checkPartyAggro(); else kite();
    // Stay with healer on pvp
    if (isPvP() && waitForHealer() && !combat && !tackling) return;
    // Find a mtype to kill
    if (!currentTarget && targetArray && targetArray.length) {
        currentTarget = targetArray[0];
        targetArray.shift();
        targetSetAt = Date.now();
        primary = undefined;
        mainTarget = undefined;
        eventMonster = undefined;
        traveling = true;
        lowLevelCount = 0;
        game_log('New target is a ' + currentTarget);
        whisperParty('Lets go kill ' + G.monsters[currentTarget].name + "'s.");
        game_log(JSON.stringify(targetArray));
    }
    // If we had a primary and he died clear it
    if (primary && primary.dead) primary = undefined;
    // If someone in the party has aggro set them primary
    if (checkPartyAggro() && get_target_of(checkPartyAggro()) !== character) primary = checkPartyAggro();
    // If you don't have a target find one
    if (!primary) {
        let readyToPull = character.hp >= character.max_hp * 0.7 && character.mp >= character.max_mp * 0.7;
        if (getEntitiesTargeting()[0]) {
            primary = getEntitiesTargeting(character, true)[0];
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
    // If you have a target deal with it
    if (primary) {
        // Handle PVP
        if (is_character(target)) {
            potionController();
            use('warcry');
            use('hardshell');
            use('charge');
            use('taunt', target);
            lastCombat = Date.now();
            lastRealTarget = Date.now();
            // In Range
            if (can_attack(target)) {
                smartAttack(target);
            } else {
                moveToTarget(target, 0, 1);
            }
        } else {
            if (tackling || get_target_of(primary) === character || !waitForHealer()) {
                if (primary.mtype === currentTarget) lastRealTarget = Date.now();
                lastCombat = Date.now();
                // If we have adds queued and we have aggro, get them
                if (currentTarget && secondaryTarget && get_target_of(primary) === character && !traveling && get_target_of(secondaryTarget) !== character) primary = secondaryTarget;
                if (can_use('stomp')) stompControl();
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
        }
    } else {
        tackling = undefined;
        // Handle moving to an event
        if (eventMonster) {
            if (!tackling && get_nearest_monster({type: eventMonster})) return stop('move');
            if (eventMap && eventMap !== character.map) {
                if (!kite()) return shibMove(eventMap);
            } else if (eventMap && eventMap === character.map) {
                eventMap = undefined;
            }
            if (!mainTarget && eventCoords) {
                let map = eventMap || character.map;
                if (!kite()) shibMove({x: eventCoords.x, y: eventCoords.y, map: map});
            } else if (!mainTarget && eventSearch) {
                patrolMap(eventMap);
            }
        } else {
            if (!tackling && get_nearest_monster({type: currentTarget})) return stop('move');
            if (!kite()) shibMove(currentTarget);
        }
    }
}

// handle basher swap and stomp
let originalWeapons = {};

function stompControl() {
    if (character.slots['mainhand'].name === 'basher') {
        use('stomp');
        let mainSlot = getInventorySlot(originalWeapons['mainHand'].name, false, originalWeapons['mainHand'].level);
        equip(mainSlot);
        if (originalWeapons['offHand']) {
            let offSlot = getInventorySlot(originalWeapons['offHand'].name, false, originalWeapons['offHand'].level);
            equip(offSlot);
        }
    } else if (getInventorySlot('basher')) {
        if (!originalWeapons['mainHand']) {
            originalWeapons['mainHand'] = {
                name: character.slots['mainhand'].name,
                level: character.slots['mainhand'].level
            };
        }
        if (!originalWeapons['offhand']) {
            if (character.slots['offhand']) {
                originalWeapons['offHand'] = {
                    name: character.slots['offhand'].name,
                    level: character.slots['offhand'].level
                };
            }
        }
        unequip('offhand');
        equip(getInventorySlot('basher'));
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
        lastCombat = Date.now() - 60000;
        lastRealTarget = Date.now() - 60000;
        targetSetAt = Date.now() - 60000;
        lowLevelCount = 0;
        currentTarget = event.name;
        eventMonster = event.name;
        eventMap = event.map;
        eventCoords = {x: event.x, y: event.y};
        if (eventTarget) {
            whisperParty('An event mob spawned, lets go kill a ' + G.monsters[event.name].name);
            primary = eventTarget;
            stop();
        } else if (event.map) {
            primary = undefined;
            traveling = true;
            stop();
            if (character.map === event.map) {
                whisperParty('An event mob spawned, lets go kill a ' + G.monsters[event.name].name);
            } else if (eventCoords.x && eventCoords.y) {
                if (character.map === event.map) {
                    whisperParty('An event mob spawned, lets go kill a ' + G.monsters[event.name].name);
                    return shibMove({x: eventCoords.x, y: eventCoords.y, map: event.map});
                } else {
                    whisperParty('An event mob spawned on a different map, lets go kill a ' + G.monsters[event.name].name);
                    return shibMove(event.map);
                }
            } else if (event.map) {
                eventSearch = true;
                if (character.map === event.map) {
                    whisperParty('An event mob spawned, we need to find a ' + G.monsters[event.name].name);
                } else {
                    whisperParty('An event mob spawned on a different map, lets go find a ' + G.monsters[event.name].name);
                    return shibMove(event.map);
                }
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
            if (entity.speed < speed) speed = entity.speed - 3;
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
}, 2500);