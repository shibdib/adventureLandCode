let equipTypes = ['weapon', 'shield', 'source', 'quiver', 'misc_offhand', 'ring', 'earring', 'belt', 'helmet', 'chest',
    'pants', 'shoes', 'gloves', 'amulet', 'orb', 'elixir', 'cape'];

let specialSlots = {
    'shield': 'offhand',
    'source': 'offhand',
    'quiver': 'offhand',
    'misc_offhand': 'offhand',
    'ring': ['ring1', 'ring2'],
    'earring': ['earring1', 'earring2']
};

// Cycles thru inventory and equips bis
let checked = [];
function equipBIS() {
    for (let key in character.items) {
        let item = character.items[key];
        if (!item || checked.includes(item.name)) continue;
        checked.push(item.name);
        if (G.items[item.name] && !equipTypes.includes(G.items[item.name].type)) continue;
        bestItemEquip(item, false);
    }
}

//Get gear and make sure all slots are filled
function gearIssue() {
    if (character.map !== 'bank') {
        shibMove('bank');
        return false;
    } else {
        for (let key in Object.values(character.user)) {
            let slot = Object.values(character.user)[key];
            if (!slot || !slot.length) continue;
            for (let packKey in slot) {
                let item = slot[packKey];
                if (!item || checked.includes(item.name+item.level)) continue;
                checked.push(item.name+item.level);
                if (G.items[item.name] && !equipTypes.includes(G.items[item.name].type)) continue;
                bestItemEquip(getHighestLevel(item.name));
            }
        }
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
            if (item.name === search && item_properties(item).level === level) {
                if (character.items[key].name === search) return key;
            }
        }
    } else {
        let slots = [];
        for (let key in character.items) {
            let item = character.items[key];
            if (!item) continue;
            if (item.name === search && item_properties(item).level === level) {
                if (character.items[key].name === search) slots.push(key);
            }
        }
        return slots;
    }
    return undefined;
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
    if (!item || ignoredItems.includes(item.name)) return;
    let itemInfo = G.items[item.name];
    // Check if slot doesn't match type
    let itemSlot = itemInfo.type;
    if (specialSlots[itemInfo.type]) itemSlot = specialSlots[itemInfo.type];
    // Handle weapons
    if (itemInfo.type === 'weapon') {
        // Not allowed
        if (!G.classes[character.ctype].mainhand.includes(itemInfo.wtype) && !G.classes[character.ctype].doublehand.includes(itemInfo.wtype) && !G.classes[character.ctype].offhand.includes(itemInfo.wtype)) return;
        // Either hand
        if (G.classes[character.ctype].mainhand.includes(itemInfo.wtype) && G.classes[character.ctype].offhand.includes(itemInfo.wtype)){
            itemSlot = ['mainhand', 'offhand']
        } // 2 hander
        else if (G.classes[character.ctype].doublehand.includes(itemInfo.wtype)) {
            itemSlot = 'mainhand'
        } // Offhand only?
        else if (!G.classes[character.ctype].mainhand.includes(itemInfo.wtype) && G.classes[character.ctype].offhand.includes(itemInfo.wtype)) {
            itemSlot = 'offhand'
        } // All other
        else {
            itemSlot = 'mainhand'
        }
    }
    // Handle holding a 2 hander
    if ((itemSlot === 'offhand' || (Array.isArray(itemSlot) && itemSlot.includes('offhand'))) && character.slots['mainhand'] && G.classes[character.ctype].doublehand && G.classes[character.ctype].doublehand.includes(G.items[character.slots['mainhand'].name].wtype)) return;
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
            // Compare gear score to slotted
            if (getGearScore(character.ctype, item.name, item_properties(item).level) > getGearScore(character.ctype, slottedItem.name, item_properties(slottedItem).level)) {
                if (bank) {
                    withdrawItem(item.name, item_properties(item).level);
                    game_log('Grabbing ' + itemInfo.name + ' from the bank.');
                } else {
                    game_log('Equipping ' + itemInfo.name + '.');
                }
                equip(getInventorySlot(item.name, false, item_properties(item).level));
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
        // Compare gear score to slotted
        if (getGearScore(character.ctype, item.name, item_properties(item).level) > getGearScore(character.ctype, slottedItem.name, item_properties(slottedItem).level)) {
             if (bank) {
                    withdrawItem(item.name, item_properties(item).level);
                    game_log('Grabbing ' + itemInfo.name + ' from the bank.');
                } else {
                    game_log('Equipping ' + itemInfo.name + '.');
                }
             equip(getInventorySlot(item.name, false, item_properties(item).level));
             return true;
        }
    }
}

//Clear outdate scores
if (localStorage.getItem('gearVersion') && localStorage.getItem('gearVersion') !== attributeVersion) {
    localStorage.removeItem('gearScore');
    localStorage.removeItem('gearVersion');
    localStorage.setItem('gearVersion', attributeVersion);
}

//Gear Score
function getGearScore(ctype, item, level = 0) {
    if (!G.items[item] || !attributeWeights[ctype]) return;
    if (!localStorage.getItem('gearScore')) return computeGearScore(ctype, item, level);
    let stored = JSON.parse(localStorage.getItem('gearScore'));
    let storedName = item + level;
    if (stored[storedName]) return stored[storedName][ctype]; else return computeGearScore(ctype, item, level);
}

//Determine Gear Score
function computeGearScore(ctype, item, level) {
    let stored = {};
    if (localStorage.getItem('gearScore')) stored = JSON.parse(localStorage.getItem('gearScore'));
    let storedName = item + level;
    let details = G.items[item];
    stored[storedName] = {};
    for (let key of Object.keys(attributeWeights)) {
        let weights = attributeWeights[key];
        let base = 0;
        for (let atr of Object.keys(weights)) {
            let itemAtr = details[atr] || 0;
            let levelSteps = 0;
            if (details['upgrade']) levelSteps = details['upgrade'][atr] || 0; else if (details['compound']) levelSteps = details['compound'][atr] || 0;
            base += (weights[atr] * (itemAtr + (levelSteps * level)));
        }
        stored[storedName][key] = base
    }
    localStorage.setItem('gearScore', JSON.stringify(stored));
    return stored[storedName][ctype];
}