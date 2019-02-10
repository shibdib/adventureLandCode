let equipTypes = ['weapon', 'shield', 'source', 'quiver', 'misc_offhand', 'ring', 'earring', 'belt', 'helmet', 'chest',
    'pants', 'shoes', 'gloves', 'amulet', 'orb', 'elixir', 'cape'];

let specialSlots = {
    'weapon': ['mainhand', 'offhand'],
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
    let checked = [];
    for (let key in character.items) {
        let item = character.items[key];
        if (!item || checked.includes(item.name)) continue;
        checked.push(item.name);
        if (G.items[item.name] && ((G.items[item.name].wtype && !classItems[character.ctype].includes(G.items[item.name].wtype)) || !equipTypes.includes(G.items[item.name].type))) continue;
        bestItemEquip(item, false);
    }
}

//Get gear and make sure all slots are filled
function gearIssue() {
    if (character.map !== 'bank') {
        shibMove('bank');
        return false;
    } else {
        let checked = [];
        for (let key in Object.values(character.user)) {
            let slot = Object.values(character.user)[key];
            if (!slot || !slot.length) continue;
            for (let packKey in slot) {
                let item = slot[packKey];
                if (!item || checked.includes(item.name)) continue;
                checked.push(item.name);
                if (G.items[item.name] && ((G.items[item.name].wtype && !classItems[character.ctype].includes(G.items[item.name].wtype)) || !equipTypes.includes(G.items[item.name].type))) continue;
                bestItemEquip(getHighestLevel(item.name));
            }
        }
        return true;
    }
}

//Looks for weapon type equipped
function checkForWeaponType(type) {
    for (let slot of Object.values(character.slots)) {
        if (slot && slot.name && G.items[slot.name].wtype && G.items[slot.name].wtype === type) return true;
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

//Looks for item in inventory
function getInventorySlot(search, multiple = false, level = 0) {
    if (!multiple) {
        for (let key in character.items) {
            let item = character.items[key];
            if (!item) continue;
            if (item.name === search && item_properties(item).level === level) return key;
        }
    } else {
        let slots = [];
        for (let key in character.items) {
            let item = character.items[key];
            if (!item) continue;
            if (item.name === search && item_properties(item).level === level) slots.push(key);
        }
        return slots;
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
                for (let type_id in buyThesePotions) {
                    let type = buyThesePotions[type_id];
                    let item_def = parent.G.items[type];
                    if (item_def != null) {
                        if (itemCount(type) < targetPotionAmount) {
                            need['type'] = 'potionRequest';
                            need['potion'] = type;
                            need['amount'] = targetPotionAmount - itemCount(type);
                        }
                    }
                }
                if (Object.keys(need).length && (!requestOnce || requestOnce + 10000 < Date.now())) {
                    send_cm(merchant.name, need);
                    pm(merchant.name, 'Send potions please!');
                    requestOnce = Date.now();
                }
            }
        }
    }
}

// Grabs an item from the bank if it's potentially better;
function bestItemEquip(item, bank = true) {
    if (!item) return;
    let itemInfo = G.items[item.name];
    // Check if slot doesn't match type
    let itemSlot = itemInfo.type;
    if (specialSlots[itemInfo.type]) itemSlot = specialSlots[itemInfo.type];
    if (itemInfo.type === 'weapon' && character.ctype !== 'rogue') itemSlot = 'mainhand';
    // Handle ears and rings
    if (Array.isArray(itemSlot)) {
        for (let slot of itemSlot) {
            // Get currently slotted item
            let slottedItem = character.slots[slot];
            // If not a slottable item continue main
            if (slottedItem === undefined) return;
            // If slot is empty equip
            if (slottedItem === null) {
                if (bank) {
                    withdrawItem(item.name, item_properties(item).level);
                    game_log('Grabbing ' + itemInfo.name + ' from the bank.');
                } else {
                    game_log('Equipping ' + itemInfo.name + '.');
                }
                equip(getInventorySlot(item.name, false, item_properties(item).level));
                return;
            }
            // If slotted item is less valuable unequip and equip the new item
            if (G.items[slottedItem.name].g < itemInfo.g || (slottedItem.name === itemInfo.id && item_properties(slottedItem).level < item_properties(item).level)) {
                if (bank) {
                    withdrawItem(item.name, item_properties(item).level);
                    game_log('Grabbing ' + itemInfo.name + ' from the bank.');
                } else {
                    game_log('Equipping ' + itemInfo.name + '.');
                }
                equip(getInventorySlot(item.name, false, item_properties(item).level));
                depositItems();
                return true;
            }
        }
    } else {
        // Get currently slotted item
        let slottedItem = character.slots[itemSlot];
        // If not a slottable item return
        if (slottedItem === undefined) return;
        // If slot is empty equip
        if (slottedItem === null) {
            if (bank) {
                withdrawItem(item.name, item_properties(item).level);
                game_log('Grabbing ' + itemInfo.name + ' from the bank.');
            } else {
                game_log('Equipping ' + itemInfo.name + '.');
            }
            equip(getInventorySlot(item.name, false, item_properties(item).level));
            return true;
        }
        // If slotted item is less valuable unequip and equip the new item
        if (G.items[slottedItem.name].g < itemInfo.g || (slottedItem.name === item.name && item_properties(slottedItem).level < item_properties(item).level)) {
            if (bank) {
                withdrawItem(item.name, item_properties(item).level);
                game_log('Grabbing ' + itemInfo.name + ' from the bank.');
            } else {
                game_log('Equipping ' + itemInfo.name + '.');
            }
            equip(getInventorySlot(item.name, false, item_properties(item).level));
            depositItems();
            return true;
        }
    }
}