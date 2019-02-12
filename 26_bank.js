//BANKING
//Drop off gold
let goldWithdrawNotify;

function depositGold(amount = character.gold - 5000) {
    if (!goldWithdrawNotify) {
        whisperParty('I have way too much gold, brb.');
        goldWithdrawNotify = true;
    }
    if (character.map !== 'bank') {
        shibMove('bank');
        return false;
    } else {
        bank_deposit(amount);
        goldWithdrawNotify = undefined;
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
let itemsNotify;

function depositItems(potions = false) {
    if (!itemsNotify) {
        whisperParty('Running to the bank to drop off some loot, brb.');
        itemsNotify = true;
    }
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
                if (!item || item === null) continue;
                let iLevel = item_properties(item).level;
                if (item.name === target && (level === undefined || iLevel === level)) {
                    bankItemWithdraw(packKey, Object.keys(character.user)[key]);
                    return true;
                }
            }
        }
        return null;
    }
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

function bankItemWithdraw(key, pack) {
    parent.socket.emit("bank",{operation:"swap",str:key,inv:-1,pack:pack});
}