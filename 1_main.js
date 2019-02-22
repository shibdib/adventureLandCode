let pvp = false;
load_code(2);

//Start Up Code
setTimeout(function () {
    // Handle restarting/starting other characters when needed
    refreshCharacters(pvp, true);
}, 10000);

//Force reboot of character (1h)
setInterval(function () {
    // Update and reboot
    if (!combat) refreshCharacters(pvp, true); else pendingReboot = true;
}, 60000 * 60);

//Party invites
setInterval(function () {
    // Handles sending invites
    for (let char of pveCharacters) {
        if (char.name === character.name || (character.party && parent.party_list.includes(char.name)) || char.class === 'merchant') continue;
        send_party_invite(char.name);
    }
}, 10000);