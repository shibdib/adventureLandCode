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
            compareEquip(itemInfo, key);
        }
}

//Get gear and make sure all slots are filled
let gearNotify;
function gearIssue() {
    if (!gearNotify) {
        whisperParty('Heading to the bank to see if there is any upgraded gear available.')
        gearNotify = true;
    }
    if (character.map !== 'bank') {
        shibMove('bank');
        return true;
    } else {
        equipBIS();
        for (let slot of Object.values(character.user)) {
            if (!slot) continue;
            let itemInfo = G.items[slot.name];
            if (itemInfo.wtype && !classItems[character.class].includes(itemInfo.wtype)) continue;
            compareEquip(itemInfo, slot)
        }
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
        if (item.name === search) return true;
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
function depositGold(amount = character.gold) {
    if (!goldNotify) {
        whisperParty('Running to the bank to drop off some loot, brb.')
        goldNotify = true;
    }
    if (character.map !== 'bank') {
        shibMove('bank');
        return true;
    } else {
        bank_deposit(amount);
        goldNotify = undefined;
    }
}

//Drop off items
let itemsNotify;
function depositItems(potions = false) {
    if (!itemsNotify) {
        whisperParty('Running to the bank to drop off some loot, brb.')
        itemsNotify = true;
    }
    if (character.map !== 'bank') {
        shibMove('bank');
        return true;
    } else {
        equipBIS();
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
//UPGRADING and COMBINING
function combineItems() {

}

//Reused functions
//Gear compare
function compareEquip(itemInfo, key){
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
            else if (slottedItem === null) {
                equip(key);
                game_log('Equipping ' + item.name + ' in the ' + slot + ' position.');
                return;
            }
            // If slotted item is less valuable unequip and equip the new item
            else if (G.items[slottedItem.name].g < itemInfo.g) {
                unequip(itemInfo.type);
                equip(key);
                game_log('Equipping ' + item.name + ' in place of ' + slottedItem.name);
                return;
            }
        }
    } else {
        // Get currently slotted item
        let slottedItem = character.slots[itemSlot];
        // If not a slottable item continue
        if (slottedItem === undefined) return;
        // If slot is empty equip
        else if (slottedItem === null) {
            equip(key);
            game_log('Equipping ' + item.name + ' in the ' + itemSlot + ' position.');
        }
        // If slotted item is less valuable unequip and equip the new item
        else if (G.items[slottedItem.name].g < itemInfo.g) {
            unequip(itemInfo.type);
            equip(key);
            game_log('Equipping ' + item.name + ' in place of ' + slottedItem.name);
        }
    }
}