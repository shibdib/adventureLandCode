// Pull additional monsters
function getSecondary() {
    // Don't pull more on pvp
    if (isPvP()) return;
    let currentThreats = getEntitiesTargeting();
    // If a player is targeting dont pull adds
    if (is_character(currentThreats[0])) return false;
    // Get total incoming attack damage
    let totalAttack = 0;
    currentThreats.forEach((t) => totalAttack += getMonsterDPS(t, true));
    // If attack is greater than 25% of remaining health, return
    let possibleAdds = findAdds();
    if ((possibleAdds.length && totalAttack + getMonsterDPS(possibleAdds[0], true) > partyHPS() * 0.9) || currentThreats.length > 2) return;
    if (possibleAdds.length) {
        return possibleAdds[0];
    }
}

// Return all monsters targeting you
function getEntitiesTargeting(target = character, lowest = false) {
    if (!target) target = character;
    let monsterAggro = Object.values(parent.entities).filter(mob => is_monster(mob) && get_target_of(mob) === target);
    let playerAggro = Object.values(parent.entities).filter(player => isPvP() && is_character(player) && get_target_of(player) === target && checkIfHostile(player) && !player.rip);
    if (!lowest) {
        if (playerAggro.length) return sortEntitiesByDistance(playerAggro); else return sortEntitiesByDistance(monsterAggro);
    } else {
        if (playerAggro.length) return sortEntitiesByHealth(playerAggro); else return sortEntitiesByHealth(monsterAggro);
    }
}

// Check if the tank has aggro
function checkIfSafeToAggro(target) {
    if (target.target && target.target !== character.name) return true;
}

// Check if anyone has aggro
function checkPartyAggro() {
    if (!character.party) return;
    if (parent.party_list.length) {
        let monsterAggro = Object.values(parent.entities).filter(mob => is_monster(mob) && parent.party_list.includes(mob.target));
        let playerAggro = Object.values(parent.entities).filter(player => isPvP() && parent.party_list.includes(player.target) && checkIfHostile(player) && !player.rip);
        if (playerAggro.length) return sortEntitiesByDistance(playerAggro)[0]; else if (monsterAggro.length) return monsterAggro[0];
    }
}

// Attack easy to kill things
function getEasyKills(oneShot = true) {
    let easyKill = Object.values(parent.entities).filter(mob => mob.type === "monster" && in_attack_range(mob) && mob.hp <= character.attack * 0.8 && G.monsters[mob.mtype].xp);
    if (!oneShot) easyKill = Object.values(parent.entities).filter(mob => mob.type === "monster" && G.monsters[mob.mtype] && !mob.target && mob.xp > 0 && mob.attack < character.hp * 0.1
        && !G.monsters[mob.mtype].dreturn && !G.monsters[mob.mtype].rage && !G.monsters[mob.mtype].stationary && (!G.monsters[mob.mtype].evasion || G.monsters[mob.mtype].evasion <= 80)
        && parent.distance(character, mob) <= 175);
    //Order monsters by distance.
    return sortEntitiesByDistance(easyKill).sort((a, b) => (b.xp - parent.distance(character, b)) - (a.xp - parent.distance(character, a)));
}

// Find PVP targets
function getGankTargets() {
    let players = getNearbyCharacters(9999, true);
    if (players.length) {
        players = players.filter((p) => p.level < character.level + 5 && !p.rip);
        if (players.length) return sortEntitiesByDistance(players);
    }
    return [];
}

// Check for monsters nearby who will aggro
function nearbyAggressors(range = 215) {
    let aggressiveMonsters = Object.values(parent.entities).filter(mob => mob.type === "monster" && G.monsters[mob.mtype] &&
        G.monsters[mob.mtype].aggro && getMonsterDPS(mob) >= partyHPS() && G.monsters[mob.mtype].rage && parent.distance(character, mob) <= range);
    if (isPvP()) {
        // Check nearby players and target them if they are not friends and if their dps * 2.85 is less than our heal power.
        let nearbyPlayers = getNearbyCharacters(400, true).filter(player => !parent.friends.includes(player.owner) && checkIfHostile(player) && !player.rip);
        if (nearbyPlayers.length) aggressiveMonsters = aggressiveMonsters.concat(nearbyPlayers);
    }
    //Order monsters by distance.
    return sortEntitiesByDistance(aggressiveMonsters);
}

// Check if a target is too close to another hostile with rage also check if an aggressor is between you and the target
function targetFriends(target) {
    let tooClose = Object.values(parent.entities).filter(mob => mob.type === "monster" && G.monsters[mob.mtype] &&
        G.monsters[mob.mtype].aggro && G.monsters[mob.mtype].rage && getMonsterDPS(mob) >= partyHPS() && parent.distance(target, mob) <= 50);
    if (tooClose.length) return true;
}

// Check if the target can be killed in ~1 hit
function canOneShot(target) {
    return target.hp <= character.attack * 1.1 || G.monsters[target.mtype].max_hp <= character.attack * 1.1;
}

