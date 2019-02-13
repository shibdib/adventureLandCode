// Find in view range monsters base off type
function findLocalTargets(type, returnArray = false) {
    let monsters;
    // Look for targets in range
    monsters = Object.values(parent.entities).filter(mob => mob.mtype === type && getMonsterDPS(mob, true) < partyHPS());
    if (isPvP()) {
        let nearbyPlayers = getNearbyCharacters(400, true);
        if (nearbyPlayers.length) monsters = monsters.concat(nearbyPlayers);
    }
    if (!monsters.length) return false;
    //Order monsters by distance and xp.
    monsters = sortEntitiesByDistance(monsters).sort((a, b) => (b.xp - parent.distance(character, b)) - (a.xp - parent.distance(character, a)));
    if (!returnArray) return monsters[0]; else return monsters;
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
let lastPoisonFarm;
function findBestMonster(minXp, lastTarget) {
    let sorted, monsterSpawns;
    let healsPerSecond = partyHPS() * 0.95;
    // Farm for poison when needed
    if (!lastPoisonFarm || (lastPoisonFarm + (60000)) * 30 < Date.now()) {
        let bankDetails = JSON.parse(localStorage.getItem('bankDetails'));
        if (!bankDetails['poison0'] || bankDetails['poison0'] < 100) {
            lastPoisonFarm = Date.now();
            return 'poisio';
        }
    }
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
        sorted = sortEntitiesByXp(monsterTypes.filter((v, i, a) => a.indexOf(v) === i)).filter((m) => getMonsterDPS(m, true) < healsPerSecond
            && G.monsters[m].xp >= xpTarget && (!G.monsters[m].dreturn || G.monsters[m].dreturn < 95) && !G.monsters[m].stationary && (!G.monsters[m].evasion || G.monsters[m].evasion <= 80)
        && G.monsters[m].respawn < 15000);
        if (sorted.length > 5) break;
        // Lower the XP target per loop
        xpTarget *= 0.9;
    }
    // If it doesn't find anything return false
    if (!sorted || !sorted.length) return false;
    // If it finds something it returns a random entity in the top half of the list
    // Uncomment the below and comment the other return to get the same return every time
    // return sorted[0];
    game_log(JSON.stringify(sorted))
    return random_one(sorted);
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
    if (target) return target;
}

// Check if the tank has aggro
function checkTankAggro() {
    if (!character.party) return;
    let target = get_target_of(get_player(character.party));
    let targetsTarget = get_target_of(target);
    if (target && targetsTarget === get_player(character.party) || targetsTarget === character.party) return true;
}

// Check if anyone has aggro
function checkPartyAggro() {
    if (!character.party) return;
    if (parent.party_list.length) {
        let bad_aggro = Object.values(parent.entities).filter(mob => mob.type === "monster" && parent.party_list.includes(mob.target));
        if (bad_aggro.length) return bad_aggro[0];
    }
}

// Check for monsters nearby who will aggro
function nearbyAggressors(range = 215, highRisk) {
    let attackCutoff = 20;
    if (highRisk) attackCutoff = character.hp * 0.1;
    let aggressiveMonsters = Object.values(parent.entities).filter(mob => mob.type === "monster" && G.monsters[mob.mtype] &&
        G.monsters[mob.mtype].aggro && G.monsters[mob.mtype].attack >= attackCutoff && parent.distance(character, mob) <= range);
    //Order monsters by distance.
    return sortEntitiesByDistance(aggressiveMonsters);
}

// Return all monsters targeting you
function getMonstersTargeting(target = character) {
    if (!target) target = character;
    let all = Object.values(parent.entities).filter(mob => mob.type === "monster" && mob.target === target.name);
    //Order monsters by distance.
    return sortEntitiesByDistance(all);
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