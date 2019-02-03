function on_party_request(name){
    accept_party_request(name);
}

function on_party_invite(name){
    if (name === 'Shibtank') accept_party_invite(name);
}

function move_to_leader (){
    let leader = get_player(character.party);
    move_to_target(leader, 4, 6)
}