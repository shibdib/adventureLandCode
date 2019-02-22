load_code(2);

// Handle PVE
if (!pvp) {
    //Start Up Code
    setTimeout(function () {
        // Handle restarting/starting other characters when needed
        refreshCharacters(false, true);
    }, 10000);

    //Force reboot of character (1h)
    setInterval(function () {
        // Update and reboot
        if (!combat) refreshCharacters(pvp, true);
    }, 60000 * 60);
} else {
    //Start Up Code
    setTimeout(function () {
        // Handle restarting/starting other characters when needed
        refreshCharacters(true, true);
    }, 10000);
}

//Party invites
setTimeout(function () {
    setInterval(function () {
        // Handles sending invites
        for (let char of pveCharacters) {
            if (char.name === character.name || (character.party && parent.party_list.includes(char.name)) || char.class === 'merchant') continue;
            send_party_invite(char.name);
        }
    }, 10000);
}, 20000);