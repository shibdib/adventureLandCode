// State controller
let lastBankGearCheck, new_state, deathCooldown;
let deathTracker = 0;
let deathTime = {};

function stateController(state = 1) {
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
    else if ((character.gold >= 100000 || openInventorySpots() <= 15 || vulnerableItemsCheck() >= 5)) {
        if (state !== 2) whisperParty('Headed to the bank to drop off some loot, BRB.');
        new_state = 2;
    } //GEAR (Chance this is skipped on startup)
    else if ((countEmptyGear() >= 15 || !lastBankGearCheck || lastBankGearCheck + (60000 * 30) < Date.now())) {
        if (state !== 4 && !lastBankGearCheck && Math.random() > 0.2) {
            lastBankGearCheck = Date.now();
            new_state = 1;
        } else {
            if (state !== 4) whisperParty('Headed to the bank to gear up.');
            new_state = 4;
        }
    } //POTIONS
    else if (potionCheck()) {
        if (state !== 3) whisperParty('Hey I Need To Go Get More Potions ASAP!!!');
        new_state = 3;
    } else {
        new_state = 1;
    }
    //If state changed set it and announce
    if (state !== new_state) {
        // Handle BIS
        equipBIS();
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
    if (state === 1 || combat) return false; // FARM
    if (state === 2) { // GOLD RICH
        if (depositGold() && depositItems()) stateController(1);
        return true;
    }
    if (state === 3) { // POTION PICKUP
        getPotions();
        return true;
    }
    if (state === 4) { // GEAR
        if (gearIssue()) {
            lastBankGearCheck = Date.now();
        }
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

////MERCHANT TASK

//State tasks
function merchantStateTasks(state) {
    if (state !== 9) closeStand();
    if (state === 99) {
        let tod = deathTime[character.name];
        if (isPvP() && !deathCooldown) deathCooldown = getRndInteger(15000, 35000); else deathCooldown = 15000;
        if (tod + deathCooldown < Date.now() || Math.random() > 0.9) respawn();
        return true;
    } // DEAD
    if (state === 12) { // WALLET REFILL
        withdrawGold(spendingAmount - character.gold);
        return true;
    }
    if (state === 8) { // POTION RESTOCK
        restockPotions(targetPotionAmount * 4);
        return true;
    }
    if (state === 2) { // Deposits
        depositGold();
        depositItems();
        return true;
    }
    if (state === 9) { // MERCHANT SALES
        sell();
        return;
    }
    if (state === 11) { // ACCOUNTING
        bookKeeping();
        if (localStorage.getItem('bankDetails') && lastBankCheck) {
            lastBankCheck = Date.now();
        } else {
            return true;
        }
    }
}

// State controller
function merchantStateController(state) {
    let bankDetails = JSON.parse(localStorage.getItem('bankDetails'));
    if (itemCount('mpot1') < targetPotionAmount * 2 || itemCount('hpot1') < targetPotionAmount * 2) potionsNeeded = true; else potionsNeeded = undefined;
    if (bankDetails) {
        if (bankDetails['gold'] < spendingAmount) spendingAmount = bankDetails['gold'];
    }
    let new_state = 9;
    //KIA
    if (character.rip) {
        if (state !== 99) {
            deathTime[character.name] = Date.now();
            if (isPvP()) deathTracker++;
            whisperParty('I died');
        }
        new_state = 99;
    } //ACCOUNTING
    else if (!bankDetails || !lastBankCheck || lastBankCheck + 900000 < Date.now()) {
        new_state = 11;
    } //NO POORS
    else if (character.gold < spendingAmount * 0.25) {
        new_state = 12;
    } // Deposits
    else if (character.gold >= spendingAmount * 2) {
        new_state = 2;
    }   //POTION RESTOCK
    else if (potionsNeeded) {
        new_state = 8;
    }
    //If state changed set it and announce
    if (state !== new_state) {
        game_log("--- NEW STATE " + states[new_state] + " ---");
        state = new_state;
    }
    return state;
}