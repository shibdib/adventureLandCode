function on_party_request(name){
    accept_party_request(name);
}

function on_party_invite(name){
    if (name === 'Shibtank') accept_party_invite(name);
}

let waitNotify;
function wait_for_party(range = 300){
    for (let key in Object.values(parent.party)) {
        if (Object.values(parent.party)[key].map !== character.map) return true;
    }
    if (parent.party_list.length > 0) {
        for (let key in parent.party_list) {
            let member = parent.party_list[key];
            let entity = parent.entities[member];
            if (member === character.name) continue;
            if ((entity && entity.rip) || member.rip) {
                if (!waitNotify) {
                    game_log(member + ' is dead, waiting on them.');
                    whisper_party('Waiting for ' + member + ' to revive.')
                }
                return true;
            }
            if (!entity || distance_to_point(entity.real_x, entity.real_y) >= range) {
                if (!waitNotify) {
                    game_log(member + ' is too far away, waiting on them.');
                    whisper_party('Waiting for ' + member + ' to catch up.')
                }
                return true;
            }
        }
        waitNotify = undefined;
    }
}

let healerNotify;
function wait_for_healer(){
    if (parent.party_list.length > 0) {
        for (let key in parent.party_list) {
            let member = parent.party_list[key];
            let entity = parent.entities[member];
            if (member === character.name) continue;
            if (entity && entity.type !== 'priest') continue;
            if (!entity.mp < entity.max_mp * 0.65)  {// Priest is low MP
                if (!healerNotify) {
                    game_log('Healer is OOM.');
                    pm(member, 'Waiting on you to get mana.')
                }
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