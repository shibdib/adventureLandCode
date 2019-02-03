function on_party_request(name){
    accept_party_request(name);
}

function on_party_invite(name){
    game_log(1234)
    if (name === 'Shibtank') accept_party_invite(name);
}

function move_to_leader (){
    let leader = get_player(character.party);
    move(leader.real_x + 25, leader.real_y);
}