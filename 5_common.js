// State controller
let lastBankGearCheck, new_state, deathCooldown;
let deathTracker = 0;
let deathTime = {};

function stateController(state) {
    if (!state) state = 10;
    //KIA
    if (isPvP()) grieferTracking();
    if (character.rip) {
        if (state !== 99) {
            deathTime[character.name] = Date.now();
            if (isPvP()) deathTracker++;
            whisperParty('I died');
        }
        new_state = 99;
    } //BANKING
    else if (state !== 4 && (character.gold >= 100000 || openInventorySpots() <= 15 || vulnerableItemsCheck() >= 5)) {
        if (state !== 2) whisperParty('Headed to the bank to drop off some loot, BRB.');
        new_state = 2;
    } //GEAR (Chance this is skipped on startup)
    else if ((!isPvP() && !lastBankGearCheck) || lastBankGearCheck + (60000 * 30) < Date.now()) {
        if (state !== 4) whisperParty('Headed to the bank to gear up.');
        new_state = 4;
    } //POTIONS
    else if (potionCheck()) {
        if (state !== 3) whisperParty('Hey I Need To Go Get More Potions ASAP!!!');
        new_state = 3;
    } else {
        new_state = 1;
    }
    //If state changed set it and announce
    if (state !== new_state) {
        if (!lastBankGearCheck && new_state !== 4) lastBankGearCheck = Date.now();
        if (character.ctype === 'rogue') stop('invis');
        game_log("--- NEW STATE " + states[new_state] + " ---");
        state = new_state;
        set_message(states[state]);
        stop();
    }
    // return state
    return state;
}

//State tasks
function stateTasks(state) {
    let combat;
    if (character.ctype === 'priest' || character.ctype === 'warrior') combat = checkPartyAggro(); else combat = getEntitiesTargeting().length > 0;
    if (state === 99) {
        let tod = deathTime[character.name];
        if (isPvP() && !deathCooldown) deathCooldown = getRndInteger(15000, 35000); else deathCooldown = 15000;
        if (tod + deathCooldown < Date.now() || Math.random() > 0.9) respawn();
        return true;
    } // DEAD
    if (state === 2) { // GOLD RICH
        depositGold();
        depositItems();
        return true;
    }
    if (state === 3) { // POTION PICKUP
        getPotions();
        return true;
    }
    if (state === 4) { // GEAR
        if (gearIssue()) lastBankGearCheck = Date.now();
        return true;
    }
}

//Potion Use
function potionController(priest = false) {
    if (!priest) {
        if (can_use('use_hp') && character.hp < character.max_hp * 0.25) {
            use('use_hp');
        } else if (can_use('use_mp') && character.mp < character.max_mp * 0.45) {
            use('use_mp');
        } else if (can_use('use_hp') && character.hp < character.max_hp * 0.45) {
            use('use_hp');
        }
    } else {
        if (character.hp < character.max_hp * 0.25) {
            if (can_use('use_hp')) use('use_hp');
            heal(character);
        } else if (can_use('use_mp') && character.mp < character.max_mp * 0.6) {
            use('use_mp');
        } else if (character.hp < character.max_hp * 0.75) {
            heal(character);
        } else if (character.hp < character.max_hp * 0.45) {
            if (can_use('use_hp')) use('use_hp');
            heal(character);
        }
    }
}

//Potion Check
function potionCheck() {
    let needPots;
    for (let type_id in buyThesePotions) {
        let type = buyThesePotions[type_id];
        let item_def = parent.G.items[type];
        if (item_def != null) {
            if (itemCount(type) < targetPotionAmount * 0.1) {
                needPots = true;
            }
        }
    }
    if (needPots) return true;
}

//PVP Death tracking
function grieferTracking() {
    if (deathTracker >= 3) {
        realmSwap(pvp = false);
    }
}
//Realm switching
function realmSwap(pvp = false) {
    let serverRegions = ['EU', 'US'];
    let names = ['I', 'II'];
    let pvpNames = ['PVP'];
    if (pvp) names = names.concat(pvpNames);
    change_server(random_one(serverRegions), random_one(names));
}