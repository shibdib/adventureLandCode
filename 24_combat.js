// Find in view range monsters base off type
function findLocalTargets(type, returnArray = false) {
    let potentialTargets;
    // Look for targets in range
    potentialTargets = Object.values(parent.entities).filter(mob => mob.mtype === type && getMonsterDPS(mob, true) < partyHPS());
    if (isPvP()) {
        // Check nearby players and target them if they are not friends and if their dps * 2.85 is less than our heal power.
        let nearbyPlayers = getNearbyCharacters(400, true).filter(player => getCharacterDPS(player) * 2.85 <= partyHPS() && checkIfHostile(player) && !player.rip);
        if (nearbyPlayers.length) return sortEntitiesByDistance(nearbyPlayers)[0];
    }
    if (!potentialTargets.length) return false;
    //Order monsters by distance and xp.
    potentialTargets = sortEntitiesByDistance(potentialTargets).sort((a, b) => ((b.xp * 3) - parent.distance(character, b)) - ((a.xp * 3) - parent.distance(character, a)));
    if (!returnArray) return potentialTargets[0]; else return potentialTargets;
}

// Returns the target of the leader
function findLeaderTarget() {
    if (!character.party) return;
    let target = get_target_of(get_player(character.party));
    if (!target) return;
    if (parent.party_list.length) {
        for (id in parent.party_list) {
            let member = parent.party_list[id];
            if (member === target.name) return;
        }
    }
    //Handle monsters
    if (target && is_monster(target)) return target;
    if (target && is_character(target) && checkIfHostile(target) && !target.rip) return target;
}

