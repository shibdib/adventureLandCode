game_log("---Warrior Script Start---");
load_code(2);
let currentTarget, target, combat, pendingReboot, tackling, state, primary, lastPos;
let xpTarget = 750;
let lastCombat = Date.now();

//State Controller
setInterval(function () {
    state = stateController(state);
}, 5000);

//Primary Loop
setInterval(function () {
    if (character.rip) {
        primary = undefined;
        currentTarget = undefined;
        state = 99;
    }
    if (!state) return;
    if (checkPartyAggro() || getMonstersTargeting()[0] || !stateTasks(state, checkPartyAggro())) farm();
}, 500);

//Fast Loop
setInterval(function () {
    // Update your data
    updateCharacterData();
}, 75);

function farm() {
    // Initial pos set
    if (!lastPos) return lastPos = {x: character.x, y: character.y};
    loot();
    potionController();
    let party_aggro = checkPartyAggro();
    // Hardshell when health is low
    if (character.hp < character.max_hp * 0.5 && can_use('hardshell')) use('hardshell');
    if (!currentTarget && !party_aggro) {
        target = findBestMonster(800 * (character.level / 2));
        if (target) {
            farmWait = undefined;
            currentTarget = target;
            game_log('New target is a ' + target);
            whisperParty('Lets go kill ' + currentTarget + "'s.");
            stop();
        }
    }
    // Handle the healer disappearing
    if (character.hp < character.max_hp * 0.5)
    // Mark in combat if anyone in the party is being targeted
    combat = party_aggro;
    let mainTarget;
    if (currentTarget) mainTarget = findLocalMonsters(currentTarget);
    if (mainTarget) draw_circle(mainTarget.x, mainTarget.y, mainTarget.range * 3, 3, '#ffbf00');
    let opportunisticTarget = getEasyKills(false)[0];
    if (opportunisticTarget) draw_circle(opportunisticTarget.x, opportunisticTarget.y, opportunisticTarget.range * 3, 3, '#00ffff');
    let secondaryTarget = getSecondary();
    if (secondaryTarget) draw_circle(secondaryTarget.x, secondaryTarget.y, secondaryTarget.range * 3, 3, '#00e639');
    if (primary && primary.dead) primary = undefined;
    if (!primary) {
        if (getMonstersTargeting()[0]) {
            stop('move');
            primary = getMonstersTargeting()[0];
        } else if (mainTarget && state === 1) {
            primary = mainTarget;
        }
    }
    if (party_aggro && character.name !== party_aggro.target) {
        primary = party_aggro;
    } else if (!primary && getMonstersTargeting()[0]) {
        primary = getMonstersTargeting()[0];
    } else if (!primary && opportunisticTarget && distanceToPoint(lastPos.x, lastPos.y) < 5) {
        primary = opportunisticTarget;
    }
    // If you have a target deal with it
    if (primary) {
        // Warcry
        if (can_use('warcry')) use('warcry');
        if (can_attack(primary) && (!waitForHealer() || primary.target === character.name)) {
            if (secondaryTarget && primary.target === character.name) tackle(secondaryTarget, false); else tackle(primary);
        } else {
            // Pull if he's attacking someone else
            if (parent.party_list.includes(primary.target)) {
                tackle(primary);
            } else if (!waitForHealer() || primary.target === character.name) {
                tackle(primary);
            } else {
                kite();
            }
        }
    } else {
        // Handle target refreshing
        refreshTarget();
        tackling = undefined;
        if (currentTarget) {
            shibMove(currentTarget);
        }
    }
}

// Pull additional monsters
function getSecondary() {
    let currentThreats = getMonstersTargeting();
    // Get total incoming attack damage
    let totalAttack = 0;
    currentThreats.forEach((t) => totalAttack += t.attack * 1.25);
    // If attack is greater than 25% of remaining health, return
    let possibleAdds = findAdds();
    if (state !== 1 || (possibleAdds.length && totalAttack + possibleAdds[0].attack > character.hp * 0.125) || currentThreats.length > 2) return;
    if (possibleAdds.length) {
        return possibleAdds[0];
    }
}

// Refresh your target if the spawn is empty
let farmWait;
function refreshTarget() {
    if (!currentTarget) return;
    // If it's been a REALLY long time we probably bugged out so refresh
    if (lastCombat && lastCombat + 180000 < Date.now()) {
        whisperParty('We have not been in combat for 3 minutes, going to head to town and figure this out.');
        stop();
        lastCombat = Date.now();
        primary = undefined;
        currentTarget = undefined;
        return shibMove('main');
    }
    // If range doesn't change much start counter
    if (distanceToPoint(lastPos.x, lastPos.y) < 5) {
        let cutoff = 10000; // Wait 10 seconds
        let msg = 'There are no ' + currentTarget + "'s here, so time for a new target.";
        // Spot is crowded
        if (getNearbyCharacters(200, true).length >= 4) {
            cutoff = 5000;
            msg = 'There is too many people farming here, so I will look for a new target.';
        }
        if (!farmWait) farmWait = Date.now();
        game_log('Target Reset Timeout In ' + (((farmWait + cutoff) - Date.now()) / 1000).toFixed(2) + ' Seconds.');
        if ((farmWait + cutoff) - Date.now() <= 0) {
            whisperParty(msg);
            lastCombat = Date.now();
            primary = undefined;
            currentTarget = undefined;
            farmWait = undefined;
            return;
        }
    } else {
        farmWait = undefined;
    }
    lastPos = {x: character.x, y: character.y};
}

//Move as fast as the slowest man
let combatSet;

function slowestMan() {
    let speed = character.speed;
    if (parent.party_list.length) {
        for (id in parent.party_list) {
            let member = parent.party_list[id];
            let entity = parent.entities[member];
            if (!entity || member === character.name || entity.ctype === 'merchant') continue;
            if (entity.speed < speed) speed = entity.speed - 3;
        }
    }
    if (!combatSet && combat) {
        combatSet = true;
        cruise(9999);
    } else if (!combat && speed !== character.speed) {
        combatSet = undefined;
        cruise(speed);
    }
}

//Tackle a target
function tackle(target, slowMove = true) {
    lastCombat = Date.now();
    tackling = true;
    if (can_use('taunt', target) && target.target !== character.name) use('taunt', target);
    if (can_use('charge', target) && 250 > parent.distance(character, target) > 100) use('charge', target);
    if (can_attack(target)) attack(target);
    if (slowMove) moveToTarget(target);
}

///
///
/// OTHER LOOPS
///
///

//Party Management (30s)
setInterval(function () {
    // If reboot is pending do it when out of combat
    if (!combat && pendingReboot) {
        refreshCharacters(true);
        pendingReboot = undefined;
    }
    // Handle restarting/starting other characters when needed
    refreshCharacters();
    // Handles sending invites
    for (let char of pveCharacters) {
        if (char.name === character.name || (character.party && parent.party_list.includes(char.name))) continue;
        send_party_invite(char.name);
    }
}, 30000);

// Party Move Speed Management
setInterval(function () {
    slowestMan();
}, 500);

//Force reboot of character (1h)
setInterval(function () {
    // Update and reboot
    updateCode();
    if (!combat) refreshCharacters(true); else pendingReboot = true;
}, 3600000);

// Farm target refreshes every 10 minutes
setInterval(function () {
    currentTarget = undefined;
}, 600000);