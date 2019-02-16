//Improved can_use runner
function can_use(name, target = undefined) {
    if (G.skills[name] && G.skills[name].class && !in_arr(character.ctype,G.skills[name].class)) return false; // checks the class
    if (G.skills[name] && G.skills[name].level && character.level < G.skills[name].level) return false; // checks the level
    if (G.skills[name] && G.skills[name].mp && character.mp < G.skills[name].mp) return false; // checks mp
    if (G.skills[name] && G.skills[name].wtype && !checkForWeaponType(G.skills[name].wtype)) return false; // checks for weapon
    if (G.skills[name] && G.skills[name].consume && !getInventorySlot(G.skills[name].consume)) return false; // checks for consumable
    if (target && G.skills[name] && G.skills[name].range && parent.distance(character, target) > G.skills[name].range) return false; // checks for range
    if (target && G.skills[name] && checkEntityForBuff(target, name)) return false; // checks if this is already applied
    if (!target && G.skills[name] && checkEntityForBuff(character, name)) return false; // checks if this is already applied to yourself
    return parent.can_use(name);  // checks the cooldown
}

// Handle CM cases
function on_cm(name,data) {
    // Ignore CM's from yourself
    if (name === character.name) return;
    // Merchant Stuff
    if (data.type === 'potionRequest' && character.ctype === 'merchant') {
        let slot = getInventorySlot(data['potion']);
        if (slot) send_item(parent.entities[name], slot, data['amount']);
        pm(name, data['amount'] + ' ' + data['potion'] + ' sent.')
    }
    // Party CM Standard
    if (data.type === 'combatLocation') {
        if (!parent.combatLocation) parent.combatLocation = {};
        parent.combatLocation[name] = data;
    }
    // Map changes
    if (data.type === 'mapChange') {
        stop('move');
        if (character.map !== data.map) return shibMove(map);
    }
    // Map changes
    if (data.type === 'requestMap') {
        localStorage.setItem('leaderMap', character.map);
    }
    //game_log("Received a code message from: "+name);
    //game_log(JSON.stringify(data));
}

// Send CM to party
function sendPartyCM(data) {
    if (parent.party_list.length > 0) {
        for (let key in parent.party_list) {
            let member = parent.party_list[key];
            send_cm(member, data);
        }
    }
}

function registerHandler(event, handler) {
    parent.socket.on(event, handler);
}

// Fix party runners
function on_party_request(name) {
    accept_party_request(name);
}

// Fix party runners
function on_party_invite(name) {
    accept_party_invite(name);
}

// Character DPS
function getCharacterDPS(userCharacter = character) {
    if (G.classes[userCharacter.ctype].damage_type === 'physical') {
        return userCharacter.attack * userCharacter.frequency * damage_multiplier(-userCharacter.apiercing || 0) * 0.95;
    } else if (G.classes[userCharacter.ctype].damage_type === 'magical') {
        return userCharacter.attack * userCharacter.frequency * damage_multiplier(-userCharacter.rpiercing || 0) * 0.95;
    }
}

// Get monster DPS from entity or mtype, mitigate damage type
function getMonsterDPS(input, mitigate = false) {
    // Handle entity
    if (input.level) {
        if (!mitigate) {
            if (G.monsters[input.mtype].damage_type === 'physical') {
                return ((input.attack * G.monsters[input.mtype].frequency * damage_multiplier(-G.monsters[input.mtype].apiercing || 0)) + ((G.monsters[input.mtype].reflection || 0) * getCharacterDPS())) * 1.1;
            } else if (G.monsters[input.mtype].damage_type === 'magical') {
                return ((input.attack * G.monsters[input.mtype].frequency * damage_multiplier(-G.monsters[input.mtype].rpiercing || 0)) + ((G.monsters[input.mtype].reflection || 0) * getCharacterDPS())) * 1.1;
            }
        } else {
            if (G.monsters[input.mtype].damage_type === 'physical') {
                return input.attack * G.monsters[input.mtype].frequency * damage_multiplier(character.armor - (G.monsters[input.mtype].apiercing || 0) + ((G.monsters[input.mtype].reflection || 0) * getCharacterDPS())) * 1.1;
            } else if (G.monsters[input.mtype].damage_type === 'magical') {
                return input.attack * G.monsters[input.mtype].frequency * damage_multiplier(character.resistance - (G.monsters[input.mtype].rpiercing || 0) + ((G.monsters[input.mtype].reflection || 0) * getCharacterDPS())) * 1.1;
            }
        }
    } // Handle mtype
    else if (G.monsters[input]) {
        let level = 12;
        if (!mitigate) {
            if (G.monsters[input].damage_type === 'physical') {
                return (((G.monsters[input].attack + (level * (G.monsters[input].attack * 0.2))) * G.monsters[input].frequency * damage_multiplier(-G.monsters[input].apiercing || 0)) + ((G.monsters[input].reflection || 0) * getCharacterDPS())) * 1.1;
            } else if (G.monsters[input].damage_type === 'magical') {
                return (((G.monsters[input].attack + (level * (G.monsters[input].attack * 0.2))) * G.monsters[input].frequency * damage_multiplier(-G.monsters[input].rpiercing || 0)) + ((G.monsters[input].reflection || 0) * getCharacterDPS())) * 1.1;
            }
        } else {
            if (G.monsters[input].damage_type === 'physical') {
                let remainingPiercing = character.armor - (G.monsters[input].apiercing || 0);
                return ((G.monsters[input].attack + (level * (G.monsters[input].attack * 0.2))) * G.monsters[input].frequency * damage_multiplier(remainingPiercing) + ((G.monsters[input].reflection || 0) * getCharacterDPS())) * 1.1;
            } else if (G.monsters[input].damage_type === 'magical') {
                let remainingPiercing = character.resistance - (G.monsters[input].rpiercing || 0);
                return ((G.monsters[input].attack + (level * (G.monsters[input].attack * 0.2))) * G.monsters[input].frequency * damage_multiplier(remainingPiercing) + ((G.monsters[input].reflection || 0) * getCharacterDPS())) * 1.1;
            }
        }
    }
}

