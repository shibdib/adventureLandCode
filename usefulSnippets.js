//
// Some random maybe useful scripts
//

//BANKING
//Drop off gold
function depositGold(amount) {
    if (character.map !== 'bank') {
        smart_move('bank');
        return false;
    } else {
        bank_deposit(amount);
    }
}
//Pick Up Gold (If amount is more than you have it takes what you have)
function withdrawGold(amount) {
    if (character.map !== 'bank') {
        smart_move('bank');
        return false;
    } else {
        if (amount > character.user['gold']) amount = character.user['gold'];
        bank_withdraw(amount);
    }
}

//ENTITIES
// Get all characters within range (Set 9999 to get all)
function getNearbyCharacters(range = 200) {
    let characters = Object.values(parent.entities).filter(mob => parent.distance(character, mob) <= range && is_character(mob));
    if (characters.length) return characters; else return [];
}
// Find in view range monsters base off type ('goo')
function findNearbyMonsters(type) {
    let monsters;
    // Look for targets in range
    monsters = Object.values(parent.entities).filter(mob => mob.mtype === type);
    if (!monsters.length) return false;
    return monsters;
}
// Return all monsters targeting you
function getMonstersTargetingMe() {
    return Object.values(parent.entities).filter(mob => mob.type === "monster" && mob.target === character.name);
}
// Check if entity has a buff
function checkEntityForBuff(entity, buff) {
    if (!entity.s) return false;
    return Object.keys(entity.s).includes(buff);
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
// Sort array of entities by base xp
function sortEntitiesByXp(array) {
    array.sort(function (current, next) {
        let xp_current = G.monsters[current].xp;
        let xp_next = G.monsters[next].xp;
        if (xp_current < xp_next) return -1; else if (xp_current > xp_next) return 1; else return 0;
    });
    return array;
}

//PARTY STUFF
// Whisper the party, if not in party use say
function whisperParty(message) {
    if (parent.party_list.length > 0) {
        say('/p ' + message);
    } else {
        say(message);
    }
}

//MISC
// Shuffle array
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}