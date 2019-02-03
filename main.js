
//Update
setInterval(function () {
    updateCode();
    load_code(1);
    load_code(80);
}, 900000);

//Load party
for (let char of pve_characters) {
    if (char.name === character.name) continue;
    start_character(char.name, char.slot);
}
//Party Management
setInterval(function () {
    for (let char of pve_characters) {
        if (char.name === character.name) continue;
        send_party_invite(char.name);
        break;
    }
}, 12400);

/*
 * @author	D4ddy-LiLd4rk
 * @source	https://github.com/D4ddy-LiLd4rk/AdventureLand
 */

const baseURL = "https://raw.githubusercontent.com/shibdib/adventureLandCode/master/";

const allFiles = ["01_master.js",
    "80_constants.js",
    "21_movement.js",
    "22_party.js",
    "23_shopping.js",
    "10_priest.js",
    "11_ranger.js",
    "12_warrior.js",
    "13_mage.js"];


function updateCode() {
    parent.api_call("list_codes", {
        callback: function () {
            game_log("Updating from GitHub...");
            for (let file of allFiles) {
                let request = new XMLHttpRequest();
                request.open("GET", baseURL + file);
                request.onreadystatechange = function () {
                    if (request.readyState === 4 && request.status === 200) {
                        let codeObject = getCodeObject(file);
                        let data = {
                            name: codeObject.name,
                            slot: codeObject.slot,
                            code: request.responseText
                        };
                        parent.api_call("save_code", data);
                        game_log("Saved to slot [" + codeObject.name + "] as " + codeObject.slot);
                    }
                };
                request.send();
            }
        }
    });
}

function getCodeObject(file) {
    let codeObject;

    let arr = file.substring(0, file.length - 3).split("_");

    codeObject = {
        slot: arr[0],
        name: arr[1]
    };

    return codeObject;
}