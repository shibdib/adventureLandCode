//GUI Stuff
add_bottom_button(1, 'Update Code', function () {
    updateCode()
});
add_bottom_button(2, 'Refresh Party', function () {
    refreshCharacters(true)
});
// Interval stuff
setInterval(function () {
    if (character.ctype !== 'merchant' && !showBank) update_dpsmeter();
    //if (character.ctype === 'merchant' || showBank) showBankInfo();
}, 100);

//Bank Details
initBank()
function initBank() {
    let $ = parent.$;
    let brc = $('#bottomrightcorner');
    brc.find('#bankinfo').remove();
    let bankContainer = $('<div id="bankinfo"></div>').css({
        fontSize: '13px',
        color: 'white',
        textAlign: 'center',
        display: 'table',
        overflow: 'auto',
        marginBottom: '-3px',
        width: "100%"
    });
    let wrapper = "bankinfo.wrapper {
        overflow:hidden;
        overflow-y: scroll;
        height: 100px; // change this to desired height
    }"
    //vertical centering in css is fun
    let bankInfo = $('<div id="bankinfocontent"></div>')
        .css({
            //display: 'table-cell',
            verticalAlign: 'middle'
        })
        .html("")
        .appendTo(bankContainer);
    brc.children().first().after(bankContainer);
}
function showBankInfo() {
    let $ = parent.$;
    var listString = '<table style="border-style: solid;" border="5px" bgcolor="black" align="right" cellpadding="5"><tr align="center"><td colspan="3">Bank Info</td></tr><tr align="center"><td>Item</td><td>Level</td><td>Quantity</td></tr>';
    if (localStorage.getItem('bankDetails')) {
        let parsed = JSON.parse(localStorage.getItem('bankDetails'));
        let sorted = {};
        Object.keys(parsed).sort().forEach(function(key) {
            sorted[key] = parsed[key];
        });
        let count = 0;
        for (let keys of Object.keys(sorted)) {
            count++;
            if (count > 10) break;
            let cleanName = keys;
            let level = 0;
            if (stringEndsInNumberTest(keys)) {
                level = keys[keys.length -1];
                cleanName = keys.slice(0, -1);
            }
            let display = cleanName;
            if (G.items[cleanName]) display = G.items[cleanName].name;
            let amount = parsed[keys];
            listString = listString + '<tr align="left"><td align="center">' + display + '</td><td>' + level + '</td><td>' + amount + '</td></tr>';
        }
    }
    $('#' + "bankinfocontent").html(listString);
}
function stringEndsInNumberTest(string) {
    let match = string.match(/[0-9]$/);
    return match ? match[0] : '';
}

//Spadar DPS
init_dpsmeter(5)
var dpsInterval = 10000;
var damageSums = {};
var damageLog = [];
function init_dpsmeter() {
    let $ = parent.$;
    let brc = $('#bottomrightcorner');
    brc.find('#dpsmeter').remove();
    let dps_container = $('<div id="dpsmeter"></div>').css({
        fontSize: '28px',
        color: 'white',
        textAlign: 'center',
        display: 'table',
        overflow: 'hidden',
        marginBottom: '-5px',
        width: "100%"
    });
    //vertical centering in css is fun
    let dpsmeter = $('<div id="dpsmetercontent"></div>')
        .css({
            //display: 'table-cell',
            verticalAlign: 'middle'
        })
        .html("")
        .appendTo(dps_container);
    brc.children().first().after(dps_container);
}
function updateTimerList() {
    let $ = parent.$;
    var listString = '<table style="border-style: solid;" border="5px" bgcolor="black" align="right" cellpadding="5"><tr align="center"><td colspan="3">Damage Meter</td></tr><tr align="center"><td>Name</td><td>DPS</td><td>Max Dam.</td></tr>';
    if (parent.party_list != null && character.party != null) {
        for (id in parent.party_list) {
            var partyMember = parent.party_list[id];
            var dps = getDPS(partyMember);
            let peak = maxAttack[partyMember] || 0;
            if (dps > 0) listString = listString + '<tr align="left"><td align="center">' + partyMember + '</td><td>' + dps + '</td><td>' + peak + '</td></tr>';
        }
    }
    else {
        var dps = getDPS(character.name);
        listString = listString + '<tr align="left"><td align="center">' + character.name + '</td><td>' + dps + '</td></tr>';
    }
    if (parent.party_list != null && character.party != null) {
        var dps = getTotalDPS();
        let peak = maxAttack[partyMember] || 0;
        listString = listString + '<tr align="left"><td>' + "Total" + '</td><td>' + dps + '</td><td>' + peak + '</td></tr>';
    }
    $('#' + "dpsmetercontent").html(listString);
}
function update_dpsmeter() {
    updateTimerList();
}
function getDPS(partyMember) {
    var entry = damageSums[partyMember];
    var dps = 0;
    if (entry != null) {
        var elapsed = new Date() - entry.startTime;
        dps = parseFloat(Math.round((entry.sumDamage / (elapsed / 1000)) * 100) / 100).toFixed(2);
    }
    return dps;
}
function getTotalDPS() {
    var minStart;
    var sumDamage = 0;
    var dps = 0;
    for (var id in damageSums) {
        var entry = damageSums[id];
        if (minStart == null || entry.startTime < minStart) minStart = entry.startTime;
        sumDamage += entry.sumDamage;
    }
    if (minStart != null) {
        var elapsed = new Date() - minStart;
        dps = parseFloat(Math.round((sumDamage / (elapsed / 1000)) * 100) / 100).toFixed(2);
    }
    return dps;
}
//Clean out an pre-existing listeners
if (parent.prev_handlersdpsmeter) {
    for (let [event, handler] of parent.prev_handlersdpsmeter) {
        parent.socket.removeListener(event, handler);
    }
}
parent.prev_handlersdpsmeter = [];
//handler pattern shamelessly stolen from JourneyOver
function register_dpsmeterhandler(event, handler) {
    parent.prev_handlersdpsmeter.push([event, handler]);
    parent.socket.on(event, handler);
};
let maxAttack = {};
function dpsmeterHitHandler(event) {
    if (parent != null) {
        var attacker = event.hid;
        var attacked = event.id;
        var attackerEntity = parent.entities[attacker];
        if (attacker == character.name) attackerEntity = character;
        if ((attackerEntity.party != null || attacker == character.name) || attackerEntity.party == character.party) {
            if (event.damage != null) {
                var attackerEntry = damageSums[attacker];
                if (attackerEntry == null) {
                    var entry = {};
                    entry.startTime = new Date();
                    entry.sumDamage = 0;
                    damageSums[attacker] = entry;
                    attackerEntry = entry;
                }
                attackerEntry.sumDamage += event.damage;

                damageSums[attacker] = attackerEntry;
                if (!maxAttack[attacker] || event.damage > maxAttack[attacker]) maxAttack[attacker] = event.damage
            }
        }
    }
}
register_dpsmeterhandler("hit", dpsmeterHitHandler);