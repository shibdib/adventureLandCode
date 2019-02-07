game_log("---Merchant Script Start---");
load_code(2);
let lastBankCheck, potionsNeeded, state, theBook, currentCombination, currentUpgrade, needsBookKeeping;
let spendingAmount = 1000000;
let getItems = [];
let sellItems = [];
let buyItems = [];

//State Controller
setInterval(function () {
    state = merchantStateController(state);
}, 150);

//Primary Loop
setInterval(function () {
    if (character.rip) state = 99;
    if (!state) return;
    if (!merchantStateTasks(state)) merch();
}, 100);

//State tasks
function merchantStateTasks(state) {
    if (state !== 9) closeStand();
    if (state === 99) {
        respawn();
        return true;
    } // DEAD
    if (state === 12) { // WALLET REFILL
        withdrawGold(spendingAmount - character.gold);
        return true;
    }
    if (state === 8) { // POTION RESTOCK
        restockPotions(200);
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
        theBook = bookKeeping();
        if (theBook) {
            lastBankCheck = Date.now();
            return;
        } else {
            return true;
        }
    }
}

// State controller
function merchantStateController(state) {
    if (theBook) {
        if (itemCount('mpot1') < 200 || itemCount('hpot1') < 200) potionsNeeded = true; else potionsNeeded = undefined;
        if (theBook['gold'] < spendingAmount) spendingAmount = theBook['gold'];
    }
    let new_state = 9;
    //KIA
    if (character.rip) {
        new_state = 99;
    } //ACCOUNTING
    else if (!theBook || !lastBankCheck || lastBankCheck + 900000 < Date.now()) {
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

//ACTIVE SELLING
function merch() {
    if (needsBookKeeping) return bookKeeping();
    if (!getItems.length && !currentCombination) if (character.map === 'bank') return shibMove('main'); else if (!distanceToPoint(69, 12) || distanceToPoint(69, 12) > 15) return shibMove(69, 12); else placeStand();
    if ((!currentCombination && !lastAttemptedCrafting) || (lastAttemptedCrafting && lastAttemptedCrafting + 25000 < Date.now())) {
        combineItems();
    } else if (buyItems.length) {
        buyFromList();
    } else {
        sellExcessToNPC();
    }
}

//UPGRADING and COMBINING
let lastAttemptedCrafting;
function combineItems() {
    closeStand();
    if (!currentCombination && !currentUpgrade) {
        for (let item of combineTargets) {
            if (theBook[item] >= 3) {
                currentCombination = item;
                lastAttemptedCrafting = undefined;
                break;
            } else {
                if (!buyItems.includes(item)) buyItems.push(item);
            }
        }
        lastAttemptedCrafting = Date.now();
    } else {
        if (itemCount(currentCombination) >= 3) {
            if (itemCount('cscroll0')) {
                let scroll = getInventorySlot('cscroll0');
                let components = getInventorySlot(currentCombination, true);
                compound(components[0],components[1],components[2],scroll);
                needsBookKeeping = true;
                currentCombination = undefined;
            } else {
                buyScroll('cscroll0');
            }
        } else {
            withdrawItem(currentCombination, 0);
        }
    }
    if (!currentUpgrade) {
        for (let item of upgradeTargets) {
            if (theBook[item]) {
                currentUpgrade = item;
                lastAttemptedCrafting = undefined;
                break;
            } else {
                if (!buyItems.includes(item)) buyItems.push(item);
            }
        }
        lastAttemptedCrafting = Date.now();
    } else {
        if (itemCount(currentUpgrade)) {
            if (itemCount('scroll0')) {
                let scroll = getInventorySlot('scroll0');
                let component = getInventorySlot(currentUpgrade);
                upgrade(component,scroll);
                needsBookKeeping = true;
                currentUpgrade = undefined;
            } else {
                buyScroll('scroll0');
            }
        } else {
            withdrawItem(currentUpgrade, 0);
        }
    }
}

// Buy items for crafting

// Sell overflow
function sellExcessToNPC() {
    if (!theBook) return;
    // Set bank items for sale if overstocked
    if (getItems.length) {
        closeStand();
        switch(withdrawItem(getItems[0])) {
            case true:
                sellItems.push(getItems[0]);
                getItems.shift();
                break;
            case false:
                break;
            case null:
                getItems.shift();
                break;
        }
    } else if (sellItems.length) {
        let key = getInventorySlot(sellItems[0]);
        if (key) sell(getInventorySlot(sellItems[0]), 1);
        sellItems.shift();
    } else {
        for (let key of Object.keys(theBook)) {
            if (G.items[key] && theBook[key] > 8 && G.items[key].type !== 'quest' && G.items[key].type !== 'gem') {
                if (!getItems.includes(key) && !sellItems.includes(key)) getItems.push(key);
            }
        }
    }
}

function sellItemsToPlayers() {
    let merchants = Object.values(parent.entities).filter(mob => mob.ctype === "merchant" && mob.name !== character.name);
    for (let buyers of merchants) {
        let prefix = "trade";
        for (let s = 1; s <= 16; s++) {
            let slot = buyers.slots[prefix + s];
            if (slot !== null && slot.b && (theBook[slot.name] || getInventorySlot(slot.name))) {
                if (slot.price >= G.items[slot.name].g * 0.7) {
                    if (getInventorySlot(slot.name)) {
                        game_log("Item Bought: " + tradeSlot.name);
                        game_log("From: " + current.name);
                        game_log("Price: " + tradeSlot.price);
                        trade(current, slotPrefix + s);
                    }
                }
            }
        }
    }
}

//Get bank information
function bookKeeping() {
    let bankDetails = {};
    if (character.map !== 'bank') {
        closeStand();
        shibMove('bank');
    } else {
        depositItems();
        for (let key in Object.values(character.user)) {
            let slot = Object.values(character.user)[key];
            if (!slot || !slot.length) continue;
            for (let packKey in slot) {
                let banker = slot[packKey];
                if (!banker) continue;
                let level = item_properties(banker).level;
                if (!level) level = '';
                let quantity = banker.q || 1;
                if (bankDetails[banker.name + level]) {
                    bankDetails[banker.name + level] += quantity;
                } else {
                    bankDetails[banker.name + level] = quantity;
                }
            }
        }
        bankDetails['gold'] = character.user['gold'];
        needsBookKeeping = undefined;
        return bankDetails;
    }
}