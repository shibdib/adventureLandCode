//BANKING
//Drop off gold
function depositGold(amount = character.gold - 5000) {
    if (character.map !== 'bank') {
        shibMove('bank');
        return false;
    } else {
        bank_deposit(amount);
        return true;
    }
}

//Pick Up Gold
function withdrawGold(amount) {
    if (character.map !== 'bank') {
        shibMove('bank');
        return false;
    } else {
        if (amount > character.user['gold']) amount = character.user['gold'];
        bank_withdraw(amount);
    }
}

//Drop off all items
function depositItems(potions = false) {
    if (character.map !== 'bank') {
        shibMove('bank');
        return false;
    } else {
        for (let key in character.items) {
            let item = character.items[key];
            if (!item || item === null) continue;
            let itemInfo = G.items[item.name];
            if ((character.ctype === 'rogue' || character.ctype === 'hunter') && itemInfo.id === 'poison') continue;
            if (!potions && (itemInfo.id === 'hpot1' || itemInfo.id === 'mpot1')) continue;
            if (itemInfo.type === 'stand') continue;
            bank_store(key);
        }
        return true;
    }
}

//Drop off all items
function depositItem(slot) {
    if (character.map !== 'bank') {
        shibMove('bank');
        return false;
    } else {
        bank_store(slot);
        return true;
    }
}

//Withdraw Item
function withdrawItem(target, level = undefined) {
    if (character.map !== 'bank') {
        shibMove('bank');
        return false;
    } else {
        for (let key in Object.values(character.user)) {
            let slot = Object.values(character.user)[key];
            if (!slot || !slot.length) continue;
            for (let packKey in slot) {
                let item = slot[packKey];
                if (!item || item === null || item.name !== target) continue;
                let iLevel = item_properties(item).level;
                if (level === undefined || iLevel === parseInt(level)) {
                    bankItemWithdraw(packKey, Object.keys(character.user)[key]);
                    return true;
                }
            }
        }
        return null;
    }
}

// No function for withdrawing
function bankItemWithdraw(key, pack) {
    parent.socket.emit("bank",{operation:"swap",str:key,inv:-1,pack:pack});
}

//Get the highest level of a certain item in the bank
function getHighestLevel(itemName) {
    let best, bestLevel;
    for (let key in Object.values(character.user)) {
        let bankTab = Object.values(character.user)[key];
        if (!bankTab || !bankTab.length) continue;
        for (let itemKey in bankTab) {
            let item = bankTab[itemKey];
            if (!item || item.name !== itemName || !G.items[itemName]) continue;
            if (!best || item_properties(item).level > bestLevel) {
                best = item;
                bestLevel = item_properties(item).level;
            }
        }
    }
    return best;
}

// Improved bank_store by Shibdib
function bank_store(num) {
    // Shibdib update 02/15/2019 - This will now iterate thru all tabs so if the first one if full but others aren't it will find a slot
    if(!character.bank) return game_log("Not inside the bank");
    if(!character.items[num]) return game_log("No item in that spot");
    let pack;
    let bankSlot = -1;
    bankTabs:
        for (let key of Object.keys(character.bank)) {
            let bankTab = character.bank[key];
            // Skip the gold tab
            if (!Array.isArray(bankTab)) continue;
            for (let slot in bankTab) {
                // If items are stackable do so and break
                if (can_stack(bankTab[slot],character.items[num])) {
                    pack = key;
                    bankSlot = slot;
                    break bankTabs;
                } else if (!bankTab[slot]) {
                    pack = key;
                    break bankTabs;
                }
            }
        }
    if (!pack) return game_log("Bank is full!");
    parent.socket.emit("bank",{operation:"swap",pack:pack,str:bankSlot,inv:num});
}