game_log("---Mage Script Start---");
load_code(2);
let combat;
let state = stateController();

//State Controller
setInterval(function () {
    state = stateController(state);
}, 5000);

//Primary Loop
setInterval(function () {
    if (!state) return;
    if (!stateTasks(state)) farm();
}, 250);

//Fast Loop
setInterval(function () {
    // Update your data
    updateCharacterData();
}, 75);

function farm() {
    loot();
    potionController();
    // Mark in combat if anyone in the party is being targeted
    if (character.party) combat = checkPartyAggro(); else return shibMove('main');
    let leader = get_player(character.party);
    // Fleet if tank is gone
    if (!leader) return moveToLeader(character.range * 0.5, character.range * 0.7);
    // If you need to blink to leader do it
    if (can_use('blink') && blinkToLeader()) return;
    let target = getMonstersTargeting(leader)[0] || findLeaderTarget() || checkPartyAggro()
    let magiPortTarget = getMagiPortTarget();
    if (magiPortTarget && can_use('magiport')) {
        parent.d_text("MAGIPORT FOR "+ magiPortTarget + "!",character,{color:"#ffc230"});
        if (character.mp < 900) use('use_mp'); else use('magiport', magiPortTarget);
    } else if (target) {
        // Energize the party
        if (can_use('energize')) randomEnergize();
        if (can_attack(target) && (checkTankAggro() || canOneShot(target))) {
            // Use burst when high mana
            if (character.mp >= character.max_mp * 0.5 && can_use('burst', target)) {
                parent.d_text("BURST!",character,{color:"#ffc230"});
                if (can_use('cburst', target)) use('cburst', target); else use('burst', target);
            }
            // Attack
            attack(target);
            kite();
        } else {
            // If you need to kite do so, otherwise get in range
            if (nearbyAggressors(150, true).length) kite(); else moveToTarget(target, character.range * 0.5, character.range * 0.99);
        }
    } else {
        if (nearbyAggressors(150, true).length) kite(); else if (!combat) moveToLeader(); else kite();
    }
}

function blinkToLeader() {
    if (parent.party_list.length > 0 && character.max_mp > 1600) {
        let leader = get_player(character.party);
        if (!leader) {
            if (character.mp < 1600) {
                use('use_mp');
            } else {
                parent.d_text("BLINKING!",character,{color:"#ffc230"});
                use('blink', parent.party[character.party].x, parent.party[character.party].y);
            }
            return true;
        }
    }
}

function getMagiPortTarget() {
    if (parent.party_list.length > 0) {
        let leader = get_player(character.party);
        // Don't teleport unless you're with the party;
        if (!leader || parent.distance(character, leader) > 250) return;
        let partyInfo = get_player(character.party);
        for (let key in parent.party_list) {
            let member = parent.party_list[key];
            let memberData = getCharacterData()[member];
            let entity = parent.entities[member];
            // Skip yourself
            if (member === character.name) continue;
            // If we have member data and they're not in farm mode skip
            if (memberData && memberData.state !== 1) continue;
            // Don't teleport the tank unless you're in combat
            if (member === character.party && !combat) continue;
            // Don't teleport the merchant
            if (parent.party[member].type === 'merchant') continue;
            // Don't teleport the dead
            if ((entity && entity.rip) || member.rip) continue;
            if (!entity || distanceToPoint(entity.real_x, entity.real_y) >= 1000) return member;
        }
    }
}

function randomEnergize() {
    if (parent.party_list.length > 0) {
        for (let key in shuffle(parent.party_list)) {
            let member = parent.party_list[key];
            let entity = parent.entities[member];
            // Don't energize far away, high mp, has energize or merchants
            if (!entity || entity.ctype === 'merchant' || entity.mp > entity.max_mp * 0.11 || checkEntityForBuff(entity, 'energized')) continue;
            if (Math.random() > 0.7) {
                parent.d_text("ENERGIZING "+ member + "!",character,{color:"#ffc230"});
                if (member !== character.name) whisperParty('Energizing ' + member + ' with increased MP regen and Attack Speed.'); else whisperParty('Energizing myself.');
                use('energize', entity);
            }
        }
    }
}