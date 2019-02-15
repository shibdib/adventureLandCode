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
let bestSetup = {};

//Get gear and make sure all slots are filled
function gearIssue() {
    if (character.map !== 'bank') {
        shibMove('bank');
        return false;
    } else {
        if (!bestSetup[character.name]) {
            bestSetup[character.name] = {};
        } else if (!bestSetup[character.name].naked) {
            getNaked();
            bestSetup[character.name].naked = true;
            return false;
        } else if (!bestSetup[character.name].deposit) {
            depositItems();
            bestSetup[character.name].deposit = true;
            return false;
        } else if (!bestSetup[character.name].getBest) {
            for (let key in Object.values(character.user)) {
                let slot = Object.values(character.user)[key];
                if (!slot || !slot.length) continue;
                currentTab:
                    for (let packKey in slot) {
                        let twoHander;
                        let item = slot[packKey];
                        if (!item || ignoredItems.includes(item.name)) continue;
                        if (G.items[item.name] && !equipTypes.includes(G.items[item.name].type)) continue;
                        // Get highest level of item so as not to waste time
                        //item = getHighestLevel(item.name);
                        // Add item to checked array
                        //checked.push(item.name);
                        // Get info
                        let itemInfo = G.items[item.name];
                        // Check if slot doesn't match type
                        let itemSlot = itemInfo.type;
                        if (specialSlots[itemInfo.type]) itemSlot = specialSlots[itemInfo.type];
                        // Handle weapons
                        if (itemInfo.type === 'weapon') {
                            // Not allowed
                            if (!G.classes[character.ctype].mainhand.includes(itemInfo.wtype) && !G.classes[character.ctype].doublehand.includes(itemInfo.wtype) && !G.classes[character.ctype].offhand.includes(itemInfo.wtype)) continue;
                            // Either hand
                            if (G.classes[character.ctype].mainhand.includes(itemInfo.wtype) && G.classes[character.ctype].offhand.includes(itemInfo.wtype)){
                                itemSlot = ['mainhand', 'offhand']
                            } // 2 hander
                            else if (G.classes[character.ctype].doublehand.includes(itemInfo.wtype)) {
                                twoHander = true;
                                itemSlot = 'mainhand'
                            } // Offhand only?
                            else if (!G.classes[character.ctype].mainhand.includes(itemInfo.wtype) && G.classes[character.ctype].offhand.includes(itemInfo.wtype)) {
                                itemSlot = 'offhand'
                            } // All other
                            else {
                                itemSlot = 'mainhand'
                            }
                        }
                        let replacementScore = getGearScore(character.ctype, item.name, item_properties(item).level);
                        // Handle single slot
                        if (!Array.isArray(itemSlot)) {
                            if (!twoHander) {
                                // Get currently slotted item
                                let slottedItem = bestSetup[character.name][itemSlot];
                                // If slot is empty equip
                                if (!slottedItem) {
                                    bestSetup[character.name][itemSlot] = {name: item.name, level: item_properties(item).level};
                                    continue;
                                }
                                let slottedScore = getGearScore(character.ctype, slottedItem.name, slottedItem.level);
                                if (replacementScore > slottedScore) {
                                    bestSetup[character.name][itemSlot] = {name: item.name, level: item_properties(item).level};
                                    continue;
                                }
                            } else {
                                let mainSlottedItem = bestSetup[character.name]['mainhand'];
                                let offSlottedItem = bestSetup[character.name]['offhand'];
                                // If slot is empty equip
                                if (!mainSlottedItem && !offSlottedItem) {
                                    bestSetup[character.name]['mainhand'] = {name: item.name, level: item_properties(item).level};
                                    continue;
                                }
                                let mainSlottedScore = 0;
                                if (mainSlottedItem) mainSlottedScore = getGearScore(character.ctype, mainSlottedItem.name, mainSlottedItem.level);
                                let offSlottedScore = 0;
                                if (offSlottedScore) offSlottedScore = getGearScore(character.ctype, offSlottedScore.name, offSlottedScore.level);
                                if (replacementScore > mainSlottedScore + offSlottedScore) {
                                    bestSetup[character.name]['mainhand'] = {name: item.name, level: item_properties(item).level};
                                    continue;
                                }
                            }
                        } else {
                            for (let slot of itemSlot) {
                                // Get currently slotted item
                                let slottedItem = bestSetup[character.name][slot];
                                // If slot is empty equip
                                if (!slottedItem) {
                                    bestSetup[character.name][slot] = {name: item.name, level: item_properties(item).level};
                                    continue currentTab;
                                }
                                let slottedScore = getGearScore(character.ctype, slottedItem.name, slottedItem.level);
                                if (replacementScore > slottedScore) {
                                    bestSetup[character.name][itemSlot] = {name: item.name, level: item_properties(item).level};
                                    continue currentTab;
                                }
                            }
                        }
                    }
            }
            bestSetup[character.name].getBest = true;
            return false;
        } else if (!bestSetup[character.name].withdrawn) {
            for (let item of Object.values(bestSetup[character.name])) {
                withdrawItem(item.name, item.level);
            }
            bestSetup[character.name].withdrawn = true;
            return false;
        } else if (!bestSetup[character.name].equipped) {
            for (let item of Object.values(bestSetup[character.name])) {
                equip(getInventorySlot(item.name, false, item.level))
            }
            bestSetup[character.name].equipped = true;
            return false;
        } else {
            bestSetup[character.name] = undefined;
            return true;
        }
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

function getNaked() {
    for (let slot of parent.character_slots) {
        unequip(slot);
    }
}

//Pick Up Potions
let requestOnce;
function getPotions() {
    if (moveToMerchant()) {
        if (parent.party_list.length > 0) {
            let merchant = parent.entities['Shibmerch'];
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

//Clear outdate scores
if (!localStorage.getItem('gearVersion') || localStorage.getItem('gearVersion') !== attributeVersion) {
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
    if (!details) return;
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