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
            if (classInventory[character.ctype].includes(item.name)) continue;
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
    character.bank[pack][key] = undefined;
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

// Get total number of an object regardless of level
function totalInBank(name) {
    let bankDetails = JSON.parse(localStorage.getItem('bankDetails'));
    let count = 0;
    for (let l = 0; l < 12; l++) {
        count += bankDetails[name + l];
    }
    return count;
}