// Return all monsters targeting you
function getEntitiesTargeting(target = character) {
    if (!target) target = character;
    let monsterAggro = Object.values(parent.entities).filter(mob => is_monster(mob) && get_target_of(mob) === target);
    let playerAggro = Object.values(parent.entities).filter(player => isPvP() && is_character(player) && get_target_of(player) === target && checkIfHostile(player) && !player.rip);
    if (playerAggro.length) return sortEntitiesByDistance(playerAggro); else return sortEntitiesByDistance(monsterAggro);
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

// Find possible targets to pull with your main target
function findAdds(attack = 0.07) {
    let adds = Object.values(parent.entities).filter(mob => mob.type === "monster" && G.monsters[mob.mtype] && !mob.target && mob.xp > 0 && mob.attack < character.hp * attack
        && !G.monsters[mob.mtype].dreturn && !G.monsters[mob.mtype].rage && !G.monsters[mob.mtype].stationary && (!G.monsters[mob.mtype].evasion || G.monsters[mob.mtype].evasion <= 80)
        && parent.distance(character, mob) <= 175);
    //Order monsters by distance.
    return sortEntitiesByDistance(adds).sort((a, b) => (b.xp - parent.distance(character, b)) - (a.xp - parent.distance(character, a)));;
}

// Attack easy to kill things
function getEasyKills(oneShot = true) {
    let easyKill = Object.values(parent.entities).filter(mob => mob.type === "monster" && in_attack_range(mob) && mob.hp <= character.attack * 0.8 && G.monsters[mob.mtype].xp);
    if (!oneShot) easyKill = Object.values(parent.entities).filter(mob => mob.type === "monster" && G.monsters[mob.mtype] && !mob.target && mob.xp > 0 && mob.attack < character.hp * 0.1
        && !G.monsters[mob.mtype].dreturn && !G.monsters[mob.mtype].rage && !G.monsters[mob.mtype].stationary && (!G.monsters[mob.mtype].evasion || G.monsters[mob.mtype].evasion <= 80)
        && parent.distance(character, mob) <= 175);
    //Order monsters by distance.
    return sortEntitiesByDistance(easyKill).sort((a, b) => (b.xp - parent.distance(character, b)) - (a.xp - parent.distance(character, a)));;
}

// Returns the best monster based off of a minXp var and relative attack power. This is slightly random and will usually return a different
// monster every run as multiple monsters typically meet the criteria so make sure to cache the target or edit this to return the same.
function findBestMonster(minXp, lastTarget, array = false) {
    let sorted, monsterSpawns;
    let healsPerSecond = partyHPS() * 0.95;
    // Make G.maps an array
    let maps = Object.values(G.maps);
    let monsterTypes = [];
    // Get all monster types from G.maps
    for (let key of maps) {
        if (avoidMaps.includes(key)) continue;
        if (key.monsters) monsterSpawns = key.monsters.forEach((s) => !avoidMtypes.includes(s.type) && (!lastTarget || s.type !== lastTarget.mtype) && monsterTypes.push(s.type))
    }
    // Set your XP threshold
    let xpTarget = minXp;
    // This will loop until it finds 2+ targets that meet the XP threshold which is progressively lowered 10% every loop.
    for (let x = 0; x < 150; x++) {
        // Filter out duplicates, then filter out targets based on maxAttack/xp and some other things that cause outliers
        // TODO: add more args to the filter to allow this to find the mini boss esque people (Green jr)
        sorted = sortEntitiesByXp(monsterTypes.filter((v, i, a) => a.indexOf(v) === i)).filter((m) => getMonsterDPS(m, true) * 1.05 < healsPerSecond
            && G.monsters[m].xp >= xpTarget && (!G.monsters[m].dreturn || G.monsters[m].dreturn <= 95) && !G.monsters[m].stationary && (!G.monsters[m].evasion || G.monsters[m].evasion <= 99)
        && G.monsters[m].respawn < 15000);
        if (sorted.length > 4) break;
        // Lower the XP target per loop
        xpTarget *= 0.9;
    }
    // If it doesn't find anything return false
    if (!sorted || !sorted.length) return false;
    // Concat the loot targets
    sorted = Array.from(new Set(sorted.concat(lootTargets)));
    // If it finds something it returns a random entity in the top half of the list
    // Uncomment the below and comment the other return to get the same return every time
    // return sorted[0];
    game_log(JSON.stringify(sorted))
    if (array) return sorted;
    return random_one(sorted);
}

// Check for monsters nearby who will aggro
function nearbyAggressors(range = 215, highRisk) {
    let aggressiveMonsters = Object.values(parent.entities).filter(mob => mob.type === "monster" && G.monsters[mob.mtype] &&
        G.monsters[mob.mtype].aggro && (getMonsterDPS(mob) >= partyHPS() || (G.monsters[mob.mtype].rage > 0.5 && getMonsterDPS(mob) * 1.5 >= partyHPS())) && parent.distance(character, mob) <= range);
    if (isPvP()) {
        // Check nearby players and target them if they are not friends and if their dps * 2.85 is less than our heal power.
        let nearbyPlayers = getNearbyCharacters(400, true).filter(player => !parent.friends.includes(player.owner) && checkIfHostile(player) && !player.rip);
        if (nearbyPlayers.length) aggressiveMonsters = aggressiveMonsters.concat(nearbyPlayers);
    }
    //Order monsters by distance.
    return sortEntitiesByDistance(aggressiveMonsters);
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
    if (character.range < 40) {
        for (let id in parent.party_list) {
            let member = parent.party_list[id];
            let entity = parent.entities[member];
            if (entity && (entity.ctype === 'rogue' || entity.ctype === 'warrior') && distanceToPoint(entity.real_x, entity.real_y) + 0.1 < 45) {
                for (let x = 0; x < 50; x++) {
                    let xChange = getRndInteger(-5, 5);
                    let yChange = getRndInteger(-5, 5);
                    if (can_move_to(character.real_x + xChange, character.real_y + yChange)) {
                        let newRange = distanceBetweenPoints(character.real_x + xChange, character.real_y + yChange, entity.real_x, entity.real_y);
                        let newTargetRange = distanceBetweenPoints(character.real_x + xChange, character.real_y + yChange, target.real_x, target.real_y);
                        if (newRange > 40 && newTargetRange <= character.range) moveToCoords(character.real_x + xChange, character.real_y + yChange);
                    }
                }
            }
        }
    } else {
        move(character.real_x+5,character.real_y);
    }
    attack(target);
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