game_log("---Merchant Script Start---");
load_code(2);
let lastBankCheck, potionsNeeded, state, lastAttemptedCrafting, lastAttemptedExchange, currentItem,
    currentTask, craftingLevel, exchangeTarget, exchangeNpc, exchangeAmount, playerSale, saleCooldown, lastRestock,
    buyCooldown;
let spendingAmount = 10000000;
let getItems = [];
let sellItems = [];

//State Controller
setInterval(function () {
    state = merchantStateController(state);
}, 1500);

//Primary Loop
setInterval(function () {
    // Update your data
    updateCharacterData();
    if (character.rip) state = 99;
    if (!state) return;
    if (!merchantStateTasks(state)) merchantTaskManager();
}, 1000);

//MERCHANT TASKS
function merchantTaskManager() {
    if (standCheck()) return;
    if (exchangeTarget || !lastAttemptedExchange || lastAttemptedExchange + 25000 < Date.now()) {
        exchangeStuff();
    } else if (currentItem || !lastAttemptedCrafting || lastAttemptedCrafting + (60000 * 5) < Date.now()) {
        combineItems();
    } else {
        if (!getItems.length && !currentItem && !exchangeTarget && !currentTask) if (character.map === 'bank') return shibMove('main'); else if (!distanceToPoint(69, 12) || distanceToPoint(69, 12) > 15) return shibMove(69, 12);
        if (!sellItemsToPlayers() && !buyFromPlayers()) if (!sellExcessToNPC()) {
            placeStand();
            buyBaseItems();
        }
    }
}

// NPC STUFF
// Exchange Items
function exchangeStuff() {
    let bankDetails = JSON.parse(localStorage.getItem('bankDetails'));
    if (!bankDetails) return;
    if (!exchangeTarget) {
        for (let item of exchangeItems) {
            let minimum = 1;
            if (item.amount) minimum = item.amount;
            if (bankDetails[item.item + 0] >= minimum) {
                exchangeTarget = item.item;
                exchangeNpc = item.npc;
                exchangeAmount = item.amount;
                lastAttemptedExchange = undefined;
                return;
            }
        }
        lastAttemptedExchange = Date.now();
    } else {
        closeStand();
        set_message('Exchanging');
        if (!exchangeAmount) exchangeAmount = 1;
        if (itemCount(exchangeTarget) >= exchangeAmount) {
            exchangeItem(exchangeTarget, exchangeNpc);
        } else if (bankDetails[exchangeTarget + 0] >= exchangeAmount) {
            let withdraw = withdrawItem(exchangeTarget);
            if (withdraw === null) {
                exchangeTarget = undefined;
                exchangeNpc = undefined;
                lastBankCheck = undefined;
                lastAttemptedExchange = Date.now();
            } else if (withdraw) {
                if (bankDetails[exchangeTarget] - 1 === 0) {
                    bankDetails[exchangeTarget] = undefined;
                } else {
                    bankDetails[exchangeTarget] -= 1;
                }
                localStorage.setItem('bankDetails', JSON.stringify(bankDetails));
            }
        } else {
            lastBankCheck = undefined;
            exchangeTarget = undefined;
            exchangeNpc = undefined;
            lastAttemptedExchange = Date.now();
        }
    }
}

// Buy items for crafting
function buyBaseItems() {
    if (lastRestock + 90000 > Date.now()) return;
    let bankDetails = JSON.parse(localStorage.getItem('bankDetails'));
    let baseItems = ['bow', 'helmet', 'shoes', 'gloves', 'pants', 'coat', 'blade', 'claw', 'staff', 'wshield'];
    items:
    for (let item of baseItems) {
        let need = true;
        for (let l = 0; l < combineUpgradeTarget - 1; l++) {
            if (l === 0) l = 0;
            if (itemCount(item + l) >= 2 || bankDetails[item + l] >= 2) {
                need = false;
                continue items;
            }
        }
        set_message('Restocking');
        if (need) buy(item, 1);
    }
    lastRestock = Date.now();
}

