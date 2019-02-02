let urls = ["https://raw.githubusercontent.com/shibdib/adventureLandCode/master/constants.js",
    "https://raw.githubusercontent.com/shibdib/adventureLandCode/master/helpers/shopping.js",
    "https://raw.githubusercontent.com/shibdib/adventureLandCode/master/helpers/combat.js",
    "https://raw.githubusercontent.com/shibdib/adventureLandCode/master/helpers/movement.js"];
//Load helpers
urls.forEach((u) => loadURLs(u));
//Load party
let pve_characters = [{'name': 'Shibtank', 'class': 'warrior'}, {'name': 'Shibdib', 'class': 'mage'}, {'name': 'Shibheal', 'class': 'priest'}, {'name': 'Shibtard', 'class': 'ranger'}];
for (let char of pve_characters) {
    if (char.name === character.name) continue;
    let u = "https://raw.githubusercontent.com/shibdib/adventureLandCode/master/classes/" + char.class + ".js";
    start_character(char.name, loadURLs(u))
}
function loadURLs(url) {
    let ajax = new XMLHttpRequest();
    ajax.open('GET', url + "?nocache=" + (Math.floor(Math.random() * 6) + 1));
    ajax.onreadystatechange = function () {
        var script = ajax.response || ajax.responseText;
        if (ajax.readyState === 4) {
            switch( ajax.status) {
                case 200:
                    eval.apply( window, [script] );
                    break;
                default:
            }
        }
    };
    ajax.send(null);
}