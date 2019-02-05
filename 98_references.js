//Keys
let keys = [
    "tilesets",
    "images",
    "classes",
    "dimensions",
    "maps",
    "inflation",
    "version",
    "cosmetics",
    "conditions",
    "monsters",
    "itemsets",
    "shells_to_gold",
    "docs",
    "dismantle",
    "tokens",
    "craft",
    "animations",
    "items",
    "npcs",
    "geometry",
    "positions",
    "events",
    "skills",
    "levels",
    "games",
    "sets",
    "sprites",
    "quests"
];
//Character Obj
let char_obj = {
    "tempDisplayObjectParent": null,
    "alpha": 1,
    "visible": true,
    "renderable": true,
    "worldAlpha": 1,
    "filterArea": null,
    "blendMode": 0,
    "shader": null,
    "cachedTint": 16777215,
    "vertexTrimmedData": null,
    "pluginName": "sprite",
    "roundPixels": false,
    "cskin": "10",
    "i": 1,
    "j": 0,
    "skin": "mwarrior2",
    "stype": "full",
    "updates": 20968,
    "cscale": 2,
    "hp": 979,
    "max_hp": 1001,
    "mp": 168,
    "max_mp": 395,
    "xp": 525874,
    "attack": 98,
    "frequency": 0.7826810477657935,
    "speed": 67,
    "range": 23,
    "armor": 122,
    "resistance": 66,
    "level": 39,
    "rip": false,
    "afk": false,
    "s": {
        "mluck": {
            "ms": 2536587,
            "f": "Lootbot"
        }
    },
    "c": {},
    "age": 4,
    "id": "Shibtank",
    "in": "main",
    "cid": 22,
    "cx": [],
    "slots": {
        "ring1": {
            "name": "ringsj",
            "level": 0
        },
        "ring2": null,
        "earring1": null,
        "earring2": null,
        "belt": {
            "name": "hpbelt",
            "level": 0
        },
        "mainhand": {
            "name": "blade",
            "level": 0
        },
        "offhand": {
            "name": "wshield",
            "level": 0
        },
        "helmet": {
            "name": "helmet",
            "level": 0
        },
        "chest": {
            "name": "coat",
            "level": 0
        },
        "pants": {
            "name": "pants",
            "level": 0
        },
        "shoes": null,
        "gloves": {
            "name": "gloves",
            "level": 0
        },
        "amulet": {
            "name": "hpamulet",
            "level": 0
        },
        "orb": null,
        "elixir": null,
        "cape": null
    },
    "ctype": "warrior",
    "owner": "5835788110528512",
    "guild": "",
    "stats": {
        "dex": 12,
        "int": 12,
        "vit": 19,
        "str": 50
    },
    "mp_cost": 5,
    "max_xp": 580000,
    "goldm": 1,
    "xpm": 1,
    "luckm": 1.12,
    "map": "main",
    "isize": 42,
    "esize": 31,
    "gold": 181427,
    "cash": 50,
    "targets": 0,
    "m": 1,
    "evasion": 0,
    "miss": 0,
    "reflection": 0,
    "lifesteal": 0,
    "rpiercing": 0,
    "apiercing": 0,
    "crit": 0,
    "dreturn": 0,
    "tax": 0.04,
    "items": [
        {
            "name": "hpot0",
            "q": 61
        },
        {
            "name": "ringsj",
            "level": 0
        },
        {
            "name": "seashell",
            "q": 39
        },
        {
            "name": "hpbelt",
            "level": 0
        },
        {
            "name": "hpbelt",
            "level": 0
        },
        {
            "name": "gem0",
            "q": 1
        },
        {
            "name": "ringsj",
            "level": 0
        },
        {
            "name": "hpamulet",
            "level": 0
        },
        {
            "name": "redenvelopev2",
            "q": 9
        },
        {
            "name": "mpot0",
            "q": 61
        },
        {
            "name": "ringsj",
            "level": 0
        },
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
    ],
    "cc": 3,
    "ipass": "KMv9dkBX7t4V",
    "friends": [
        "6162976538099712"
    ],
    "info": {},
    "last_ms": "2019-02-05T05:14:08.890Z",
    "cxa": [],
    "cxc": {},
    "name": "Shibtank",
    "walking": null,
    "fx": {},
    "emblems": {},
    "real_alpha": 1,
    "real_x": -89.5,
    "real_y": 673.00001,
    "type": "character",
    "me": 1,
    "base": {
        "h": 8,
        "v": 7,
        "vn": 2
    },
    "awidth": 26,
    "aheight": 34,
    "vision": [
        700,
        500
    ],
    "last_targets": 0,
    "updateOrder": 11844698,
    "zOrder": -673.00001,
    "displayOrder": 467,
    "from_x": -89.5,
    "from_y": 673,
    "going_x": -89.5,
    "going_y": 673.00001,
    "moving": false,
    "ref_speed": 67,
    "vx": 0,
    "vy": 0,
    "angle": 90,
    "direction": 0,
    "ms_walk": "2019-02-05T05:12:50.491Z",
    "last_stop": "2019-02-05T05:12:50.706Z",
    "last_walking": 20,
    "move_num": 8142053,
    "tp": false,
    "appearing": false,
    "target": null,
    "code": false
}
//Skills
let skills_ref = {
    "use_town": {
        "explanation": "Teleports you to the center of the map.",
        "cooldown": 0,
        "type": "ability",
        "name": "Town",
        "skin": "use_town"
    },
    "move_right": {
        "ui": false,
        "explanation": "Moves the character rightwards",
        "type": "utility",
        "name": "Move Right",
        "skin": "right"
    },
    "blink": {
        "name": "Blink",
        "explanation": "Teleport to a nearby location.",
        "cooldown": 1200,
        "mp": 1600,
        "skin": "skill_blink",
        "type": "skill",
        "class": [
            "mage"
        ]
    },
    "mluck": {
        "explanation": "Buff a target to increase their luck. 2% chance for you to receive a duplicate of their looted items!",
        "cooldown": 100,
        "skin": "buff_luck",
        "class": [
            "merchant"
        ],
        "condition": "mluck",
        "name": "Merchant's Luck",
        "target": true,
        "level": 40,
        "range": 320,
        "mp": 10,
        "type": "skill"
    },
    "gm": {
        "explanation": "Jump, Jail, Mute, Use Any Skill",
        "type": "gm",
        "name": "GM Abilities",
        "skin": "gm"
    },
    "darkblessing": {
        "explanation": "Increases damage by 25% for the duration.",
        "cooldown": 60000,
        "skin": "skill_dbuff",
        "duration": 8000,
        "class": [
            "priest"
        ],
        "condition": "darkblessing",
        "name": "Dark Blessing",
        "level": 70,
        "range": 600,
        "mp": 900,
        "type": "skill"
    },
    "move_up": {
        "ui": false,
        "explanation": "Moves the character upwards",
        "type": "utility",
        "name": "Move Up",
        "skin": "up"
    },
    "supershot": {
        "range": "3X",
        "cooldown": 30000,
        "target": true,
        "name": "Supershot",
        "skin": "skill_supershot",
        "explanation": "Deals 1.5X instant damage from an incredible distance.",
        "dmultiplier": 1.5,
        "type": "skill",
        "class": [
            "ranger"
        ],
        "mp": 400
    },
    "move_left": {
        "ui": false,
        "explanation": "Moves the character leftwards",
        "type": "utility",
        "name": "Move Left",
        "skin": "left"
    },
    "interact": {
        "ui": false,
        "explanation": "Interact with the nearest game entity, a door, doorway, or NPC.",
        "type": "utility",
        "name": "Interact",
        "skin": "interact"
    },
    "phaseout": {
        "consume": "shadowstone",
        "explanation": "Absorb a shadow stone to phase yourself out from this universe.",
        "cooldown": 4000,
        "skin": "skill_phaseout",
        "duration": 5000,
        "class": [
            "priest"
        ],
        "condition": "phaedout",
        "name": "Phase Out",
        "level": 64,
        "mp": 200,
        "type": "skill"
    },
    "revive": {
        "target": true,
        "range": 160,
        "cooldown": 200,
        "consume": "essenceoflife",
        "name": "Revive!",
        "skin": "skill_revive",
        "explanation": "1) Heal a fellow adventurer to full hp. 2) Revive using an essence of life.",
        "type": "skill",
        "class": [
            "priest"
        ],
        "mp": 500
    },
    "stack": {
        "explanation": "Slowly learning the ways of your opponent each rogue attack deals one more pure damage.",
        "type": "passive",
        "class": [
            "rogue"
        ],
        "name": "Stacked Damage",
        "skin": "skill_stack"
    },
    "charge": {
        "cooldown": 40000,
        "name": "Charge",
        "skin": "skill_charge",
        "duration": 3200,
        "explanation": "Gain 30 Speed for a short duration.",
        "type": "skill",
        "class": [
            "warrior"
        ],
        "mp": 0
    },
    "partyheal": {
        "explanation": "Heals all the party members.",
        "cooldown": 200,
        "skin": "skill_pheal",
        "class": [
            "priest"
        ],
        "name": "Party Heal",
        "output": 400,
        "levels": [
            [
                0,
                500
            ],
            [
                60,
                600
            ],
            [
                72,
                720
            ],
            [
                80,
                800
            ]
        ],
        "mp": 400,
        "action": "heal",
        "party": true,
        "type": "skill"
    },
    "3shot": {
        "targets": true,
        "cooldown": "1X",
        "name": "3-Shot",
        "skin": "skill_3shot",
        "share": "attack",
        "explanation": "Hits 3 targets at once! Deals 0.7X damage to each target.",
        "level": 60,
        "type": "skill",
        "class": [
            "ranger"
        ],
        "mp": 300
    },
    "quickpunch": {
        "explanation": "Use your agility to quickly punch your opponent between your devastating attacks!",
        "cooldown": 250,
        "skin": "skill_quickpunch",
        "dmultiplier": 0.25,
        "class": [
            "rogue"
        ],
        "name": "Quick Punch",
        "target": true,
        "wtype": "fist",
        "range": "1X",
        "mp": 240,
        "type": "skill"
    },
    "rspeed": {
        "explanation": "Buff a target to increase their speed",
        "cooldown": 100,
        "skin": "buff_speed",
        "class": [
            "rogue"
        ],
        "condition": "rspeed",
        "name": "Rogue Swiftness",
        "target": true,
        "level": 40,
        "range": 320,
        "mp": 320,
        "type": "skill"
    },
    "taunt": {
        "cooldown": 3000,
        "range": 200,
        "code": "range:min(200,attacker.range*5+20)",
        "target": true,
        "name": "Taunt",
        "skin": "skill_taunt",
        "explanation": "Taunts an enemy. Prevents players from escaping in pvp. Steals aggro from friendly targets.",
        "type": "skill",
        "class": [
            "warrior"
        ],
        "mp": 40
    },
    "stomp": {
        "explanation": "Use your basher to Stomp the ground to Stun enemies nearby!",
        "cooldown": 24000,
        "skin": "skill_stomp",
        "duration": 3200,
        "class": [
            "warrior"
        ],
        "name": "Stomp",
        "level": 52,
        "wtype": "basher",
        "range": 400,
        "mp": 120,
        "type": "skill"
    },
    "stop": {
        "explanation": "Stops your character. Cancels all channeling abilities and active skills.",
        "cooldown": 0,
        "type": "ability",
        "name": "Stop",
        "skin": "stop_g"
    },
    "shadowstrike": {
        "range": 360,
        "cooldown": 1200,
        "consume": "shadowstone",
        "name": "Shadow Strike",
        "skin": "skill_shadowstrike",
        "explanation": "Use a shadow stone to strike a random enemy in a parallel universe!",
        "level": 70,
        "type": "skill",
        "class": [
            "rogue"
        ],
        "mp": 320
    },
    "pure_eval": {
        "code": true,
        "name": "Pure Eval",
        "explanation": "[Advanced] Maps a code snippet to be run directly inside the game, rather than using CODE. (Not to be confused with the text command, /eval, which evals inside the Code iframe)",
        "skins": [
            "run_eval0",
            "run_eval1",
            "run_eval2"
        ],
        "skin": "run_eval0",
        "type": "utility"
    },
    "cburst": {
        "explanation": "A skill for experienced mages. Allows you to control your most powerful ability.",
        "share": "burst",
        "cooldown": 6000,
        "skin": "skill_cburst",
        "class": [
            "mage"
        ],
        "ratio": 0.5,
        "name": "Controlled Mana Burst",
        "level": 75,
        "list": true,
        "mp": 0,
        "type": "skill"
    },
    "hardshell": {
        "cooldown": 16000,
        "name": "Hard Shell",
        "skin": "skill_hardshell",
        "duration": 8000,
        "explanation": "Use everything at your disposal to protect yourself from physical attacks for a short duration.",
        "level": 60,
        "type": "skill",
        "class": [
            "warrior"
        ],
        "condition": "hardshell",
        "mp": 480
    },
    "use_mp": {
        "explanation": "Uses an MP potion from your inventory. If there are multiple potions, the last one is used. If there are no potions, your character regenerates a small amount of MP with a high cooldown.",
        "cooldown": 2000,
        "type": "ability",
        "name": "Use MP Potion",
        "skin": "use_mp"
    },
    "burst": {
        "target": true,
        "cooldown": 6000,
        "ratio": 0.5,
        "name": "Mana Burst",
        "skin": "skill_burst",
        "explanation": "Converts your entire mana pool to damage. Deals 0.5 magical damage for each MP.",
        "type": "skill",
        "class": [
            "mage"
        ],
        "mp": 0
    },
    "toggle_inventory": {
        "ui": false,
        "explanation": "Toggles the inventory",
        "type": "utility",
        "name": "Toggle Inventory",
        "skin": "inventory"
    },
    "toggle_stats": {
        "ui": false,
        "explanation": "Toggles the character sheet",
        "type": "utility",
        "name": "Toggle Stats",
        "skin": "stats"
    },
    "agitate": {
        "range": 320,
        "cooldown": 2200,
        "name": "Agitate",
        "skin": "skill_agitate",
        "explanation": "Taunts all nearby monsters.",
        "level": 68,
        "type": "skill",
        "class": [
            "warrior"
        ],
        "mp": 420
    },
    "poisonarrow": {
        "target": true,
        "cooldown": 300,
        "consume": "poison",
        "name": "Poison Arrow",
        "skin": "skill_poisonarrow",
        "explanation": "Fire a single low damage but poison coated arrow at your opponent.",
        "type": "skill",
        "class": [
            "ranger"
        ],
        "mp": 360,
        "damage": 200
    },
    "warcry": {
        "explanation": "Motivate your allies to fight!",
        "cooldown": 60000,
        "skin": "skill_warcry",
        "duration": 8000,
        "class": [
            "warrior"
        ],
        "condition": "warcry",
        "name": "War Cry",
        "level": 70,
        "range": 600,
        "mp": 320,
        "type": "skill"
    },
    "mcourage": {
        "cooldown": 2000,
        "name": "Merchant's Courage",
        "skin": "skill_mcourage",
        "explanation": "When you sense danger, you know what to do...",
        "level": 70,
        "type": "skill",
        "class": [
            "merchant"
        ],
        "condition": "mcourage",
        "mp": 2400
    },
    "use_hp": {
        "explanation": "Uses an HP potion from your inventory. If there are multiple potions, the last one is used. If there are no potions, your character regenerates a small amount of HP with a high cooldown.",
        "cooldown": 2000,
        "type": "ability",
        "name": "Use HP Potion",
        "skin": "use_hp"
    },
    "curse": {
        "cooldown": 5000,
        "target": true,
        "name": "Curse",
        "skin": "skill_curse",
        "duration": 5000,
        "explanation": "Cursed opponents receive 20% more damage, deal 20% less damage and they slow down by 20.",
        "type": "skill",
        "class": [
            "priest"
        ],
        "mp": 400
    },
    "toggle_character": {
        "ui": false,
        "explanation": "Toggles the character focus",
        "type": "utility",
        "name": "Toggle Character",
        "skin": "character"
    },
    "travel": {
        "explanation": "Where would you like to visit?",
        "type": "ability",
        "name": "Travel!",
        "skin": "travel"
    },
    "5shot": {
        "targets": true,
        "cooldown": "1X",
        "name": "5-Shot",
        "skin": "skill_5shot",
        "share": "attack",
        "explanation": "Hits 5 targets at once! Deals 0.5X damage to each target.",
        "level": 75,
        "type": "skill",
        "class": [
            "ranger"
        ],
        "mp": 420
    },
    "move_down": {
        "ui": false,
        "explanation": "Moves the character downwards",
        "type": "utility",
        "name": "Move Down",
        "skin": "down"
    },
    "esc": {
        "ui": false,
        "explanation": "Calls the esc_pressed() function inside the game. Major functionality.",
        "type": "utility",
        "name": "ESC",
        "skin": "esc"
    },
    "toggle_run_code": {
        "ui": false,
        "name": "Engage/Disengage Code",
        "skin": "run_code"
    },
    "attack": {
        "target": true,
        "explanation": "Attack the target",
        "type": "ability",
        "name": "Attack!",
        "skin": "attack"
    },
    "heal": {
        "target": true,
        "explanation": "Heal the target",
        "skin": "heal",
        "type": "ability",
        "class": [
            "priest"
        ],
        "name": "Heal!"
    },
    "track": {
        "range": 1440,
        "cooldown": 1600,
        "name": "Track",
        "skin": "skill_track",
        "explanation": "Use your fine-tuned senses to detect others.",
        "type": "skill",
        "class": [
            "ranger"
        ],
        "mp": 80
    },
    "absorb": {
        "range": 240,
        "cooldown": 400,
        "target": true,
        "name": "Absorb Sins",
        "skin": "skill_absorbsins",
        "explanation": "Pulls all targets from a friendly character.",
        "level": 55,
        "type": "skill",
        "class": [
            "priest"
        ],
        "mp": 200
    },
    "toggle_code": {
        "ui": false,
        "name": "Toggle Code",
        "skin": "code"
    },
    "open_snippet": {
        "ui": false,
        "explanation": "Open the Code Snippet interface",
        "type": "utility",
        "name": "Open Snippet",
        "skin": "snippet"
    },
    "throw": {
        "code": "range=character.level+200",
        "nprop": [
            "attack",
            "armor"
        ],
        "explanation": "Terrified? Just throw whatever you can find at your opponent!",
        "cooldown": 400,
        "skin": "skill_throw",
        "class": [
            "merchant"
        ],
        "name": "Throw Stuff",
        "level": 60,
        "positive": [
            "essenceoflife"
        ],
        "negative": [
            "essenceoffire"
        ],
        "range": 200,
        "mp": 200,
        "type": "skill"
    },
    "invis": {
        "name": "Assassin's Smoke",
        "explanation": "Disappear into the shadows. Deal 1.25X damage when you sneak up on an enemy. Cooldown starts when you re-appear.",
        "cooldown": 12000,
        "skin": "skill_invis",
        "type": "skill",
        "class": [
            "rogue"
        ]
    },
    "cleave": {
        "cooldown": 1200,
        "range": 160,
        "explanation": "Swing your axe in a flurry to damage all enemies nearby!",
        "name": "Cleave",
        "skin": "skill_cleave",
        "wtype": "axe",
        "level": 52,
        "type": "skill",
        "class": [
            "warrior"
        ],
        "mp": 720
    },
    "energize": {
        "range": 320,
        "cooldown": 4000,
        "name": "Energize",
        "skin": "skill_energize",
        "explanation": "Transfers mana to a target. As a side effect the target gains high attack speed for a short duration.",
        "level": 20,
        "type": "skill",
        "class": [
            "mage"
        ],
        "condition": "energized",
        "target": true
    },
    "light": {
        "name": "Light",
        "explanation": "Reveals invisible entities nearby and prevents them from going invisible again for 12 seconds.",
        "cooldown": 0,
        "mp": 2000,
        "skin": "skill_light",
        "type": "skill",
        "class": [
            "mage"
        ]
    },
    "snippet": {
        "code": true,
        "name": "Snippet",
        "explanation": "Maps a code snippet to a keypress.",
        "skins": [
            "run_snippet0",
            "run_snippet1",
            "run_snippet2"
        ],
        "skin": "run_snippet1",
        "type": "utility"
    },
    "4fingers": {
        "explanation": "Use the ancient arts to send the target to a deep meditation state. Just several taps to key chakra points does the job!",
        "cooldown": 40000,
        "skin": "skill_4fingers",
        "duration": 5000,
        "class": [
            "ranger"
        ],
        "condition": "fingered",
        "target": true,
        "name": "4 Finger Technique",
        "level": 64,
        "range": 120,
        "mp": 260,
        "type": "skill",
        "monsters": false
    },
    "quickstab": {
        "explanation": "Use your agility to quickly stab your opponent between your devastating attacks!",
        "cooldown": 250,
        "skin": "skill_quickstab",
        "dmultiplier": 0.36,
        "class": [
            "rogue"
        ],
        "name": "Quick Stab",
        "target": true,
        "wtype": "dagger",
        "range": "1X",
        "mp": 320,
        "type": "skill"
    },
    "magiport": {
        "cooldown": 0,
        "name": "Magiport",
        "skin": "skill_teleport",
        "explanation": "Pull someone to your location using the magical paths that surround our world.",
        "complementary": "Unless the target doesn't have a T2+ helmet, high intelligence, or a low level, it can't resist being magiported. (Reverted [03/07/18])",
        "type": "skill",
        "class": [
            "mage"
        ],
        "mp": 900
    },
    "pcoat": {
        "cooldown": 50000,
        "consume": "poison",
        "name": "A Poisonous Touch",
        "skin": "skill_pcoat",
        "duration": 7000,
        "explanation": "Coat your blade with a poison sack. Poison everyone you damage before the venom dissipates.",
        "type": "skill",
        "class": [
            "rogue"
        ],
        "mp": 600
    },
    "scare": {
        "slot": [
            [
                "orb",
                "jacko"
            ]
        ],
        "name": "Scare",
        "explanation": "Activate your Jack-o Lantern to scare away monsters targeting you!",
        "cooldown": 5000,
        "mp": 50,
        "skin": "skill_scare",
        "type": "skill"
    }
};
//Monsters
let monsters_ref = {
    "bbpompom": {
        "hit": "explode_p",
            "hp": 6400,
            "resistance": 160,
            "frequency": 0.6,
            "damage_type": "magical",
            "skin": "bbpompom",
            "xp": 6000,
            "speed": 18,
            "name": "Pom Pom",
            "respawn": 4,
            "range": 280,
            "attack": 320,
            "aggro": 0.2,
            "charge": 31,
            "max_hp": 6400
    },
    "snowman": {
        "1hp": true,
            "name": "Snowman",
            "hp": 1200,
            "respawn": -1,
            "range": 20,
            "aggro": 0,
            "immune": true,
            "attack": 80,
            "frequency": 1,
            "damage_type": "physical",
            "cooperative": true,
            "skin": "snowman",
            "announce": "#B1DCEF",
            "xp": 12000,
            "speed": 8,
            "special": true,
            "charge": 16,
            "max_hp": 1200
    },
    "dknight2": {
        "hp": 8000,
            "frequency": 1.2,
            "damage_type": "physical",
            "skin": "dknight2",
            "xp": 7200,
            "speed": 28,
            "name": "Dark Knight",
            "armor": 200,
            "respawn": 40,
            "range": 32,
            "attack": 275,
            "aggro": 0.3,
            "charge": 45,
            "max_hp": 8000
    },
    "target_r500": {
        "orientation": 0,
            "hp": 50000,
            "resistance": 500,
            "frequency": 0.1,
            "damage_type": "physical",
            "skin": "target_r500",
            "xp": 1000,
            "speed": 12,
            "name": "Target Automatron",
            "respawn": 0,
            "range": 1,
            "attack": 0,
            "aggro": 0,
            "stationary": true,
            "charge": 20,
            "max_hp": 50000
    },
    "mrgreen": {
        "name": "Mr. Green",
            "rage": 1,
            "rpiercing": 320,
            "hp": 12000000,
            "respawn": 4320,
            "resistance": 900,
            "attack": 1200,
            "aggro": 1,
            "charge": 90,
            "frequency": 1.6,
            "damage_type": "physical",
            "cooperative": true,
            "announce": "#256943",
            "skin": "mrgreen",
            "range": 120,
            "xp": 24000000,
            "speed": 40
    },
    "squig": {
        "aa": 1,
            "hp": 1000,
            "frequency": 0.5,
            "damage_type": "physical",
            "skin": "squig",
            "xp": 600,
            "speed": 10,
            "name": "Squig",
            "respawn": 12,
            "range": 15,
            "attack": 7,
            "aggro": 0,
            "charge": 17,
            "max_hp": 1000
    },
    "ligerx": {
        "hp": 80000,
            "frequency": 1.2,
            "damage_type": "physical",
            "skin": "ligerx",
            "xp": 120000,
            "speed": 30,
            "charge": 60,
            "name": "Liger X",
            "respawn": 960,
            "range": 80,
            "attack": 1800,
            "aggro": 0.2,
            "explanation": "A genetically modified and cybernetically enhanced beast!"
    },
    "spider": {
        "hp": 1800,
            "frequency": 1,
            "damage_type": "physical",
            "skin": "spider",
            "xp": 1200,
            "speed": 24,
            "name": "Spider",
            "respawn": 14,
            "range": 32,
            "attack": 80,
            "aggro": 0.3,
            "charge": 38,
            "max_hp": 1800
    },
    "chestm": {
        "hit": "explode_p",
            "hp": 6400,
            "resistance": 160,
            "frequency": 0.6,
            "damage_type": "magical",
            "skin": "chestm",
            "xp": 6000,
            "speed": 4,
            "name": "Angry Chest",
            "respawn": 4,
            "range": 280,
            "attack": 320,
            "aggro": 0.2,
            "charge": 8,
            "max_hp": 6400
    },
    "rooster": {
        "aa": 1,
            "cute": true,
            "hp": 60,
            "frequency": 1.5,
            "damage_type": "physical",
            "skin": "rooster",
            "xp": 10,
            "speed": 7,
            "name": "Chicken",
            "rage": 0.2,
            "respawn": 200,
            "range": 20,
            "attack": 48,
            "aggro": 1,
            "charge": 14,
            "max_hp": 60
    },
    "rat": {
        "hp": 820,
            "frequency": 0.5,
            "damage_type": "physical",
            "skin": "rat",
            "xp": 640,
            "speed": 12,
            "name": "Rat",
            "rage": 1,
            "respawn": 2,
            "range": 40,
            "attack": 80,
            "aggro": 1,
            "charge": 20,
            "max_hp": 820
    },
    "target": {
        "orientation": 2,
            "hp": 50000,
            "frequency": 0.1,
            "damage_type": "physical",
            "skin": "target",
            "xp": 1000,
            "speed": 12,
            "name": "Target Automatron",
            "respawn": 0,
            "range": 1,
            "attack": 0,
            "aggro": 0,
            "stationary": true,
            "charge": 20,
            "max_hp": 50000
    },
    "kitty3": {
        "aa": 1,
            "cute": true,
            "hp": 100,
            "frequency": 0.4,
            "damage_type": "physical",
            "skin": "kitty3",
            "xp": -500,
            "speed": 14,
            "name": "Kitty",
            "respawn": 6000,
            "range": 15,
            "charge": 12,
            "aggro": 0,
            "attack": 5
    },
    "eelemental": {
        "hp": 80000,
            "frequency": 1.2,
            "damage_type": "physical",
            "skin": "eelemental",
            "xp": 10,
            "speed": 20,
            "name": "Earth Elemental",
            "evasion": 80,
            "respawn": 1,
            "range": 80,
            "attack": 1800,
            "aggro": 0.2,
            "charge": 32,
            "max_hp": 80000
    },
    "boar": {
        "hp": 12000,
            "frequency": 0.7,
            "damage_type": "physical",
            "skin": "boar",
            "xp": 10800,
            "speed": 20,
            "name": "Wild Boar",
            "rage": 1,
            "armor": 100,
            "respawn": 10,
            "range": 24,
            "charge": 40,
            "aggro": 1,
            "attack": 240
    },
    "skeletor": {
        "hp": 80000,
            "frequency": 1.2,
            "damage_type": "physical",
            "skin": "skeletor",
            "xp": 120000,
            "speed": 40,
            "name": "Skeletor",
            "respawn": 960,
            "range": 80,
            "attack": 1800,
            "aggro": 0.2,
            "charge": 56,
            "max_hp": 80000
    },
    "franky": {
        "aa": 1,
            "hit": "explode_c",
            "name": "Franky",
            "rage": 0,
            "hp": 120000000,
            "respawn": -1,
            "attack": 2910,
            "aggro": 0,
            "immune": true,
            "charge": 64,
            "frequency": 1.6,
            "damage_type": "magical",
            "cooperative": true,
            "announce": "#9D99EF",
            "skin": "franky",
            "range": 948,
            "xp": 200000000,
            "speed": 48,
            "spawns": [
            [
                200,
                "nerfedmummy"
            ]
        ],
            "special": true
    },
    "puppy3": {
        "aa": 1,
            "cute": true,
            "hp": 100,
            "frequency": 0.4,
            "damage_type": "physical",
            "skin": "puppy3",
            "xp": -500,
            "speed": 16,
            "name": "Puppy",
            "pet": {
            "courage": [
                80,
                100
            ],
                "passion": [
                50,
                100
            ],
                "exponential": true,
                "level": {
                "evasion": 5,
                    "armor": 20,
                    "hp": 300,
                    "attack": 40,
                    "resistance": 30,
                    "charge": 3,
                    "speed": 2
            },
            "xp": 1000,
                "brightness": 0,
                "chatter": [
                20,
                100
            ],
                "obedience": [
                0,
                50
            ],
                "aggression": [
                10,
                100
            ]
        },
        "respawn": 6000,
            "range": 15,
            "charge": 12,
            "aggro": 0,
            "attack": 5
    },
    "croc": {
        "aa": 0,
            "hp": 1000,
            "frequency": 0.5,
            "damage_type": "physical",
            "skin": "croc",
            "xp": 900,
            "speed": 10,
            "name": "Croc",
            "rage": 1,
            "respawn": 6,
            "range": 15,
            "attack": 48,
            "aggro": 0.2,
            "charge": 17,
            "max_hp": 1000
    },
    "nerfedmummy": {
        "aa": 1,
            "hp": 1600,
            "frequency": 0.9,
            "damage_type": "physical",
            "skin": "mummy",
            "xp": 1800,
            "speed": 96,
            "name": "Mummy",
            "rage": 100,
            "respawn": 24,
            "range": 48,
            "charge": 96,
            "aggro": 100,
            "attack": 240
    },
    "target_ar900": {
        "orientation": 0,
            "hp": 50000,
            "resistance": 900,
            "frequency": 0.1,
            "damage_type": "physical",
            "skin": "target_ar900",
            "xp": 1000,
            "speed": 12,
            "name": "Target Automatron",
            "armor": 900,
            "respawn": 0,
            "range": 1,
            "attack": 0,
            "aggro": 0,
            "stationary": true,
            "charge": 20,
            "max_hp": 50000
    },
    "gscorpion": {
        "hp": 3200,
            "frequency": 0.8,
            "damage_type": "physical",
            "skin": "gscorpion",
            "xp": 4800,
            "speed": 24,
            "name": "Scorpion",
            "respawn": 6,
            "range": 32,
            "attack": 120,
            "aggro": 0.3,
            "charge": 38,
            "max_hp": 3200
    },
    "goo": {
        "aa": 1,
            "hp": 100,
            "frequency": 0.4,
            "damage_type": "physical",
            "skin": "goo",
            "xp": 100,
            "speed": 6,
            "name": "Goo",
            "respawn": 1,
            "range": 15,
            "charge": 12,
            "aggro": 0,
            "aura": "weakness",
            "attack": 5
    },
    "target_r750": {
        "orientation": 0,
            "hp": 50000,
            "resistance": 750,
            "frequency": 0.1,
            "damage_type": "physical",
            "skin": "target_r750",
            "xp": 1000,
            "speed": 36,
            "ability": "portal",
            "name": "Target Automatron",
            "respawn": 0,
            "range": 1,
            "attack": 0,
            "aggro": 0,
            "stationary": true,
            "charge": 50,
            "max_hp": 50000
    },
    "poisio": {
        "hp": 1200,
            "frequency": 0.6,
            "damage_type": "physical",
            "skin": "poisio",
            "xp": 1300,
            "speed": 24,
            "name": "Poisio",
            "rage": 0.2,
            "respawn": 6,
            "range": 20,
            "attack": 240,
            "aggro": 1,
            "charge": 38,
            "max_hp": 1200
    },
    "mrpumpkin": {
        "hit": "explode_c",
            "hp": 12000000,
            "frequency": 1,
            "damage_type": "magical",
            "cooperative": true,
            "skin": "mrpumpkin",
            "xp": 24000000,
            "speed": 40,
            "name": "Mr. Pumpkin",
            "respawn": 1920,
            "range": 120,
            "attack": 1200,
            "aggro": 0.05,
            "announce": "#FD8940",
            "charge": 56,
            "max_hp": 12000000
    },
    "puppy1": {
        "aa": 1,
            "cute": true,
            "hp": 100,
            "frequency": 0.4,
            "damage_type": "physical",
            "skin": "puppy1",
            "xp": -500,
            "speed": 16,
            "name": "Puppy",
            "pet": {
            "courage": [
                80,
                100
            ],
                "passion": [
                50,
                100
            ],
                "exponential": true,
                "level": {
                "evasion": 5,
                    "armor": 20,
                    "hp": 300,
                    "attack": 40,
                    "resistance": 30,
                    "charge": 3,
                    "speed": 2
            },
            "xp": 1000,
                "brightness": 0,
                "chatter": [
                20,
                100
            ],
                "obedience": [
                0,
                50
            ],
                "aggression": [
                10,
                100
            ]
        },
        "respawn": 6000,
            "range": 15,
            "charge": 12,
            "aggro": 0,
            "attack": 5
    },
    "mummy": {
        "aa": 1,
            "hp": 12000,
            "frequency": 1.2,
            "damage_type": "physical",
            "skin": "mummy",
            "xp": 16000,
            "speed": 16,
            "name": "Mummy",
            "rage": 100,
            "respawn": 24,
            "range": 48,
            "charge": 96,
            "aggro": 100,
            "attack": 420
    },
    "kitty4": {
        "aa": 1,
            "cute": true,
            "hp": 100,
            "frequency": 0.4,
            "damage_type": "physical",
            "skin": "kitty4",
            "xp": -500,
            "speed": 14,
            "name": "Kitty",
            "respawn": 6000,
            "range": 15,
            "charge": 12,
            "aggro": 0,
            "attack": 5
    },
    "scorpion": {
        "hp": 2400,
            "frequency": 0.8,
            "damage_type": "physical",
            "skin": "scorpion",
            "xp": 2000,
            "speed": 24,
            "name": "Scorpion",
            "respawn": 6,
            "range": 32,
            "attack": 100,
            "aggro": 0.3,
            "charge": 38,
            "max_hp": 2400
    },
    "kitty1": {
        "aa": 1,
            "cute": true,
            "hp": 100,
            "frequency": 0.4,
            "damage_type": "physical",
            "skin": "kitty1",
            "xp": -500,
            "speed": 14,
            "name": "Kitty",
            "respawn": 6000,
            "range": 15,
            "charge": 12,
            "aggro": 0,
            "attack": 5
    },
    "rudolph": {
        "hit": "explode_c",
            "hp": 12000000,
            "prefix": "the",
            "frequency": 10,
            "damage_type": "magical",
            "skin": "rudolph",
            "xp": 2000000,
            "speed": 24,
            "name": "Reindeer",
            "respawn": 3600,
            "range": 999999,
            "attack": 1600,
            "aggro": 0,
            "charge": 38,
            "max_hp": 12000000
    },
    "frog": {
        "hp": 600,
            "frequency": 0.5,
            "damage_type": "physical",
            "skin": "frog",
            "xp": 7200,
            "speed": 10,
            "name": "Froggie",
            "evasion": 99,
            "respawn": 960,
            "range": 15,
            "attack": 24,
            "aggro": 0,
            "charge": 17,
            "max_hp": 600
    },
    "mole": {
        "aa": 1,
            "hp": 12400,
            "apiercing": 320,
            "frequency": 0.8,
            "damage_type": "physical",
            "skin": "mole",
            "xp": 8000,
            "speed": 18,
            "name": "Mole",
            "rage": 1,
            "respawn": 6,
            "range": 15,
            "charge": 60,
            "aggro": 1,
            "attack": 480
    },
    "wolfie": {
        "hp": 19200,
            "resistance": 100,
            "frequency": 0.8,
            "damage_type": "physical",
            "skin": "wolfie",
            "xp": 16400,
            "speed": 24,
            "name": "Dark Hound",
            "rage": 1,
            "armor": 200,
            "respawn": 12,
            "range": 20,
            "charge": 52,
            "aggro": 1,
            "attack": 320
    },
    "greenfairy": {
        "aa": 1,
            "hit": "explode_c",
            "hp": 3600000,
            "frequency": 100,
            "damage_type": "magical",
            "skin": "greenfairy",
            "xp": 2000000,
            "speed": 10,
            "name": "Fairy",
            "respawn": 0,
            "range": 999999,
            "attack": 3000,
            "aggro": 0,
            "charge": 17,
            "max_hp": 3600000
    },
    "crab": {
        "aa": 1,
            "hp": 200,
            "frequency": 0.4,
            "damage_type": "physical",
            "skin": "crab",
            "xp": 300,
            "speed": 6,
            "size": 0.5,
            "name": "Tiny Crab",
            "respawn": 0.64,
            "range": 15,
            "attack": 24,
            "aggro": 0.2,
            "charge": 12,
            "max_hp": 200
    },
    "arcticbee": {
        "aa": 1,
            "hp": 1600,
            "frequency": 0.6,
            "damage_type": "physical",
            "skin": "arcticbee",
            "xp": 1800,
            "speed": 12,
            "name": "Arctic Bee",
            "rage": 0.05,
            "respawn": 1,
            "range": 20,
            "attack": 64,
            "aggro": 1,
            "charge": 20,
            "max_hp": 1600
    },
    "plantoid": {
        "hp": 80000,
            "frequency": 1.2,
            "damage_type": "physical",
            "skin": "plantoid",
            "xp": 20000,
            "speed": 20,
            "name": "Sprawling",
            "evasion": 80,
            "respawn": 24,
            "range": 80,
            "attack": 600,
            "aggro": 0.2,
            "charge": 32,
            "max_hp": 80000
    },
    "hen": {
        "aa": 1,
            "cute": true,
            "hp": 60,
            "frequency": 1.5,
            "damage_type": "physical",
            "skin": "hen",
            "xp": 10,
            "speed": 10,
            "name": "Chicken",
            "rage": 0.2,
            "respawn": 200,
            "range": 20,
            "attack": 48,
            "aggro": 1,
            "charge": 17,
            "max_hp": 60
    },
    "redfairy": {
        "aa": 1,
            "hit": "explode_c",
            "hp": 4800000,
            "frequency": 100,
            "damage_type": "magical",
            "skin": "redfairy",
            "xp": 2000000,
            "speed": 10,
            "name": "Fairy",
            "respawn": 0,
            "range": 999999,
            "attack": 4000,
            "aggro": 0,
            "charge": 17,
            "max_hp": 4800000
    },
    "puppy2": {
        "aa": 1,
            "cute": true,
            "hp": 100,
            "frequency": 0.4,
            "damage_type": "physical",
            "skin": "puppy2",
            "xp": -500,
            "speed": 16,
            "name": "Puppy",
            "pet": {
            "courage": [
                80,
                100
            ],
                "passion": [
                50,
                100
            ],
                "exponential": true,
                "level": {
                "evasion": 5,
                    "armor": 20,
                    "hp": 300,
                    "attack": 40,
                    "resistance": 30,
                    "charge": 3,
                    "speed": 2
            },
            "xp": 1000,
                "brightness": 0,
                "chatter": [
                20,
                100
            ],
                "obedience": [
                0,
                50
            ],
                "aggression": [
                10,
                100
            ]
        },
        "respawn": 6000,
            "range": 15,
            "charge": 12,
            "aggro": 0,
            "attack": 5
    },
    "jrat": {
        "aa": 1,
            "hp": 4000,
            "frequency": 0.5,
            "damage_type": "physical",
            "skin": "rat",
            "xp": 100,
            "speed": 12,
            "name": "Rat",
            "respawn": 42,
            "range": 40,
            "attack": 240,
            "aggro": 0,
            "charge": 20,
            "max_hp": 4000
    },
    "porcupine": {
        "aa": 1,
            "dreturn": 4800,
            "hp": 300,
            "frequency": 0.5,
            "damage_type": "physical",
            "skin": "porcupine",
            "xp": 400,
            "speed": 10,
            "name": "Porcupine",
            "rage": 0.4,
            "respawn": 2,
            "range": 20,
            "charge": 30,
            "aggro": 1,
            "attack": 16
    },
    "wabbit": {
        "hp": 400,
            "frequency": 1,
            "damage_type": "physical",
            "skin": "wabbit",
            "xp": 12000,
            "speed": 60,
            "special": true,
            "reflection": 98,
            "name": "Wabbit",
            "evasion": 98,
            "respawn": -1,
            "range": 20,
            "immune": true,
            "attack": 60,
            "aggro": 0,
            "charge": 72,
            "max_hp": 400
    },
    "pinkgoo": {
        "hp": 400,
            "frequency": 1,
            "damage_type": "physical",
            "skin": "pinkgoo",
            "xp": 12000,
            "speed": 8,
            "special": true,
            "reflection": 98,
            "name": "Love Goo",
            "evasion": 98,
            "respawn": -1,
            "range": 20,
            "immune": true,
            "attack": 100,
            "aggro": 0,
            "charge": 16,
            "max_hp": 400
    },
    "squigtoad": {
        "hp": 600,
            "frequency": 0.6,
            "damage_type": "physical",
            "skin": "squigtoad",
            "xp": 2400,
            "speed": 16,
            "name": "Squigtoad",
            "respawn": 120,
            "range": 20,
            "attack": 24,
            "aggro": 0,
            "charge": 27,
            "max_hp": 600
    },
    "phoenix": {
        "aa": 1,
            "prefix": "the",
            "xspawns": [
            [
                200,
                "goo"
            ]
        ],
            "hit": "explode_a",
            "name": "Phoenix",
            "hp": 60000,
            "respawn": 20,
            "range": 120,
            "aggro": 0.2,
            "attack": 125,
            "frequency": 1.2,
            "damage_type": "magical",
            "cooperative": true,
            "skin": "phoenix",
            "xp": 90000,
            "speed": 50,
            "charge": 65,
            "max_hp": 60000
    },
    "mvampire": {
        "hit": "explode_c",
            "hp": 240000,
            "resistance": 150,
            "prefix": "",
            "frequency": 1.2,
            "damage_type": "magical",
            "skin": "mvampire",
            "xp": 200000,
            "speed": 40,
            "name": "Dracul",
            "respawn": 1080,
            "range": 120,
            "attack": 245,
            "aggro": 0.05,
            "charge": 56,
            "max_hp": 240000
    },
    "puppy4": {
        "aa": 1,
            "cute": true,
            "hp": 100,
            "frequency": 0.4,
            "damage_type": "physical",
            "skin": "puppy4",
            "xp": -500,
            "speed": 16,
            "name": "Puppy",
            "respawn": 6000,
            "range": 15,
            "charge": 12,
            "aggro": 0,
            "attack": 5
    },
    "target_a500": {
        "orientation": 0,
            "hp": 50000,
            "frequency": 0.1,
            "damage_type": "physical",
            "skin": "target_a500",
            "xp": 1000,
            "speed": 12,
            "name": "Target Automatron",
            "armor": 500,
            "respawn": 0,
            "range": 1,
            "attack": 0,
            "aggro": 0,
            "stationary": true,
            "charge": 20,
            "max_hp": 50000
    },
    "bigbird": {
        "hp": 32000,
            "frequency": 0.8,
            "damage_type": "physical",
            "skin": "bigbird",
            "xp": 30000,
            "speed": 24,
            "name": "Hawk",
            "evasion": 20,
            "rage": 0.4,
            "respawn": 12,
            "range": 20,
            "charge": 52,
            "aggro": 1,
            "attack": 480
    },
    "jr": {
        "hp": 3200,
            "resistance": 400,
            "frequency": 20,
            "damage_type": "magical",
            "skin": "jr",
            "xp": 80000,
            "speed": 40,
            "name": "Jr.",
            "evasion": 80,
            "rage": 1,
            "respawn": 25920,
            "range": 30,
            "charge": 90,
            "aggro": 1,
            "attack": 10
    },
    "oneeye": {
        "hp": 820,
            "frequency": 3,
            "damage_type": "physical",
            "skin": "oneeye",
            "xp": 640,
            "speed": 24,
            "name": "One Eye",
            "rage": 1,
            "respawn": 4,
            "range": 40,
            "attack": 60,
            "aggro": 1,
            "charge": 38,
            "max_hp": 820
    },
    "stompy": {
        "hp": 640000,
            "frequency": 0.8,
            "damage_type": "physical",
            "skin": "stompy",
            "xp": 600000,
            "speed": 40,
            "name": "Stompy",
            "respawn": 2160,
            "range": 64,
            "charge": 80,
            "aggro": 0.2,
            "attack": 3600
    },
    "armadillo": {
        "dreturn": 30,
            "hp": 900,
            "frequency": 0.5,
            "damage_type": "physical",
            "skin": "armadillo",
            "xp": 800,
            "speed": 14,
            "name": "Armadillo",
            "respawn": 3,
            "range": 20,
            "attack": 20,
            "aggro": 0,
            "charge": 24,
            "max_hp": 900
    },
    "snake": {
        "hp": 720,
            "frequency": 0.6,
            "damage_type": "physical",
            "skin": "snake",
            "xp": 960,
            "speed": 12,
            "name": "Snake",
            "respawn": 3,
            "range": 20,
            "attack": 24,
            "aggro": 0,
            "charge": 20,
            "max_hp": 720
    },
    "booboo": {
        "aa": 1,
            "hp": 4000,
            "frequency": 1.2,
            "damage_type": "magical",
            "skin": "booboo",
            "xp": 5000,
            "speed": 16,
            "name": "Boo Boo",
            "rage": 100,
            "respawn": 48,
            "range": 100,
            "charge": 96,
            "aggro": 100,
            "attack": 220
    },
    "osnake": {
        "hp": 720,
            "frequency": 0.6,
            "damage_type": "physical",
            "skin": "osnake",
            "xp": 1600,
            "speed": 12,
            "name": "Snake",
            "respawn": 60,
            "range": 20,
            "attack": 24,
            "aggro": 0,
            "charge": 20,
            "max_hp": 720
    },
    "target_a750": {
        "orientation": 0,
            "hp": 50000,
            "frequency": 0.1,
            "damage_type": "physical",
            "skin": "target_a750",
            "xp": 1000,
            "speed": 12,
            "name": "Target Automatron",
            "armor": 750,
            "respawn": 0,
            "range": 1,
            "attack": 0,
            "aggro": 0,
            "stationary": true,
            "charge": 20,
            "max_hp": 50000
    },
    "welemental": {
        "hp": 80000,
            "frequency": 1.2,
            "damage_type": "physical",
            "skin": "welemental",
            "xp": 10,
            "speed": 20,
            "name": "Water Elemental",
            "evasion": 80,
            "respawn": 1,
            "range": 80,
            "attack": 1800,
            "aggro": 0.2,
            "charge": 32,
            "max_hp": 80000
    },
    "bluefairy": {
        "aa": 1,
            "hit": "explode_c",
            "hp": 4000000,
            "frequency": 100,
            "damage_type": "magical",
            "skin": "bluefairy",
            "xp": 2000000,
            "speed": 10,
            "name": "Fairy",
            "respawn": 0,
            "range": 999999,
            "attack": 2400,
            "aggro": 0,
            "charge": 17,
            "max_hp": 4000000
    },
    "goblin": {
        "hp": 50,
            "frequency": 1,
            "damage_type": "physical",
            "skin": "goblin",
            "xp": 640000,
            "speed": 30,
            "special": true,
            "reflection": 99.95,
            "name": "Sneaky Goblin",
            "evasion": 99.95,
            "respawn": -1,
            "range": 2,
            "immune": true,
            "attack": 0,
            "aggro": 0,
            "charge": 48,
            "max_hp": 50
    },
    "fvampire": {
        "hit": "explode_c",
            "hp": 240000,
            "resistance": 300,
            "prefix": "",
            "frequency": 1.2,
            "damage_type": "magical",
            "skin": "fvampire",
            "xp": 200000,
            "speed": 40,
            "name": "Ms. Dracul",
            "respawn": 1440,
            "range": 120,
            "attack": 875,
            "aggro": 0.05,
            "charge": 56,
            "max_hp": 240000
    },
    "greenjr": {
        "name": "Green Jr.",
            "rage": 1,
            "rpiercing": 420,
            "hp": 4200,
            "respawn": 51840,
            "resistance": 400,
            "attack": 30,
            "aggro": 1,
            "charge": 120,
            "frequency": 20,
            "damage_type": "physical",
            "evasion": 40,
            "skin": "greenjr",
            "range": 80,
            "xp": 120000,
            "speed": 60,
            "reflection": 4
    },
    "prat": {
        "aa": 1,
            "hp": 9200,
            "frequency": 0.9,
            "damage_type": "physical",
            "skin": "prat",
            "xp": 7600,
            "speed": 12,
            "name": "Vampire Rat",
            "lifesteal": 120,
            "rage": 1,
            "armor": 160,
            "respawn": 4,
            "range": 32,
            "charge": 86,
            "aggro": 0,
            "attack": 320
    },
    "ghost": {
        "hit": "explode_p",
            "hp": 12000,
            "resistance": 400,
            "frequency": 1,
            "damage_type": "magical",
            "skin": "ghost",
            "xp": 16000,
            "speed": 12,
            "name": "Ghost",
            "evasion": 20,
            "respawn": 4,
            "range": 120,
            "attack": 200,
            "aggro": 0.05,
            "charge": 20,
            "max_hp": 12000
    },
    "bat": {
        "aa": 1,
            "hp": 2400,
            "frequency": 0.7,
            "damage_type": "physical",
            "skin": "bat",
            "xp": 2000,
            "speed": 24,
            "name": "Bat",
            "respawn": 12,
            "range": 35,
            "attack": 50,
            "aggro": 0.3,
            "charge": 38,
            "max_hp": 2400
    },
    "cgoo": {
        "aa": 1,
            "hp": 1200,
            "frequency": 1.2,
            "damage_type": "physical",
            "skin": "cgoo",
            "xp": 2400,
            "speed": 9,
            "name": "Irradiated Goo",
            "respawn": 48,
            "range": 64,
            "attack": 320,
            "aggro": 0.1,
            "charge": 18,
            "max_hp": 1200
    },
    "tortoise": {
        "hp": 2000,
            "frequency": 0.5,
            "damage_type": "physical",
            "skin": "tortoise",
            "xp": 1600,
            "speed": 10,
            "name": "Tortoise",
            "armor": 200,
            "respawn": 12,
            "range": 15,
            "attack": 36,
            "aggro": 0,
            "charge": 17,
            "max_hp": 2000
    },
    "iceroamer": {
        "hit": "explode_p",
            "hp": 3600,
            "skin": "iceroamer",
            "frequency": 0.7,
            "damage_type": "magical",
            "evasion": 10,
            "xp": 4200,
            "speed": 20,
            "reflection": 8,
            "name": "Water Spirit",
            "rpiercing": 320,
            "respawn": 2,
            "range": 80,
            "attack": 120,
            "aggro": 0.2,
            "charge": 32,
            "max_hp": 3600
    },
    "crabx": {
        "aa": 1,
            "hp": 4200,
            "frequency": 0.3,
            "damage_type": "physical",
            "skin": "crabx",
            "xp": 3600,
            "speed": 8,
            "name": "Huge Crab",
            "respawn": 4,
            "range": 15,
            "charge": 30,
            "aggro": 0.5,
            "attack": 240
    },
    "xscorpion": {
        "hp": 24000,
            "frequency": 0.8,
            "damage_type": "physical",
            "skin": "xscorpion",
            "xp": 27200,
            "speed": 24,
            "name": "Scorpion",
            "respawn": 6,
            "range": 32,
            "attack": 720,
            "aggro": 0.3,
            "charge": 38,
            "max_hp": 24000
    },
    "bee": {
        "aa": 1,
            "hp": 300,
            "frequency": 0.5,
            "damage_type": "physical",
            "skin": "bee",
            "xp": 400,
            "speed": 12,
            "name": "Bee",
            "rage": 0.1,
            "respawn": 2,
            "range": 20,
            "attack": 16,
            "aggro": 1,
            "charge": 20,
            "max_hp": 300
    },
    "goldenbat": {
        "aa": 1,
            "hp": 2400,
            "frequency": 0.7,
            "damage_type": "physical",
            "skin": "goldenbat",
            "xp": 2000,
            "speed": 24,
            "name": "Golden Bat",
            "respawn": -1,
            "range": 35,
            "attack": 50,
            "aggro": 0.3,
            "charge": 38,
            "max_hp": 2400
    },
    "wolf": {
        "hp": 24000,
            "resistance": 200,
            "frequency": 0.8,
            "damage_type": "physical",
            "skin": "wolf",
            "xp": 24800,
            "speed": 24,
            "name": "White Wolf",
            "rage": 1,
            "armor": 300,
            "respawn": 12,
            "range": 20,
            "charge": 152,
            "aggro": 1,
            "attack": 480
    },
    "kitty2": {
        "aa": 1,
            "cute": true,
            "hp": 100,
            "frequency": 0.4,
            "damage_type": "physical",
            "skin": "kitty2",
            "xp": -500,
            "speed": 14,
            "name": "Kitty",
            "respawn": 6000,
            "range": 15,
            "charge": 12,
            "aggro": 0,
            "attack": 5
    },
    "target_ar500red": {
        "dreturn": 50,
            "name": "Target Automatron",
            "evasion": 50,
            "armor": 500,
            "stationary": true,
            "hp": 500000,
            "respawn": 0,
            "resistance": 500,
            "aggro": 0,
            "attack": 0,
            "frequency": 0.1,
            "orientation": 1,
            "damage_type": "physical",
            "skin": "target_ar500red",
            "range": 1,
            "xp": 1000,
            "speed": 12,
            "heal": 100000,
            "reflection": 50,
            "charge": 20,
            "max_hp": 500000
    },
    "felemental": {
        "hp": 80000,
            "frequency": 1.2,
            "damage_type": "physical",
            "skin": "felemental",
            "xp": 10,
            "speed": 20,
            "name": "Fire Elemental",
            "evasion": 80,
            "respawn": 1,
            "range": 80,
            "attack": 1800,
            "aggro": 0.2,
            "charge": 32,
            "max_hp": 80000
    },
    "stoneworm": {
        "hp": 2200,
            "apiercing": 800,
            "frequency": 0.6,
            "damage_type": "physical",
            "skin": "stoneworm",
            "xp": 2400,
            "speed": 12,
            "balance": "Spadar",
            "name": "Stone Worm",
            "rage": 1,
            "respawn": 1,
            "range": 20,
            "charge": 46,
            "aggro": 1,
            "attack": 360
    },
    "minimush": {
        "hit": "explode_p",
            "hp": 500,
            "frequency": 1,
            "damage_type": "magical",
            "skin": "minimush",
            "xp": 600,
            "speed": 12,
            "name": "Pom Pom",
            "respawn": 4,
            "range": 120,
            "attack": 120,
            "aggro": 0.05,
            "charge": 20,
            "max_hp": 500
    },
    "nelemental": {
        "hp": 80000,
            "frequency": 1.2,
            "damage_type": "physical",
            "skin": "nelemental",
            "xp": 10,
            "speed": 20,
            "name": "Nature Elemental",
            "evasion": 80,
            "respawn": 1,
            "range": 80,
            "attack": 1800,
            "aggro": 0.2,
            "charge": 32,
            "max_hp": 80000
    }
}
//Socket callbacks
let socket_ref = {
    "$connecting": [
    null
],
    "$connect": [
    null
],
    "$welcome": [
    null
],
    "$observing": [
    null
],
    "$new_map": [
    null
],
    "$start": [
    null
],
    "$correction": [
    null
],
    "$players": [
    null
],
    "$pvp_list": [
    null
],
    "$ping_ack": [
    null
],
    "$requesting_ack": [
    null
],
    "$game_error": [
    null
],
    "$game_log": [
    null
],
    "$game_chat": [
    null
],
    "$fx": [
    null
],
    "$online": [
    null
],
    "$light": [
    null
],
    "$game_event": [
    null
],
    "$game_response": [
    null
],
    "$gm": [
    null
],
    "$secondhands": [
    null
],
    "$lostandfound": [
    null
],
    "$game_chat_log": [
    null
],
    "$chat_log": [
    null
],
    "$ui": [
    null
],
    "$tavern": [
    null
],
    "$dice": [
    null
],
    "$upgrade": [
    null
],
    "$server_message": [
    null
],
    "$notice": [
    null
],
    "$reloaded": [
    null
],
    "$chest_opened": [
    null
],
    "$cm": [
    null
],
    "$pm": [
    null
],
    "$partym": [
    null
],
    "$drop": [
    null
],
    "$reopen": [
    null
],
    "$simple_eval": [
    null
],
    "$eval": [
    null
],
    "$player": [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
],
    "$end": [
    null
],
    "$disconnect": [
    null
],
    "$disconnect_reason": [
    null
],
    "$hit": [
    null
],
    "$disappearing_text": [
    null
],
    "$death": [
    null
],
    "$disappear": [
    null
],
    "$notthere": [
    null
],
    "$entities": [
    null
],
    "$poke": [
    null
],
    "$info": [
    null
],
    "$test": [
    null
],
    "$invite": [
    null
],
    "$request": [
    null
],
    "$frequest": [
    null
],
    "$friend": [
    null
],
    "$party_update": [
    null
],
    "$blocker": [
    null
],
    "$trade_history": [
    null
],
    "$track": [
    null
]
}