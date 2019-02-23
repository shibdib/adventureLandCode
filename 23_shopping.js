//This function contains our logic during resupply runs
function restockPotions(amount) {
    if (character.gold < amount * 100) {
        withdrawGold((amount * 200) - character.gold)
    } else {
        let potionMerchant = getNpc("fancypots");
        let distanceToMerchant = null;
        if (potionMerchant != null) distanceToMerchant = distanceToPoint(potionMerchant.position[0], potionMerchant.position[1]);
        if (!smart.moving && (distanceToMerchant == null || distanceToMerchant > 150 || character.map !== 'main')) return smart_move({to: "main"});
        if (distanceToMerchant != null && distanceToMerchant < 155) {
            if (buyPotions(amount)) return false;
        }
    }
}

//Buys potions until the amount of each potion_type we defined in the start of the script is above the min_potions value.
function buyPotions(amount) {
    if (openInventorySpots() > 0) {
        for (let potion of buyThesePotions) {
            let buyAmount = amount - itemCount(potion);
            let cost = G.items[potion].g * buyAmount;
            if (character.gold >= cost && buyAmount > 0) {
                buy(potion, buyAmount);
            }
        }
    }
    return true;
}

//Buy scrolls
function buyScroll(type, amount = 1) {
    let scrollsMerchant = getNpc("scrolls");
    let distanceToMerchant = null;
    if (scrollsMerchant != null) distanceToMerchant = distanceToPoint(scrollsMerchant.position[0], scrollsMerchant.position[1]);
    if (!smart.moving && (distanceToMerchant == null || distanceToMerchant > 150 || character.map !== 'main')) return smart_move({to: "scrolls"});
    if (distanceToMerchant != null && distanceToMerchant < 155) {
        buy(type, amount);
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