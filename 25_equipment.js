let specialSlots = {
    'shield': 'offhand',
    'source': 'offhand',
    'quiver': 'offhand',
    'misc_offhand': 'offhand',
    'ring': ['ring1', 'ring2'],
    'earring': ['earring1', 'earring2']
};
let classItems = {
    'mage': ['great_staff', 'source', 'staff', 'wblade'],
    'priest': ['great_staff', 'source', 'staff', 'shield', 'mace'],
    'ranger': ['fist', 'bow', 'quiver'],
    'rogue': ['short_sword', 'fist', 'dagger', 'stars', 'misc_offhand'],
    'warrior': ['axe', 'basher', 'shield', 'short_sword', 'misc_offhand', 'fist', 'mace', 'spear', 'short_sword']
};

// Cycles thru inventory and equips bis
function equipBIS() {
    for (let key in character.items) {
        let item = character.items[key];
        if (!item || item === null) continue;
        let itemInfo = G.items[item.name];
        if (itemInfo.wtype && !classItems[character.class].includes(itemInfo.wtype)) continue;
        compareEquip(itemInfo, key, true);
    }
}

//Get gear and make sure all slots are filled
let gearNotify;
function gearIssue() {
    if (!gearNotify) {
        whisperParty('Going to the bank to check if I can upgrade my gear and restock.');
        gearNotify = true;
    }
    if (character.map !== 'bank') {
        shibMove('bank');
        return false;
    } else {
        equipBIS();
        for (let key in Object.values(character.user)) {
            let slot = Object.values(character.user)[key];
            if (!slot || !slot.length) continue;
            for (let packKey in slot) {
                let banker = slot[packKey];
                if (!banker) continue;
                let itemInfo = G.items[banker.name];
                if (itemInfo && itemInfo.wtype && !classItems[character.class].includes(itemInfo.wtype)) continue;
                itemInfo.iLevel = item_properties(banker).level;
                compareEquip(itemInfo, packKey, false, Object.keys(character.user)[key]);
            }
        }
        equipBIS();
        depositItems();
        return true;
    }
}

//Looks for weapon type equipped
function checkForWeaponType(type) {
    for (let slot of Object.values(character.slots)) {
        if (slot && slot.name && G.items[slot.name].wtype && G.items[slot.name].wtype === type) return true;
    }
}

//Looks for item in inventory
function checkInventoryForItem(search) {
    for (let key in character.items) {
        let item = character.items[key];
        if (!item || item === null) continue;
        if (item.name === search || item.id === search) return key;
    }
}

//Count empty gear slots
function countEmptyGear() {
    let count = 0;
    for (let slot of Object.values(character.slots)) {
        if (!slot) count += 1;
    }
    return count;
}

//BANKING
//Drop off gold
let goldNotify;
function depositGold(amount = character.gold - 5000) {
    if (!goldNotify) {
        whisperParty('I have way too much gold, brb.');
        goldNotify = true;
    }
    if (character.map !== 'bank') {
        shibMove('bank');
        return false;
    } else {
        bank_deposit(amount);
        goldNotify = undefined;
    }
}

//Drop off items
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
        if (character.ctype !== 'merchant') equipBIS();
        for (let key in character.items) {
            let item = character.items[key];
            if (!item || item === null) continue;
            let itemInfo = G.items[item.name];
            if (!potions && itemInfo.type === 'pot') continue;
            if (itemInfo.type === 'stand') continue;
            bank_store(key);
        }
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

//Pick Up Potions
let requestOnce;
function getPotions() {
    if (moveToMerchant()) {
        let merchant;
        if (parent.party_list.length > 0) {
            for (let id in parent.party_list) {
                let member = parent.party_list[id];
                let entity = parent.entities[member];
                if (entity && entity.ctype === 'merchant') merchant = entity;
            }
            if (merchant) {
                let need = {};
                for (let type_id in potion_types) {
                    let type = potion_types[type_id];
                    let item_def = parent.G.items[type];
                    if (item_def != null) {
                        if (num_items(type) < 5) {
                            need[type] = 50 - num_items(type);
                        }
                    }
                }
                if (!requestOnce || requestOnce + 30000 < Date.now()) {
                    send_cm(merchant.name,need);
                    pm(merchant.name, 'Send potions please!');
                    requestOnce = Date.now();
                }
            }
        }
    }
}
//UPGRADING and COMBINING
function combineItems() {

}

//Reused functions
//Gear compare
function compareEquip(itemInfo, key, don = false, pack){
    // Check if slot doesn't match type
    let itemSlot = itemInfo.type;
    if (specialSlots[itemInfo.type]) itemSlot = specialSlots[itemInfo.type];
    // Handle ears and rings
    if (Array.isArray(itemSlot)) {
        for (let slot of itemSlot) {
            // Get currently slotted item
            let slottedItem = character.slots[slot];
            // If not a slottable item continue main
            if (slottedItem === undefined) return;
            // If slot is empty equip
            if (slottedItem === null) {
                if (don) equip(key); else bankItemWithdraw(key, pack);
                if (don) game_log('Equipping ' + itemInfo.name + ' in the ' + slot + ' position.'); else game_log('Grabbing ' + itemInfo.name + ' from the bank.');
                return;
            }
            slottedItem.iLevel = item_properties(slottedItem).level;
            // If slotted item is less valuable unequip and equip the new item
            if (G.items[slottedItem.name].g < itemInfo.g || (slottedItem.name === itemInfo.id && slottedItem.iLevel < itemInfo.iLevel)) {
                if (don) unequip(itemInfo.type);
                if (don) equip(key); else bankItemWithdraw(key, pack);
                if (don) game_log('Equipping ' + itemInfo.name + ' in place of ' + slottedItem.name); else game_log('Grabbing ' + itemInfo.name + ' from the bank.');
                return;
            }
        }
    } else {
        // Get currently slotted item
        let slottedItem = character.slots[itemSlot];
        // If not a slottable item return
        if (slottedItem === undefined) return;
        // If slot is empty equip
        if (slottedItem === null) {
            if (don) equip(key); else bankItemWithdraw(key, pack);
            if (don) game_log('Equipping ' + itemInfo.name + ' in the ' + itemSlot + ' position.'); else game_log('Grabbing ' + itemInfo.name + ' from the bank.');
            return;
        }
        slottedItem.iLevel = item_properties(slottedItem).level;
        // If slotted item is less valuable unequip and equip the new item
        if (G.items[slottedItem.name].g < itemInfo.g || (slottedItem.name === itemInfo.id && slottedItem.iLevel < itemInfo.iLevel)) {
            if (don) unequip(itemSlot);
            if (don) equip(key); else bankItemWithdraw(key, pack);
            if (don) game_log('Equipping ' + itemInfo.name + ' in place of ' + slottedItem.name); else game_log('Grabbing ' + itemInfo.name + ' from the bank.');
            return;
        }
    }
}