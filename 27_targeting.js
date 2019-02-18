// All functions dealing with target finding

// Returns the best monster based off of a minXp var and relative attack power. This is slightly random and will usually return a different
// monster every run as multiple monsters typically meet the criteria so make sure to cache the target or edit this to return the same.
function findBestMonster(minXp, lastTarget, array = false) {
    let sorted, monsterSpawns;
    let healsPerSecond = partyHPS() * 0.9;
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
            && G.monsters[m].xp >= xpTarget && (!G.monsters[m].dreturn || G.monsters[m].dreturn <= 95) && !G.monsters[m].stationary && (!G.monsters[m].evasion || G.monsters[m].evasion <= 99));
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
    game_log(JSON.stringify(sorted));
    if (array) return sorted;
    return random_one(sorted);
}

// Find in view range monsters base off type
function findLocalTargets(type, returnArray = false) {
    let potentialTargets;
    // Look for targets in range
    potentialTargets = Object.values(parent.entities).filter(mob => mob.mtype === type && getMonsterDPS(mob, true) < partyHPS() && !nearbyAggressor(mob));
    if (isPvP()) {
        // Check nearby players and target them if they are not friends and if their dps * 2.85 is less than our heal power.
        let nearbyPlayers = getNearbyCharacters(400, true).filter(player => getCharacterDPS(player) * 2.85 <= partyHPS() && checkIfHostile(player) && !player.rip);
        if (nearbyPlayers.length) return sortEntitiesByDistance(nearbyPlayers)[0];
    }
    if (!potentialTargets.length) return false;
    //Order monsters by distance and xp if they don't have aggro otherwise just distance.
    if (!G.monsters[type].rage) {
        potentialTargets = sortEntitiesByDistance(potentialTargets).sort((a, b) => ((b.xp * 3) - parent.distance(character, b)) - ((a.xp * 3) - parent.distance(character, a)));
    } else {
        potentialTargets = sortEntitiesByDistance(potentialTargets);
    }
    if (!returnArray) return potentialTargets[0]; else return potentialTargets;
}

// Returns the target of the leader
function findLeaderTarget() {
    if (!character.party) return;
    let target = get_target_of(get_player(character.party));
    if (!target) return;
    if (parent.party_list.length) {
        for (let id in parent.party_list) {
            let member = parent.party_list[id];
            if (member === target.name) return;
        }
    }
    //Handle monsters
    if (target && is_monster(target)) return target;
    if (target && is_character(target) && checkIfHostile(target) && !target.rip) return target;
}

// Find possible targets to pull with your main target
function findAdds(attack = 0.07) {
    let adds = Object.values(parent.entities).filter(mob => mob.type === "monster" && G.monsters[mob.mtype] && !mob.target && mob.xp > 0 && mob.attack < character.hp * attack
        && !G.monsters[mob.mtype].dreturn && !G.monsters[mob.mtype].rage && !G.monsters[mob.mtype].stationary && (!G.monsters[mob.mtype].evasion || G.monsters[mob.mtype].evasion <= 80)
        && parent.distance(character, mob) <= 175);
    //Order monsters by distance.
    return sortEntitiesByDistance(adds).sort((a, b) => (b.xp - parent.distance(character, b)) - (a.xp - parent.distance(character, a)));
}