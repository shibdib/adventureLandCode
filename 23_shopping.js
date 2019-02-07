let buyThesePotions = ["hpot1", "mpot1"];//The types of potions to keep supplied.

//This function contains our logic during resupply runs
function restockPotions(amount) {
    let potion_merchant = getNpc("fancypots");
    let distance_to_merchant = null;
    if (potion_merchant != null) distance_to_merchant = distanceToPoint(potion_merchant.position[0], potion_merchant.position[1]);
    if (!smart.moving && (distance_to_merchant == null || distance_to_merchant > 150 || character.map !== 'main')) return smart_move({to: "potions"});
    if (distance_to_merchant != null && distance_to_merchant < 155) {
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

//But scrolls
function buyScroll(type) {
    let potion_merchant = getNpc("scrolls");
    let distance_to_merchant = null;
    if (potion_merchant != null) distance_to_merchant = distanceToPoint(potion_merchant.position[0], potion_merchant.position[1]);
    if (!smart.moving && (distance_to_merchant == null || distance_to_merchant > 150 || character.map !== 'main')) return smart_move({to: "scrolls"});
    if (distance_to_merchant != null && distance_to_merchant < 155) {
        buy(type, 1);
    }
}


//Returns the number of items in your inventory for a given item name;
function itemCount(name) {
    let count = character.items.filter(item => item != null && item.name === name).reduce(function (a, b) {
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