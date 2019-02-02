function on_party_request(name){
    accept_party_request(name);
}

function on_party_invite(name){
    if (name === 'Shibtank') accept_party_invite(name);
}