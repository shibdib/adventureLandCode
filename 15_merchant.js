game_log("---Merchant Script Start---");
load_code(2);
let lastBankCheck, bankDetails, potionsNeeded, state;
let spendingAmount = 1000000;
let getItems = [];
let sellItems = [];

//State Controller
setInterval(function () {
    state = merchantStateController(state);
}, 5000);

//Primary Loop
setInterval(function () {
    if (character.rip) {
        primary = undefined;
        currentTarget = undefined;
        state = 99;
    }
    if (!state) return;
    if (!merchantStateTasks(state)) sell();
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
        resupply_potions(100);
        return true;
    }
    if (state === 2) { // Deposits
        depositGold();
        depositItems();
        return true;
    }
    if (state === 9) { // MERCHANT SALES
        sell();
        return false;
    }
    if (state === 11) { // ACCOUNTING
        bankDetails = accounting();
        if (bankDetails) {
            lastBankCheck = Date.now();
            return false;
        }
        return true;
    }
}

// State controller
function merchantStateController(state) {
    if (bankDetails) {
        if (num_items('mpot1') < 200 || num_items('hpot1') < 200) potionsNeeded = true; else potionsNeeded = undefined;
        if (bankDetails['gold'] < spendingAmount) spendingAmount = bankDetails['gold'];
    }
    let new_state = 9;
    //KIA
    if (character.rip) {
        new_state = 99;
    } //ACCOUNTING
    else if (!lastBankCheck || lastBankCheck + 900000 < Date.now()) {
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
//UPGRADING and COMBINING
function combineItems() {

}

//ACTIVE SELLING
function sell() {
    if (distanceToPoint(69, 12) && distanceToPoint(69, 12) < 15) placeStand(); else if (character.map === 'bank') return shibMove('main'); else return shibMove(69, 12);
    sellExcessToNPC();
}

function placeStand() {
    let slot = checkInventoryForItem('stand0');
    parent.socket.emit("merchant", { num: slot });
}

function closeStand() {
    parent.socket.emit("merchant", {close:1});
}

function sellExcessToNPC() {
    // Set bank items for sale if overstocked
    for (let key of Object.keys(bankDetails)) {
        if (G.items[key] && bankDetails[key] > 6) {
            getItems.push(key);
        }
    }
    if (sellItems.length) {
        for (let item of sellItems) {
            if (checkInventoryForItem(item)) {
                sell(checkInventoryForItem(item), 1);
            }
        }
    } else if (getItems.length) {
        if (withdrawItem(getItems[0])) getItems.shift();
    }
}

function sellItemsToPlayers() {
    let merchants = Object.values(parent.entities).filter(mob => mob.ctype === "merchant" && mob.name !== character.name);
    for(let buyers of merchants) {
        let prefix = "trade";
            for(let s=1;s<=16;s++) {
                let slot = buyers.slots[prefix + s];
                if (slot !== null && slot.b && (bankDetails[slot.name] || checkInventoryForItem(slot.name))) {
                    if (slot.price >= G.items[slot.name].g * 0.7) {
                        if (checkInventoryForItem(slot.name)) {
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