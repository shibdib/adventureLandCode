function on_party_request(name){
    accept_party_request(name);
}

function on_party_invite(name){
    if (name === 'Shibtank') accept_party_invite(name);
}

function move_to_leader (min = 5, max = 10) {
    let leader = get_player(character.party);
    let range = distance_to_point(leader.real_x, leader.real_y);
    if (range > max || range < min) move_to_target(leader, min, max);
}