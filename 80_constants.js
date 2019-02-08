let pveCharacters = [
    {'name': 'Shibtank', 'class': 'warrior', 'slot': 12, 'role': 'tank'},
    {'name': 'Shibdib', 'class': 'mage', 'slot': 13, 'role': 'dps'},
    {'name': 'Shibheal', 'class': 'priest', 'slot': 10, 'role': 'healer'},
    {'name': 'Shibgank', 'class': 'rogue', 'slot': 14, 'role': 'dps'},
    {'name': 'Shibtard', 'class': 'ranger', 'slot': 11, 'role': 'dps'},
    {'name': 'Shibmerch', 'class': 'merchant', 'slot': 15, 'role': 'merchant'}
];

// Potion count
let targetPotionAmount = 100;

// Target for upgrades
let combineUpgradeTarget = 6;

// The merchant will attempt to combine these
let combineTargets = ['hpbelt', 'hpamulet', 'intearring', 'dexearring', 'vitearring', 'strearring', 'molesteeth', 'strring', 'vitring',
    'dexring', 'intring', 'ringsj', 'suckerpunch', 't2intamulet', 't2dexamulet', 't2stramulet', 'intamulet', 'santasbelt' , 'warmscarf', 'darktristone',
    'solitaire', 'dexamulet', 'amuletofm', 'tristone', 'xptome', 'stramulet', 'lostearring', 'wbook1', 'wbook0', 'strbelt', 'dexbelt', 'intbelt'];

// The merchant will attempt to upgrade these
let upgradeTargets = ['quiver', 'shield', 'bow', 'helmet', 'shoes', 'gloves', 'pants', 'coat', 'blade', 'claw', 'staff', 'wshield'];

// The merchant will attempt to exchange these
let exchangeItems = [{item: 'redenvelopev2', npc: 'exchange'}];

// The merchant will attempt to destroy these
let trashItems = ['firecrackers'];

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