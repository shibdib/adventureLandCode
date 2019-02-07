let purchase_amount = 50;//How many potions to buy at once.
let buyThesePotions = ["hpot1", "mpot1"];//The types of potions to keep supplied.

//This function contains our logic during resupply runs
function resupply_potions() {
    let potion_merchant = getNpc("fancypots");
    let distance_to_merchant = null;
    if (potion_merchant != null) distance_to_merchant = distanceToPoint(potion_merchant.position[0], potion_merchant.position[1]);
    if (!smart.moving && (distance_to_merchant == null || distance_to_merchant > 150 || character.map !== 'main')) return smart_move({to: "potions"});
    if (distance_to_merchant != null && distance_to_merchant < 155) {
        if (buy_potions()) return true;
    }
}

//Buys potions until the amount of each potion_type we defined in the start of the script is above the min_potions value.
function buy_potions() {
    if (openInventorySpots() > 0) {
        for (let typeId in buyThesePotions) {
            if (parent.G.items[buyThesePotions[typeId]]) {
                let cost = parent.G.items[buyThesePotions[typeId]].g * purchase_amount;
                if (character.gold >= cost && itemCount(buyThesePotions[typeId]) < purchase_amount) {
                    buy(buyThesePotions[typeId], purchase_amount);
                }
            }
        }
    }
    return true;
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