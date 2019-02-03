//Handle github update
let update = true;
if (update) {
    load_code(69);
    updateCode();
}
load_code(80);
//Update
if (update) {
    for (let char of pve_characters) {
        if (char.name === character.name) continue;
        stop_character(char.name);
    }
    setInterval(function () {
        updateCode();
    }, 900000);
}
for (let char of pve_characters) {
    if (char.name === character.name) {
        load_code(char.slot);
        continue;
    }
    if (!Object.keys(get_active_characters()).includes(char.name)) start_character(char.name, char.slot);
}
//Party Management
setInterval(function () {
    for (let char of pve_characters) {
        if (char.name === character.name || (character.party && parent.party_list.includes(char.name))) continue;
        send_party_invite(char.name);
    }
}, 12400);