// Cycles thru inventory and equips bis
function equipBIS() {
    let specialSlots = {
        'weapon': 'mainhand',
        'shield': 'offhand',
        'ring': ['ring1', 'ring2'],
        'earring': ['earring1', 'earring2']
    };
    main:
        for (let key in character.items) {
            let item = character.items[key];
            if (!item || item === null) continue;
            let itemInfo = G.items[item.name];
            // Check if slot doesn't match type
            let itemSlot = itemInfo.type;
            if (specialSlots[itemInfo.type]) itemSlot = specialSlots[itemInfo.type];
            // Handle ears and rings
            if (Array.isArray(itemSlot)) {
                for (let slot of itemSlot) {
                    // Get currently slotted item
                    let slottedItem = character.slots[slot];
                    // If not a slottable item continue main
                    if (slottedItem === undefined) continue main;
                    // If slot is empty equip
                    else if (slottedItem === null) {
                        equip(key);
                        game_log('Equipping ' + item.name + ' in the ' + slot + ' position.');
                        continue main;
                    }
                    // If slotted item is less valuable unequip and equip the new item
                    else if (G.items[slottedItem.name].g < itemInfo.g) {
                        unequip(itemInfo.type);
                        equip(key);
                        game_log('Equipping ' + item.name + ' in place of ' + slottedItem.name);
                        continue main;
                    }
                }
            } else {
                // Get currently slotted item
                let slottedItem = character.slots[itemSlot];
                // If not a slottable item continue
                if (slottedItem === undefined) continue;
                // If slot is empty equip
                else if (slottedItem === null) {
                    equip(key)
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