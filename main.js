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
//Startup characters
//Healer
let healer = shuffle(pve_characters.filter((c) => c.role === 'healer'))[0];
if (healer.name === character.name) load_code(healer.slot); else if (!Object.keys(get_active_characters()).includes(healer.name)) start_character(healer.name, healer.slot);
//DPS
let dps = shuffle(pve_characters.filter((c) => c.role === 'dps'))[0];
if (dps.name === character.name) load_code(dps.slot); else if (!Object.keys(get_active_characters()).includes(dps.name)) start_character(dps.name, dps.slot);
//Tank
let tank = shuffle(pve_characters.filter((c) => c.role === 'tank'))[0];
if (tank.name === character.name) load_code(tank.slot); else if (!Object.keys(get_active_characters()).includes(tank.name)) start_character(tank.name, tank.slot);
//Party Management
setInterval(function () {
    for (let char of pve_characters) {
        if (char.name === character.name || (character.party && parent.party_list.includes(char.name))) continue;
        send_party_invite(char.name);
    }
}, 12400);