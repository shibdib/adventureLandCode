// Handle waiting for party members
let waitNotify, waitMoveNotify, merchant, waitTime;
function waitForParty(range = 400) {
    if (character.map === 'bank') return false;
    if (parent.party_list.length > 0) {
        for (let key in parent.party_list) {
            let member = parent.party_list[key];
            let entity = parent.entities[member];
            // Don't wait for merchant or yourself
            if (merchant === member || member === character.name) continue;
            if ((entity && entity.ctype === 'merchant') || member.includes('merchantTaskManager')) {
                merchant = member;
                continue;
            }
            // Handle death
            if ((entity && entity.rip) || member.rip) {
                if (!waitNotify) {
                    game_log(member + ' is dead, waiting on them.');
                    whisperParty('Waiting for ' + member + ' to revive.')
                }
                waitNotify = true;
                return true;
            }
            // Handle distance
            if (!entity || distanceToPoint(entity.real_x, entity.real_y) >= range) {
                if (!waitNotify) {
                    game_log(member + ' is too far away, waiting on them.');
                    whisperParty('Waiting for ' + member + ' to catch up.')
                }
                waitNotify = true;
                if (!waitTime) waitTime = Date.now();
                // If waiting for 25 seconds then go to the problem child (3 minutes if map change occurred)
                let waitLength = 25000;
                if (parent.party[member].map !== character.map) waitLength = 180000;
                if (waitTime + waitLength < Date.now() && entity && entity.ctype !== 'priest') {
                    if (!waitMoveNotify) {
                        game_log(member + ' wait timed out.');
                        whisperParty(member + ' we are going on without you, catchup when you can!!');
                    }
                    waitMoveNotify = true;
                    return false;
                }
                return true;
            }
        }
        waitMoveNotify = undefined;
        waitTime = undefined;
        waitNotify = undefined;
    }
}

// Handle waiting for a healer
let healerNotify;
function waitForHealer(range = 300, silent = false) {
    let healerFound = false;
    if (character.map === 'bank') return false;
    if (parent.party_list.length > 0) {
        for (let key in parent.party_list) {
            let member = parent.party_list[key];
            let entity = parent.entities[member];
            if (member === character.name) continue;
            if (!entity || entity.ctype !== 'priest') continue;
            healerFound = true;
            if (entity && entity.mp < entity.max_mp * 0.03) {// Priest is low MP
                if (!healerNotify) {
                    if (!silent) game_log('Healer is OOM.');
                    if (!silent) whisperParty('Waiting for ' + member + ' to get their mp up.')
                }
                healerNotify = true;
                return true;
            }
            // Handle distance
            if (distanceToPoint(entity.real_x, entity.real_y) >= entity.range * 1.2) {
                if (!healerNotify) {
                    if (!silent) game_log('Healer Range.');
                    if (!silent) whisperParty('Waiting on our healer ' + member + '.');
                    if (isPvP()) moveToTarget(entity, 0, 0, false);
                }
                healerNotify = true;
                return true;
            }
        }
    }
    if (!healerFound) {
        if (!healerNotify) {
            if (!silent) game_log('No healer??');
            if (!silent) whisperParty('Where did the healer go??');
        }
        healerNotify = true;
        if (isPvP() && findStoredHealer()) {
            let healer = findStoredHealer();
            moveToCoords(healer.x, healer.y);
            return true;
        } else {
            return true;
        }
    }
    healerNotify = undefined;
}

// Whisper the party
let messageQueue = [];
let lastSent;
function whisperParty(message, sendPublic = false) {
    if (lastSent && lastSent + 5000 > Date.now()) {
        messageQueue.push(message);
        return;
    }
    if (parent.party_list.length > 0) {
        lastSent = Date.now();
        say('/p ' + message);
    } else if (sendPublic) {
        lastSent = Date.now();
        say(message);
    }
}
// Queued message loop
setInterval(function () {
    if (messageQueue.length && lastSent + 1000 <= Date.now()) {
        if (parent.party_list.length > 0) {
            lastSent = Date.now();
            say('/p ' + messageQueue[0]);
            messageQueue.shift();
        }
    }
}, 2500);

