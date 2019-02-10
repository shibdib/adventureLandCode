let pveCharacters = [
    {'name': 'Shibtank', 'class': 'warrior', 'slot': 12, 'role': 'tank'},
    {'name': 'Shibdib', 'class': 'mage', 'slot': 13, 'role': 'dps'},
    {'name': 'Shibheal', 'class': 'priest', 'slot': 10, 'role': 'healer'},
    {'name': 'Shibgank', 'class': 'rogue', 'slot': 14, 'role': 'dps'},
    {'name': 'Shibtard', 'class': 'ranger', 'slot': 11, 'role': 'dps'},
    {'name': 'Shibmerch', 'class': 'merchant', 'slot': 15, 'role': 'merchant'}
];

// Potion count
let targetPotionAmount = 250;

// Target for upgrades
let combineUpgradeTarget = 6;

// The merchant will attempt to combine these
let combineTargets = ['hpbelt', 'hpamulet', 'intearring', 'dexearring', 'vitearring', 'strearring', 'molesteeth', 'strring', 'vitring',
    'dexring', 'intring', 'ringsj', 'suckerpunch', 't2intamulet', 't2dexamulet', 't2stramulet', 'intamulet', 'santasbelt' , 'warmscarf', 'darktristone',
    'solitaire', 'dexamulet', 'amuletofm', 'tristone', 'xptome', 'stramulet', 'lostearring', 'wbook1', 'wbook0', 'strbelt', 'dexbelt', 'intbelt'];

// The merchant will attempt to upgrade these
let upgradeTargets = ['quiver', 'shield', 'bow', 'helmet', 'shoes', 'gloves', 'pants', 'coat', 'blade', 'claw', 'staff', 'wshield'];

// The merchant will attempt to exchange these
let exchangeItems = [{item: 'redenvelopev2', npc: 'exchange'}, {item: 'candypop', npc: 'exchange', amount: 10}, {item: 'armorbox', npc: 'exchange'}, {item: 'weaponbox', npc: 'exchange'}];

// The merchant will attempt to destroy these
let trashItems = ['firecrackers'];

// Don't sell these
let noSell = ['stand0', 'stand1', 'cdragon'];

//GEARSCORE
// These items are not equipped
let ignoredItems = ['cupid'];
// Change to force update of gear score
let attributeVersion = 1;
// Stat weights (1-10)
let attributeWeights = {
    'priest': {
        "dex": 2,
        "int": 10,
        "vit": 5,
        "str": 2,
        "attack": 6,
        "armor": 3,
        "speed": 3,
        "range": 7,
        "crit": 2,
        "evasion": 1,
        "resistance": 5,
        "rpiercing": 6,
        "lifesteal": 1,
        "stat": 2
    },
    'ranger': {
        "dex": 10,
        "int": 2,
        "vit": 5,
        "str": 3,
        "attack": 9,
        "armor": 2,
        "speed": 6,
        "range": 9,
        "crit": 2,
        "evasion": 1,
        "resistance": 3,
        "rpiercing": 1,
        "lifesteal": 1,
        "stat": 2
    },
    'warrior': {
        "dex": 2,
        "int": 2,
        "vit": 8,
        "str": 10,
        "attack": 6,
        "armor": 9,
        "speed": 1,
        "range": 1,
        "crit": 1,
        "evasion": 6,
        "resistance": 6,
        "rpiercing": 1,
        "lifesteal": 7,
        "stat": 2
    },
    'rogue': {
        "dex": 10,
        "int": 2,
        "vit": 4,
        "str": 3,
        "attack": 9,
        "armor": 3,
        "speed": 8,
        "range": 1,
        "crit": 5,
        "evasion": 6,
        "resistance": 3,
        "rpiercing": 5,
        "lifesteal": 3,
        "stat": 5
    },
    'overall': {
        "dex": 5,
        "int": 5,
        "vit": 5,
        "str": 5,
        "attack": 5,
        "armor": 5,
        "speed": 5,
        "range": 5,
        "crit": 5,
        "evasion": 5,
        "resistance": 5,
        "rpiercing": 5,
        "lifesteal": 5,
        "stat": 2
    }
};

// Don't edit below this
let states = {
    1: 'farm',
    2: 'banking',
    3: 'potions',
    4: 'equip',
    5: 'crafting',
    6: 'upgrading',
    7: 'combining',
    8: 'potionBuying',
    9: 'merchantTasks',
    10: 'rest',
    11: 'accounting',
    99: 'dead'
};