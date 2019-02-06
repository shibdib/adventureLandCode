game_log("---Merchant Script Start---");
load_code(2);
let lastBankCheck, bankDetails, potionsNeeded, state;
let spendingAmount = 1000000;

//State Controller
setInterval(function () {
    state = merchantStateController(state);
}, 5000);

//Primary Loop
setInterval(function () {
    if (character.rip) {
        primary = undefined;
        currentTarget = undefined;
        state = 99;
    }
    if (!state) return;
    if (!merchantStateTasks(state)) sell();
}, 100);

//State tasks
function merchantStateTasks(state) {
    if (state === 99) {
        respawn();
        return true;
    } // DEAD
    if (state === 12) { // WALLET REFILL
        withdrawGold(spendingAmount - character.gold);
        return true;
    }
    if (state === 8) { // POTION RESTOCK
        resupply_potions(100);
        return true;
    }
    if (state === 2) { // Deposits
        depositGold();
        depositItems();
        return true;
    }
    if (state === 9) { // MERCHANT SALES
        if (distanceToPoint(50, 9) && distanceToPoint(50, 9) < 15) use('stand1'); else shibMove(50, 9);
        return false;
    }
    if (state === 11) { // ACCOUNTING
        bankDetails = accounting();
        if (bankDetails) {
            lastBankCheck = Date.now();
            return false;
        }
        return true;
    }
}

// State controller
function merchantStateController(state) {
    if (bankDetails) {
        if ((!bankDetails['hpot1'] || bankDetails['hpot1'] < 200) || (!bankDetails['mpot1'] || bankDetails['mpot1'] < 200)) potionsNeeded = true; else potionsNeeded = undefined;
        if (bankDetails['gold'] < spendingAmount) spendingAmount = bankDetails['gold'];
    }
    let new_state = 9;
    //KIA
    if (character.rip) {
        new_state = 99;
    } //ACCOUNTING
    else if (!lastBankCheck || lastBankCheck + 900000 < Date.now()) {
        new_state = 11;
    } //NO POORS
    else if (character.gold < spendingAmount * 0.25) {
        new_state = 12;
    } // Deposits
    else if (character.gold >= spendingAmount * 2) {
        new_state = 2;
    }   //POTION RESTOCK
    else if (potionsNeeded) {
        new_state = 8;
    }
    //If state changed set it and announce
    if (state !== new_state) {
        game_log("--- NEW STATE " + states[new_state] + " ---");
        state = new_state;
    }
    return state;
}