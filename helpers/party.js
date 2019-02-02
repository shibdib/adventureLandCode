function on_party_request(name){
    if(member.party_logic.party_list.includes(name))
        accept_party_request(name);
}
function on_party_invite(name){
    if(member.party_logic.party_list.includes(name))
        accept_party_invite(name);
}