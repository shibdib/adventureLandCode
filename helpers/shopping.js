
let purchase_amount = 50;//How many potions to buy at once.
let potion_types = ["hpot0", "mpot0"];//The types of potions to keep supplied.

//This function contains our logic during resupply runs
function resupply_potions() {
    let potion_merchant = get_npc("fancypots");
    let distance_to_merchant = null;
    if (potion_merchant != null) {
        distance_to_merchant = distance_to_point(potion_merchant.position[0], potion_merchant.position[1]);
    }
    if (!smart.moving
        && (distance_to_merchant == null || distance_to_merchant > 250)) {
        smart_move({to: "potions"});
    }
    if (distance_to_merchant != null
        && distance_to_merchant < 250) {
        buy_potions();
    }
}

//Buys potions until the amount of each potion_type we defined in the start of the script is above the min_potions value.
function buy_potions() {
    if (empty_slots() > 0) {
        for (type_id in potion_types) {
            let type = potion_types[type_id];
            let item_def = parent.G.items[type];
            if (item_def != null) {
                let cost = item_def.g * purchase_amount;
                if (character.gold >= cost) {
                    let num_potions = num_items(type);

                    if (num_potions < min_potions) {
                        buy(type, purchase_amount);
                    }
                }
                else {
                    game_log("Not Enough Gold!");
                }
            }
        }
    }
    else {
        game_log("Inventory Full!");
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
function empty_slots() {
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