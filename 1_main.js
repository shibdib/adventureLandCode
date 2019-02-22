let pvp = false;
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
    // Rogue check
    if (character.ctype !== 'rogue') {
        // noinspection JSAnnotator
        return game_log('Character must be rogue for PVP');
    }

    // PVP Realm Check
    if (!isPvP()) {
        // noinspection JSAnnotator
        return game_log('This is not a PVP realm.');
    }

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