// Sell overflow
function sellExcessToNPC() {
    let bankDetails = JSON.parse(localStorage.getItem('bankDetails'));
    if (!bankDetails) return;
    // Set bank items for sale if overstocked
    if (getItems.length) {
        closeStand();
        switch (withdrawItem(getItems[0])) {
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
        set_message('SellingNPC');
        let key = getInventorySlot(sellItems[0]);
        if (key) sell(getInventorySlot(sellItems[0]), 1);
        sellItems.shift();
    } else {
        for (let key of Object.keys(bankDetails)) {
            if (G.items[key] && bankDetails[key] > 7 && G.items[key].type !== 'quest' && G.items[key].type !== 'gem' && G.items[key].type !== 'uscroll' && !noSell.includes(key)) {
                if (!getItems.includes(key) && !sellItems.includes(key)) getItems.push(key);
            }
        }
        if (!getItems.length) return false;
    }
}

// PLAYER TRADING
// Sell to player buy orders that are better than 60% (the npc markdown)
function sellItemsToPlayers() {
    let bankDetails = JSON.parse(localStorage.getItem('bankDetails'));
    if (currentTask === 'getItem' && !getInventorySlot(playerSale.item, false, playerSale.level)) withdrawItem(playerSale.item, playerSale.level);
    if (character.map === 'bank') return shibMove('main');
    let merchants = Object.values(parent.entities).filter(mob => mob.ctype === "merchant" && mob.name !== character.name && mob.stand);
    if (saleCooldown + 2500 > Date.now()) return false;
    for (let buyers of merchants) {
        for (let s = 1; s <= 16; s++) {
            let slot = buyers.slots['trade' + s];
            let theBookName;
            if (slot && slot.b) {
                if (G.items[slot.name].g && slot.price < G.items[slot.name].g * 0.6) continue;
                if (noSell.includes(slot.name)) continue;
                theBookName = slot.name + slot.level;
                if (!bankDetails[theBookName] && !getInventorySlot(slot.name, false, slot.level)) continue;
                if (combineTargets.includes(slot.name) && (bankDetails[theBookName] || 0 + getInventorySlot(slot.name, true, slot.level).length) < 4) continue;
                if (upgradeTargets.includes(slot.name) && (bankDetails[theBookName] || 0 + getInventorySlot(slot.name, true, slot.level).length) < 2) continue;
                set_message('SellingPlayer');
                if (getInventorySlot(slot.name, false, slot.level)) {
                    currentTask = undefined;
                    playerSale = undefined;
                    lastBankCheck = undefined;
                    saleCooldown = Date.now();
                    game_log("Item Sold: " + slot.name);
                    game_log("To: " + buyers.name);
                    game_log("Price: " + slot.price);
                    pm(buyers.name, 'Enjoy the ' + slot.name + ' ~This is an automated message~');
                    parent.socket.emit("trade_sell", {slot: 'trade' + s, id: buyers.id, rid: slot.rid, q: 1});
                } else {
                    closeStand();
                    game_log("Grabbing to sell - " + slot.name);
                    playerSale = {item: slot.name, level: slot.level, rid: slot.rid};
                    currentTask = 'getItem';
                    withdrawItem(slot.name, slot.level)
                }
                return true;
            }
        }
    }
    return false;
}

// Sell to player buy orders that are better than 60% (the npc markdown)
function buyFromPlayers() {
    let bankDetails = JSON.parse(localStorage.getItem('bankDetails'));
    if (character.map === 'bank') return shibMove('main');
    let merchants = Object.values(parent.entities).filter(mob => mob.ctype === "merchant" && mob.name !== character.name && mob.stand);
    if (buyCooldown + 2500 > Date.now()) return false;
    for (let buyers of merchants) {
        for (let s = 1; s <= 16; s++) {
            let slot = buyers.slots['trade' + s];
            if (slot && !slot.b) {
                if (G.items[slot.name].g && slot.price > G.items[slot.name].g * 1.2) continue;
                for (let item of buyTargets) {
                    // If we have the item continue
                    if (bankDetails[item.item] >= item.amount || getInventorySlot(item.item)) continue;
                    if (item.item !== slot.name) continue;
                    set_message('BuyingPlayer');
                    lastBankCheck = undefined;
                    buyCooldown = Date.now();
                    game_log("Item Sold: " + slot.name);
                    game_log("To: " + buyers.name);
                    game_log("Price: " + slot.price);
                    pm(buyers.name, 'Thanks for the ' + slot.name + ' ~This is an automated message~');
                    trade_buy(buyers, slot); // target needs to be an actual player
                    return true;
                }
            }
        }
    }
    return false;
}

//UPGRADING and COMBINING
function combineItems() {
    let bankDetails = JSON.parse(localStorage.getItem('bankDetails'));
    if (!currentItem) {
        // Chance we skip this time
        if (Math.random() > 0.85) return lastAttemptedCrafting = Date.now();
        for (let l = 0; l < combineUpgradeTarget; l++) {
            for (let item of combineTargets) {
                let append = l;
                let levelLookup = l;
                if (!l) {
                    append = 0;
                    levelLookup = undefined;
                }
                let stock = 3;
                if (l + 1 === combineUpgradeTarget) stock = 4;
                if (getInventorySlot(item, true, levelLookup).length >= stock || bankDetails[item + append] >= stock) {
                    currentItem = item;
                    currentTask = 'combine';
                    craftingLevel = l;
                    lastAttemptedCrafting = undefined;
                    return;
                }
            }
            for (let item of upgradeTargets) {
                let append = l;
                let levelLookup = l;
                if (!l) {
                    levelLookup = undefined;
                    append = 0;
                }
                let stock = 1;
                if (l + 1 === combineUpgradeTarget) stock = 2;
                if (getInventorySlot(item, true, levelLookup).length >= stock || bankDetails[item + append] >= stock) {
                    currentItem = item;
                    currentTask = 'upgrade';
                    craftingLevel = l;
                    lastAttemptedCrafting = undefined;
                    return;
                }
            }
        }
        lastAttemptedCrafting = Date.now();
    } else {
        closeStand();
        set_message('Crafting');
        let needed = 1;
        if (currentTask === 'combine') needed = 3;
        if (itemCount(currentItem, craftingLevel) >= needed) {
            let scroll;
            let componentSlot = getInventorySlot(currentItem, true, craftingLevel);
            let grade = item_grade(character.items[componentSlot[0]]);
            if (currentTask === 'combine') {
                if (grade === 0) scroll = 'cscroll0'; else if (grade === 1) scroll = 'cscroll1'; else if (grade === 2) scroll = 'cscroll2';
            } else {
                if (grade === 0) scroll = 'scroll0'; else if (grade === 1) scroll = 'scroll1'; else if (grade === 2) scroll = 'scroll2';
            }
            if (itemCount(scroll)) {
                let scrollSlot = getInventorySlot(scroll);
                if (crafting(currentTask, componentSlot, scrollSlot)) {
                    currentItem = undefined;
                    currentTask = undefined;
                    craftingLevel = undefined;
                    lastBankCheck = undefined;
                    lastAttemptedCrafting = undefined;
                }
            } else {
                if (bankDetails[scroll]) {
                    withdrawItem(scroll);
                } else {
                    buyScroll(scroll);
                }
            }
        } else {
            let withdraw = withdrawItem(currentItem, craftingLevel);
            if (withdraw === null) {
                bankDetails[currentItem] = undefined;
                currentItem = undefined;
                currentTask = undefined;
                craftingLevel = undefined;
                lastBankCheck = undefined;
                lastAttemptedCrafting = Date.now();
            } else if (withdraw) {
                let append = 0;
                if (craftingLevel) append = craftingLevel;
                if (bankDetails[currentItem + append] - 1 === 0) {
                    bankDetails[currentItem + append] = undefined;
                } else {
                    bankDetails[currentItem + append] -= 1;
                }
            }
            localStorage.setItem('bankDetails', JSON.stringify(bankDetails));
        }
    }
}

//Crafting
function crafting(task, componentSlot, scrollSlot) {
    if (currentTask === 'combine' || currentTask === 'upgrade') {
        let scrollsMerchant = getNpc("newupgrade");
        let distanceToMerchant = null;
        if (scrollsMerchant != null) distanceToMerchant = distanceToPoint(scrollsMerchant.position[0], scrollsMerchant.position[1]);
        if (!smart.moving && (distanceToMerchant == null || distanceToMerchant > 150 || character.map !== 'main')) return smart_move({to: "upgrade"});
        if (distanceToMerchant != null && distanceToMerchant < 155) {
            if (currentTask === 'combine') compound(componentSlot[0], componentSlot[1], componentSlot[2], scrollSlot); else upgrade(componentSlot[0], scrollSlot);
            return true;
        }
    }
}

//Get bank information
function bookKeeping() {
    set_message('Bookkeeping');
    closeStand();
    let bankDetails = {};
    if (character.map !== 'bank') {
        shibMove('bank');
    } else {
        depositItems();
        for (let key in Object.values(character.user)) {
            let slot = Object.values(character.user)[key];
            if (!slot || !slot.length) continue;
            for (let packKey in slot) {
                let banker = slot[packKey];
                if (!banker) continue;
                if (trashItems.includes(banker.name)) {
                    withdrawItem(banker.name);
                    getInventorySlot(banker.name);
                    //destroy_item();
                    continue;
                }
                let level = item_properties(banker).level;
                if (!level) level = 0;
                let quantity = banker.q || 1;
                if (bankDetails[banker.name + level]) {
                    bankDetails[banker.name + level] += quantity;
                } else {
                    bankDetails[banker.name + level] = quantity;
                }
            }
        }
        bankDetails['gold'] = character.user['gold'];
        lastBankCheck = Date.now();
        localStorage.removeItem('bankDetails');
        localStorage.setItem('bankDetails', JSON.stringify(bankDetails));
        return bankDetails;
    }
}

// Go buy a stand
function standCheck() {
    if (!getInventorySlot('stand0') && !localStorage.getItem('bankDetails')['stand0']) {
        let standsMerchant = getNpc("standmerchant");
        let distanceToMerchant = null;
        if (standsMerchant != null) distanceToMerchant = distanceToPoint(standsMerchant.position[0], standsMerchant.position[1]);
        if (!smart.moving && (distanceToMerchant == null || distanceToMerchant > 150 || character.map !== 'main')) return smart_move({to: "stands"});
        if (distanceToMerchant != null && distanceToMerchant < 155) {
            buy('stand0', 1);
        }
        return true;
    }
}

// Luck loop
setInterval(function () {
    for (let key of Object.keys(parent.entities)) {
        let entity = parent.entities[key];
        if (!entity || !is_character(entity)) continue;
        if (can_use('mluck', entity)) {
            if (Math.random() >= 0.8) say('Pew Pew');
            game_log('LUCKED - ' + key);
            use('mluck', entity);
        }
    }
}, 50);

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