// Improved runners (Some include functions)

// Improved equip
// Removes the item from your character.items (Inventory)
// Helps when equipping multiple of the same item (rings/earrings)
function equip(num, slot) {
    character.items[num] = undefined;
    parent.socket.emit("equip", {num: num, slot: slot});
}

// Fix party runners
// They don't do anything default
function on_party_request(name) {
    accept_party_request(name);
}

// Fix party runners
function on_party_invite(name) {
    accept_party_invite(name);
}

//Improved can_use runner
//Performs many more checks
//Includes some custom functions
let cooldowns = {};
function can_use(name, target = undefined) {
    if (!G.skills[name]) return false;
    if (character.rip) return false;
    if (G.skills[name].class && !in_arr(character.ctype, G.skills[name].class)) return false; // checks the class
    if (G.skills[name].level && character.level < G.skills[name].level) return false; // checks the level
    if (G.skills[name].mp && character.mp < G.skills[name].mp) return false; // checks mp
    if (G.skills[name].wtype && !checkForWeaponType(G.skills[name].wtype)) return false; // checks for weapon
    if (G.skills[name].consume && !getInventorySlot(G.skills[name].consume)) return false; // checks for consumable
    if (target && G.skills[name].range && parent.distance(character, target) > G.skills[name].range) return false; // checks for range
    if (target && checkEntityForBuff(target, name)) return false; // checks if this is already applied
    if (!target && checkEntityForBuff(character, name)) return false; // checks if this is already applied to yourself
    if (cooldowns[name] && cooldowns[name] + G.skills[name].cooldown > Date.now()) return false; // Better cooldown check
    return true;
}

//Improved Use
function use(name, target, force = false) {
    if (isNaN(name)) {
        if (!target) target = get_target();
        // Pot check
        if (!force && !can_use(name, target)) return;
        parent.use_skill(name, target);
        cooldowns[name] = Date.now();
    } else {
        equip(name);
    }
}

// Improved bank_store by Shibdib
function bank_store(inventorySlot) {
    // Shibdib update 02/16/2019 - This will now iterate thru all packs
    // 02/17/2019 - Fixed an issue with stackable items being swapped instead of stacked
    // Old way would not look beyond the first pack that had any open slots
    if (!character.bank) return game_log("Not inside the bank");
    if (!character.items[inventorySlot]) return game_log("No item in that spot");
    let pack, stack;
    let bankSlot = -1;
    // If item is stackable look for the slot
    if (G.items[character.items[inventorySlot].name] && G.items[character.items[inventorySlot].name].s) {
        let stackSlot = getItemBankSlot(character.items[inventorySlot].name);
        if (stackSlot) {
            parent.socket.emit("bank", {operation: "swap", pack: stackSlot.pack, str: -1, inv: inventorySlot});
        }
    }
    for (let key of Object.keys(character.bank)) {
        let bankPack = character.bank[key];
        // Skip the gold tab
        if (!Array.isArray(bankPack)) continue;
        for (let slot in bankPack) {
            if (!bankPack[slot]) {
                pack = key;
                bankSlot = slot;
            }
        }
    }
    if (!pack) return game_log("Bank is full!");
    if (!stack) character.bank[pack][bankSlot] = 'holder';
    parent.socket.emit("bank", {operation: "swap", pack: pack, str: bankSlot, inv: inventorySlot});
}