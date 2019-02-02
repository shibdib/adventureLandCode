let urls = ["https://raw.githubusercontent.com/shibdib/adventureLandCode/master/constants.js",
    "https://raw.githubusercontent.com/shibdib/adventureLandCode/master/helpers/shopping.js",
    "https://raw.githubusercontent.com/shibdib/adventureLandCode/master/helpers/combat.js"];
urls.push("https://raw.githubusercontent.com/shibdib/adventureLandCode/master/classes/" + character.ctype + ".js");
urls.forEach((u) => loadURLs(u));

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

function NoCache(url) {
    return url + (new Date().getTime());
}