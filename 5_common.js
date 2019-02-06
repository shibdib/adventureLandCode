// State controller
let lastBankGearCheck;
function stateController(state) {
    // Handle BIS
    equipBIS();
    let new_state = 1;
    //KIA
    if (character.rip) {
        new_state = 99;
    } //BANKING
    else if (character.gold >= 50000 || openInventorySpots() < 30) {
        new_state = 2;
    } //GEAR
    else if (countEmptyGear() >= 15 || !lastBankGearCheck || lastBankGearCheck + 1800000 < Date.now()) {
        new_state = 4;
    } //POTIONS
        /**
    else if (potion_check()) {
        new_state = 3;
    }**/
    //If state changed set it and announce
    if (state !== new_state) {
        game_log("--- NEW STATE " + states[new_state] + " ---");
        state = new_state;
    }
    return state;
}

//State tasks
function stateTasks(state, combat) {
    if (state === 99) return respawn(); // DEAD
    if (state === 1 || combat) return false; // FARM
    if (state === 2) { // GOLD RICH
        state = stateController(state);
        depositGold();
        return depositItems();
    }
    if (state === 3) { // POTIONS
        return false;
    }
    if (state === 4) { // GEAR
        lastBankGearCheck = Date.now();
        return gearIssue();
    }
}

//Potion Use
function potionController(priest = false) {
    if (!priest) {
        if (can_use('use_hp') && character.hp < character.max_hp * 0.25) {
            use('use_hp');
        } else if (can_use('use_mp') && character.mp < character.max_mp * 0.75) {
            use('use_mp');
        } else if (can_use('use_hp') && character.hp < character.max_hp * 0.45) {
            use('use_hp');
        }
    } else {
        if (character.hp < character.max_hp * 0.25) {
            if (can_use('use_hp')) use('use_hp');
            heal(character);
        } else if (can_use('use_mp') && character.mp < character.max_mp * 0.98) {
            use('use_mp');
        } else if (character.hp < character.max_hp * 0.75) {
            heal(character);
        } else if (character.hp < character.max_hp * 0.45) {
            if (can_use('use_hp')) use('use_hp');
            heal(character);
        }
    }
}