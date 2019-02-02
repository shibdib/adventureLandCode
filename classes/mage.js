game_log("---Script Start---");
//Put monsters you want to kill in here
//If your character has no target, it will travel to a spawn of the first monster in the list below.
let ignore_targets = ["Target Automatron"];
let state = "farm";
let min_potions = 50; //The number of potions at which to do a resupply run.
let purchase_amount = 50;//How many potions to buy at once.
let potion_types = ["hpot0", "mpot0"];//The types of potions to keep supplied.

//Movement And Attacking
setInterval(function () {
    loot();
    if (state === 'farm') farm();
    if (state === 'resupply_potions') resupply_potions();
}, 100);//Execute 10 times per second

//Potions And Looting
setInterval(function () {
    state_controller();
    //Heal With Potions if we're below 75% hp.
    if (character.hp / character.max_hp < 0.75 || character.mp / character.max_mp < 0.75) {
        use_hp_or_mp();
    }
}, 500);//Execute 2 times per second

function state_controller() {
    //Default to farming
    let new_state = "farm";
    //Do we need potions?
    for (type_id in potion_types) {
        let type = potion_types[type_id];
        let num_potions = num_items(type);
        if (num_potions < min_potions) {
            new_state = "resupply_potions";
            break;
        }
    }
    if (state != new_state) {
        game_log("---NEW STATE " + new_state + "---");
        state = new_state;
    }
}

let currentTarget = {};
function farm() {
    let target = find_viable_targets(character.attack * 0.8, character.max_xp * 0.25)[0] || get_nearest_monster({max_att:character.attack * 0.8,min_xp:1,no_target:true});
    if (target && target.id) {
        currentTarget[character.id] = target;
        let range = distance_to_point(target.real_x, target.real_y);
        if (range < character.range) {
            if (can_attack(target))  attack(target);
            if (range <= character.range * 0.7) {
                let kiteLocation = getKitePosition(target);
                if (kiteLocation) move_to_position(kiteLocation)
            }
        } else {
            move_to_target(target);
        }
    } else {
        currentTarget[character.id] = undefined;
    }
}

function getKitePosition(target) {
    let range = distance_to_point(target.real_x, target.real_y);
    for (let x = 0; x < 20; x++) {
        let xChange = getRndInteger(-character.range, character.range);
        let yChange = getRndInteger(-character.range, character.range);
        if (can_move_to(character.real_x + xChange, character.real_y + yChange)) {
            let newRange = distance_between_points(character.real_x + xChange, character.real_y + yChange, target.real_x, target.real_y);
            if (newRange > range && newRange >= character.range * 0.95 && newRange <= character.range) return {x: character.real_x + xChange, y: character.real_y + yChange};
        }
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function distance_to_point(x, y) {
    return Math.sqrt(Math.pow(character.real_x - x, 2) + Math.pow(character.real_y - y, 2));
}

function distance_between_points(x, y, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x, 2) + Math.pow(y2 - y, 2));
}

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

//Returns the distance of the character to a point in the world.
function distance_to_point(x, y) {
    return Math.sqrt(Math.pow(character.real_x - x, 2) + Math.pow(character.real_y - y, 2));
}

//Returns the distance of the character to a point in the world.
function distance_between_points(x, y, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x, 2) + Math.pow(y2 - y, 2));
}

//This function will ether move straight towards the target entity,
//or utilize smart_move to find their way there.
function move_to_target(target) {
    if (can_move_to(target.real_x, target.real_y)) {
        smart.moving = false;
        smart.searching = false;
        move(
            character.real_x + (target.real_x - character.real_x) / 2,
            character.real_y + (target.real_y - character.real_y) / 2
        );
    }
    else {
        if (!smart.moving) {
            smart_move({x: target.real_x, y: target.real_y});
        }
    }
}

//This function will ether move straight towards the target entity,
//or utilize smart_move to find their way there.
function move_to_position(position) {
    if (can_move_to(position.x, position.y)) {
        smart.moving = false;
        smart.searching = false;
        move(
            character.real_x + (position.x - character.real_x) / 2,
            character.real_y + (position.y - character.real_y) / 2
        );
    }
    else {
        if (!smart.moving) {
            smart_move({x: position.x, y: position.y});
        }
    }
}

//Returns an ordered array of all relevant targets as determined by the following:
////1. The monsters' type is contained in the 'monsterTargets' array.
////2. The monster is attacking you or a party member.
////3. The monster is not targeting someone outside your party.
//The order of the list is as follows:
////Monsters attacking you or party members are ordered first.
////Monsters are then ordered by distance.
function find_viable_targets(maxAttack, minXp) {
    let monsters = Object.values(G.monsters).filter(mob => (!mob.target || parent.party_list.includes(mob.target) || mob.target == character.name)
        && !ignore_targets.includes(mob.name) && can_attack(mob) && !mob.stationary && mob.attack > 0 && mob.attack < maxAttack && mob.xp >= minXp);
    /**for (monster of monsters) {
        if (parent.party_list.includes(monster.target)
            || monster.target == character.name) {
            monster.targeting_party = 1;
        } else {
            monster.targeting_party = 0;
        }
    }**/
    let partyTargets = monsters.filter((m) => parent.party_list.includes(m.target));
    if (partyTargets.length) monsters = partyTargets;
    //Order monsters by whether they're attacking us, then by distance.
    monsters.sort(function (current, next) {
        let dist_current = parent.distance(character, current);
        let dist_next = parent.distance(character, next);
        // Else go to the 2nd item
        if (dist_current < dist_next) {
            return -1;
        }
        else if (dist_current > dist_next) {
            return 1
        }
        else {
            return 0;
        }
    });
    return monsters;
}