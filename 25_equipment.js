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
        } else if (!bestSetup[character.name].deposit2) {
            depositItems();
            bestSetup[character.name].deposit2 = true;
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
                            if (G.classes[character.ctype].mainhand.includes(itemInfo.wtype) && G.classes[character.ctype].offhand.includes(itemInfo.wtype)) {
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
                        } else {
                            // Not allowed SHIELDS
                            if (itemSlot === 'offhand' && !G.classes[character.ctype].offhand.includes(itemInfo.type)) continue;
                            // Not allowed MAINHAND TYPES
                            if (itemSlot === 'mainhand' && !G.classes[character.ctype].mainhand.includes(itemInfo.type) && !G.classes[character.ctype].doublehand.includes(itemInfo.type)) continue;
                        }
                        let replacementScore = getGearScore(character.ctype, item);
                        if (replacementScore <= 15) continue;
                        // Handle single slot
                        if (!Array.isArray(itemSlot)) {
                            if (!twoHander) {
                                // Get currently slotted item
                                let slottedItem = bestSetup[character.name][itemSlot];
                                // If slot is empty equip
                                if (!slottedItem) {
                                    bestSetup[character.name][itemSlot] = {
                                        name: item.name,
                                        level: item_properties(item).level,
                                        bankTab: key,
                                        bankSlot: packKey
                                    };
                                    continue;
                                }
                                let slottedScore = getGearScore(character.ctype, slottedItem);
                                if (replacementScore > slottedScore) {
                                    bestSetup[character.name][itemSlot] = {
                                        name: item.name,
                                        level: item_properties(item).level,
                                        bankTab: key,
                                        bankSlot: packKey
                                    };
                                    continue;
                                }
                            } else {
                                let mainSlottedItem = bestSetup[character.name]['mainhand'];
                                let offSlottedItem = bestSetup[character.name]['offhand'];
                                // If slot is empty equip
                                if (!mainSlottedItem && !offSlottedItem) {
                                    bestSetup[character.name]['mainhand'] = {
                                        name: item.name,
                                        level: item_properties(item).level,
                                        bankTab: key,
                                        bankSlot: packKey
                                    };
                                    continue;
                                }
                                let mainSlottedScore = 0;
                                if (mainSlottedItem) mainSlottedScore = getGearScore(character.ctype, mainSlottedItem);
                                let offSlottedScore = 0;
                                if (offSlottedItem) offSlottedScore = getGearScore(character.ctype, offSlottedItem);
                                if (replacementScore > mainSlottedScore + offSlottedScore) {
                                    bestSetup[character.name]['mainhand'] = {
                                        name: item.name,
                                        level: item_properties(item).level,
                                        bankTab: key,
                                        bankSlot: packKey
                                    };
                                    continue;
                                }
                            }
                        } else {
                            // Check if any slot is empty first
                            for (let slot of itemSlot) {
                                // Get currently slotted item
                                let slottedItem = bestSetup[character.name][slot];
                                // Check if any slot is empty first
                                if (!slottedItem) {
                                    bestSetup[character.name][slot] = {
                                        name: item.name,
                                        level: item_properties(item).level,
                                        bankTab: key,
                                        bankSlot: packKey
                                    };
                                    continue currentTab;
                                }
                            }
                            for (let slot of itemSlot) {
                                // Get currently slotted item
                                let slottedItem = bestSetup[character.name][slot];
                                if (slottedItem) {
                                    let slottedScore = getGearScore(character.ctype, slottedItem);
                                    if (replacementScore > slottedScore) {
                                        bestSetup[character.name][itemSlot] = {
                                            name: item.name,
                                            level: item_properties(item).level,
                                            bankTab: key,
                                            bankSlot: packKey
                                        };
                                        continue currentTab;
                                    }
                                }
                            }
                        }
                    }

            }
            bestSetup[character.name].getBest = true;
            return false;
        } else if (!bestSetup[character.name].withdrawn) {
            for (let item of Object.values(bestSetup[character.name])) {
                bankItemWithdraw(item.bankSlot, item.bankTab);
            }
            bestSetup[character.name].withdrawn = true;
            return false;
        } else if (!bestSetup[character.name].equipped) {
            for (let item of Object.values(bestSetup[character.name])) {
                equip(getInventorySlot(item.name, false, item.level))
            }
            bestSetup[character.name].equipped = true;
            return false;
        } else if (!bestSetup[character.name].doubleCheckWithdraw) {
            for (let slot of Object.keys(character.slots)) {
                if (!character.slots[slot] && bestSetup[character.name][slot]) {
                    withdrawItem(bestSetup[character.name][slot].name, bestSetup[character.name][slot].level);
                }
            }
            bestSetup[character.name].doubleCheckWithdraw = true;
            return false;
        } else if (!bestSetup[character.name].doubleCheckEquipped) {
            for (let slot of Object.keys(character.slots)) {
                if (!character.slots[slot] && bestSetup[character.name][slot] && getInventorySlot(bestSetup[character.name][slot].name, false, bestSetup[character.name][slot].level)) {
                    equip(getInventorySlot(bestSetup[character.name][slot].name, false, bestSetup[character.name][slot].level))
                }
            }
            bestSetup[character.name].doubleCheckEquipped = true;
            return false;
        } else {
            bestSetup[character.name] = undefined;
            shibMove('main');
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

// Stat items
    let statItem = {};
    let classScrolls = {
        warrior: 'strscroll',
        priest: 'intscroll',
        mage: 'intscroll',
        rogue: 'dexscroll',
        ranger: 'dexscroll'
    };

    function statItems() {
        if (!statItem[character.name]) {
            for (let slot of Object.keys(character.slots)) {
                let item = character.slots[slot];
                let properties = item_properties(item);
                if (!properties) continue;
                if (properties.stat || G.items[item.name].stat) {
                    if (!properties.stat) {
                        if ((character.ctype === 'rogue' || character.ctype === 'ranger') && properties['dex']) continue;
                        if ((character.ctype === 'priest' || character.ctype === 'mage') && properties['int']) continue;
                        if (character.ctype === 'warrior' && properties['str']) continue;
                    }
                    let grade = item_grade(item);
                    let amount = 1;
                    if (grade === 1) amount = 10; else if (grade === 2) amount = 100;
                    statItem[character.name] = {slot: slot, amount: amount, name: item.name, level: properties.level};
                    unequip(statItem[character.name].slot);
                    return false;
                }
            }
            return true;
        } else if (statItem[character.name].equip) {
            equip(getInventorySlot(statItem[character.name].name, false, statItem[character.name].level));
            statItem[character.name] = undefined
            return false;
        } else if (getInventorySlot(classScrolls[character.ctype]) && character.items[getInventorySlot(classScrolls[character.ctype])].q >= statItem[character.name].amount) {
            let upgradeMerchant = getNpc("newupgrade");
            let distanceToMerchant = null;
            if (upgradeMerchant != null) distanceToMerchant = distanceToPoint(upgradeMerchant.position[0], upgradeMerchant.position[1]);
            if (!smart.moving && (distanceToMerchant == null || distanceToMerchant > 150 || character.map !== 'main')) return smart_move({to: "upgrade"});
            if (distanceToMerchant != null && distanceToMerchant < 155) {
                upgrade(getInventorySlot(statItem[character.name].name, false, statItem[character.name].level), getInventorySlot(classScrolls[character.ctype]));
                statItem[character.name].equip = true;
            }
            return false;
        } else if (character.gold < 8000 * statItem[character.name].amount) {
            withdrawGold((8000 * statItem[character.name].amount) - character.gold);
            return false;
        } else {
            buyScroll(classScrolls[character.ctype], statItem[character.name].amount);
            statItem[character.name].unequip = true;
            return false;
        }
    }

//Clear outdate scores
    if (!localStorage.getItem('gearVersion') || localStorage.getItem('gearVersion') !== attributeVersion) {
        localStorage.removeItem('gearScore');
        localStorage.removeItem('gearVersion');
        localStorage.setItem('gearVersion', attributeVersion);
    }

//Gear Score
    function getGearScore(ctype, item) {
        if (!attributeWeights[ctype]) return;
        let Gdetails = G.items[item.name];
        let properties = item_properties(item);
        let level = item_properties(item).level;
        game_log(1)
        if (!Gdetails || !properties) return;
        game_log(2)
        let weights = attributeWeights[ctype];
        let score = 0;
        for (let atr of Object.keys(weights)) {
            let itemAtr = properties[atr] || 0;
            let levelSteps = 0;
            if (Gdetails['upgrade']) levelSteps = Gdetails['upgrade'][atr] || 0; else if (Gdetails['compound']) levelSteps = Gdetails['compound'][atr] || 0;
            score += (weights[atr] * (itemAtr + (levelSteps * level)));
        }
        return score
    }