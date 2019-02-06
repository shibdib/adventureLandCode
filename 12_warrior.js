game_log("---Warrior Script Start---");
load_code(2);

let currentTarget, target, combat, pendingReboot, drawAggro;
let state = "farm";

//Party Management (30s)
setInterval(function () {
    // If reboot is pending do it when out of combat
    if (!combat && pendingReboot) {
        refreshCharacters(true);
        pendingReboot = undefined;
    }
    // Handle restarting/starting other characters
    refreshCharacters();
    // Handles sending invites
    for (let char of pveCharacters) {
        if (char.name === character.name || (character.party && parent.party_list.includes(char.name))) continue;
        send_party_invite(char.name);
    }
}, 30000);

//Force reboot of character (1h)
setInterval(function () {
    // Update and reboot
    updateCode();
    if (!combat) refreshCharacters(true); else pendingReboot = true;
}, 3600000 );

//Movement And Attacking (1/10th s)
setInterval(function () {
    // Loot the things
    loot(true);
    if (state === 'farm' || combat) {
        farm();
    } else if (state === 'resupply_potions') resupply_potions();
}, 100);//Execute 10 times per second

//Potions, equipment and state (1/2s)
setInterval(function () {
    // Set state
    state_controller();
    // Handle potion use
    if (can_use('use_hp') && character.hp < character.max_hp * 0.25) {
        use('use_hp');
    } else if (can_use('use_mp') && character.mp < character.max_mp * 0.75) {
        use('use_mp');
    } else if (can_use('use_hp') && character.hp < character.max_hp * 0.45) {
        use('use_hp');
    }
    // Check for BIS
    equipBIS();
}, 500);//Execute 2 times per second

// Farm target refreshes every 10 minutes
setInterval(function () {
    currentTarget = undefined;
}, 600000);

// Reset speed every 1.5 seconds
// Move as fast as the slowest man
setInterval(function () {
    slowestMan();
}, 1500);

function state_controller() {
    //If dead respawn and reset target
    if (character.rip) {
        currentTarget = undefined;
        return respawn();
    }
    //Default to farming
    let new_state = "farm";
    //Do we need potions?
    new_state = potion_check(new_state)
    //If state changed set it and announce
    if (state != new_state) {
        game_log("---NEW STATE " + new_state + "---");
        state = new_state;
    }
}

function farm() {
    let party_aggro = checkPartyAggro();
    // Hardshell when health is low
    if (character.hp < character.max_hp * 0.5 && can_use('hardshell')) use('hardshell');
    if (!currentTarget && !party_aggro) {
        target = findBestMonster(1000);
        if (target) {
            waitTime = undefined;
            currentTarget = target;
            whisperParty('New target is a ' + target);
            game_log('New target is a ' + target);
            stop();
        }
    }
    // Mark in combat if anyone in the party is being targeted
    combat = party_aggro;
    let mainTarget = findLocalMonsters(currentTarget);
    if (party_aggro && (party_aggro.target !== character.name || !currentTarget)) {
        let range = distanceToPoint(party_aggro.real_x, party_aggro.real_y);
        if (range <= character.range) {
            if (can_attack(party_aggro)) meleeCombat(party_aggro);
        } else {
            tackle(party_aggro);
        }
    } else if (mainTarget) {
        // Pull more if we can handle it
        if (mainTarget.attack < character.max_hp * 0.12 && pullAdds()) return;
        let aggressiveMonsters = nearbyAggressors();
        let kitePosition = getKitePosition(target, aggressiveMonsters, 190);
        // Warcry
        if (can_use('warcry')) use('warcry');
        drawAggro = undefined;
        let range = distanceToPoint(mainTarget.real_x, mainTarget.real_y);
        if (range <= character.range) {
            if (can_attack(mainTarget)) meleeCombat(mainTarget);
            // Pull him to a safer location if needed
            if (aggressiveMonsters.length && kitePosition) return moveToPosition(kitePosition)
        } else {
            // If waiting on the healer don't pull and make sure you're not in range of aggro
            if (waitForHealer()) {
                if (aggressiveMonsters.length && kitePosition) return moveToPosition(kitePosition); else return stop();
            } else {
                tackle(mainTarget);
            }
        }
    } else {
        drawAggro = undefined;
        if (waitForParty(9999)) return stop();
        if (currentTarget) {
            shibMove(currentTarget);
            refreshTarget();
        }
    }
}

// Pull additional monsters
function pullAdds () {
    let currentThreats = getMonstersTargetingMe();
    // Get total incoming attack damage
    let totalAttack = 0;
    currentThreats.forEach((t) => totalAttack += t.attack);
    // If attack is greater than 25% of remaining health, return
    if (totalAttack > character.hp * 0.2 || currentThreats.length > 2) return;
    let possibleAdds = findAdds();
    if (possibleAdds.length) {
        tackle(possibleAdds[0]);
        return true;
    }
}

// Refresh your target if the spawn is empty
let waitTime, lastPos;
function refreshTarget () {
    // Initial pos set
    if (!lastPos) return lastPos = {x: character.x, y: character.y};
    // If range doesn't change much start counter
    if (distanceToPoint(lastPos.x, lastPos.y) < 5) {
        if (!waitTime) waitTime = Date.now();
        let cutoff = 20000; // Wait 20 seconds
        if (getNearbyCharacters().length > 4) cutoff = 3000; // Wait 3 seconds if the area is crowded
        if (waitTime + cutoff < Date.now()) {
            if (cutoff === 20000) whisperParty('There are no ' + currentTarget + ' here, so time for a new target.'); else whisperParty('There is too many people farming here, so I will look for a new target.');
            currentTarget = undefined;
        }
    } else {
        waitTime = undefined;
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
function tackle(target) {
    if (can_use('taunt', target)) use('taunt', target); else if (can_use('charge', target)) use('charge', target); else if (can_attack(target)) meleeCombat(target); else moveToTarget(target);
}