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
//Items
let items_ref = {
    "harbringer": {
        "explanation": "Pure, unfiltered power!",
        "damage": "magical",
        "grades": [
            0,
            6
        ],
        "skin": "harbringer",
        "a": true,
        "upgrade": {
            "attack": 6,
            "range": 3,
            "rpiercing": 5
        },
        "name": "Harbringer",
        "g": 289000,
        "wtype": "staff",
        "range": 50,
        "trex": "This staff is a relic of a past age long forgotten. Thought to be forged by the God of Lighting. Those who have seen this staff claim it radiates powerful energy. Though this staff is only wielded by few, it is feared by all.",
        "attack": 40,
        "rpiercing": 10,
        "type": "weapon",
        "id": "harbringer"
    },
    "test2": {
        "ignore": true,
        "explanation": "An item to test item looks, just set the 'skin' property.",
        "type": "test",
        "name": "Test",
        "skin": "test",
        "id": "test2"
    },
    "dexamulet": {
        "dex": 4,
        "name": "Amulet of Dexterity",
        "g": 30000,
        "skin": "dexamulet",
        "grades": [
            3,
            5
        ],
        "compound": {
            "dex": 3
        },
        "type": "amulet",
        "id": "dexamulet"
    },
    "shoes": {
        "stat": 1,
        "upgrade": {
            "armor": 1.25,
            "stat": 1,
            "speed": 0.625
        },
        "name": "Shoes",
        "g": 12100,
        "armor": 4,
        "speed": 5,
        "grades": [
            7,
            9
        ],
        "skin": "shoes",
        "tier": 1,
        "type": "shoes",
        "scroll": true,
        "buy": true,
        "id": "shoes"
    },
    "networkcard": {
        "explanation": "A critical component that is able to interact with the fabric of our universe. Possibly quantum technology.",
        "type": "material",
        "name": "Network Card",
        "g": 24000000,
        "skin": "networkcard",
        "id": "networkcard"
    },
    "candy1v2": {
        "e": 1,
        "name": "Candy [h2]",
        "g": 2400,
        "explanation": "A delicious candy. Xyn in New Town could give you something in exchange!",
        "s": true,
        "skin": "candy1",
        "type": "gem",
        "id": "candy1v2"
    },
    "candy1v3": {
        "e": 1,
        "name": "Candy",
        "g": 2400,
        "explanation": "A delicious candy. Xyn in New Town could give you something in exchange!",
        "s": true,
        "skin": "candy1",
        "type": "gem",
        "id": "candy1v3"
    },
    "ftrinket": {
        "a": true,
        "int": 2,
        "explanation": "Good things come to those who wait",
        "compound": {
            "armor": 5,
            "speed": 1,
            "vit": 3
        },
        "grades": [
            1,
            3
        ],
        "vit": 2,
        "skin": "ftrinket",
        "speed": 0.5,
        "dex": 2,
        "name": "Trinket of Faith",
        "g": 96000,
        "armor": 5,
        "str": 2,
        "type": "orb",
        "id": "ftrinket"
    },
    "essenceoflife": {
        "name": "Essence of Life",
        "g": 1,
        "explanation": "Full of life, literally.",
        "s": true,
        "skin": "essenceoflife",
        "type": "material",
        "id": "essenceoflife"
    },
    "ledger": {
        "name": "Ledger",
        "g": 12000,
        "explanation": "Every decent merchant needs one!",
        "ignore": true,
        "skin": "ledger",
        "type": "misc",
        "id": "ledger"
    },
    "elixirdex1": {
        "dex": 8,
        "name": "Elixir of Greater Dexterity",
        "g": 20000,
        "s": true,
        "skin_a": "elixirdex1",
        "skin": "elixirdex1",
        "duration": 24,
        "type": "elixir",
        "id": "elixirdex1"
    },
    "cape": {
        "stat": 4,
        "upgrade": {
            "armor": 2,
            "resistance": 1
        },
        "grades": [
            0,
            8
        ],
        "name": "Cape",
        "g": 20000,
        "skin": "cape0",
        "armor": 10,
        "type": "cape",
        "resistance": 8,
        "id": "cape"
    },
    "pumpkinspice": {
        "explanation": "Produced in bulk during the Halloween season. WARNING: The pumpkin comes from a non-vegetable source",
        "crit": 5,
        "skin_a": "pumpkinspice",
        "skin": "pumpkinspice",
        "duration": 8,
        "reflection": 2,
        "name": "Pumpkin Spice Latte",
        "g": 200,
        "s": true,
        "mp": -400,
        "type": "elixir",
        "id": "pumpkinspice"
    },
    "hboots": {
        "stat": 1,
        "grade": 2,
        "resistance": 6,
        "grades": [
            0,
            0
        ],
        "skin": "hboots",
        "tier": 3,
        "speed": 7,
        "a": 2,
        "upgrade": {
            "armor": 4.25,
            "stat": 1,
            "speed": 1.125,
            "resistance": 2.125
        },
        "name": "Heavy Boots",
        "g": 1240000,
        "armor": 12,
        "type": "shoes",
        "scroll": true,
        "id": "hboots"
    },
    "phelmet": {
        "stat": 1,
        "grade": 1,
        "resistance": 16,
        "grades": [
            0,
            7
        ],
        "protection": true,
        "skin": "phelmet",
        "tier": 2,
        "name": "Pumpkin Head",
        "a": 2,
        "upgrade": {
            "armor": 2.5,
            "stat": 1,
            "reflection": 0.4,
            "resistance": 2.5
        },
        "reflection": 1,
        "g": 72000,
        "armor": 14,
        "type": "helmet",
        "scroll": true,
        "id": "phelmet"
    },
    "bunnyelixir": {
        "hp": 200,
        "skin_a": "bunnyelixir",
        "vit": 15,
        "skin": "bunnyelixir",
        "duration": 2,
        "speed": 12,
        "dex": 4,
        "name": "Bunny Energy Drink",
        "g": 6000,
        "s": true,
        "mp": 300,
        "type": "elixir",
        "explanation": "Ingredients: Rabbit sweat, bubble gum flavour",
        "id": "bunnyelixir"
    },
    "sshield": {
        "dreturn": 3,
        "grades": [
            4,
            8
        ],
        "upgrade": {
            "armor": 10,
            "dreturn": 1.5,
            "resistance": 7
        },
        "name": "Spiked Shield",
        "g": 24000,
        "skin": "sshield",
        "armor": 60,
        "type": "shield",
        "resistance": 20,
        "id": "sshield"
    },
    "cscale": {
        "name": "Croc Scale",
        "g": 200,
        "explanation": "A very hard scale, can be sewn onto armors.",
        "s": true,
        "skin": "cscale",
        "type": "material",
        "id": "cscale"
    },
    "puppyer": {
        "name": "Licence to Adopt a Puppy",
        "g": 10000,
        "explanation": "Lets you adopt a puppy once they are ready. You'll have to wait a bit until they are ready to be adopted tho!",
        "s": true,
        "skin": "puppyer",
        "type": "petlicence",
        "id": "puppyer"
    },
    "x7": {
        "a": true,
        "s": true,
        "name": "Quantum Piece",
        "g": 4000,
        "skin": "x7",
        "explanation": "A unique component of a curious puzzle",
        "type": "quest",
        "event": true,
        "id": "x7"
    },
    "bowofthedead": {
        "a": true,
        "upgrade": {
            "crit": 0.2,
            "attack": 4.8,
            "range": 7
        },
        "vit": -2,
        "g": 228000,
        "speed": -12,
        "wtype": "bow",
        "range": 50,
        "damage": "physical",
        "crit": 1,
        "attack": 26,
        "grades": [
            0,
            6
        ],
        "str": 20,
        "skin": "bowofthedead",
        "tier": 2,
        "type": "weapon",
        "explanation": "A weapon of death",
        "name": "Bow of the Dead",
        "id": "bowofthedead"
    },
    "mistletoe": {
        "a": true,
        "s": true,
        "e": 1,
        "name": "Mistletoe",
        "g": 20000,
        "skin": "mistletoe",
        "explanation": "Maybe someone could give you a kiss in exchange...",
        "type": "gem",
        "event": true,
        "id": "mistletoe"
    },
    "elixirstr2": {
        "a": true,
        "g": 120000,
        "s": true,
        "name": "Elixir of Extreme Strength",
        "str": 12,
        "skin": "elixirstr2",
        "duration": 48,
        "type": "elixir",
        "skin_a": "elixirstr2",
        "id": "elixirstr2"
    },
    "cupid": {
        "damage": "heal",
        "grades": [
            0,
            6
        ],
        "vit": 10,
        "skin": "cupid",
        "tier": 2.5,
        "event": true,
        "a": true,
        "upgrade": {
            "attack": 5.2,
            "range": 8,
            "vit": 2
        },
        "name": "Cupid's Bow",
        "g": 90000,
        "wtype": "bow",
        "range": 60,
        "attack": 29,
        "type": "weapon",
        "id": "cupid"
    },
    "candycane": {
        "a": true,
        "s": true,
        "e": 1,
        "name": "Candy Cane",
        "g": 24000,
        "skin": "candycane",
        "explanation": "The old man in Winterland was looking for sweets.",
        "type": "gem",
        "event": true,
        "id": "candycane"
    },
    "gphelmet": {
        "stat": 1,
        "grade": 1,
        "resistance": 16,
        "tier": 2,
        "grades": [
            0,
            0
        ],
        "protection": true,
        "skin": "gphelmet",
        "crit": 0.5,
        "name": "Green Pumpkin Head",
        "a": 2,
        "upgrade": {
            "crit": 0.1,
            "armor": 2.5,
            "stat": 1,
            "reflection": 0.4,
            "resistance": 2.5
        },
        "reflection": 1,
        "lifesteal": 2,
        "armor": 14,
        "g": 32000,
        "rpiercing": 10,
        "type": "helmet",
        "scroll": true,
        "luck": -20,
        "id": "gphelmet"
    },
    "orbofres": {
        "name": "Orb of Resistance",
        "g": 240000,
        "skin": "blueorb",
        "resistance": 40,
        "ignore": true,
        "compound": {
            "resistance": 20
        },
        "type": "orb",
        "id": "orbofres"
    },
    "evasionscroll": {
        "stat": "evasion",
        "name": "Evasion Scroll",
        "g": 8000,
        "explanation": "Adds Evasion to an armor with a Stat attribute.",
        "s": true,
        "skin": "evasionscroll",
        "type": "pscroll",
        "id": "evasionscroll"
    },
    "x4": {
        "a": true,
        "s": true,
        "name": "Quantum Piece",
        "g": 4000,
        "skin": "x4",
        "explanation": "A unique component of a curious puzzle",
        "type": "quest",
        "event": true,
        "id": "x4"
    },
    "hpamulet": {
        "name": "Amulet of HP",
        "g": 20000,
        "hp": 100,
        "skin": "hpamulet",
        "grades": [
            3,
            5
        ],
        "compound": {
            "hp": 120
        },
        "type": "amulet",
        "id": "hpamulet"
    },
    "shoes1": {
        "stat": 1,
        "grade": 1,
        "grades": [
            0,
            7
        ],
        "skin": "shoes1",
        "tier": 2,
        "speed": 6,
        "a": 2,
        "upgrade": {
            "armor": 2.5,
            "stat": 1,
            "speed": 0.875
        },
        "name": "Rugged Shoes",
        "g": 120000,
        "armor": 8,
        "type": "shoes",
        "scroll": true,
        "id": "shoes1"
    },
    "goldbooster": {
        "gold": 30,
        "p2w": true,
        "explanation": "Boosts gold loot from chests.",
        "compound": {
            "gold": 10
        },
        "cash": 499,
        "grades": [
            0,
            10
        ],
        "skin_a": "goldbooster_a",
        "skin": "goldbooster",
        "name": "Gold Booster",
        "g": 15968000,
        "days": 30,
        "type": "booster",
        "gain": "gold",
        "buy_with_cash": true,
        "buy": true,
        "id": "goldbooster"
    },
    "swirlipop": {
        "int": -40,
        "explanation": "A dizzying candy, has some benefits.",
        "resistance": -300,
        "g": 10000,
        "skin_a": "swirlipop",
        "skin": "swirlipop",
        "duration": 0.008,
        "eat": true,
        "a": true,
        "name": "Swirlipop",
        "evasion": 90,
        "s": true,
        "withdrawal": true,
        "type": "elixir",
        "id": "swirlipop"
    },
    "throwingstars": {
        "attack": 5,
        "upgrade": {
            "attack": 2.5,
            "range": 4
        },
        "grades": [
            7,
            9
        ],
        "name": "Throwing Stars",
        "g": 72000,
        "skin": "throwingstars",
        "wtype": "stars",
        "type": "weapon",
        "range": 50,
        "damage": "physical",
        "id": "throwingstars"
    },
    "rednose": {
        "a": true,
        "range": 3,
        "grades": [
            2,
            4
        ],
        "name": "Rudolph's Red Nose",
        "g": 32000,
        "skin": "rednose",
        "cuteness": 9,
        "compound": {
            "cuteness": 3,
            "range": 4
        },
        "type": "helmet",
        "scroll": true,
        "id": "rednose"
    },
    "stoneofgold": {
        "ignore": true,
        "days": 30,
        "skin_a": "stoneofgold",
        "g": 153600000,
        "skin": "stoneofgold",
        "explanation": "Helps you find up to 40% more gold from monsters.",
        "type": "stone",
        "cash": 4800,
        "name": "Stone of Riches",
        "id": "stoneofgold"
    },
    "ale": {
        "g": 24000,
        "s": true,
        "skin_a": "ale",
        "str": 24,
        "miss": 20,
        "skin": "ale",
        "duration": 0.05,
        "speed": -6,
        "type": "elixir",
        "name": "Ale",
        "buy": true,
        "id": "ale"
    },
    "wingedboots": {
        "stat": 1,
        "resistance": 20,
        "grades": [
            0,
            7
        ],
        "frequency": 3,
        "skin": "wingedboots",
        "tier": 1.5,
        "speed": 8,
        "upgrade": {
            "armor": 1.875,
            "stat": 1,
            "frequency": 0.625,
            "speed": 1,
            "resistance": 1.875
        },
        "name": "Winged Boots",
        "g": 150000,
        "armor": 6,
        "credit": "Pluet",
        "type": "shoes",
        "scroll": true,
        "id": "wingedboots"
    },
    "wshield": {
        "stat": 2,
        "upgrade": {
            "armor": 8,
            "resistance": 5
        },
        "grades": [
            7,
            9
        ],
        "name": "Wooden Shield",
        "g": 4800,
        "skin": "wshield",
        "armor": 40,
        "type": "shield",
        "resistance": 15,
        "buy": true,
        "id": "wshield"
    },
    "t2dexamulet": {
        "dex": 6,
        "g": 160000,
        "grades": [
            0,
            2
        ],
        "edge": -1,
        "name": "Amulet of the Stubborn Ranger",
        "vit": 5,
        "skin": "t2dexamulet",
        "compound": {
            "dex": 3,
            "vit": 3
        },
        "type": "amulet",
        "id": "t2dexamulet"
    },
    "monstertoken": {
        "name": "Monster Token",
        "g": 12000,
        "explanation": "A token representing the hunt. Go on a specific hunt once a day to try your chances at a single token!",
        "s": true,
        "skin": "monstertoken",
        "type": "token",
        "id": "monstertoken"
    },
    "bcape": {
        "a": true,
        "stat": 5,
        "upgrade": {
            "armor": 3,
            "resistance": 2
        },
        "grades": [
            0,
            4
        ],
        "name": "Well-Crafted Cape",
        "g": 2400000,
        "skin": "cape1",
        "armor": 18,
        "type": "cape",
        "resistance": 12,
        "id": "bcape"
    },
    "dexbelt": {
        "dex": 4,
        "name": "Belt of Dexterity",
        "g": 50000,
        "skin": "dexbelt",
        "grades": [
            2,
            5
        ],
        "compound": {
            "dex": 3
        },
        "type": "belt",
        "id": "dexbelt"
    },
    "hpbelt": {
        "name": "Belt of HP",
        "g": 20000,
        "hp": 80,
        "skin": "hpbelt",
        "grades": [
            3,
            5
        ],
        "compound": {
            "hp": 120
        },
        "type": "belt",
        "id": "hpbelt"
    },
    "ringsj": {
        "dex": 1,
        "g": 24000,
        "grades": [
            3,
            5
        ],
        "name": "Ring of Small Joys",
        "str": 1,
        "skin": "ring",
        "int": 1,
        "compound": {
            "int": 1,
            "dex": 1,
            "resistance": 5,
            "str": 1
        },
        "type": "ring",
        "resistance": 5,
        "id": "ringsj"
    },
    "confetti": {
        "onclick": "socket.emit('throw',{num:locate_item('confetti'),x:character.real_x,y:character.real_y})",
        "s": true,
        "name": "Pack of Confetti's",
        "g": 20,
        "skin": "confetti",
        "action": "THROW!",
        "explanation": "To celebrate good times",
        "type": "throw",
        "id": "confetti"
    },
    "candycanesword": {
        "ability": "sugarrush",
        "damage": "physical",
        "grades": [
            0,
            8
        ],
        "skin": "candycanesword",
        "a": true,
        "upgrade": {
            "attack": 4.5,
            "range": 1
        },
        "name": "Candy Cane Sword",
        "g": 72000,
        "wtype": "short_sword",
        "range": 3,
        "attack": 20,
        "type": "weapon",
        "id": "candycanesword"
    },
    "t2stramulet": {
        "g": 160000,
        "grades": [
            0,
            2
        ],
        "edge": -1,
        "name": "Amulet of the Eager Warrior",
        "str": 5,
        "skin": "t2stramulet",
        "compound": {
            "resistance": 20,
            "str": 3
        },
        "type": "amulet",
        "resistance": 30,
        "id": "t2stramulet"
    },
    "goldingot": {
        "name": "Gold Ingot",
        "g": 2000000,
        "explanation": "Solid Gold",
        "s": true,
        "skin": "goldingot",
        "type": "material",
        "id": "goldingot"
    },
    "kitty1": {
        "a": true,
        "name": "Egg",
        "g": 40000,
        "explanation": "A vibrant egg, it's inhabitant seems eager to get out.",
        "skin": "egg1",
        "type": "pet",
        "id": "kitty1"
    },
    "molesteeth": {
        "a": true,
        "grades": [
            0,
            1
        ],
        "name": "Mole's Teeth",
        "g": 500000,
        "skin": "molesteeth",
        "compound": {
            "apiercing": 15
        },
        "type": "earring",
        "apiercing": 15,
        "id": "molesteeth"
    },
    "xmassweater": {
        "stat": 1,
        "explanation": "Such a beautiful vest. But for some reason, every time you wear this, people seem to avoid you.",
        "skin": "xmassweater",
        "resistance": 12,
        "grades": [
            4,
            8
        ],
        "evasion": 0.5,
        "tier": 1.5,
        "a": true,
        "upgrade": {
            "armor": 1.875,
            "stat": 1,
            "resistance": 1.875,
            "evasion": 0.25
        },
        "name": "Xmas Sweater",
        "g": 16000,
        "armor": 18,
        "type": "chest",
        "scroll": true,
        "id": "xmassweater"
    },
    "gem1": {
        "a": 2,
        "s": true,
        "e": 1,
        "name": "Tiny Ruby",
        "g": 24000,
        "skin": "gem1",
        "explanation": "A hard to find gem. Can be exchanged for random treasures.",
        "type": "gem",
        "id": "gem1"
    },
    "strscroll": {
        "stat": "str",
        "name": "Strength Scroll",
        "g": 8000,
        "explanation": "Adds Stength to an armor with a Stat attribute.",
        "s": true,
        "skin": "strscroll",
        "type": "pscroll",
        "buy": true,
        "id": "strscroll"
    },
    "talkingskull": {
        "a": true,
        "grades": [
            1,
            2
        ],
        "name": "Yorick the Talking Skull",
        "g": 96000,
        "skin": "talkingskull",
        "xp": 5,
        "compound": {
            "xp": 5
        },
        "type": "orb",
        "explanation": "Endless wisdom",
        "id": "talkingskull"
    },
    "leather": {
        "s": true,
        "quest": "leather",
        "e": 40,
        "name": "Leather",
        "g": 3000,
        "skin": "leather",
        "explanation": "A Leather piece.",
        "type": "quest",
        "id": "leather"
    },
    "supermittens": {
        "stat": 1,
        "grade": 1,
        "explanation": "Swift and lethal!",
        "resistance": 8,
        "grades": [
            0,
            0
        ],
        "frequency": 2,
        "skin": "supermittens",
        "tier": 2,
        "a": true,
        "upgrade": {
            "stat": 1,
            "rpiercing": 3,
            "armor": 2.5,
            "apiercing": 3,
            "resistance": 2.5,
            "frequency": 0.2
        },
        "name": "Super Mittens",
        "g": 340000,
        "armor": 16,
        "apiercing": 32,
        "rpiercing": 32,
        "type": "gloves",
        "scroll": true,
        "id": "supermittens"
    },
    "jacko": {
        "a": true,
        "g": 96000,
        "grades": [
            2,
            4
        ],
        "name": "Jack-o Lantern",
        "rpiercing": 20,
        "skin": "jacko",
        "compound": {
            "rpiercing": 15
        },
        "type": "orb",
        "ability": "scare",
        "id": "jacko"
    },
    "figurine": {
        "ignore": true,
        "note": "Summons an ancient soldier to fight for you",
        "s": true,
        "name": "Terracota Army Figurine",
        "g": 40000,
        "skin": "figurine",
        "action": "BREAK!",
        "type": "figurine",
        "id": "figurine"
    },
    "luckbooster": {
        "p2w": true,
        "explanation": "Increases your chances of looting something from a monster.",
        "compound": {
            "luck": 20
        },
        "cash": 499,
        "grades": [
            0,
            10
        ],
        "skin_a": "luckbooster_a",
        "skin": "luckbooster",
        "name": "Luck Booster",
        "g": 15968000,
        "days": 30,
        "gain": "luck",
        "type": "booster",
        "luck": 25,
        "buy_with_cash": true,
        "buy": true,
        "id": "luckbooster"
    },
    "mittens": {
        "stat": 1,
        "explanation": "Cute but deadly.",
        "resistance": 6,
        "grades": [
            4,
            8
        ],
        "skin": "mittens",
        "tier": 1.5,
        "a": true,
        "upgrade": {
            "armor": 1.875,
            "stat": 1,
            "apiercing": 2,
            "rpiercing": 2,
            "resistance": 1.875
        },
        "name": "Mittens",
        "g": 34000,
        "armor": 12,
        "apiercing": 20,
        "rpiercing": 20,
        "type": "gloves",
        "scroll": true,
        "id": "mittens"
    },
    "elixirdex2": {
        "dex": 12,
        "a": true,
        "s": true,
        "name": "Elixir of Extreme Dexterity",
        "g": 120000,
        "skin": "elixirdex2",
        "duration": 48,
        "type": "elixir",
        "skin_a": "elixirdex2",
        "id": "elixirdex2"
    },
    "jewellerybox": {
        "ignore": true,
        "a": true,
        "s": true,
        "e": 1,
        "name": "Jewellery Box",
        "g": 80000,
        "skin": "chest3",
        "explanation": "Can be exchanged for a random acessory.",
        "type": "box",
        "id": "jewellerybox"
    },
    "funtoken": {
        "name": "Fun Token",
        "g": 12000,
        "explanation": "A token representing fun with friends. Collect them from Daily events and exchange them for treasures!",
        "s": true,
        "skin": "funtoken",
        "type": "token",
        "id": "funtoken"
    },
    "gloves": {
        "stat": 1,
        "upgrade": {
            "armor": 1.25,
            "stat": 1,
            "resistance": 1.25
        },
        "name": "Gloves",
        "g": 3400,
        "armor": 8,
        "resistance": 4,
        "grades": [
            7,
            9
        ],
        "skin": "gloves",
        "tier": 1,
        "type": "gloves",
        "scroll": true,
        "buy": true,
        "id": "gloves"
    },
    "xboots": {
        "stat": 1,
        "grade": 2,
        "resistance": 8,
        "grades": [
            0,
            0
        ],
        "skin": "xboots",
        "tier": 4,
        "speed": 8,
        "a": 2,
        "upgrade": {
            "armor": 5.5,
            "stat": 1,
            "speed": 1.375,
            "resistance": 2.75
        },
        "name": "Darkforge Boots",
        "g": 12400000,
        "armor": 16,
        "type": "shoes",
        "scroll": true,
        "id": "xboots"
    },
    "claw": {
        "attack": 10,
        "upgrade": {
            "attack": 3,
            "range": 1.5
        },
        "grades": [
            7,
            9
        ],
        "name": "Claw",
        "g": 7200,
        "skin": "claw",
        "wtype": "fist",
        "type": "weapon",
        "range": 5,
        "damage": "physical",
        "buy": true,
        "id": "claw"
    },
    "intring": {
        "name": "Ring of Intelligence",
        "g": 24000,
        "int": 2,
        "skin": "intring",
        "grades": [
            3,
            5
        ],
        "compound": {
            "int": 2
        },
        "type": "ring",
        "id": "intring"
    },
    "pants": {
        "stat": 1,
        "upgrade": {
            "armor": 1.25,
            "stat": 1,
            "resistance": 1.25
        },
        "name": "Pants",
        "g": 7800,
        "armor": 10,
        "resistance": 6,
        "grades": [
            7,
            9
        ],
        "skin": "pants",
        "tier": 1,
        "type": "pants",
        "scroll": true,
        "buy": true,
        "id": "pants"
    },
    "lantern": {
        "g": 480000,
        "grades": [
            0,
            0
        ],
        "name": "The Lantern",
        "evasion": 10,
        "skin": "lantern",
        "explanation": "Forged from a naturally vibrating metal",
        "compound": {
            "resistance": 10,
            "evasion": 5
        },
        "type": "misc_offhand",
        "resistance": 120,
        "id": "lantern"
    },
    "bottleofxp": {
        "name": "Bottle of XP",
        "g": 999,
        "explanation": "One million memories, experiences, bits and pieces of information.",
        "s": true,
        "skin": "bottleofxp",
        "type": "xp",
        "gives": [
            [
                "xp",
                1000000
            ]
        ],
        "id": "bottleofxp"
    },
    "scroll4": {
        "a": true,
        "s": true,
        "name": "Ultimate Upgrade Scroll",
        "g": 64000000,
        "skin": "scroll4",
        "grade": 4,
        "explanation": "A scroll passed down from ancient times. Long believed to be extinct. Powers beyond imagination.",
        "type": "uscroll",
        "id": "scroll4"
    },
    "helmet1": {
        "stat": 1,
        "grade": 1,
        "resistance": 16,
        "grades": [
            0,
            7
        ],
        "protection": true,
        "skin": "helmet1",
        "tier": 2,
        "a": 2,
        "upgrade": {
            "armor": 2.5,
            "stat": 1,
            "resistance": 2.5
        },
        "name": "Rugged Helmet",
        "g": 32000,
        "armor": 14,
        "type": "helmet",
        "scroll": true,
        "id": "helmet1"
    },
    "scroll2": {
        "name": "Upgrade Scroll",
        "g": 1600000,
        "grade": 2,
        "explanation": "Scroll to upgrade a rare weapon or armor.",
        "s": true,
        "skin": "scroll2",
        "type": "uscroll",
        "buy": true,
        "id": "scroll2"
    },
    "scroll3": {
        "a": true,
        "s": true,
        "name": "Legendary Upgrade Scroll",
        "g": 3200000,
        "skin": "scroll3",
        "grade": 3,
        "explanation": "A mysterious upgrade scroll, you can feel that it's very powerful.",
        "type": "uscroll",
        "id": "scroll3"
    },
    "scroll0": {
        "name": "Upgrade Scroll",
        "g": 1000,
        "grade": 0,
        "explanation": "Scroll to upgrade a weapon or armor. If the upgrade fails, the item is lost.",
        "s": true,
        "skin": "scroll0",
        "type": "uscroll",
        "buy": true,
        "id": "scroll0"
    },
    "scroll1": {
        "name": "Upgrade Scroll",
        "g": 40000,
        "grade": 1,
        "explanation": "Scroll to upgrade a high grade weapon or armor.",
        "s": true,
        "skin": "scroll1",
        "type": "uscroll",
        "buy": true,
        "id": "scroll1"
    },
    "greenbomb": {
        "a": true,
        "explanation": "It's a candy with very questionable ingredients, might be addictive.",
        "resistance": -800,
        "crit": 10,
        "skin_a": "greenbomb",
        "skin": "greenbomb",
        "duration": 0.002,
        "speed": 30,
        "eat": true,
        "dex": 120,
        "name": "Green Bomb",
        "g": 10000,
        "s": true,
        "str": 50,
        "withdrawal": true,
        "type": "elixir",
        "id": "greenbomb"
    },
    "daggerofthedead": {
        "a": true,
        "upgrade": {
            "attack": 4.5,
            "range": 2
        },
        "str": 20,
        "g": 224000,
        "speed": -2,
        "wtype": "dagger",
        "range": 5,
        "apiercing": 20,
        "attack": 18,
        "grades": [
            0,
            6
        ],
        "vit": -6,
        "skin": "daggerofthedead",
        "damage": "physical",
        "type": "weapon",
        "explanation": "A deadly weapon",
        "name": "Dagger of the Dead",
        "id": "daggerofthedead"
    },
    "essenceofether": {
        "name": "Ethereal Essence",
        "g": 40000,
        "explanation": "A ghostly essence, maybe it could allow you to shift from this world momentarily",
        "s": true,
        "skin": "essenceofether",
        "type": "material",
        "id": "essenceofether"
    },
    "puppy1": {
        "a": true,
        "name": "Egg",
        "g": 40000,
        "explanation": "A vibrant egg, it's inhabitant seems eager to get out.",
        "skin": "egg1",
        "type": "pet",
        "id": "puppy1"
    },
    "blue": {
        "g": 150000,
        "s": true,
        "name": "Blue Horizon",
        "evasion": 50,
        "skin": "blue",
        "duration": 0.05,
        "miss": 24,
        "type": "elixir",
        "skin_a": "blue",
        "buy": true,
        "id": "blue"
    },
    "darktristone": {
        "dex": 1,
        "evasion": 3,
        "vit": 1,
        "rpiercing": 5,
        "onclick": "socket.emit('activate',{slot:$(this).data('id')})",
        "int": 1,
        "compound": {
            "dex": 1,
            "vit": 1,
            "rpiercing": 5,
            "int": 1,
            "apiercing": 5,
            "str": 1
        },
        "apiercing": 5,
        "g": 50000,
        "grades": [
            1,
            4
        ],
        "skin_a": "darktristone_a",
        "str": 1,
        "skin": "darktristone",
        "action": "ACTIVATE!",
        "type": "ring",
        "name": "Dark Tri-Stone",
        "id": "darktristone"
    },
    "warmscarf": {
        "a": true,
        "int": 2,
        "explanation": "Stylish and deadly!",
        "resistance": 10,
        "g": 20000,
        "grades": [
            7,
            9
        ],
        "skin": "warmscarf",
        "dex": 2,
        "upgrade": {
            "apiercing": 1.25,
            "rpiercing": 1.25
        },
        "name": "Warm Scarf",
        "rpiercing": 5,
        "armor": 10,
        "apiercing": 5,
        "str": 2,
        "type": "amulet",
        "id": "warmscarf"
    },
    "oozingterror": {
        "a": true,
        "nopo": "Mutates the brain to maximize its potential, sapping the user's life in the process.",
        "upgrade": {
            "int": 1,
            "attack": 6,
            "range": 3,
            "attr0": 0.02,
            "reflection": 0.25
        },
        "reflection": 1,
        "name": "Oozing Terror",
        "int": 20,
        "wtype": "staff",
        "explanation": "It drains the life energy of the user",
        "range": 50,
        "damage": "magical",
        "attr0": 0.1,
        "attack": 40,
        "g": 289000,
        "vit": -30,
        "skin": "oozingterror",
        "type": "weapon",
        "grades": [
            0,
            6
        ],
        "ability": "posion",
        "id": "oozingterror"
    },
    "pants1": {
        "stat": 1,
        "grade": 1,
        "resistance": 12,
        "grades": [
            0,
            7
        ],
        "skin": "pants1",
        "tier": 2,
        "a": 2,
        "upgrade": {
            "armor": 2.5,
            "stat": 1,
            "resistance": 2.5
        },
        "name": "Rugged Pants",
        "g": 78000,
        "armor": 20,
        "type": "pants",
        "scroll": true,
        "id": "pants1"
    },
    "xbox": {
        "a": true,
        "s": true,
        "e": 1,
        "name": "Xmas Box",
        "g": 1000000,
        "skin": "xbox",
        "explanation": "Finally... They all came together. A unique gift lies within this box. Take it to Xyn to be unlocked.",
        "type": "quest",
        "id": "xbox"
    },
    "reflectionscroll": {
        "stat": "reflection",
        "name": "Reflection Scroll",
        "g": 8000,
        "explanation": "Adds Reflection to an armor with a Stat attribute.",
        "s": true,
        "skin": "reflectionscroll",
        "type": "pscroll",
        "id": "reflectionscroll"
    },
    "angelwings": {
        "stat": 3,
        "skin": "angelwings",
        "resistance": 8,
        "grades": [
            0,
            6
        ],
        "evasion": 1,
        "speed": 1,
        "a": true,
        "upgrade": {
            "speed": 0.2,
            "resistance": 1,
            "evasion": 0.2
        },
        "name": "Angel Wings",
        "g": 120000,
        "onclick": "socket.emit('activate',{slot:$(this).data('id')})",
        "action": "FLAP",
        "type": "cape",
        "id": "angelwings"
    },
    "troll": {
        "name": "T-Shirt Roll",
        "g": 12000,
        "explanation": "A random T-Shirt!",
        "s": true,
        "skin": "troll",
        "type": "misc",
        "id": "troll"
    },
    "elixirluck": {
        "a": true,
        "s": true,
        "skin_a": "elixirluck",
        "name": "Liquid Luck",
        "g": 240000,
        "skin": "elixirluck",
        "duration": 12,
        "type": "elixir",
        "luck": 16,
        "buy": true,
        "id": "elixirluck"
    },
    "rabbitsfoot": {
        "a": true,
        "grades": [
            0,
            0
        ],
        "name": "Rabbit's Foot",
        "g": 120000,
        "skin": "rabbitsfoot",
        "explanation": "Taken from a rabbit who lived a long and happy life, after the natural death occurred, with pre-consent",
        "compound": {
            "luck": 5
        },
        "type": "orb",
        "luck": 10,
        "id": "rabbitsfoot"
    },
    "elixirint0": {
        "name": "Elixir of Intelligence",
        "g": 6000,
        "int": 6,
        "s": true,
        "skin_a": "elixirint0",
        "skin": "elixirint0",
        "duration": 12,
        "type": "elixir",
        "id": "elixirint0"
    },
    "whiskey": {
        "g": 120000,
        "s": true,
        "name": "Whiskey On The Rocks",
        "miss": 50,
        "skin": "whiskey",
        "duration": 0.1,
        "speed": -12,
        "type": "elixir",
        "apiercing": 500,
        "skin_a": "whiskey",
        "buy": true,
        "id": "whiskey"
    },
    "xhelmet": {
        "stat": 1,
        "grade": 2,
        "resistance": 32,
        "grades": [
            0,
            0
        ],
        "protection": true,
        "skin": "xhelmet",
        "tier": 4,
        "a": 2,
        "upgrade": {
            "armor": 5.5,
            "stat": 1,
            "resistance": 5.5
        },
        "name": "Darkforge Helmet",
        "g": 3200000,
        "armor": 28,
        "type": "helmet",
        "scroll": true,
        "id": "xhelmet"
    },
    "luckyt": {
        "grades": [
            6,
            8
        ],
        "upgrade": {
            "xp": 1,
            "resistance": 10,
            "luck": 2
        },
        "name": "Lucky T-Shirt",
        "g": 120000,
        "skin": "luckyt",
        "res": 20,
        "xp": 5,
        "type": "chest",
        "scroll": true,
        "luck": 5,
        "id": "luckyt"
    },
    "hpot1": {
        "name": "HP Potion",
        "g": 100,
        "s": true,
        "skin": "hpot1",
        "type": "pot",
        "gives": [
            [
                "hp",
                400
            ]
        ],
        "buy": true,
        "id": "hpot1"
    },
    "ornament": {
        "e": 20,
        "name": "Xmas Ornament",
        "g": 3000,
        "explanation": "A beautiful ornament. A bunch of these could decorate the trees of Winterland.",
        "s": true,
        "skin": "ornament",
        "type": "quest",
        "id": "ornament"
    },
    "cscroll2": {
        "name": "Compound Scroll",
        "g": 9200000,
        "grade": 2,
        "explanation": "Scroll to combine 3 rare accessories.",
        "s": true,
        "skin": "cscroll2",
        "type": "cscroll",
        "buy": true,
        "id": "cscroll2"
    },
    "poison": {
        "name": "Poison Sack",
        "g": 1000,
        "explanation": "An organic poison sack, can be used to coat weapons or arrows.",
        "s": true,
        "skin": "poison",
        "type": "skill_item",
        "id": "poison"
    },
    "dragondagger": {
        "explanation": "Majestic",
        "damage": "physical",
        "grades": [
            0,
            0
        ],
        "skin": "dragondagger",
        "a": true,
        "upgrade": {
            "armor": 4,
            "attack": 5,
            "range": 3
        },
        "name": "Dragon Dagger",
        "g": 2400000,
        "armor": 40,
        "wtype": "dagger",
        "range": 10,
        "attack": 20,
        "str": 20,
        "type": "weapon",
        "id": "dragondagger"
    },
    "orbofint": {
        "name": "Orb of Intelligence",
        "g": 240000,
        "int": 5,
        "skin": "blueorb",
        "ignore": true,
        "compound": {
            "int": 5
        },
        "type": "orb",
        "id": "orbofint"
    },
    "snakeoil": {
        "name": "Snake Oil",
        "g": 200,
        "explanation": "?",
        "s": true,
        "skin": "snakeoil",
        "type": "material",
        "id": "snakeoil"
    },
    "electronics": {
        "name": "Electronics",
        "g": 3000,
        "explanation": "Various random electronic components",
        "s": true,
        "skin": "electronics",
        "type": "material",
        "id": "electronics"
    },
    "staff": {
        "attack": 25,
        "upgrade": {
            "attack": 5,
            "range": 3
        },
        "grades": [
            7,
            9
        ],
        "name": "Staff",
        "g": 12400,
        "skin": "staff",
        "wtype": "staff",
        "type": "weapon",
        "range": 50,
        "damage": "magical",
        "buy": true,
        "id": "staff"
    },
    "strbelt": {
        "name": "Belt of Strength",
        "g": 50000,
        "skin": "strbelt",
        "grades": [
            2,
            5
        ],
        "str": 4,
        "compound": {
            "str": 3
        },
        "type": "belt",
        "id": "strbelt"
    },
    "carrotsword": {
        "a": true,
        "damage": "physical",
        "grades": [
            0,
            7
        ],
        "skin": "carrotsword",
        "dex": 12,
        "upgrade": {
            "attack": 4.5,
            "range": 1
        },
        "name": "Carrot Sword",
        "g": 92000,
        "wtype": "short_sword",
        "range": 3,
        "charisma": -20,
        "attack": 20,
        "type": "weapon",
        "id": "carrotsword"
    },
    "vitearring": {
        "name": "Earring of Vitality",
        "g": 50000,
        "skin": "vitearring",
        "grades": [
            2,
            5
        ],
        "vit": 3,
        "compound": {
            "vit": 2
        },
        "type": "earring",
        "id": "vitearring"
    },
    "fclaw": {
        "ability": "freeze",
        "int": 8,
        "damage": "physical",
        "grades": [
            0,
            7
        ],
        "attr0": 0.2,
        "skin": "fclaw",
        "a": true,
        "upgrade": {
            "attack": 4,
            "range": 1.5,
            "attr0": 0.1
        },
        "name": "Frozen Claw",
        "g": 72000,
        "wtype": "fist",
        "range": 5,
        "attack": 14,
        "type": "weapon",
        "id": "fclaw"
    },
    "essenceofnature": {
        "name": "Essence of Nature",
        "g": 5000,
        "explanation": "Earthly energy, waiting to spring",
        "s": true,
        "skin": "essenceofnature",
        "type": "material",
        "id": "essenceofnature"
    },
    "lostearring": {
        "explanation": "Looks valuable",
        "compound": {},
        "grades": [
            0,
            1
        ],
        "quest": "lostearring",
        "skin": "lostearring",
        "a": true,
        "e": 1,
        "name": "Gold Earring",
        "g": 360000,
        "edge": -2,
        "type": "earring",
        "id": "lostearring"
    },
    "qubics": {
        "a": true,
        "s": true,
        "name": "Qubics",
        "g": 1024000,
        "skin": "qubics",
        "p2w": true,
        "explanation": "Unique bio-electronic components, it's almost like they are alive. Can yield unexpected results if you introduce them to other materials!",
        "type": "qubics",
        "cash": 32,
        "buy_with_cash": true,
        "buy": true,
        "id": "qubics"
    },
    "feather0": {
        "name": "Magical Feather",
        "g": 4000,
        "explanation": "Holding this, you understand how those huge birds can fly, it's not a normal feather!",
        "s": true,
        "skin": "feather0",
        "type": "material",
        "id": "feather0"
    },
    "warpvest": {
        "stat": 1,
        "grade": 2,
        "explanation": "Warps space-time. Ancient Computer unlocks only a fraction of it's capabilities. Needs to be recharged in order to initiate a jump.",
        "resistance": 24,
        "grades": [
            0,
            0
        ],
        "skin": "warpvest",
        "tier": 3,
        "a": 2,
        "upgrade": {
            "dex": 10,
            "stat": 1,
            "str": 10,
            "int": 10,
            "resistance": 4.25,
            "armor": 4.25,
            "vit": 10
        },
        "name": "Warp Vest",
        "g": 4800000,
        "armor": 36,
        "edge": 5,
        "type": "chest",
        "scroll": true,
        "id": "warpvest"
    },
    "stonekey": {
        "name": "The Stone Key",
        "g": 50000,
        "explanation": "A stone key, imbued with magical energy.",
        "skin": "stonekey",
        "type": "key",
        "opens": "therush",
        "id": "stonekey"
    },
    "stramulet": {
        "name": "Amulet of Strength",
        "g": 30000,
        "skin": "stramulet",
        "grades": [
            3,
            5
        ],
        "str": 4,
        "compound": {
            "str": 2
        },
        "type": "amulet",
        "id": "stramulet"
    },
    "merry": {
        "ability": "secondchance",
        "damage": "physical",
        "grades": [
            0,
            8
        ],
        "attr0": 10,
        "skin": "merry",
        "tier": 1.5,
        "upgrade": {
            "attack": 4.4,
            "range": 9,
            "attr0": 2
        },
        "name": "Bow of The Merry Ranger",
        "g": 124000,
        "wtype": "bow",
        "range": 70,
        "attack": 23,
        "type": "weapon",
        "id": "merry"
    },
    "xptome": {
        "s": true,
        "name": "Tome of Protection",
        "g": 320000,
        "skin": "xptome",
        "p2w": true,
        "explanation": "Significantly reduces experience loss on death. If the owner is defeated by another player, the victor receives a portion of the Tome's cost.",
        "reward": 4,
        "type": "tome",
        "cash": 10,
        "buy_with_cash": true,
        "buy": true,
        "id": "xptome"
    },
    "bronzenugget": {
        "name": "Bronze Nugget",
        "g": 3200,
        "explanation": "Ideal for crafting",
        "s": true,
        "skin": "bronzenugget",
        "type": "material",
        "id": "bronzenugget"
    },
    "intamulet": {
        "name": "Amulet of Intelligence",
        "g": 30000,
        "int": 4,
        "skin": "intamulet",
        "grades": [
            3,
            5
        ],
        "compound": {
            "int": 3
        },
        "type": "amulet",
        "id": "intamulet"
    },
    "hgloves": {
        "stat": 1,
        "grade": 2,
        "resistance": 12,
        "grades": [
            0,
            0
        ],
        "skin": "hgloves",
        "tier": 3,
        "a": 2,
        "upgrade": {
            "armor": 4.25,
            "stat": 1,
            "resistance": 4.25
        },
        "name": "Heavy Gloves",
        "g": 340000,
        "armor": 24,
        "type": "gloves",
        "scroll": true,
        "id": "hgloves"
    },
    "orbofhp": {
        "name": "Orb of Vitality",
        "g": 120000,
        "hp": 120,
        "skin": "redorb",
        "ignore": true,
        "compound": {
            "hp": 120
        },
        "type": "orb",
        "id": "orbofhp"
    },
    "shadowstone": {
        "name": "Shadow Stone",
        "g": 800,
        "explanation": "A stone piece with curious properties, allows the bearer to shift to a parallel reality.",
        "s": true,
        "skin": "shadowstone",
        "type": "skill_item",
        "id": "shadowstone"
    },
    "partyhat": {
        "stat": 1,
        "resistance": 8,
        "grades": [
            7,
            9
        ],
        "skin": "partyhat",
        "tier": 1,
        "a": 2,
        "upgrade": {
            "dex": 0.2,
            "stat": 1,
            "str": 0.2,
            "int": 0.2,
            "resistance": 1.25,
            "armor": 1.25,
            "vit": 0.1
        },
        "name": "Party Hat",
        "g": 12000,
        "armor": 7,
        "type": "helmet",
        "scroll": true,
        "id": "partyhat"
    },
    "weaponbox": {
        "a": true,
        "s": true,
        "e": 1,
        "name": "Weapon Box",
        "g": 320000,
        "skin": "weaponbox",
        "explanation": "Can be exchanged for a random, rare weapon.",
        "type": "box",
        "id": "weaponbox"
    },
    "stand1": {
        "name": "Merchant Stand [Sell+Buy]",
        "g": 400000,
        "explanation": "You can become a merchant using this item.",
        "ignore": true,
        "skin": "stand1",
        "type": "stand",
        "id": "stand1"
    },
    "vblood": {
        "g": 240000,
        "s": true,
        "name": "Vampire's Blood",
        "lifesteal": 20,
        "skin": "vblood",
        "duration": 1,
        "explanation": "Just a tiny sip",
        "withdrawal": true,
        "type": "elixir",
        "skin_a": "vblood",
        "id": "vblood"
    },
    "dexearring": {
        "dex": 3,
        "name": "Earring of Dexterity",
        "g": 50000,
        "skin": "dexearring",
        "grades": [
            2,
            5
        ],
        "compound": {
            "dex": 2
        },
        "type": "earring",
        "id": "dexearring"
    },
    "shield": {
        "grades": [
            4,
            8
        ],
        "upgrade": {
            "armor": 12.5,
            "resistance": 7.5
        },
        "name": "Shield",
        "g": 24000,
        "skin": "shield",
        "armor": 60,
        "type": "shield",
        "resistance": 20,
        "id": "shield"
    },
    "espresso": {
        "name": "Espresso",
        "g": 12000,
        "type": "elixir",
        "s": true,
        "skin_a": "espresso",
        "skin": "espresso",
        "duration": 0.0005,
        "speed": 24,
        "buy": true,
        "id": "espresso"
    },
    "bow": {
        "damage": "physical",
        "grades": [
            7,
            9
        ],
        "skin": "bow",
        "tier": 1,
        "upgrade": {
            "attack": 4,
            "range": 8
        },
        "name": "Bow",
        "g": 16000,
        "wtype": "bow",
        "range": 60,
        "attack": 20,
        "type": "weapon",
        "buy": true,
        "id": "bow"
    },
    "essenceoffire": {
        "name": "Essence of Fire",
        "g": 40000,
        "explanation": "So fierce, so mesmerizing",
        "s": true,
        "skin": "essenceoffire",
        "type": "material",
        "id": "essenceoffire"
    },
    "pico": {
        "duration": 0.05,
        "s": true,
        "g": 150000,
        "name": "Pixel Colada",
        "rpiercing": 100,
        "skin": "pico",
        "crit": 20,
        "miss": 15,
        "type": "elixir",
        "skin_a": "pico",
        "buy": true,
        "id": "pico"
    },
    "hotchocolate": {
        "explanation": "Fills your heart with warmth.",
        "resistance": 30,
        "skin_a": "hotchocolate",
        "vit": 30,
        "skin": "hotchocolate",
        "duration": 1,
        "name": "Hot Chocolate",
        "g": 6000,
        "armor": 30,
        "s": true,
        "type": "elixir",
        "id": "hotchocolate"
    },
    "smoke": {
        "onclick": "socket.emit('throw',{num:locate_item('smoke'),x:character.real_x,y:character.real_y})",
        "s": true,
        "name": "Pouch of Poof",
        "g": 20,
        "skin": "smoke",
        "action": "THROW!",
        "explanation": "A pyrotechnic pouch developed for those who want to feel like Rogue's",
        "type": "throw",
        "id": "smoke"
    },
    "t2bow": {
        "explanation": "Crafted with the finest of materials",
        "damage": "physical",
        "grades": [
            0,
            7
        ],
        "skin": "t2bow",
        "tier": 2,
        "a": true,
        "upgrade": {
            "attack": 4.8,
            "range": 8
        },
        "name": "Well-Crafted Bow",
        "g": 78000,
        "wtype": "bow",
        "range": 60,
        "attack": 26,
        "type": "weapon",
        "id": "t2bow"
    },
    "stoneofxp": {
        "ignore": true,
        "days": 30,
        "skin_a": "stoneofxp_a",
        "g": 153600000,
        "skin": "stoneofxp",
        "explanation": "Increases experience gain by 50%. Needs to be activated. Can be morphed into other stones.",
        "type": "stone",
        "cash": 4800,
        "name": "Stone of Wisdom",
        "id": "stoneofxp"
    },
    "emptyjar": {
        "name": "Empty Jar",
        "g": 1,
        "explanation": "Always nice to have some empty jars lying around, you never know when you'll need one!",
        "s": true,
        "skin": "emptyjar",
        "type": "jar",
        "id": "emptyjar"
    },
    "frankypants": {
        "stat": 1,
        "grade": 2,
        "resistance": 18,
        "grades": [
            0,
            0
        ],
        "vit": 6,
        "skin": "frankypants",
        "tier": 3,
        "speed": 1,
        "a": 2,
        "upgrade": {
            "armor": 4.25,
            "stat": 1,
            "resistance": 4.25
        },
        "name": "Franky Pants",
        "g": 780000,
        "armor": 30,
        "type": "pants",
        "scroll": true,
        "id": "frankypants"
    },
    "platinumingot": {
        "name": "Platinum Ingot",
        "g": 40000000,
        "explanation": "Solid Platinum",
        "s": true,
        "skin": "platinumingot",
        "type": "material",
        "id": "platinumingot"
    },
    "intearring": {
        "name": "Earring of Intelligence",
        "g": 50000,
        "int": 3,
        "skin": "intearring",
        "grades": [
            2,
            5
        ],
        "compound": {
            "int": 2
        },
        "type": "earring",
        "id": "intearring"
    },
    "vitscroll": {
        "stat": "vit",
        "name": "Vitality Scroll",
        "g": 8000,
        "explanation": "Adds Vitality to an armor with a Stat attribute.",
        "s": true,
        "skin": "vitscroll",
        "type": "pscroll",
        "id": "vitscroll"
    },
    "hpants": {
        "stat": 1,
        "grade": 2,
        "resistance": 18,
        "grades": [
            0,
            0
        ],
        "skin": "hpants",
        "tier": 3,
        "a": 2,
        "upgrade": {
            "armor": 4.25,
            "stat": 1,
            "resistance": 4.25
        },
        "name": "Heavy Underarmor",
        "g": 780000,
        "armor": 30,
        "type": "pants",
        "scroll": true,
        "id": "hpants"
    },
    "licence": {
        "name": "Licence to Kill",
        "g": 25000000,
        "explanation": "With this license, you gain a unique immunity for 7 minutes. No one can bother you for having too many comrades in this realm!",
        "s": true,
        "skin": "licence",
        "type": "licence",
        "buy": true,
        "id": "licence"
    },
    "spear": {
        "apiercing": 10,
        "grades": [
            3,
            8
        ],
        "skin": "spear",
        "range": 15,
        "a": 2,
        "upgrade": {
            "range": 2,
            "attack": 4.25,
            "apiercing": 5
        },
        "name": "Spear",
        "g": 72000,
        "wtype": "spear",
        "damage": "physical",
        "attack": 15,
        "type": "weapon",
        "id": "spear"
    },
    "amuletofm": {
        "dex": 1,
        "dreturn": 1,
        "reflection": 0.5,
        "evasion": 2,
        "int": 1,
        "hp": 40,
        "compound": {
            "dex": 1,
            "int": 1,
            "reflection": 0.5,
            "evasion": 1,
            "dreturn": 0.5,
            "crit": 1,
            "str": 1,
            "hp": 60,
            "armor": 2
        },
        "ignore": true,
        "armor": 10,
        "grades": [
            3,
            5
        ],
        "g": 640000,
        "a": true,
        "str": 1,
        "skin": "amuletofm",
        "crit": 2,
        "type": "amulet",
        "name": "Amulet of Mystery",
        "id": "amuletofm"
    },
    "pvptoken": {
        "name": "PVP Token",
        "g": 24000,
        "explanation": "A token representing valour in battles. Collect them from PVP events and exchange them for treasures!",
        "s": true,
        "skin": "pvptoken",
        "type": "token",
        "id": "pvptoken"
    },
    "egg5": {
        "name": "Easter Egg",
        "g": 4000,
        "explanation": "A uniquely painted Egg!",
        "s": true,
        "skin": "egg5",
        "type": "quest",
        "id": "egg5"
    },
    "orbofstr": {
        "name": "Orb of Strength",
        "g": 240000,
        "skin": "orangeorb",
        "ignore": true,
        "str": 5,
        "compound": {
            "str": 5
        },
        "type": "orb",
        "id": "orbofstr"
    },
    "glitch": {
        "ignore": true,
        "a": true,
        "e": 1,
        "name": "A Glitch",
        "g": 10000,
        "skin": "glitch",
        "explanation": "Huh?! ??!",
        "type": "misc",
        "event": true,
        "id": "glitch"
    },
    "ornamentstaff": {
        "damage": "magical",
        "grades": [
            0,
            7
        ],
        "upgrade": {
            "attack": 6,
            "awesomeness": 0.1,
            "range": 3
        },
        "skin": "ornamentstaff",
        "range": 60,
        "a": true,
        "awesomeness": 99,
        "name": "Ornament Staff",
        "g": 120000,
        "wtype": "staff",
        "attack": 30,
        "mp_cost": -40,
        "type": "weapon",
        "id": "ornamentstaff"
    },
    "candy0v3": {
        "s": true,
        "e": 1,
        "name": "Rare Candy",
        "g": 12000,
        "skin": "candy0",
        "explanation": "A rare candy. Xyn in New Town could give you something exciting in exchange!",
        "type": "gem",
        "event": true,
        "id": "candy0v3"
    },
    "candy0v2": {
        "e": 1,
        "name": "Rare Candy [h2]",
        "g": 12000,
        "explanation": "A rare candy. Xyn in New Town could give you something exciting in exchange!",
        "s": true,
        "skin": "candy0",
        "type": "gem",
        "id": "candy0v2"
    },
    "egg7": {
        "name": "Easter Egg",
        "g": 4000,
        "explanation": "A uniquely painted Egg!",
        "s": true,
        "skin": "egg7",
        "type": "quest",
        "id": "egg7"
    },
    "bataxe": {
        "delia": "Now you see me, now you see the floor",
        "damage": "physical",
        "grades": [
            0,
            6
        ],
        "wspeed": "slow",
        "skin": "bataxe",
        "name": "Ghastly Battle Axe",
        "a": true,
        "upgrade": {
            "attack": 9.5,
            "range": 1
        },
        "reflection": 4,
        "g": 124000,
        "wtype": "axe",
        "range": 8,
        "attack": 36,
        "type": "weapon",
        "id": "bataxe"
    },
    "bunnyears": {
        "stat": 1,
        "grade": 1,
        "resistance": 16,
        "tier": 2,
        "grades": [
            4,
            8
        ],
        "protection": true,
        "vit": 4,
        "skin": "bunnyears",
        "cuteness": 12,
        "name": "Bunny Ears",
        "a": 2,
        "upgrade": {
            "armor": 2.5,
            "stat": 1,
            "resistance": 2.5,
            "evasion": 0.2
        },
        "evasion": 1,
        "g": 32000,
        "armor": 14,
        "type": "helmet",
        "scroll": true,
        "id": "bunnyears"
    },
    "cdragon": {
        "dreturn": 3,
        "int": 10,
        "resistance": 32,
        "g": 8900000,
        "grades": [
            0,
            0
        ],
        "a": 2,
        "vit": 2,
        "skin": "dragonarmor",
        "dex": 10,
        "name": "Dragon Armor",
        "rpiercing": 16,
        "armor": 40,
        "apiercing": 16,
        "str": 10,
        "type": "chest",
        "id": "cdragon"
    },
    "santasbelt": {
        "dex": 3,
        "a": true,
        "grades": [
            0,
            3
        ],
        "g": 640000,
        "name": "Santa's Belt",
        "evasion": 4,
        "skin": "santasbelt",
        "compound": {
            "dex": 2
        },
        "type": "belt",
        "id": "santasbelt"
    },
    "computer": {
        "explanation": "Networks you to NPC's and extends the CODE capabilities.",
        "type": "computer",
        "name": "Ancient Computer",
        "g": 64000000,
        "skin": "ancientcomputer",
        "id": "computer"
    },
    "seashell": {
        "s": true,
        "quest": "seashell",
        "e": 20,
        "name": "Seashell",
        "g": 800,
        "skin": "seashell",
        "explanation": "A beautiful seashell.",
        "type": "quest",
        "id": "seashell"
    },
    "vitring": {
        "name": "Ring of Vitality",
        "g": 24000,
        "skin": "vitring",
        "grades": [
            3,
            5
        ],
        "vit": 2,
        "compound": {
            "vit": 2
        },
        "type": "ring",
        "id": "vitring"
    },
    "swordofthedead": {
        "resistance": 20,
        "damage": "physical",
        "grades": [
            0,
            6
        ],
        "vit": -8,
        "skin": "swordofthedead",
        "a": true,
        "upgrade": {
            "attack": 5,
            "range": 1.75,
            "resistance": 2.5
        },
        "name": "Sword of the Dead",
        "g": 224000,
        "wtype": "short_sword",
        "range": 8,
        "attack": 25,
        "str": 10,
        "type": "weapon",
        "id": "swordofthedead"
    },
    "harmor": {
        "stat": 1,
        "grade": 2,
        "resistance": 24,
        "grades": [
            0,
            0
        ],
        "skin": "harmor",
        "tier": 3,
        "a": 2,
        "upgrade": {
            "armor": 4.25,
            "stat": 1,
            "resistance": 4.25
        },
        "name": "Heavy Armor",
        "g": 480000,
        "armor": 36,
        "type": "chest",
        "scroll": true,
        "id": "harmor"
    },
    "maceofthedead": {
        "a": true,
        "grades": [
            0,
            6
        ],
        "upgrade": {},
        "explanation": "A weapon none in the realm can wield!",
        "name": "Mace of the Dead",
        "g": 224000,
        "skin": "maceofthedead",
        "wtype": "mace",
        "type": "weapon",
        "damage": "physical",
        "id": "maceofthedead"
    },
    "fury": {
        "a": true,
        "stat": 1,
        "resistance": 12,
        "tier": 1.5,
        "grades": [
            0,
            0
        ],
        "skin": "fury",
        "crit": 6,
        "dex": 2,
        "upgrade": {
            "crit": 0.5,
            "armor": 1.875,
            "stat": 1,
            "apiercing": 10,
            "resistance": 1.875
        },
        "name": "Band of Fury",
        "g": 6400000,
        "armor": 10.5,
        "apiercing": 20,
        "type": "helmet",
        "scroll": true,
        "id": "fury"
    },
    "coat1": {
        "stat": 1,
        "grade": 1,
        "resistance": 16,
        "grades": [
            0,
            7
        ],
        "skin": "coat1",
        "tier": 2,
        "a": 2,
        "upgrade": {
            "armor": 2.5,
            "stat": 1,
            "resistance": 2.5
        },
        "name": "Rugged Coat",
        "g": 48000,
        "armor": 24,
        "type": "chest",
        "scroll": true,
        "id": "coat1"
    },
    "elixirint1": {
        "name": "Elixir of Greater Intelligence",
        "g": 20000,
        "int": 8,
        "s": true,
        "skin_a": "elixirint1",
        "skin": "elixirint1",
        "duration": 24,
        "type": "elixir",
        "id": "elixirint1"
    },
    "egg0": {
        "name": "Easter Egg",
        "g": 4000,
        "explanation": "A uniquely painted Egg!",
        "s": true,
        "skin": "egg0",
        "type": "quest",
        "id": "egg0"
    },
    "hhelmet": {
        "stat": 1,
        "grade": 2,
        "resistance": 24,
        "grades": [
            0,
            0
        ],
        "protection": true,
        "skin": "hhelmet",
        "tier": 3,
        "a": 2,
        "upgrade": {
            "armor": 4.25,
            "stat": 1,
            "resistance": 4.25
        },
        "name": "Heavy Helmet",
        "g": 320000,
        "armor": 21,
        "type": "helmet",
        "scroll": true,
        "id": "hhelmet"
    },
    "cosmo0": {
        "name": "New Armor",
        "g": 2848000,
        "explanation": "Give this to NPC Haila to receive a new look. Heads-up! It's random, you may or may-not like it. [Work in progress - Not functional yet.]",
        "cash": 89,
        "s": true,
        "skin": "cosmo0",
        "type": "cosmetics",
        "buy_with_cash": true,
        "id": "cosmo0"
    },
    "froststaff": {
        "ability": "freeze",
        "int": 2,
        "damage": "magical",
        "grades": [
            0,
            8
        ],
        "attr0": 4,
        "skin": "froststaff",
        "a": true,
        "upgrade": {
            "int": 0.2,
            "attack": 5.5,
            "range": 3,
            "attr0": 1.25
        },
        "name": "Frost Staff",
        "g": 289000,
        "wtype": "staff",
        "range": 50,
        "attack": 30,
        "type": "weapon",
        "id": "froststaff"
    },
    "cosmo2": {
        "name": "New Hairdo",
        "g": 1568000,
        "explanation": "Give this to NPC Haila to receive a new hairdo. Heads-up! It's random, you may or may-not like it. [Work in progress - Not functional yet.]",
        "cash": 49,
        "s": true,
        "skin": "cosmo2",
        "type": "cosmetics",
        "buy_with_cash": true,
        "id": "cosmo2"
    },
    "cosmo4": {
        "name": "New Accessory",
        "g": 12768000,
        "explanation": "Give this to NPC Haila to receive a unique accessory. Heads-up! It's random, you may or may-not like it. [Work in progress - Not functional yet.]",
        "cash": 399,
        "s": true,
        "skin": "cosmo4",
        "type": "cosmetics",
        "buy_with_cash": true,
        "id": "cosmo4"
    },
    "gloves1": {
        "stat": 1,
        "grade": 1,
        "resistance": 8,
        "grades": [
            0,
            7
        ],
        "skin": "gloves1",
        "tier": 2,
        "a": 2,
        "upgrade": {
            "armor": 2.5,
            "stat": 1,
            "resistance": 2.5
        },
        "name": "Rugged Gloves",
        "g": 34000,
        "armor": 16,
        "type": "gloves",
        "scroll": true,
        "id": "gloves1"
    },
    "candy1": {
        "a": 2,
        "s": true,
        "e": 1,
        "name": "Candy [h1]",
        "g": 24000,
        "skin": "candy1",
        "explanation": "Halloween candy. Can be exchanged for random treasures.",
        "type": "gem",
        "id": "candy1"
    },
    "offering": {
        "a": true,
        "s": true,
        "name": "Primordial Essence",
        "g": 3168000,
        "skin": "shade_offering",
        "p2w": true,
        "explanation": "The essence contained within can be transferred to items during upgrades and compounds. Significantly increases the chance to succeed.",
        "type": "offering",
        "cash": 99,
        "buy_with_cash": true,
        "buy": true,
        "id": "offering"
    },
    "powerglove": {
        "stat": 1,
        "ability": "power",
        "grade": 1,
        "resistance": 8,
        "g": 1600000,
        "grades": [
            0,
            0
        ],
        "frequency": 2,
        "skin": "powerglove",
        "tier": 2,
        "a": true,
        "upgrade": {
            "stat": 1,
            "rpiercing": 2,
            "armor": 2.5,
            "apiercing": 2,
            "resistance": 2.5,
            "frequency": 0.2
        },
        "name": "Power Glove",
        "rpiercing": 16,
        "armor": 16,
        "apiercing": 16,
        "charge": 0,
        "type": "gloves",
        "scroll": true,
        "id": "powerglove"
    },
    "xmashat": {
        "stat": 1,
        "resistance": 12,
        "grades": [
            4,
            8
        ],
        "vit": 2,
        "skin": "xmashat",
        "tier": 1.5,
        "a": true,
        "upgrade": {
            "armor": 1.875,
            "stat": 1,
            "resistance": 1.875
        },
        "name": "Xmas Hat",
        "g": 13200,
        "armor": 10.5,
        "type": "helmet",
        "scroll": true,
        "id": "xmashat"
    },
    "elixirstr0": {
        "name": "Elixir of Strength",
        "g": 6000,
        "s": true,
        "skin_a": "elixirstr0",
        "str": 6,
        "skin": "elixirstr0",
        "duration": 12,
        "type": "elixir",
        "id": "elixirstr0"
    },
    "orbofsc": {
        "a": true,
        "attr0": 1,
        "int": 2,
        "compound": {
            "dex": 1,
            "vit": 1,
            "int": 2,
            "mp": 100,
            "str": 1,
            "attr0": 1
        },
        "grades": [
            0,
            0
        ],
        "vit": 2,
        "skin": "orbofsc",
        "ability": "secondchance",
        "dex": 2,
        "name": "Orb of Second Chances",
        "g": 120000,
        "mp": 200,
        "str": 2,
        "type": "orb",
        "id": "orbofsc"
    },
    "cosmo1": {
        "name": "New Make-up",
        "g": 4768000,
        "explanation": "Give this to NPC Haila to receive a new make-up. Heads-up! It's random, you may or may-not like it. [Work in progress - Not functional yet.]",
        "cash": 149,
        "s": true,
        "skin": "cosmo1",
        "type": "cosmetics",
        "buy_with_cash": true,
        "id": "cosmo1"
    },
    "suckerpunch": {
        "a": true,
        "g": 3200000,
        "grades": [
            0,
            0
        ],
        "name": "Sucker Punch",
        "lifesteal": 2,
        "skin": "suckerpunch",
        "crit": 2,
        "compound": {
            "crit": 1,
            "apiercing": 20,
            "lifesteal": 1
        },
        "type": "ring",
        "apiercing": 20,
        "id": "suckerpunch"
    },
    "gem0": {
        "a": true,
        "s": true,
        "e": 1,
        "name": "Raw Emerald",
        "g": 240000,
        "skin": "gem0",
        "explanation": "A very rare gem. Can be exchanged for random treasures.",
        "type": "gem",
        "id": "gem0"
    },
    "xpants": {
        "stat": 1,
        "grade": 2,
        "resistance": 24,
        "grades": [
            0,
            0
        ],
        "skin": "xpants",
        "tier": 4,
        "a": 2,
        "upgrade": {
            "armor": 5.5,
            "stat": 1,
            "resistance": 5.5
        },
        "name": "Darkforge Underarmor",
        "g": 7800000,
        "armor": 40,
        "type": "pants",
        "scroll": true,
        "id": "xpants"
    },
    "stick": {
        "a": true,
        "grades": [
            4,
            7
        ],
        "upgrade": {},
        "name": "Stick",
        "g": 299999,
        "skin": "stick",
        "explanation": "...",
        "type": "misc",
        "id": "stick"
    },
    "5bucks": {
        "s": true,
        "rare": true,
        "name": "Old Paper Money",
        "g": 5,
        "skin": "5bucks",
        "e": 1,
        "explanation": "It's not gold. Must be worthless.",
        "type": "misc",
        "id": "5bucks"
    },
    "x2": {
        "a": true,
        "s": true,
        "name": "Quantum Piece",
        "g": 4000,
        "skin": "x2",
        "explanation": "A unique component of a curious puzzle",
        "type": "quest",
        "event": true,
        "id": "x2"
    },
    "x3": {
        "a": true,
        "s": true,
        "name": "Quantum Piece",
        "g": 4000,
        "skin": "x3",
        "explanation": "A unique component of a curious puzzle",
        "type": "quest",
        "event": true,
        "id": "x3"
    },
    "x0": {
        "a": true,
        "s": true,
        "name": "Quantum Piece",
        "g": 4000,
        "skin": "x0",
        "explanation": "A unique component of a curious puzzle",
        "type": "quest",
        "event": true,
        "id": "x0"
    },
    "x1": {
        "a": true,
        "s": true,
        "name": "Quantum Piece",
        "g": 4000,
        "skin": "x1",
        "explanation": "A unique component of a curious puzzle",
        "type": "quest",
        "event": true,
        "id": "x1"
    },
    "x6": {
        "a": true,
        "s": true,
        "name": "Quantum Piece",
        "g": 4000,
        "skin": "x6",
        "explanation": "A unique component of a curious puzzle",
        "type": "quest",
        "event": true,
        "id": "x6"
    },
    "cosmo3": {
        "name": "New Hat",
        "g": 3168000,
        "explanation": "Give this to NPC Haila to receive a new hat. Heads-up! It's random, you may or may-not like it. [Work in progress - Not functional yet.]",
        "cash": 99,
        "s": true,
        "skin": "cosmo3",
        "type": "cosmetics",
        "buy_with_cash": true,
        "id": "cosmo3"
    },
    "stealthcape": {
        "stat": 3,
        "upgrade": {
            "resistance": 1
        },
        "grades": [
            0,
            4
        ],
        "name": "Stealth Cape",
        "g": 2000000,
        "skin": "stealthcape",
        "explanation": "Thanks to it's stealth capabilities, no one can track your endeavours any more.",
        "type": "cape",
        "resistance": 42,
        "id": "stealthcape"
    },
    "x5": {
        "a": true,
        "s": true,
        "name": "Quantum Piece",
        "g": 4000,
        "skin": "x5",
        "explanation": "A unique component of a curious puzzle",
        "type": "quest",
        "event": true,
        "id": "x5"
    },
    "eggnog": {
        "g": 6000,
        "s": true,
        "name": "Eggnog",
        "evasion": 2.5,
        "skin": "eggnog",
        "duration": 48,
        "hp": 600,
        "type": "elixir",
        "explanation": "Fills your heart with warmth and joy.",
        "skin_a": "eggnog",
        "id": "eggnog"
    },
    "essenceoffrost": {
        "name": "Essence of Frost",
        "g": 40000,
        "explanation": "It's like an ice storm in a bottle",
        "s": true,
        "skin": "essenceoffrost",
        "type": "material",
        "id": "essenceoffrost"
    },
    "mshield": {
        "stat": 5,
        "upgrade": {
            "armor": 5,
            "stat": 1.25,
            "luck": 1
        },
        "name": "Shield M",
        "g": 1200000,
        "skin": "mshield",
        "armor": 20,
        "type": "shield",
        "grades": [
            0,
            0
        ],
        "luck": 8,
        "id": "mshield"
    },
    "elixirvit0": {
        "name": "Elixir of Vitality",
        "g": 6000,
        "s": true,
        "skin_a": "elixirvit0",
        "vit": 8,
        "skin": "elixirvit0",
        "duration": 12,
        "type": "elixir",
        "id": "elixirvit0"
    },
    "elixirvit1": {
        "name": "Elixir of Greater Vitality",
        "g": 20000,
        "s": true,
        "skin_a": "elixirvit1",
        "vit": 12,
        "skin": "elixirvit1",
        "duration": 24,
        "type": "elixir",
        "id": "elixirvit1"
    },
    "elixirvit2": {
        "a": true,
        "g": 120000,
        "s": true,
        "name": "Elixir of Extreme Vitality",
        "vit": 18,
        "skin": "elixirvit2",
        "duration": 48,
        "type": "elixir",
        "skin_a": "elixirvit2",
        "id": "elixirvit2"
    },
    "blade": {
        "attack": 15,
        "upgrade": {
            "attack": 4,
            "range": 1.5
        },
        "grades": [
            7,
            9
        ],
        "name": "Blade",
        "g": 8400,
        "skin": "blade",
        "wtype": "short_sword",
        "type": "weapon",
        "range": 5,
        "damage": "physical",
        "buy": true,
        "id": "blade"
    },
    "staffofthedead": {
        "damage": "magical",
        "grades": [
            0,
            6
        ],
        "skin": "staffofthedead",
        "speed": -6,
        "a": true,
        "upgrade": {
            "attack": 6,
            "range": 2.5
        },
        "name": "Staff of the Dead",
        "g": 224000,
        "wtype": "staff",
        "range": 50,
        "attack": 40,
        "str": 32,
        "type": "weapon",
        "id": "staffofthedead"
    },
    "cscroll0": {
        "name": "Compound Scroll",
        "g": 6400,
        "grade": 0,
        "explanation": "Scroll to combine 3 accessories. Things get challenging after +1.",
        "s": true,
        "skin": "cscroll0",
        "type": "cscroll",
        "buy": true,
        "id": "cscroll0"
    },
    "cscroll1": {
        "name": "Compound Scroll",
        "g": 240000,
        "grade": 1,
        "explanation": "Scroll to combine 3 high grade accessories.",
        "s": true,
        "skin": "cscroll1",
        "type": "cscroll",
        "buy": true,
        "id": "cscroll1"
    },
    "dexring": {
        "dex": 2,
        "name": "Ring of Dexterity",
        "g": 24000,
        "skin": "dexring",
        "grades": [
            3,
            5
        ],
        "compound": {
            "dex": 2
        },
        "type": "ring",
        "id": "dexring"
    },
    "fireblade": {
        "damage": "physical",
        "grades": [
            0,
            8
        ],
        "skin": "fireblade",
        "a": true,
        "upgrade": {
            "attack": 4.5,
            "range": 1.5
        },
        "name": "Fiery Blade",
        "g": 96000,
        "wtype": "short_sword",
        "range": 5,
        "attack": 18,
        "type": "weapon",
        "id": "fireblade"
    },
    "basher": {
        "a": true,
        "upgrade": {
            "armor": 4,
            "range": 1,
            "attack": 8,
            "attr0": 0.4,
            "attr1": 0.2,
            "speed": 1
        },
        "attr0": 0.5,
        "name": "Basher",
        "armor": 20,
        "speed": -15,
        "wtype": "basher",
        "attr1": 1,
        "range": 5,
        "damage": "physical",
        "g": 72000,
        "attack": 24,
        "grades": [
            0,
            7
        ],
        "wspeed": "slow",
        "skin": "basher",
        "type": "weapon",
        "ability": "bash",
        "id": "basher"
    },
    "apologybox": {
        "a": 2,
        "s": true,
        "e": 1,
        "name": "Apology Box",
        "g": 120000,
        "skin": "apologybox",
        "explanation": "This box represents an official apology. Sorry.",
        "type": "box",
        "event": true,
        "id": "apologybox"
    },
    "cake": {
        "hp": 1200,
        "skin_a": "cake",
        "skin": "cake",
        "duration": 6,
        "speed": -30,
        "eat": true,
        "name": "Piece of Cake",
        "g": 100,
        "s": true,
        "type": "elixir",
        "explanation": "Delicious.",
        "id": "cake"
    },
    "elixirdex0": {
        "dex": 6,
        "name": "Elixir of Dexterity",
        "g": 6000,
        "s": true,
        "skin_a": "elixirdex0",
        "skin": "elixirdex0",
        "duration": 12,
        "type": "elixir",
        "id": "elixirdex0"
    },
    "flute": {
        "explanation": "The sound of each flute is unique and mesmerizing. Your pets will easily recognize the sound of yours and come to your call.",
        "type": "flute",
        "name": "Flute",
        "g": 200000000,
        "skin": "flute",
        "id": "flute"
    },
    "firestaff": {
        "damage": "magical",
        "grades": [
            0,
            8
        ],
        "skin": "firestaff",
        "a": true,
        "upgrade": {
            "attack": 5.5,
            "range": 3
        },
        "name": "Fiery Staff",
        "g": 189000,
        "wtype": "staff",
        "range": 50,
        "attack": 30,
        "type": "weapon",
        "id": "firestaff"
    },
    "egg8": {
        "name": "Easter Egg",
        "g": 4000,
        "explanation": "A uniquely painted Egg!",
        "s": true,
        "skin": "egg8",
        "type": "quest",
        "id": "egg8"
    },
    "mpotx": {
        "name": "Super MP Potion",
        "g": 20000,
        "s": true,
        "skin": "mpotx",
        "type": "pot",
        "gives": [
            [
                "mp",
                10000
            ]
        ],
        "id": "mpotx"
    },
    "quiver": {
        "dex": 2,
        "range": 20,
        "upgrade": {
            "dex": 1,
            "armor": 2,
            "range": 3.5
        },
        "name": "Quiver",
        "g": 24000,
        "skin": "quiver",
        "armor": 10,
        "type": "quiver",
        "grades": [
            3,
            7
        ],
        "id": "quiver"
    },
    "stoneofluck": {
        "ignore": true,
        "days": 30,
        "skin_a": "stoneofluck",
        "g": 153600000,
        "skin": "stoneofluck",
        "explanation": "Increases your chances to loot something from a monster by 20%.",
        "type": "stone",
        "cash": 4800,
        "name": "Stone of Luck",
        "id": "stoneofluck"
    },
    "xshield": {
        "int": 4,
        "explanation": "A metallurgical failure but a magical marvel",
        "resistance": 24,
        "g": 1200000,
        "grades": [
            0,
            0
        ],
        "skin": "xshield",
        "crit": 1,
        "xp": 8,
        "speed": 5,
        "dex": 6,
        "upgrade": {
            "resistance": 6,
            "str": 1
        },
        "name": "Shield X",
        "evasion": 4,
        "str": 8,
        "type": "shield",
        "id": "xshield"
    },
    "egg3": {
        "name": "Easter Egg",
        "g": 4000,
        "explanation": "A uniquely painted Egg!",
        "s": true,
        "skin": "egg3",
        "type": "quest",
        "id": "egg3"
    },
    "egg2": {
        "name": "Easter Egg",
        "g": 4000,
        "explanation": "A uniquely painted Egg!",
        "s": true,
        "skin": "egg2",
        "type": "quest",
        "id": "egg2"
    },
    "strring": {
        "name": "Ring of Strength",
        "g": 24000,
        "skin": "strring",
        "grades": [
            3,
            5
        ],
        "str": 2,
        "compound": {
            "str": 2
        },
        "type": "ring",
        "id": "strring"
    },
    "egg4": {
        "name": "Easter Egg",
        "g": 4000,
        "explanation": "A uniquely painted Egg!",
        "s": true,
        "skin": "egg4",
        "type": "quest",
        "id": "egg4"
    },
    "hpotx": {
        "name": "Super HP Potion",
        "g": 20000,
        "s": true,
        "skin": "hpotx",
        "type": "pot",
        "gives": [
            [
                "hp",
                10000
            ]
        ],
        "id": "hpotx"
    },
    "egg6": {
        "name": "Easter Egg",
        "g": 4000,
        "explanation": "A uniquely painted Egg!",
        "s": true,
        "skin": "egg6",
        "type": "quest",
        "id": "egg6"
    },
    "firecrackers": {
        "onclick": "socket.emit('throw',{num:locate_item('firecrackers'),x:character.real_x,y:character.real_y})",
        "s": true,
        "name": "Firecracker",
        "g": 20,
        "skin": "firecrackers",
        "action": "THROW!",
        "explanation": "Scary but harmless",
        "type": "throw",
        "id": "firecrackers"
    },
    "dexscroll": {
        "stat": "dex",
        "name": "Dexterity Scroll",
        "g": 8000,
        "explanation": "Adds Dexterity to an armor with a Stat attribute.",
        "s": true,
        "skin": "dexscroll",
        "type": "pscroll",
        "buy": true,
        "id": "dexscroll"
    },
    "gift1": {
        "a": 2,
        "s": true,
        "e": 1,
        "name": "Gift",
        "g": 100,
        "skin": "gift1",
        "explanation": "A Gift to celebrate our Anniversary!",
        "type": "gem",
        "id": "gift1"
    },
    "gift0": {
        "a": true,
        "s": true,
        "e": 1,
        "name": "Rare Gift",
        "g": 2400,
        "skin": "gift0",
        "explanation": "A Rare Gift to celebrate our Anniversary!",
        "type": "gem",
        "id": "gift0"
    },
    "elixirstr1": {
        "name": "Elixir of Greater Strength",
        "g": 20000,
        "s": true,
        "skin_a": "elixirstr1",
        "str": 8,
        "skin": "elixirstr1",
        "duration": 24,
        "type": "elixir",
        "id": "elixirstr1"
    },
    "goldenegg": {
        "a": true,
        "s": true,
        "e": 1,
        "name": "Golden Egg",
        "g": 60000,
        "skin": "goldenegg",
        "explanation": "Nope, it's not painted, an actual golden egg!",
        "type": "quest",
        "id": "goldenegg"
    },
    "starkillers": {
        "stat": 1,
        "grade": 2,
        "resistance": 18,
        "tier": 3,
        "grades": [
            0,
            0
        ],
        "vit": 10,
        "skin": "starkillers",
        "crit": 2,
        "name": "Star Killer's Pants",
        "a": 2,
        "upgrade": {
            "crit": 0.2,
            "armor": 4.25,
            "stat": 1,
            "resistance": 4.25,
            "rpiercing": 5
        },
        "rpiercing": 80,
        "g": 7800000,
        "armor": 30,
        "type": "pants",
        "scroll": true,
        "id": "starkillers"
    },
    "helmet": {
        "stat": 1,
        "upgrade": {
            "armor": 1.25,
            "stat": 1,
            "resistance": 1.25
        },
        "name": "Helmet",
        "g": 3200,
        "armor": 7,
        "resistance": 8,
        "grades": [
            7,
            9
        ],
        "skin": "helmet",
        "tier": 1,
        "type": "helmet",
        "scroll": true,
        "buy": true,
        "id": "helmet"
    },
    "xmasshoes": {
        "stat": 1,
        "grades": [
            4,
            8
        ],
        "vit": 2,
        "skin": "xmasshoes",
        "tier": 1.5,
        "speed": 6,
        "a": true,
        "upgrade": {
            "armor": 1.875,
            "stat": 1,
            "speed": 0.75
        },
        "name": "Xmas Shoes",
        "g": 36000,
        "armor": 6,
        "type": "shoes",
        "scroll": true,
        "id": "xmasshoes"
    },
    "pyjamas": {
        "stat": 1,
        "grade": 1,
        "hp": 200,
        "explanation": "Comfortable.",
        "resistance": 16,
        "grades": [
            4,
            8
        ],
        "skin": "pyjamas",
        "tier": 2,
        "a": 2,
        "upgrade": {
            "armor": 2.5,
            "hp": 25,
            "stat": 1,
            "resistance": 2.5
        },
        "name": "Pyjamas",
        "g": 480000,
        "armor": 24,
        "charisma": -5,
        "type": "chest",
        "scroll": true,
        "id": "pyjamas"
    },
    "mcape": {
        "stat": 1,
        "grade": 1,
        "hp": 80,
        "resistance": 16,
        "grades": [
            0,
            6
        ],
        "lifesteal": 1,
        "skin": "mcape",
        "tier": 2,
        "a": 2,
        "upgrade": {
            "armor": 2.5,
            "hp": 15,
            "stat": 1,
            "lifesteal": 0.2,
            "resistance": 2.5
        },
        "name": "Dracul's Attire",
        "g": 480000,
        "armor": 24,
        "type": "chest",
        "scroll": true,
        "id": "mcape"
    },
    "goldnugget": {
        "name": "Gold Nugget",
        "g": 120000,
        "explanation": "Ideal for crafting",
        "s": true,
        "skin": "goldnugget",
        "type": "material",
        "id": "goldnugget"
    },
    "hammer": {
        "attack": 36,
        "upgrade": {
            "attack": 6,
            "range": 2
        },
        "grades": [
            0,
            0
        ],
        "name": "Hammer",
        "g": 960000,
        "skin": "hammer",
        "wtype": "hammer",
        "type": "weapon",
        "range": 6,
        "damage": "physical",
        "id": "hammer"
    },
    "strearring": {
        "name": "Earring of Strength",
        "g": 50000,
        "skin": "strearring",
        "grades": [
            2,
            5
        ],
        "str": 3,
        "compound": {
            "str": 2
        },
        "type": "earring",
        "id": "strearring"
    },
    "xgloves": {
        "stat": 1,
        "grade": 2,
        "resistance": 16,
        "grades": [
            0,
            0
        ],
        "skin": "xgloves",
        "tier": 4,
        "a": 2,
        "upgrade": {
            "armor": 5.5,
            "stat": 1,
            "resistance": 5.5
        },
        "name": "Darkforge Gloves",
        "g": 3400000,
        "armor": 32,
        "type": "gloves",
        "scroll": true,
        "id": "xgloves"
    },
    "t2quiver": {
        "a": true,
        "skin": "t2quiver",
        "grades": [
            0,
            4
        ],
        "evasion": 1,
        "dex": 9,
        "upgrade": {
            "dex": 1.5,
            "armor": 3,
            "range": 3.5
        },
        "name": "Agile Quiver",
        "g": 960000,
        "armor": 12,
        "range": 20,
        "type": "quiver",
        "id": "t2quiver"
    },
    "xarmor": {
        "stat": 1,
        "grade": 2,
        "resistance": 32,
        "grades": [
            0,
            0
        ],
        "skin": "xarmor",
        "tier": 4,
        "a": 2,
        "upgrade": {
            "armor": 5.5,
            "stat": 1,
            "resistance": 5.5
        },
        "name": "Darkforge Armor",
        "g": 4800000,
        "armor": 48,
        "type": "chest",
        "scroll": true,
        "id": "xarmor"
    },
    "goldenpowerglove": {
        "stat": 6,
        "ability": "power",
        "grade": 2,
        "resistance": 16,
        "g": 16000000,
        "grades": [
            0,
            0
        ],
        "frequency": 5,
        "skin": "goldenpowerglove",
        "tier": 4,
        "a": true,
        "upgrade": {
            "stat": 1,
            "rpiercing": 4,
            "armor": 5.5,
            "apiercing": 4,
            "resistance": 5.5,
            "frequency": 0.2
        },
        "name": "Golden Power Glove",
        "rpiercing": 64,
        "armor": 32,
        "apiercing": 64,
        "charge": 0,
        "type": "gloves",
        "scroll": true,
        "id": "goldenpowerglove"
    },
    "gemfragment": {
        "s": true,
        "quest": "gemfragment",
        "e": 50,
        "name": "Gem Fragment",
        "g": 32000,
        "skin": "gemfragment",
        "explanation": "Beautiful, yet broken. Would be extremely valuable if they were whole.",
        "type": "quest",
        "id": "gemfragment"
    },
    "xpbooster": {
        "p2w": true,
        "explanation": "Increases experience gain. Needs to be activated. Can be shifted into other boosters.",
        "compound": {
            "xp": 15
        },
        "cash": 499,
        "grades": [
            0,
            10
        ],
        "skin_a": "xpbooster_a",
        "skin": "xpbooster",
        "xp": 20,
        "name": "XP Booster",
        "g": 15968000,
        "days": 30,
        "type": "booster",
        "gain": "xp",
        "buy_with_cash": true,
        "buy": true,
        "id": "xpbooster"
    },
    "test": {
        "ignore": true,
        "explanation": "An item to test item looks, just set the 'skin' property.",
        "type": "test",
        "name": "Test",
        "skin": "test",
        "id": "test"
    },
    "intbelt": {
        "name": "Belt of Intelligence",
        "g": 50000,
        "int": 4,
        "skin": "intbelt",
        "grades": [
            2,
            5
        ],
        "compound": {
            "int": 3
        },
        "type": "belt",
        "id": "intbelt"
    },
    "basketofeggs": {
        "e": 1,
        "name": "Basket of Easter Eggs",
        "g": 20000,
        "explanation": "A basket full of unique easter eggs. You can probably exchange this for a cool reward.",
        "s": true,
        "skin": "basketofeggs",
        "type": "quest",
        "id": "basketofeggs"
    },
    "stand0": {
        "explanation": "You can become a merchant using this item.",
        "type": "stand",
        "name": "Merchant Stand",
        "g": 40000,
        "skin": "stand0",
        "buy": true,
        "id": "stand0"
    },
    "storagebox": {
        "name": "Storage Box",
        "g": 9000,
        "explanation": "It's a nifty little box",
        "ignore": true,
        "s": true,
        "skin": "storagebox",
        "type": "misc",
        "id": "storagebox"
    },
    "poker": {
        "stat": 1,
        "ability": "poke",
        "explanation": "Pokey pokey!",
        "resistance": 6,
        "tier": 1.5,
        "grades": [
            4,
            8
        ],
        "skin": "poker",
        "crit": 0.5,
        "a": true,
        "upgrade": {
            "armor": 1.875,
            "stat": 1,
            "resistance": 1.875
        },
        "name": "Poker",
        "g": 16000,
        "armor": 12,
        "type": "gloves",
        "scroll": true,
        "id": "poker"
    },
    "pmace": {
        "a": true,
        "int": 8,
        "damage": "magical",
        "grades": [
            0,
            8
        ],
        "skin": "pmace",
        "dex": 4,
        "upgrade": {
            "int": 2,
            "dex": 1,
            "attack": 6,
            "range": 5
        },
        "name": "Priest's Mace",
        "g": 89000,
        "wtype": "mace",
        "range": 10,
        "attack": 25,
        "type": "weapon",
        "id": "pmace"
    },
    "elixirint2": {
        "a": true,
        "duration": 48,
        "s": true,
        "name": "Elixir of Extreme Intelligence",
        "g": 120000,
        "skin": "elixirint2",
        "int": 12,
        "type": "elixir",
        "skin_a": "elixirint2",
        "id": "elixirint2"
    },
    "hpot0": {
        "name": "HP Potion",
        "g": 20,
        "s": true,
        "skin": "hpot0",
        "type": "pot",
        "gives": [
            [
                "hp",
                200
            ]
        ],
        "buy": true,
        "id": "hpot0"
    },
    "solitaire": {
        "grades": [
            0,
            0
        ],
        "bling": 100,
        "name": "Solitaire Ring",
        "g": 1200000,
        "skin": "solitaire",
        "explanation": "The diamond is mesmerizing",
        "compound": {
            "bling": 200
        },
        "type": "ring",
        "event": true,
        "id": "solitaire"
    },
    "mysterybox": {
        "name": "Mystery Box",
        "g": 12000,
        "explanation": "It looks super cool, but you have no idea what to do with it!",
        "s": true,
        "skin": "mysterybox",
        "type": "misc",
        "id": "mysterybox"
    },
    "mpot1": {
        "name": "MP Potion",
        "g": 100,
        "s": true,
        "skin": "mpot1",
        "type": "pot",
        "gives": [
            [
                "mp",
                500
            ]
        ],
        "buy": true,
        "id": "mpot1"
    },
    "mpot0": {
        "name": "MP Potion",
        "g": 20,
        "s": true,
        "skin": "mpot0",
        "type": "pot",
        "gives": [
            [
                "mp",
                300
            ]
        ],
        "buy": true,
        "id": "mpot0"
    },
    "wblade": {
        "damage": "magical",
        "grades": [
            0,
            0
        ],
        "skin": "wblade",
        "name": "The Ethereal Blade of Destiny",
        "a": true,
        "upgrade": {
            "rpiercing": 16,
            "attack": 8,
            "range": 2,
            "evasion": 1
        },
        "evasion": 10,
        "g": 4890000,
        "wtype": "wblade",
        "range": 30,
        "ignore": true,
        "attack": 48,
        "rpiercing": 40,
        "type": "weapon",
        "id": "wblade"
    },
    "wbook0": {
        "name": "Book of Knowledge",
        "g": 12000,
        "int": 6,
        "skin": "wbook0",
        "grades": [
            7,
            9
        ],
        "compound": {
            "int": 5
        },
        "type": "source",
        "id": "wbook0"
    },
    "wbook1": {
        "g": 960000,
        "grades": [
            0,
            2
        ],
        "reflection": 2,
        "vit": 6,
        "skin": "wbook1",
        "int": 16,
        "compound": {
            "int": 5,
            "reflection": 1,
            "vit": 2
        },
        "type": "source",
        "name": "Book of Secrets",
        "id": "wbook1"
    },
    "xmaspants": {
        "stat": 1,
        "resistance": 9,
        "grades": [
            4,
            8
        ],
        "vit": 2,
        "skin": "xmaspants",
        "tier": 1.5,
        "a": true,
        "upgrade": {
            "armor": 1.875,
            "stat": 1,
            "resistance": 1.875
        },
        "name": "Xmas Pants",
        "g": 17800,
        "armor": 15,
        "type": "pants",
        "scroll": true,
        "id": "xmaspants"
    },
    "gum": {
        "hp": 20,
        "skin_a": "gum",
        "skin": "gum",
        "duration": 120,
        "eat": true,
        "name": "Gum",
        "reflection": 0.2,
        "g": 100,
        "s": true,
        "type": "elixir",
        "explanation": "Nice flavour",
        "id": "gum"
    },
    "intscroll": {
        "stat": "int",
        "name": "Intelligence Scroll",
        "g": 8000,
        "explanation": "Adds Intelligence to an armor with a Stat attribute.",
        "s": true,
        "skin": "intscroll",
        "type": "pscroll",
        "buy": true,
        "id": "intscroll"
    },
    "redenvelopev2": {
        "a": true,
        "s": true,
        "e": 1,
        "name": "Red Envelope",
        "g": 24000,
        "skin": "redenvelopev2",
        "explanation": "Congratulations and prosperity",
        "type": "gem",
        "event": true,
        "id": "redenvelopev2"
    },
    "candy0": {
        "a": 2,
        "s": true,
        "e": 1,
        "name": "Rare Candy [h1]",
        "g": 240000,
        "skin": "candy0",
        "explanation": "A rare Halloween candy. Can be exchanged for random treasures.",
        "type": "gem",
        "id": "candy0"
    },
    "dartgun": {
        "explanation": "Don't let the looks fool you. It's a solid weapon with most components forged from gold. The barrel and trigger mechanism is a platinum alloy. Can shoot anything that fits it's barrel, like actual gold.",
        "damage": "physical",
        "grades": [
            0,
            0
        ],
        "skin": "dartgun",
        "tier": 4,
        "upgrade": {
            "attack": 1,
            "range": 20
        },
        "name": "Golden Dart Gun",
        "g": 20000000,
        "wtype": "dart",
        "range": 50,
        "attack": 1,
        "type": "weapon",
        "id": "dartgun"
    },
    "handofmidas": {
        "gold": 10,
        "grade": 2,
        "explanation": "You can feel the thirst for gold move through your veins.",
        "resistance": 14,
        "grades": [
            0,
            0
        ],
        "skin": "goldglove",
        "tier": 3.5,
        "speed": -20,
        "a": true,
        "upgrade": {
            "armor": 4.875,
            "resistance": 4.875,
            "gold": 1
        },
        "name": "Hand of Midas",
        "g": 800000,
        "armor": 28,
        "type": "gloves",
        "scroll": true,
        "id": "handofmidas"
    },
    "bugbountybox": {
        "a": 2,
        "s": true,
        "e": 1,
        "name": "Bug Bounty Box",
        "g": 120000,
        "skin": "bugbountybox",
        "explanation": "Rewarded for assisting in the hunt against the bugs.",
        "type": "box",
        "event": true,
        "id": "bugbountybox"
    },
    "t2intamulet": {
        "armor": 30,
        "grades": [
            0,
            2
        ],
        "edge": -1,
        "name": "Amulet of the Fierce Mage",
        "g": 160000,
        "skin": "t2intamulet",
        "int": 5,
        "compound": {
            "int": 2,
            "armor": 20
        },
        "type": "amulet",
        "id": "t2intamulet"
    },
    "redenvelope": {
        "a": true,
        "s": true,
        "e": 1,
        "name": "Red Envelope",
        "g": 24000,
        "skin": "redenvelope",
        "explanation": "Congratulations and prosperity",
        "type": "gem",
        "event": true,
        "id": "redenvelope"
    },
    "armorbox": {
        "a": true,
        "s": true,
        "e": 1,
        "name": "Armor Box",
        "g": 120000,
        "skin": "armorbox",
        "explanation": "Can be exchanged for a random, rare armor.",
        "type": "box",
        "id": "armorbox"
    },
    "platinumnugget": {
        "name": "Platinum Nugget",
        "g": 5200000,
        "explanation": "Ideal for crafting",
        "s": true,
        "skin": "platinumnugget",
        "type": "material",
        "id": "platinumnugget"
    },
    "coat": {
        "stat": 1,
        "upgrade": {
            "armor": 1.25,
            "stat": 1,
            "resistance": 1.25
        },
        "name": "Coat",
        "g": 6000,
        "armor": 12,
        "resistance": 8,
        "grades": [
            7,
            9
        ],
        "skin": "coat",
        "tier": 1,
        "type": "chest",
        "scroll": true,
        "buy": true,
        "id": "coat"
    },
    "tristone": {
        "onclick": "socket.emit('activate',{slot:$(this).data('id')})",
        "int": 1,
        "compound": {
            "dex": 1,
            "vit": 1,
            "rpiercing": 5,
            "int": 1,
            "apiercing": 5,
            "str": 1
        },
        "g": 50000,
        "grades": [
            1,
            4
        ],
        "skin_a": "tristone_a",
        "vit": 1,
        "skin": "tristone",
        "dex": 1,
        "name": "Tri-Stone",
        "rpiercing": 5,
        "apiercing": 5,
        "str": 1,
        "action": "ACTIVATE!",
        "type": "ring",
        "id": "tristone"
    },
    "frozenstone": {
        "onclick": "socket.emit('activate',{num:locate_item('frozenstone')})",
        "s": true,
        "name": "Frozen Stone",
        "g": 20000,
        "skin": "frozenstone",
        "action": "SHAKE",
        "explanation": "It's strangely not cold, must be a magical artifact.",
        "type": "activator",
        "id": "frozenstone"
    },
    "x8": {
        "a": true,
        "s": true,
        "name": "Quantum Piece",
        "g": 4000,
        "skin": "x8",
        "explanation": "A unique component of a curious puzzle",
        "type": "quest",
        "event": true,
        "id": "x8"
    },
    "egg1": {
        "name": "Easter Egg",
        "g": 4000,
        "explanation": "A uniquely painted Egg!",
        "s": true,
        "skin": "egg1",
        "type": "quest",
        "id": "egg1"
    },
    "coal": {
        "a": true,
        "name": "Coal",
        "g": 10,
        "explanation": "...",
        "compound": {},
        "skin": "coal",
        "type": "misc",
        "id": "coal"
    },
    "bronzeingot": {
        "name": "Bronze Ingot",
        "g": 40000,
        "explanation": "Solid Bronze",
        "s": true,
        "skin": "bronzeingot",
        "type": "material",
        "id": "bronzeingot"
    },
    "bow3": {
        "damage": "physical",
        "grades": [
            7,
            9
        ],
        "skin": "bow",
        "tier": 3,
        "upgrade": {
            "attack": 5.6,
            "range": 8
        },
        "name": "T3 Bow",
        "g": 16000,
        "wtype": "bow",
        "range": 60,
        "ignore": true,
        "attack": 32,
        "type": "weapon",
        "id": "bow3"
    },
    "bow4": {
        "damage": "physical",
        "grades": [
            7,
            9
        ],
        "skin": "bow",
        "tier": 4,
        "upgrade": {
            "attack": 6.4,
            "range": 8
        },
        "name": "T4 Bow",
        "g": 16000,
        "wtype": "bow",
        "range": 60,
        "ignore": true,
        "attack": 38,
        "type": "weapon",
        "id": "bow4"
    },
    "wine": {
        "g": 40000,
        "s": true,
        "skin_a": "wine",
        "vit": 32,
        "miss": 32,
        "skin": "wine",
        "duration": 0.1,
        "speed": -12,
        "type": "elixir",
        "name": "Red Wine",
        "buy": true,
        "id": "wine"
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