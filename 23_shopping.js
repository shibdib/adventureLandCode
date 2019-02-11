let buyThesePotions = ["hpot1", "mpot1"];//The types of potions to keep supplied.

//This function contains our logic during resupply runs
function restockPotions(amount) {
    let potionMerchant = getNpc("fancypots");
    let distanceToMerchant = null;
    if (potionMerchant != null) distanceToMerchant = distanceToPoint(potionMerchant.position[0], potionMerchant.position[1]);
    if (!smart.moving && (distanceToMerchant == null || distanceToMerchant > 150 || character.map !== 'main')) return smart_move({to: "potions"});
    if (distanceToMerchant != null && distanceToMerchant < 155) {
        if (buyPotions(amount)) return true;
    }
}

//Buys potions until the amount of each potion_type we defined in the start of the script is above the min_potions value.
function buyPotions(amount) {
    if (openInventorySpots() > 0) {
        for (let typeId in buyThesePotions) {
            if (parent.G.items[buyThesePotions[typeId]]) {
                let buyAmount = amount - itemCount(buyThesePotions[typeId]);
                let cost = parent.G.items[buyThesePotions[typeId]].g * buyAmount;
                if (character.gold >= cost && buyAmount > 0) {
                    buy(buyThesePotions[typeId], buyAmount);
                }
            }
        }
    }
    return true;
}

//Buy scrolls
function buyScroll(type) {
    let scrollsMerchant = getNpc("scrolls");
    let distanceToMerchant = null;
    if (scrollsMerchant != null) distanceToMerchant = distanceToPoint(scrollsMerchant.position[0], scrollsMerchant.position[1]);
    if (!smart.moving && (distanceToMerchant == null || distanceToMerchant > 150 || character.map !== 'main')) return smart_move({to: "scrolls"});
    if (distanceToMerchant != null && distanceToMerchant < 155) {
        buy(type, 1);
    }
}

// Exchange Item
function exchangeItem(type, npc) {
    let exchangeMerchant = getNpc(npc);
    let distanceToMerchant = null;
    let moveDestination = "exchange";
    if (npc === 'fisherman') moveDestination = 'shells';
    if (exchangeMerchant != null) distanceToMerchant = distanceToPoint(exchangeMerchant.position[0], exchangeMerchant.position[1]);
    if (!smart.moving && (distanceToMerchant == null || distanceToMerchant > 150 || character.map !== 'main')) return smart_move({to: moveDestination});
    if (distanceToMerchant != null && distanceToMerchant < 155) {
        exchange(getInventorySlot(type));
    }
}

//Returns the number of items in your inventory for a given item name;
function itemCount(name, level = 0) {
    let count = character.items.filter(item => item != null && item.name === name && item_properties(item).level === level).reduce(function (a, b) {
        return a + (b["q"] || 1);
    }, 0);
    return count;
}

//Returns how many inventory slots have not yet been filled.
function openInventorySpots() {
    return character.esize;
}

//Gets an NPC by name from the current map.
function getNpc(name) {
    let npc = parent.G.maps[character.map].npcs.filter(npc => npc.id === name);
    if (npc.length > 0) {
        return npc[0];
    }
    return null;
}