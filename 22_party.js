function on_party_request(name){
    accept_party_request(name);
}

function on_party_invite(name){
    if (name === 'Shibtank') accept_party_invite(name);
}

function wait_for_party(){
    for (let key in Object.values(parent.party)) {
        if (Object.values(parent.party)[key].map !== character.map) return true;
    }
    if (parent.party_list.length > 0) {
        for (let key in parent.party_list) {
            let member = parent.party_list[key];
            let entity = parent.entities[member];
            if (member === character.name) continue;
            if ((entity && entity.rip) || member.rip) return true;
            if (!entity || distance_to_point(entity.real_x, entity.real_y) >= 300)  return true;
        }
    }
}