// WIP
function getPositionAtRange(target, desiredRangeMin, desiredRangeMax) {
    for (let x = 0; x < 100; x++) {
        let xChange = getRndInteger(-character.range, character.range);
        let yChange = getRndInteger(-character.range, character.range);
        if (can_move_to(character.real_x + xChange, character.real_y + yChange)) {
            let newRange = distanceBetweenPoints(character.real_x + xChange, character.real_y + yChange, target.real_x, target.real_y);
            if (newRange >= desiredRangeMin && newRange <= desiredRangeMax) return {x: character.real_x + xChange, y: character.real_y + yChange};
        }
    }
}

// This tries to deal with combined damage;
function smartAttack(target = get_target()) {
    if (!target) return;
    for (let name of parent.party_list) {
        if (name === character.name) continue;
        let entity = parent.entities[name];
        if (entity && parent.distance(entity, character) + 0.1 <= 20) {
            let x, y;
            if (character.x > entity.x) x = getRndInteger(3, 6); else x = getRndInteger(-6, -3);
            if (character.y > entity.y) y = getRndInteger(3, 6); else y = getRndInteger(-6, -3);
            if (can_move_to(character.x + x, character.y + y)) {
                return move(character.x + x, character.y + y);
            }
        }
    }
    if (can_attack(target)) attack(target);
}

//Returns the party member with the lowest hp -> max_hp ratio.
function lowHealth(cutOff = 0.99) {
    let lowestHealth;
    let lowestEntity;
    if (parent.party_list.length > 0) {
        for (let id in parent.party_list) {
            let entity = parent.entities[parent.party_list[id]];
            if (!entity || entity.rip) continue;
            if (entity.hp < entity.max_hp * cutOff) {
                if (!lowestHealth || entity.hp / entity.max_hp < lowestHealth) {
                    lowestEntity = entity;
                    lowestHealth = entity.hp / entity.max_hp;
                }
            }
        }
    }
    //Return the lowest health
    if (lowestEntity) return lowestEntity;
}

// Return number of wounded below a threshold
function partyHurtCount(amount = 0.75) {
    let count = 0;
    if (parent.party_list.length > 0) {
        for (let id in parent.party_list) {
            let member = parent.party_list[id];
            let entity = parent.entities[member];
            if (entity && entity.hp < entity.max_hp * amount) count += 1;
        }
    }
    return count;
}

// Return a dead party member
function deadParty() {
    if (parent.party_list.length > 0) {
        for (let id in parent.party_list) {
            let member = parent.party_list[id];
            let entity = parent.entities[member];
            if (!entity || member === character.name) continue;
            if (!entity.rip) continue;
            if (entity) return entity;
        }
    }
}

//Tackle a target
function tackle(target, slowMove = true) {
    if (!target || target.dead) return;
    lastCombat = Date.now();
    tackling = true;
    if (!kite(target) && !targetFriends(target)) {
        if (target.target !== character.name) use('taunt', target);
        if (parent.distance(character, target) > 120 && parent.distance(character, target) < 250) use('charge');
        if (slowMove) moveToTarget(target);
        if (can_attack(target)) smartAttack(target);
    } else {
        kite(target);
        if (target.target !== character.name) use('taunt', target);
        if (can_attack(target)) smartAttack(target);
    }
}

// Store PVP info
function storeHostilePlayer(hostile, act = 'target') {
    let hostilePlayers = JSON.parse(localStorage.getItem('hostilePlayers')) || {};
    if (parent.entities[hostile]) hostile = parent.entities[hostile];
    if (!parent.party_list.includes(hostile.name) && !parent.friends.includes(hostile.owner) && hostile && hostile.name) {
        if (!hostilePlayers[hostile.owner]) {
            pm(hostile.name, 'You have been marked hostile for 30 minutes.');
            whisperParty(hostile.name + ' is now hostile!!');
        }
        hostilePlayers[hostile.owner] = {time: Date.now(), act: act};
        localStorage.setItem('hostilePlayers', JSON.stringify(hostilePlayers));
    }
}

// Check PVP status
function checkIfHostile(hostile) {
    let hostilePlayers = JSON.parse(localStorage.getItem('hostilePlayers')) || {};
    if (!hostile.owner) return;
    if (hostilePlayers[hostile.owner]) {
        if (hostilePlayers[hostile.owner].time && hostilePlayers[hostile.owner].time + (60000 * 30) < Date.now()) {
            hostilePlayers[hostile.owner] = undefined;
            localStorage.setItem('hostilePlayers', JSON.stringify(hostilePlayers));
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
}

// Determine if player is hostile (Stole from Spadar)
parent.prev_handlerstargeting = [];
// Clean out an pre-existing listeners
if (parent.prev_handlerstargeting) {
    for (let [event, handler] of parent.prev_handlerstargeting) {
        parent.socket.removeListener(event, handler);
    }
}
//handler pattern shamelessly stolen from JourneyOver
function register_targetinghandler(event, handler) {
    parent.prev_handlerstargeting.push([event, handler]);
    parent.socket.on(event, handler);
}
hitHandler = function(event){
    console.log(event);
    if (parent != null) {
        let attacker = event.hid;
        let attacked = event.id;
        if (parent.party_list && parent.party_list.includes(attacked)) {
            storeHostilePlayer(attacker, 'attacked');
        }
    }
};

register_targetinghandler("hit", hitHandler);