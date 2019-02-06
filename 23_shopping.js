let purchase_amount = 50;//How many potions to buy at once.
let potion_types = ["hpot1", "mpot1"];//The types of potions to keep supplied.

//This function contains our logic during resupply runs
let returning;
function resupply_potions() {
    let potion_merchant = get_npc("fancypots");
    let distance_to_merchant = null;
    if (potion_merchant != null) distance_to_merchant = distanceToPoint(potion_merchant.position[0], potion_merchant.position[1]);
    if (!returning && !smart.moving && (distance_to_merchant == null || distance_to_merchant > 250 || character.map !== 'main')) smart_move({to: "potions"});
    if (distance_to_merchant != null && distance_to_merchant < 250) {
        if (returning || buy_potions()) {
            returning = true;
            if (character.map !== 'bank') {
                shibMove('bank');
                return false;
            } else {
                for (let key in character.items) {
                    let item = character.items[key];
                    if (!item || item === null) continue;
                    let itemInfo = G.items[item.name];
                    if (itemInfo.type === 'pot') bank_store(key);
                }
                accounting();
                return true;
            }
        }
    }
}

//Buys potions until the amount of each potion_type we defined in the start of the script is above the min_potions value.
function buy_potions() {
    if (openInventorySpots() > 0) {
        for (type_id in potion_types) {
            let type = potion_types[type_id];
            let item_def = parent.G.items[type];
            if (item_def != null) {
                let cost = item_def.g * purchase_amount;
                if (character.gold >= cost && num_items(type) < purchase_amount) {
                    buy(type, purchase_amount);
                } else {
                    return true;
                }
            }
        }
    } else {
        return true;
    }
}

//Get bank information
function accounting() {
    if (character.map !== 'bank') {
        shibMove('bank');
        return false;
    } else {
        let accountingInfo = {};
        for (let key in Object.values(character.user)) {
            let slot = Object.values(character.user)[key];
            if (!slot || !slot.length) continue;
            for (let packKey in slot) {
                let banker = slot[packKey];
                if (!banker) continue;
                let itemInfo = G.items[banker.name];
                if (accountingInfo[itemInfo.id]) {
                    accountingInfo[itemInfo.id] += 1;
                } else {
                    accountingInfo[itemInfo.id] = 1;
                }
            }
        }
        accountingInfo['gold'] = character.user['gold'];
        return accountingInfo;
    }
}


//Returns the number of items in your inventory for a given item name;
function num_items(name) {
    let item_count = character.items.filter(item => item != null && item.name == name).reduce(function (a, b) {
        return a + (b["q"] || 1);
    }, 0);
    return item_count;
}

//Returns how many inventory slots have not yet been filled.
function openInventorySpots() {
    return character.esize;
}

//Gets an NPC by name from the current map.
function get_npc(name) {
    let npc = parent.G.maps[character.map].npcs.filter(npc => npc.id == name);
    if (npc.length > 0) {
        return npc[0];
    }
    return null;
}