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
            if ((entity && entity.ctype === 'merchant') || member.includes('merch')) {
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
function waitForHealer(range = 300) {
    let healerFound = false;
    if (character.map === 'bank') return false;
    if (parent.party_list.length > 0) {
        for (let key in parent.party_list) {
            let member = parent.party_list[key];
            let entity = parent.entities[member];
            if (member === character.name) continue;
            if (!entity || entity.ctype !== 'priest') continue;
            healerFound = true;
            if (entity && entity.mp < entity.max_mp * 0.45) {// Priest is low MP
                if (!healerNotify) {
                    game_log('Healer is OOM.');
                    whisperParty('Waiting for ' + member + ' to get their mp up.')
                }
                healerNotify = true;
                return true;
            }
            // Handle distance
            if (distanceToPoint(entity.real_x, entity.real_y) >= entity.range * 1.2) {
                if (!healerNotify) {
                    game_log('Healer Range.');
                    whisperParty('Waiting on our healer ' + member + ' to get in range before I pull.');
                }
                healerNotify = true;
                return true;
            }
        }
    }
    if (!healerFound) {
        if (!healerNotify) {
            game_log('No healer??');
            whisperParty('Where did the healer go??');
        }
        healerNotify = true;
        return true;
    }
    healerNotify = undefined;
}

// Whisper the party
function whisperParty(message) {
    if (parent.party_list.length > 0) {
        say('/p ' + message);
    } else {
        say(message);
    }
}

// Restarts lost party members
function refreshCharacters(force = false) {
    let count = Object.values(get_active_characters()).length;
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
        let merchant = shuffle(pveCharacters.filter((c) => c.role === 'merchant'))[0];
        //if (!Object.keys(get_active_characters()).includes(merchant.name)) start_character(merchant.name, merchant.slot); else load_code(merchant.slot);
    }
}