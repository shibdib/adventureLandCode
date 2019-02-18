let pveCharacters = [
    {'name': 'Shibtank', 'class': 'warrior', 'slot': 12, 'role': 'tank'},
    {'name': 'Shibdib', 'class': 'mage', 'slot': 13, 'role': 'dps'},
    {'name': 'Shibheal', 'class': 'priest', 'slot': 10, 'role': 'healer'},
    {'name': 'Shibgank', 'class': 'rogue', 'slot': 14, 'role': 'dps'},
    {'name': 'Shibtard', 'class': 'ranger', 'slot': 11, 'role': 'dps'},
    {'name': 'Shibmerch', 'class': 'merchant', 'slot': 15, 'role': 'merchant'}
];

//The types of potions to keep supplied.
let buyThesePotions = ["hpot1", "mpot1"];

// Avoid attacking these
let avoidMtypes = ['scorpion', 'phoenix', 'booboo', 'dknight2', 'boar'];
// Avoid going here
let avoidMaps = ["tunnel"];
// Event targets
let eventMobs = ['snowman', 'goblin', 'pinkgoo'];
// Loot targets (These will always be in the array of possibles as they drop something worthwhile.
let lootTargets = ['tortoise', 'poisio'];

// Items to have in the inventories of each class
let classInventory = {
    'warrior': ['basher'],
    'rogue': ['poison'],
    'ranger': ['poison', 'cupid'],
    'priest': [],
    'mage': [],
    'merchant': []
};

// Filter words from log
let filterWord = ['gold', 'killed', 'speed'];

// Potion count
let targetPotionAmount = 500;

// Merchant stuff
let spendingAmount = 10000000;
// Target for upgrades
let normalLevelTarget = 8;
let highLevelTarget = 8;
let epicLevelTarget = 5;

// The merchant will attempt to combine these to the target level
let combineTargets = ['hpbelt', 'hpamulet', 'intearring', 'dexearring', 'vitearring', 'strearring', 'molesteeth', 'strring', 'vitring',
    'dexring', 'intring', 'ringsj', 'suckerpunch', 't2intamulet', 't2dexamulet', 't2stramulet', 'intamulet', 'santasbelt', 'warmscarf', 'darktristone',
    'solitaire', 'dexamulet', 'amuletofm', 'tristone', 'xptome', 'stramulet', 'lostearring', 'wbook1', 'wbook0', 'strbelt', 'dexbelt', 'intbelt'];

// The merchant will attempt to upgrade these
let upgradeTargets = ['quiver', 'shield', 'bow', 'helmet', 'shoes', 'gloves', 'pants', 'coat', 'blade', 'claw', 'staff', 'wshield',
    'helmet1', 'shoes1', 'gloves1', 'pants1', 'coat1', 't2bow', 'cupid', 'pmace', 'firestaff', 'harbringer', 'basher', 'fireblade', 'spear', 'throwingstars'];

// The merchant will attempt to exchange these
let exchangeItems = [{item: 'redenvelopev2', npc: 'exchange'}, {item: 'candypop', npc: 'exchange', amount: 10},
    {item: 'armorbox', npc: 'exchange'}, {item: 'weaponbox', npc: 'exchange'}, {item: 'gem0', npc: 'exchange'},
    {item: 'seashell', npc: 'fisherman', amount: 20}];

// The merchant will attempt to destroy these
let trashItems = [];

// Don't sell these
let noSell = ['stand0', 'stand1', 'cdragon', 'poison'];

// Passively sell these
let sellList = ['hpbelt', 'hpamulet', 'intearring', 'dexearring', 'vitearring', 'firecrackers'];

// Passively buy these
let buyTargets = [{item: 'poison', amount: 20}, {item: 'armorbox', amount: 1}, {item: 'weaponbox', amount: 1}];

//GEARSCORE
// These items are not equipped
let ignoredItems = ['cupid'];
// Change to force update of gear score
let attributeVersion = 4;
// Stat weights (1-10)
let attributeWeights = {
    'priest': {
        "dex": 0,
        "int": 10,
        "vit": 3,
        "str": 0,
        "attack": 10,
        "armor": 0,
        "speed": 2,
        "range": 8,
        "crit": 2,
        "evasion": 1,
        "resistance": 5,
        "rpiercing": 7,
        "apiercing": 0,
        "lifesteal": 1,
        "stat": 5,
        "hp": 3,
        "mp": 6
    },
    'mage': {
        "dex": 0,
        "int": 10,
        "vit": 3,
        "str": 0,
        "attack": 10,
        "armor": 1,
        "speed": 2,
        "range": 8,
        "crit": 2,
        "evasion": 1,
        "resistance": 5,
        "rpiercing": 8,
        "apiercing": 0,
        "lifesteal": 1,
        "stat": 5,
        "hp": 3,
        "mp": 6
    },
    'ranger': {
        "dex": 10,
        "int": 0,
        "vit": 5,
        "str": 2,
        "attack": 9,
        "armor": 2,
        "speed": 6,
        "range": 9,
        "crit": 2,
        "evasion": 1,
        "resistance": 3,
        "rpiercing": 0,
        "apiercing": 5,
        "lifesteal": 1,
        "stat": 5,
        "hp": 3,
        "mp": 1
    },
    'warrior': {
        "dex": 1,
        "int": 0,
        "vit": 8,
        "str": 10,
        "attack": 6,
        "armor": 9,
        "speed": 1,
        "range": 1,
        "crit": 1,
        "evasion": 6,
        "resistance": 6,
        "rpiercing": 0,
        "apiercing": 5,
        "lifesteal": 7,
        "stat": 5,
        "hp": 6,
        "mp": 1
    },
    'rogue': {
        "dex": 10,
        "int": 0,
        "vit": 2,
        "str": 3,
        "attack": 9,
        "armor": 2,
        "speed": 8,
        "range": 1,
        "crit": 5,
        "evasion": 7,
        "resistance": 3,
        "rpiercing": 0,
        "apiercing": 5,
        "lifesteal": 3,
        "stat": 5,
        "hp": 3,
        "mp": 1
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
        "apiercing": 5,
        "lifesteal": 5,
        "stat": 5,
        "hp": 5,
        "mp": 5
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
    12: 'stating',
    99: 'dead'
};