// Get defense rating
function getDefenseRating(input) {
    (damage_multiplier(armor) + Evasion + damage_multiplier(resistance) + Reflection )/ 2
    // Handle entity
    if (input.level) {
        if (!mitigate) return input.attack * G.monsters[input.mtype].frequency * damage_multiplier(-G.monsters[input.mtype].rpiercing || 0) * 0.95;

    } // Handle mtype
    else if (G.monsters[input]) {
        if (!mitigate) return G.monsters[input].attack * G.monsters[input].frequency * damage_multiplier(-G.monsters[input].rpiercing || 0) * 0.95;

    }
}

// Get party heal power
function partyHPS() {
    let power = 10;
    if (!character.party) return power;
    //Add priest heals
    for (let key in parent.party_list) {
        let member = parent.party_list[key];
        let entity = getCharacterData()[member] || parent.entities[member];
        if (!entity || entity.ctype !== 'priest') continue;
        power += entity.attack * entity.frequency * damage_multiplier(-entity.rpiercing || 0) * 0.925;
    }
    return power * 0.9;
}

// Get party attack power
function partyDPS() {
    let power = 0;
    if (!character.party) return 0;
    for (let key in parent.party_list) {
        let member = parent.party_list[key];
        let entity = getCharacterData()[member] || parent.entities[member];
        if (!entity || entity.ctype === 'merchant') continue;
        if (entity.ctype === 'priest' || entity.ctype === 'mage') {
            power += entity.attack * entity.frequency * damage_multiplier(-entity.rpiercing || 0) * 0.925;
        } else {
            power += entity.attack * entity.frequency * damage_multiplier(-entity.apiercing || 0) * 0.925;
        }
    }
    return power;
}

// Check if entity has a buff
function checkEntityForBuff(entity, buff) {
    let s = false;
    if (entity.s) s = Object.keys(entity.s).includes(buff);
    let overall = Object.keys(entity).includes(buff);
    return s || overall;
}

// Get all characters within range
function getNearbyCharacters(range = 200, filterParty = false) {
    let characters = Object.values(parent.entities).filter(mob => parent.distance(character, mob) <= range && is_character(mob) && !mob.rip);
    if (filterParty) characters = Object.values(parent.entities).filter(mob => parent.distance(character, mob) <= range && is_character(mob) && !parent.party_list.includes(mob.name));
    if (characters.length) return characters; else return [];
}

// Get random int between 2
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Check if something is between a range
function between(x, min, max) {
    return x >= min && x <= max;
}

// Get distance to point
// TODO: is this needed with parent.distance??
function distanceToPoint(x, y) {
    return Math.sqrt(Math.pow(character.real_x - x, 2) + Math.pow(character.real_y - y, 2));
}

// Get distance to entity
// TODO: is this needed with parent.distance??
function distanceToEntity(target) {
    return Math.sqrt(Math.pow(character.real_x - target.real_x, 2) + Math.pow(character.real_y - target.real_y, 2));
}

// Distance between 2 points
function distanceBetweenPoints(x, y, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x, 2) + Math.pow(y2 - y, 2));
}

// Shuffle array
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// Sort array of entities by distance
function sortEntitiesByDistance(array) {
    array.sort(function (current, next) {
        let dist_current = parent.distance(character, current);
        let dist_next = parent.distance(character, next);
        if (dist_current < dist_next) return -1; else if (dist_current > dist_next) return 1; else return 0;
    });
    return array;
}

// Sort array of coord by distance
function sortCoordsByDistance(array) {
    array.sort(function (current, next) {
        let dist_current = distanceBetweenPoints(character.real_x, character.real_y, current.x, current.y);
        let dist_next = distanceBetweenPoints(character.real_x, character.real_y, next.x, next.y);
        if (dist_current < dist_next) return -1; else if (dist_current > dist_next) return 1; else return 0;
    });
    return array;
}

// Sort array of entities by xp
function sortEntitiesByXp(array) {
    array.sort(function (current, next) {
        let xp_current = G.monsters[current].xp;
        let xp_next = G.monsters[next].xp;
        if (xp_current < xp_next) return -1; else if (xp_current > xp_next) return 1; else return 0;
    });
    return array;
}

//Returns the number of items in your inventory for a given item name;
function itemCount(name, level = 0) {
    let count = character.items.filter(item => item != null && item.name === name && item_properties(item).level === level).reduce(function (a, b) {
        return a + (b["q"] || 1);
    }, 0);
    return count;
}

//Returns how many inventory slots have not yet been filled.
function openInventorySpots() {
    return character.esize;
}

// Check inventory for at risk items
function vulnerableItemsCheck() {
    let count = 0;
    for (let key in character.items) {
        let item = character.items[key];
        if (!item || item === null || classInventory[character.ctype].includes(item.name)) continue;
        if (item.v) count++;
        if (item_grade(item) && item.v) count = 99;
    }
    return count;
}

//Gets an NPC by name from the current map.
function getNpc(name) {
    let npc = parent.G.maps[character.map].npcs.filter(npc => npc.id === name);
    if (npc.length > 0) {
        return npc[0];
    }
    return null;
}

function placeStand() {
    if (is_moving(character)) return;
    let slot = getInventorySlot('stand0');
    parent.socket.emit("merchant", {num: slot});
}

function closeStand() {
    parent.socket.emit("merchant", {close: 1});
}

function isPvP() {
    return !!(parent.is_pvp || get_map().pvp);
}