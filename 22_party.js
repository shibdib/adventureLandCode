function on_party_request(name){
    accept_party_request(name);
}

function on_party_invite(name){
    if (name === 'Shibtank') accept_party_invite(name);
}

function move_to_leader (min = 5, max = 10) {
    if (is_moving(character)) return;
    let leader = get_player(character.party);
    if (!leader || !parent.entities[character.party]) return shib_move(character.party);
    let range = distance_to_point(leader.real_x, leader.real_y);
    if (range > max || range < min || !range) move_to_target(leader, min, max);
}

function get_teleport_target() {
    if (parent.party_list.length > 0) {
        for (id in parent.party_list) {
            let member = parent.party_list[id];
            let entity = parent.entities[member];
            if (member === character.name) continue;
            if (member === character.party) continue;
            if ((entity && entity.rip) || member.rip) continue;
            if (!entity || distance_to_point(entity.real_x, entity.real_y) >= 1000) return member;
        }
    }
}