let partyTracker = {};
// Restarts lost party members
function refreshCharacters(force = false) {
    let count = Object.keys(get_active_characters()).length;
    // If we're missing people refresh
    if (count < 3 || force) {
        stop();
        whisperParty('Going to refresh the party, one second...');
        //Stops all
        for (let char of pveCharacters) {
            if (char.name === character.name) continue;
            stop_character(char.name);
        }
        //Healer
        let healer = shuffle(pveCharacters.filter((c) => c.role === 'healer'))[0];
        if (!Object.keys(get_active_characters()).includes(healer.name)) start_character(healer.name, healer.slot); else load_code(healer.slot);
        //DPS
        let dps = shuffle(pveCharacters.filter((c) => c.role === 'dps'))[0];
        if (!Object.keys(get_active_characters()).includes(dps.name)) start_character(dps.name, dps.slot); else load_code(dps.slot);
        //Tank
        let tank = shuffle(pveCharacters.filter((c) => c.role === 'tank'))[0];
        if (!Object.keys(get_active_characters()).includes(tank.name)) start_character(tank.name, tank.slot); else load_code(tank.slot);
        //Merchant
        /** MERCHANT NOW RUNS SEPARATE ON US1
        let merchant = shuffle(pveCharacters.filter((c) => c.role === 'merchant'))[0];
        if (!Object.keys(get_active_characters()).includes(merchant.name)) start_character(merchant.name, merchant.slot); else load_code(merchant.slot);
         **/
    } else {
        // Handle cases where party members go AWOL
        if (parent.party_list.length > 0) {
            for (let key in parent.party_list) {
                let member = parent.party_list[key];
                let acceptedStates = ["starting","loading","code"];
                if (!acceptedStates.includes(get_active_characters()[member])) continue;
                if (!partyTracker[member]) {
                    partyTracker[member] = Date.now();
                } else {
                    let coolDown = ((1000 * 60) * 5);
                    if (parent.party[member].type === 'merchant') coolDown = ((1000 * 60) * 30);
                    if (partyTracker[member] + coolDown < Date.now()) {
                        let loginData = pveCharacters.filter((c) => c.name === member);
                        start_character(member, loginData.slot);
                        partyTracker[member] = Date.now();
                        game_log('Rebooting ' + member + ' as he has not been seen in over ' + (coolDown / 1000) / 60 + ' minutes.');
                    } else {
                        // If you can find the entity you can "see" him
                        if (parent.entities[member]) partyTracker[member] = Date.now();
                    }
                }
            }
        }
    }
}

// Find a healer via party data
function findStoredHealer() {
    let currentData = JSON.parse(localStorage.getItem('myDetails'));
    if (currentData) {
        for (let key of Object.keys(currentData)) {
            let member = currentData[key];
            if (member.ctype === 'priest') {
                return member;
            }
        }
    }
}

// Store my character data
function updateCharacterData() {
    // Get or create data
    let currentData = JSON.parse(localStorage.getItem('myDetails')) || {};
    // Store data
    let combat = getEntitiesTargeting().length > 0;
    currentData[character.name] = {
        name: character.name,
        ctype: character.ctype,
        slots: character.slots,
        items: character.items,
        hp: character.hp,
        maxHp: character.max_hp,
        mp: character.mp,
        maxMp: character.max_mp,
        attack: character.attack,
        frequency: character.frequency,
        rpiercing: character.rpiercing,
        apiercing: character.apiercing,
        resistance: character.resistance,
        armor: character.armor,
        xp: character.xp,
        maxXp: character.max_xp,
        map: character.map,
        x: character.real_x,
        y: character.real_y,
        target: character.target,
        combat: combat
    };
    localStorage.setItem('myDetails', JSON.stringify(currentData));
}

// Recall my character data
function getCharacterData() {
    let currentData = {};
    if (localStorage.getItem('myDetails')) currentData = JSON.parse(localStorage.getItem('myDetails'));
    return currentData;
}