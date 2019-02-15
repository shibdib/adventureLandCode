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