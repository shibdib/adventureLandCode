game_log("---Warrior Script Start---");
load_code(2);
let currentTarget, target, combat, pendingReboot, tackling,
    primary, lastPos, traveling, targetSetAt, targetArray, eventMap, eventCoords;
let lowLevelCount = 0;
let lowLevelTotalCount = 0;
let state;
let lastCombat = Date.now();
let lastRealTarget = Date.now();

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
    if (character.rip) state = 99;
    if (state && state === 1) farm();
}, 750);

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
        whisperParty('NEW MTYPE ARRAY: ' + JSON.stringify(targetArray));
    }
    // Handle target refreshing
    refreshTarget();
    // State tasks
    if (!state || combat) return;
    stateTasks(state);
}, 3000);

//Target finding loop
let mainTarget, opportunisticTarget, secondaryTarget;
setInterval(function () {
    // Handle various target declarations
    if (currentTarget) mainTarget = findLocalTargets(currentTarget);
    if (mainTarget) draw_circle(mainTarget.x, mainTarget.y, 30, 3, 0xFFBF00);
    opportunisticTarget = getEasyKills(false)[0];
    if (opportunisticTarget) draw_circle(opportunisticTarget.x, opportunisticTarget.y, 30, 3, 0x00FFFF);
    secondaryTarget = getSecondary();
    if (secondaryTarget) draw_circle(secondaryTarget.x, secondaryTarget.y, 30, 3, 0x00E639);
}, 1500);

//Primary loop
function farm() {
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
    if (isPvP() && waitForHealer() && !combat) return;
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
    if (primary && primary.dead) primary = undefined;
    // If someone in the party has aggro set them primary
    if (party_aggro && get_target_of(party_aggro) !== character) {
        if (smart.moving) stop();
        primary = party_aggro;
    }
    // If you don't have a target find one
    if (!primary) {
        let readyToPull = character.hp >= character.max_hp * 0.8 && character.mp >= character.max_mp * 0.8;
        if (getEntitiesTargeting()[0]) {
            stop('move');
            primary = getEntitiesTargeting()[0];
        } else if (readyToPull && mainTarget) {
            stop('move');
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
        if (get_target_of(primary) === character || !waitForHealer()) {
            // Handle stomping things
            stompControl();
            combat = true;
            if (primary.mtype === currentTarget) lastRealTarget = Date.now();
            // If we have adds queued and we have aggro, get them
            if (currentTarget && secondaryTarget && get_target_of(primary) === character && !traveling) {
                if (Math.random() > 0.9) parent.d_text("PULLING MORE!", character, {color: "#FF0000"});
                primary = secondaryTarget;
            }
            let fightText = ['KILL!', 'AGHHH!', 'BLOOD!', 'ATTACK!'];
            if (Math.random() > 0.9) parent.d_text(random_one(fightText), character, {color: "#E83E1A"});
            tackle(primary);
        } else {
            // Pull if he's attacking someone else
            if (get_target_of(primary) && get_target_of(primary) !== character = &&
            get_target_of(primary).ctype !== 'warrior' && parent.party_list.includes(get_target_of(primary));
        )
            {
                combat = true;
                if (Math.random() > 0.9) parent.d_text("GETTING AGGRO!", character, {color: "#E83E1A"});
                tackle(primary);
                if (!secondaryTarget && !kite(primary)) moveToTarget(primary)
            } else {
                primary = undefined;
                kite();
            }
        }
    } else {
        if (!kite()) {
            if (currentTarget && !get_nearest_monster({type: currentTarget})) shibMove(currentTarget); else kite();
        }
        tackling = undefined;
    }
}

// Pull additional monsters
function getSecondary() {
    // Don't pull more on pvp
    if (isPvP()) return;
    let currentThreats = getEntitiesTargeting();
    // If a player is targeting dont pull adds
    if (is_character(currentThreats[0])) return false;
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
function refreshTarget() {
    // No target or waiting for healer check
    if (!currentTarget || waitForHealer(325, true) || !G.monsters[currentTarget] || targetSetAt + 35000 > Date.now()) return;
    // We're only fighting low level main targets, time to rotate to let them build up
    if (lowLevelCount && lowLevelCount >= 5) {
        game_log('Overfarm');
        whisperParty('These ' + G.monsters[currentTarget].name + "'s have been over farmed and need to level up, time to rotate to something new.");
        stop();
        lastCombat = Date.now();
        lastRealTarget = Date.now();
        primary = undefined;
        currentTarget = undefined;
        lowLevelCount = 0;
        lowLevelTotalCount++;
        traveling = true;
        return;
    }
    // We haven't seen our actual target in awhile
    if (lastRealTarget + (60000 * 1.5) < Date.now()) {
        game_log('NoSee');
        whisperParty('Have not seen a ' + G.monsters[currentTarget].name + "'s for a couple minutes, moving onto something new.");
        stop();
        lastCombat = Date.now();
        lastRealTarget = Date.now();
        primary = undefined;
        currentTarget = undefined;
        traveling = true;
        lowLevelCount = 0;
        return;
    }
    // If it's been a REALLY long time we probably bugged out so refresh
    if (lastCombat && lastCombat + (60000 * 10) < Date.now()) {
        game_log('10-Mins');
        whisperParty('We have not been in combat for 10 minutes, going to head to town and figure this out.');
        stop();
        lastCombat = Date.now();
        lastRealTarget = Date.now();
        primary = undefined;
        currentTarget = undefined;
        traveling = true;
        lowLevelCount = 0;
        return;
    }
    // It's crowded time to move on
    if (!smart.moving && lastRealTarget + (60000 * 0.5) < Date.now() && getNearbyCharacters(200, true).length >= 3) {
        game_log('TooMany');
        whisperParty('There is too many people farming here, so I will look for a new target.');
        stop();
        lastCombat = Date.now();
        lastRealTarget = Date.now();
        primary = undefined;
        currentTarget = undefined;
        traveling = true;
        lowLevelCount = 0;

    }
}

//Tackle a target
function tackle(target, slowMove = true) {
    lastCombat = Date.now();
    tackling = true;
    if (!kite(target) && !nearbyAggressor(target)) {
        if (target.target !== character.name) use('taunt', target);
        if (parent.distance(character, target) > 120 && parent.distance(character, target) < 250) use('charge');
        if (can_attack(target)) smartAttack(target);
        if (slowMove) moveToTarget(target);
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
        use('stomp');
        lastStomp = Date.now();
        reEquip = true;
    } else if (basherSlot && (!lastStomp || lastStomp + 25000 < Date.now())) {
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
        stompReady = true;
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
        if (char.name === character.name || (character.party && parent.party_list.includes(char.name)) || char.class === 'merchant') continue;
        send_party_invite(char.name);
    }
}, 5000);

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

// Add manual target refresh
/**
 add_bottom_button(3, 'Refresh Target', function () {
    lastTarget = currentTarget;
    currentTarget = undefined;
    whisperParty('Manual target refresh requested..');
});**/

//CM Location Loop
//Only sends details to people it cant see
setInterval(function () {
    for (let key of parent.party_list) {
        let entity = parent.entities[key];
        if (entity) continue;
        let type = 'moving';
        if (primary) if (is_monster(primary)) type = primary.mtype; else if (is_character(primary)) type = 'player';
        send_cm(key, {type: 'combatLocation', data: {x: character.x, y: character.y, map: character.map, mtype: type}})
    }
}, 5000);

// Update your data
setInterval(function () {
    updateCharacterData();
}, 1000);