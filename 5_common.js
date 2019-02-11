// State controller
let lastBankGearCheck, new_state;
function stateController(state) {
    if (!state) state = 10;
    //KIA
    if (character.rip) {
        new_state = 99;
        respawn();
    } //BANKING
    else if ((character.gold >= 100000 || openInventorySpots() < 30) && state !== 2) {
        new_state = 2;
    } //GEAR (Chance this is skipped on startup)
    else if ((countEmptyGear() >= 15 || !lastBankGearCheck || lastBankGearCheck + 1800000 < Date.now()) && state !== 4) {
        if (!lastBankGearCheck && Math.random() > 0.2) {
            lastBankGearCheck = Date.now();
            new_state = 1;
        } else {
            new_state = 4;
        }
    } //POTIONS
    else if (potionCheck() && state !== 3) {
        whisperParty('Hey I Need To Go Get More Potions ASAP!!!');
        new_state = 3;
    }
    //If state changed set it and announce
    if (state !== new_state) {
        // Handle BIS
        equipBIS();
        if (character.ctype === 'rogue') stop('invis');
        game_log("--- NEW STATE " + states[new_state] + " ---");
        state = new_state;
        set_message(states[state]);
    }
    // return state
    return state;
}

//State tasks
function stateTasks(state) {
    let combat;
    if (character.ctype === 'priest' || character.ctype === 'warrior') combat = checkPartyAggro(); else combat = getMonstersTargeting().length > 0;
    if (state === 99) {
        respawn();
        return true;
    } // DEAD
    if (state === 1 || combat) return false; // FARM
    if (state === 2) { // GOLD RICH
        depositGold();
        depositItems();
        return true;
    }
    if (state === 3) { // POTION PICKUP
        getPotions();
        return false;
    }
    if (state === 4) { // GEAR
        if (gearIssue()) {
            lastBankGearCheck = Date.now();
        }
        return true;
    }
}

//Potion Use
function potionController(priest = false) {
    if (!priest) {
        if (can_use('use_hp') && character.hp < character.max_hp * 0.25) {
            use('use_hp');
        } else if (can_use('use_mp') && character.mp < character.max_mp * 0.45) {
            use('use_mp');
        } else if (can_use('use_hp') && character.hp < character.max_hp * 0.45) {
            use('use_hp');
        }
    } else {
        if (character.hp < character.max_hp * 0.25) {
            if (can_use('use_hp')) use('use_hp');
            heal(character);
        } else if (can_use('use_mp') && character.mp < character.max_mp * 0.6) {
            use('use_mp');
        } else if (character.hp < character.max_hp * 0.75) {
            heal(character);
        } else if (character.hp < character.max_hp * 0.45) {
            if (can_use('use_hp')) use('use_hp');
            heal(character);
        }
    }
}

//Potion Check
function potionCheck() {
    let needPots;
    for (let type_id in buyThesePotions) {
        let type = buyThesePotions[type_id];
        let item_def = parent.G.items[type];
        if (item_def != null) {
            if (itemCount(type) < targetPotionAmount * 0.1) {
                needPots = true;
            }
        }
    }
    if (needPots) return true;
}