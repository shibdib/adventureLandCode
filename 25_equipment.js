// Cycles thru inventory and equips bis
function equip_best_available() {
    for (let key in character.items) {
        let item = character.items[key];
        if (!item || item === null) continue;
        let itemInfo = G.items[item.name];
        // Get currently slotted item
        let slottedItem = character.slots[itemInfo.type];
        // If not a slottable item continue
        if (!slottedItem) continue;
        // If slot is empty equip
        if (slottedItem === null) {
            equip(key)
            game_log('Equipping ' + item.name);
            continue;
        }
        // If slotted item is less valuable unequip and equip the new item
        if (item_value(slottedItem) < item_value(item)) {
            game_log(item.name)
            unequip(itemInfo.type);
            equip(key);
            game_log('Equipping ' + item.name + ' in place of ' + slottedItem.name);
            continue;
        }
    }
}

//Looks for weapon type equipped
function checkForWeaponType(type) {
    for (let slot in Object.values(character.slots)) {
        if (slot.name && G.items[slot.name].wtype && G.items[slot.name].wtype === type) return true;
    }
}

//Looks for item in inventory
function checkInventoryForItem(item) {
    for (let key in character.items) {
        let item = character.items[key];
        if (!item || item === null) continue;
        if (item.name === item) return true;
    }
}