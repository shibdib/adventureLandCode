function on_party_request(name) {
    accept_party_request(name);
}

function on_party_invite(name) {
    if (name === 'Shibtank') accept_party_invite(name);
}

let waitNotify, merchant;
function wait_for_party(range = 300) {
    for (let char of Object.values(parent.party)) {
        if (char === merchant) continue;
        if (char.map !== character.map) {
            if (!waitNotify) {
                game_log(char + ' is on the wrong map, waiting.');
                whisper_party('Waiting for ' + char + ' to get here.')
            }
            waitNotify = true;
            return true;
        }
    }
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
                    whisper_party('Waiting for ' + member + ' to revive.')
                }
                waitNotify = true;
                return true;
            }
            // Handle distance
            if (!entity || distance_to_point(entity.real_x, entity.real_y) >= range) {
                if (!waitNotify) {
                    game_log(member + ' is too far away, waiting on them.');
                    whisper_party('Waiting for ' + member + ' to catch up.')
                }
                waitNotify = true;
                return true;
            }
        }
        waitNotify = undefined;
    }
}

let healerNotify;

function wait_for_healer() {
    if (parent.party_list.length > 0) {
        for (let key in parent.party_list) {
            let member = parent.party_list[key];
            let entity = parent.entities[member];
            if (member === character.name) continue;
            if (entity && entity.ctype !== 'priest') continue;
            if (entity && entity.mp < entity.max_mp * 0.65) {// Priest is low MP
                if (!healerNotify) {
                    game_log('Healer is OOM.');
                    whisper_party('Waiting for ' + member + ' to get mana.')
                }
                healerNotify = true;
                return true;
            }
        }
        healerNotify = undefined;
    }
}

function whisper_party(message) {
    if (parent.party_list.length > 0) {
        say('/p ' + message);
    } else {
        say(message);
    }
}

// Restarts lost party members
function restart_lost(force = false) {
    let count = Object.values(get_active_characters()).length;
    if (count < 4 || force) {
        //Stops all
        for (let char of pveCharacters) {
            if (char.name === character.name) continue;
            stop_character(char.name);
        }
        //Healer
        let healer = shuffle(pveCharacters.filter((c) => c.role === 'healer'))[0];
        if (!Object.keys(get_active_characters()).includes(healer.name)) start_character(healer.name, healer.slot);
        //DPS
        let dps = shuffle(pveCharacters.filter((c) => c.role === 'dps'))[0];
        if (!Object.keys(get_active_characters()).includes(dps.name)) start_character(dps.name, dps.slot);
        //Tank
        let tank = shuffle(pveCharacters.filter((c) => c.role === 'tank'))[0];
        if (!Object.keys(get_active_characters()).includes(tank.name)) start_character(tank.name, tank.slot);
        //Merchant
        let merchant = shuffle(pveCharacters.filter((c) => c.role === 'merchant'))[0];
        if (!Object.keys(get_active_characters()).includes(merchant.name)) start_character(merchant.name, merchant.slot);
    }
}