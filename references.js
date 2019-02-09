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
    "emptyheart": {
        "name": "Empty Heart",
        "g": 12000,
        "explanation": "A cold empty stone heart",
        "s": true,
        "skin": "emptyheart",
        "type": "material",
        "event": true,
        "id": "emptyheart"
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
    "candypop": {
        "int": 6,
        "explanation": "You can eat it. Gift it. Exchange 10 of them at Xyn for a small reward.",
        "skin_a": "candypop",
        "vit": 10,
        "skin": "candypop",
        "duration": 1,
        "eat": true,
        "e": 10,
        "name": "Candy Pop",
        "g": 120,
        "s": true,
        "type": "elixir",
        "luck": 12,
        "id": "candypop"
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
    "essenceofether": {
        "name": "Ethereal Essence",
        "g": 40000,
        "explanation": "A ghostly essence, maybe it could allow you to shift from this world momentarily",
        "s": true,
        "skin": "essenceofether",
        "type": "material",
        "id": "essenceofether"
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
    "stonekey": {
        "name": "The Stone Key",
        "g": 50000,
        "explanation": "A stone key, imbued with magical energy.",
        "skin": "stonekey",
        "type": "key",
        "opens": "therush",
        "id": "stonekey"
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
    "charmer": {
        "attr0": 1,
        "grades": [
            0,
            3
        ],
        "name": "Charmer",
        "vit": 10,
        "skin": "charmer",
        "compound": {
            "attr0": 1,
            "vit": 10
        },
        "type": "orb",
        "event": true,
        "ability": "charm",
        "id": "charmer"
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
//NPCs
let npc_ref = {
    "items6": {
        "name": "Jane",
        "color": "#E0D8A5",
        "role": "items",
        "skin": "lady2",
        "type": "fullstatic",
        "id": "items6",
        "pack": "items6"
    },
    "pvp": {
        "name": "Ace",
        "type": "full",
        "hp": 5000,
        "role": "pvp_announcer",
        "allow": false,
        "skin": "thehelmet",
        "speed": 40,
        "id": "pvp"
    },
    "citizen10": {
        "says": [
            "Hi",
            "My coat keeps me super warm",
            "Stompy used to be my favorite boar",
            "I wish stompy would come home",
            "That inn over there is always a great place",
            "I want to be everyone's friend",
            "Do you need a hug",
            "Hugs keep you warm",
            "*gives you a hug*",
            "Free hugs",
            "This village is mostly boar farmers",
            "Hey",
            "Hello",
            "*wiggles in pink coat*",
            "Pink is my favorite color",
            "I'd love to work for Santa"
        ],
        "hp": 12000,
        "skin": "pink",
        "speed": 28,
        "id": "citizen10",
        "interaction": [
            "Hey Hey guess what! I like the color Pink! I bet you couldn't guess that.",
            "If Santa ever comes back, I hope I could be his little helper.",
            "Make sure you wear warm clothes, it's a little chilly out here."
        ],
        "name": "Caroline",
        "level": 92,
        "delay": 1200,
        "role": "citizen",
        "type": "fullstatic"
    },
    "jailer": {
        "says": "Tu-tu-tu",
        "color": "#62C3DF",
        "role": "jailer",
        "skin": "thehelmet",
        "type": "fullstatic",
        "id": "jailer"
    },
    "lostandfound": {
        "says": "Finders keepers",
        "name": "Ron",
        "color": "#7E65D3",
        "role": "lostandfound",
        "skin": "goblin",
        "type": "fullstatic",
        "id": "lostandfound"
    },
    "citizen4": {
        "says": [
            "Ohh look who walked into my life",
            "Single and ready to mingle",
            "No um I don't own a shop",
            "Such a nice town",
            "*fixes dress*",
            "*gets flustered*",
            "Would you like a potion sorry",
            "Ohh look who walked into my life",
            "Single and ready to mingle",
            "No um I don't own a shop",
            "Such a nice town",
            "*fixes dress*",
            "*gets flustered*",
            "Would you like a potion sorry",
            "No potion for you",
            "Stop cat calling",
            "*rolls eyes*Hey sweetie",
            "Nice day",
            "Sweet thing are you lost",
            "Oh hi there cutie",
            "Lovely weather today",
            "Do you like my dress",
            "Welcome to the town"
        ],
        "hp": 24000,
        "skin": "angel",
        "speed": 20,
        "id": "citizen4",
        "interaction": [
            "I used to sell potions around here, but I decided to retire.",
            "Always nice to see smiling new faces.",
            "Are you new here? Welcome.",
            "This town has grown a lot, I was around when it was just one small block of land."
        ],
        "name": "Angel",
        "level": 80,
        "delay": 6000,
        "role": "citizen",
        "type": "fullstatic"
    },
    "firstc": {
        "says": [
            "I've heard Goo's drop Amulets.",
            "I'm strictly on a goo-only diet."
        ],
        "type": "fullstatic",
        "role": "companion",
        "id": "firstc",
        "skin": "lady1"
    },
    "compound": {
        "type": "static",
        "role": "compound",
        "id": "compound",
        "skin": "shrine2"
    },
    "thief": {
        "says": "Careful",
        "name": "Crun",
        "color": "#E7E2E7",
        "items": [
            "licence",
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
        "role": "merchant",
        "skin": "thief",
        "type": "fullstatic",
        "id": "thief"
    },
    "wbartender": {
        "says": "Welcome!",
        "name": "Warin",
        "color": "#67CCB2",
        "items": [
            "hpot0",
            "mpot0",
            "hpot1",
            "mpot1",
            null,
            "elixirluck",
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
        "role": "merchant",
        "skin": "npc63",
        "type": "fullstatic",
        "id": "wbartender"
    },
    "locksmith": {
        "says": "X",
        "name": "Smith",
        "role": "locksmith",
        "skin": "asoldier",
        "type": "fullstatic",
        "id": "locksmith"
    },
    "leathermerchant": {
        "says": "Have leathers?",
        "name": "Landon",
        "color": "#6E4430",
        "quest": "leather",
        "role": "quest",
        "skin": "lmerchant",
        "type": "fullstatic",
        "id": "leathermerchant"
    },
    "guard": {
        "says": "...",
        "name": "Guard",
        "role": "guard",
        "skin": "thehelmet",
        "type": "fullstatic",
        "id": "guard"
    },
    "ornaments": {
        "says": "Hmm. Hmm. Hmm.",
        "name": "Jayson",
        "color": "#E56D39",
        "quest": "ornament",
        "role": "quest",
        "skin": "splithair",
        "type": "fullstatic",
        "id": "ornaments"
    },
    "citizen12": {
        "says": [
            "I'd hate to find you dead *wink*",
            "Bloody hell",
            "What are you doing here",
            "Who the hell would like living here",
            "Where is my shovel",
            "Stay out of the graveyard",
            "Go home kid",
            "Seen any good junk around",
            "Whatca looking for",
            "Go away",
            "This isn't the place for you",
            "Ever heard of minding your own business",
            "Ever seen a dead man",
            "Hhehehe",
            "Finders keepers"
        ],
        "hp": 1200,
        "skin": "marven",
        "speed": 32,
        "id": "citizen12",
        "interaction": [
            "I watch over the graves. Sometimes people leave 'gifts' on a grave. Ehhh, sometimes I clean the graves of these items."
        ],
        "name": "Marven",
        "level": 42,
        "delay": 3200,
        "role": "citizen",
        "type": "fullstatic"
    },
    "citizen13": {
        "says": [
            "I see dead people",
            "Ghosts speak to me",
            "Are zombies real",
            "R.I.P. Such nice letters",
            "*evil glare*",
            "I serve Death",
            "Death is my leader",
            "All Hail Death",
            "Danger awaits you",
            "Dracul please take me as your bride",
            "Death isn't the end",
            "Do you know of any cults",
            "Wizard could go to hell I serve Death",
            "It never rains here, I'm only happy when it rains",
            "My eyes are blood red",
            "My favorite color is red",
            "I'd like to meet my demons"
        ],
        "hp": 1200,
        "skin": "grogue",
        "speed": 32,
        "id": "citizen13",
        "interaction": [
            "I am a firm believer that the dark arts would solve a lot of problems if it was acceptable to practice them.",
            "Did you know that Ms. Dracul used to be a member of this village... before she transcended the limitations of mankind. I wish I had the courage to do the rituals required.",
            "Dracul is a very well-known name around these parts. I wish I could be like them..",
            "I heard there is a way to get +13 items, anything can turn into one, but you can't even see it ..."
        ],
        "name": "Divian",
        "level": 42,
        "delay": 3200,
        "role": "citizen",
        "type": "fullstatic"
    },
    "fancypots": {
        "says": "Woo. Hic.",
        "role": "merchant",
        "name": "Ernis",
        "side_interaction": {
            "auto": true,
            "message": "Hello there. Are you injured or in need of some potions? My family and I pride ourselves with having the best quality potions and elixirs around. Take as much as you need. *hic*",
            "skin": "potiongirl"
        },
        "skin": "fancypots",
        "color": "#E57636",
        "items": [
            "hpot0",
            "mpot0",
            "hpot1",
            "mpot1",
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
        "atype": "flow",
        "id": "fancypots"
    },
    "shellsguy": {
        "says": "Sup",
        "name": "Mr. Dworf",
        "role": "shells",
        "skin": "fancyd",
        "type": "fullstatic",
        "id": "shellsguy"
    },
    "funtokens": {
        "token": "funtoken",
        "role": "funtokens",
        "stand": "standg_texture",
        "skin": "funtokens",
        "color": "#92D467",
        "says": "Hihihi",
        "aspeed": "slow",
        "atype": "flow",
        "id": "funtokens",
        "name": "Tricksy"
    },
    "ship": {
        "says": "Ahoy",
        "atype": "flow",
        "role": "ship",
        "skin": "ship",
        "aspeed": "slower",
        "id": "ship"
    },
    "citizen14": {
        "says": [
            "Hello there",
            "Where's that boy?",
            "SON!!!",
            "Play time is over!",
            "Welcome",
            "Same old same old",
            "Ohh a visitor",
            "Well hi there",
            "It's getting late",
            "Home sweet home",
            "Are you hungry?"
        ],
        "hp": 4000,
        "skin": "spkw",
        "speed": 28,
        "id": "citizen14",
        "interaction": [
            "Have you seem my son? He should be around here somewhere.",
            "It's not a very nice neighborhood around here, But the rent is cheap!",
            "I heard somewhere that's there's some sort of pumpkin person walking around? That just sounds silly to me"
        ],
        "name": "Violet",
        "level": 70,
        "delay": 4000,
        "role": "citizen",
        "type": "fullstatic"
    },
    "citizen15": {
        "says": [
            "I think I saw a pumpkin move!!",
            "I like pumpkins",
            "Size doesn't matter!",
            "You found me",
            "Boo!!",
            "Weee",
            "Hello",
            "*Mumble Mumble*"
        ],
        "hp": 200,
        "skin": "spkc",
        "speed": 16,
        "id": "citizen15",
        "interaction": [
            "Be careful around here? It's really dangerous up to the north.",
            "I like to play with the pumpkins, but sometimes they don't want to play and just walk away..",
            "My imaginary friend is real! And a pumpkin!!"
        ],
        "name": "Timmy",
        "level": 4,
        "delay": 200,
        "role": "citizen",
        "type": "fullstatic"
    },
    "pete": {
        "says": "Purr",
        "name": "Pete",
        "color": "#EBECEE",
        "role": "petkeeper",
        "skin": "lionsuit",
        "type": "fullstatic",
        "id": "pete"
    },
    "citizen9": {
        "says": [
            "Oh you like my hair",
            "Are you here to serve",
            "I'm sure I can fight off stompy",
            "Stompy doesn't scare me",
            "Wizard is my boss",
            "Good day",
            "Oh it's snowing",
            "Snow is nice",
            "Don't bother the guards building",
            "Don't flirt with me",
            "I protect and serve",
            "I'm a commander",
            "Greetings stranger",
            "Hello stranger",
            "Hi stranger",
            "I serve the mighty Wizard",
            "I was instructed to keep this village safe",
            "The cold doesn't bother me"
        ],
        "hp": 12000,
        "skin": "lilith",
        "speed": 32,
        "id": "citizen9",
        "interaction": [
            "Greetings Adventurer, are you here to kill some monsters? Great! Always looking for help keeping this land safe.",
            "Believe it or not. I am the highest ranking officer in these parts. I work hard to keep this town operating and safe."
        ],
        "name": "Lilith",
        "level": 92,
        "delay": 1200,
        "role": "citizen",
        "type": "fullstatic"
    },
    "citizen11": {
        "says": [
            "Stranger",
            "Where is mother",
            "Cursed land",
            "Stay clear",
            "Go away",
            "Back away",
            "*stares blankly*",
            "*stares coldly*",
            "...",
            ".....",
            "........",
            "Halt",
            "Must protect",
            "Never forget",
            "Defend",
            "Protect",
            "For honor"
        ],
        "hp": 120000,
        "skin": "baron",
        "speed": 28,
        "id": "citizen11",
        "interaction": [
            "Guard.    Village.    Protect.    Innocents.",
            "Brothers.     Rest.     Here.    Protect.    Over.    Their.    Graves.",
            "Remember.    The.    Fallen.    Never.    Forget.  Their.    Sacrifices.",
            "Heal.    The.    Fallen."
        ],
        "name": "Baron",
        "level": 120,
        "delay": 12000,
        "role": "citizen",
        "type": "fullstatic"
    },
    "antip2w": {
        "says": "Sup",
        "side_interaction": {
            "auto": true,
            "message": "Hey there, good looking fellow. Would you be interested in looking better?",
            "skin": "fancyd"
        },
        "skin": "fancyd",
        "id": "antip2w",
        "name": "Mr. Dworf",
        "items": [
            "cosmo0",
            "cosmo1",
            "cosmo2",
            null,
            null,
            "cosmo3",
            "cosmo4"
        ],
        "old_role": "merchant",
        "old_side_interaction": {
            "auto": true,
            "message": "I'm the Anti-P2W Authority around here. Making sure all critical items can be bought with gold. Prices can fluctuate based on inflation.",
            "skin": "fancyd"
        },
        "role": "premium",
        "old_items": [
            "xpbooster",
            "goldbooster",
            "luckbooster",
            null,
            null,
            "xptome",
            "offering",
            null,
            null,
            null,
            "qubics",
            null,
            null,
            null
        ],
        "type": "fullstatic"
    },
    "newupgrade": {
        "says": "+1",
        "name": "Cue",
        "atype": "flow",
        "role": "newupgrade",
        "skin": "newupgrade",
        "id": "newupgrade"
    },
    "citizen0": {
        "says": [
            "Heyoo",
            "Greetings",
            "I want a Puppy!",
            "I want a Kitten!",
            "Sup",
            "Nice day"
        ],
        "hp": 3200,
        "skin": "greencap",
        "speed": 30,
        "id": "citizen0",
        "interaction": [
            "Hey There! This town is the safest place around. Outside can be dangerous.",
            "Heyo, I don't understand how those shop owners can just stand around all day. I got to be moving. Kind of restless.",
            "Just finished school and I've got to go get a real job now. I might become an adventurer since they seem to make a lot of money.",
            "A friend of mine said the frog thingies in the beach drop some old money or sth like that."
        ],
        "name": "Kane",
        "level": 12,
        "delay": 1200,
        "role": "citizen",
        "type": "fullstatic"
    },
    "citizen1": {
        "says": [
            "What is your name",
            "Bartender give me your strongest liquor",
            "How are you stranger",
            "I wonder what my wife is doing at home",
            "This inns food isn't as good homemade",
            "Don't buy the food here",
            "Do I smell",
            "Good day",
            "Greetings",
            "Hello Stranger",
            "Welcome",
            "Its warm in here",
            "*rubs beard*",
            "Id like a beer",
            "What beer should I buy",
            "I need to rent a room",
            "This place is pretty nice",
            "Hi there"
        ],
        "hp": 13200,
        "skin": "fxrogue",
        "speed": 40,
        "id": "citizen1",
        "interaction": [
            "If you don't have a beer in your hand then what are you doing in here!?",
            "Sit down and tell me a tale!",
            "If you can't handle the cold then stay inside.. not saying I can't handle the cold.."
        ],
        "name": "Kilgore",
        "level": 120,
        "delay": 1200,
        "steps": 12,
        "role": "citizen",
        "type": "fullstatic"
    },
    "citizen2": {
        "says": [
            "Freaking youngens",
            "Go away - Kill some monsters",
            "Stop",
            "Someone needs to fix this place up",
            "I don't have time for this",
            "I need to go take a nap",
            "Uhhh",
            "Mmmehh",
            "Ugg",
            "Noob",
            "Young yipper snappers"
        ],
        "hp": 2400,
        "skin": "oldcitizen",
        "speed": 10,
        "id": "citizen2",
        "interaction": [
            "Ehh. Back in my day we didn't have all these fancy additions in town, we had the essentials and that's it."
        ],
        "name": "Stewart",
        "level": 32,
        "delay": 12000,
        "role": "citizen",
        "type": "fullstatic"
    },
    "mistletoe": {
        "says": "Uhhh",
        "name": "Faith",
        "color": "#E376E5",
        "quest": "mistletoe",
        "role": "quest",
        "skin": "pink",
        "type": "fullstatic",
        "id": "mistletoe"
    },
    "pots": {
        "says": "Oh, Hello",
        "items": [
            "hpot0",
            "mpot0",
            "hpot1",
            "mpot1",
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
        "atype": "once",
        "role": "merchant",
        "skin": "yellowlady",
        "id": "pots",
        "stopframe": 1
    },
    "citizen5": {
        "says": [
            "I remember the battle of the beards",
            "Hello",
            "Greetings",
            "Good day",
            "Pretty cold outside ay",
            "Do you like my outfit",
            "Hi there",
            "Tomorrow is a new day",
            "Ive seen some real shit",
            "Back in my day ...",
            "Stompy better die",
            "*yawns*",
            "So much snow around here",
            "*drinks beer*"
        ],
        "hp": 18600,
        "skin": "generalg",
        "speed": 30,
        "id": "citizen5",
        "interaction": [
            "It is pretty cold outside. I should invest in a hat.",
            "I came here to pursue a beast called \"Stompy\". I've heard this creature lives in the Ice Mountains nearby.",
            "I came here for adventure, but now I'm stuck in this bar due to the cold."
        ],
        "name": "Grundur",
        "level": 90,
        "delay": 1200,
        "steps": 12,
        "role": "citizen",
        "type": "fullstatic"
    },
    "citizen6": {
        "says": [
            "*searches through mail bag*",
            "*hums to self*",
            "*whisles*",
            "Are you new here",
            "Ohh you're an adventurer",
            "Good day adventurer",
            "I like love letters they are sweet",
            "Um I don't read your letters",
            "Hey stranger"
        ],
        "hp": 18600,
        "skin": "mailman",
        "speed": 30,
        "id": "citizen6",
        "interaction": [
            "Hi, I'm a mail man! But no one sends mail out here much. So I guess it's a pretty easy job.",
            "Careful it's cold outside. But it's nice and warm in here."
        ],
        "name": "Fredric",
        "level": 90,
        "delay": 1200,
        "steps": 12,
        "role": "citizen",
        "type": "fullstatic"
    },
    "citizen7": {
        "says": [
            "Do you like my scarf",
            "My mom made my scarf",
            "Do you know who santa is",
            "I wonder where santa lives",
            "I'm used to the cold here",
            "Hi",
            "Im going to move to a warmer place one day",
            "This scarf makes me warm",
            "Don't hit on me",
            "I have a boyfriend",
            "The leather guy is my boyfriend",
            "I think Stompy is just misunderstood"
        ],
        "hp": 3200,
        "skin": "lucy",
        "speed": 30,
        "id": "citizen7",
        "interaction": [
            "Hi! Would you like to know a secret? I love the snow.",
            "Make sure you keep moving, don't want to catch a cold out here.",
            "I have heard that Santa sometimes visits here during Xmas!"
        ],
        "name": "Lucy",
        "level": 48,
        "delay": 1200,
        "role": "citizen",
        "type": "fullstatic"
    },
    "weapons": {
        "says": "Blades, blades, blades",
        "items": [
            "blade",
            "claw",
            "staff",
            "bow"
        ],
        "atype": "flow",
        "role": "merchant",
        "skin": "daggers",
        "id": "weapons"
    },
    "armors": {
        "says": "YESS",
        "items": [
            "helmet",
            "shoes",
            "gloves",
            "pants",
            "coat"
        ],
        "atype": "flow",
        "role": "merchant",
        "skin": "armorguy",
        "id": "armors"
    },
    "items1": {
        "name": "Gabriella",
        "color": "#E0D8A5",
        "role": "items",
        "skin": "gabrielle",
        "type": "fullstatic",
        "id": "items1",
        "pack": "items1"
    },
    "pvptokens": {
        "token": "pvptoken",
        "role": "pvptokens",
        "stand": "standx_texture",
        "skin": "pvptokens",
        "color": "#9C201C",
        "says": "Grrr",
        "aspeed": "slow",
        "id": "pvptokens",
        "name": "Gn. Spence"
    },
    "gemmerchant": {
        "says": "Bling",
        "name": "Mine Heathcliff",
        "color": "#A058DF",
        "quest": "gemfragment",
        "role": "quest",
        "skin": "gemmerchant",
        "type": "fullstatic",
        "id": "gemmerchant"
    },
    "goldnpc": {
        "says": "GOLD!",
        "name": "Mr. Rich",
        "color": "#E0B427",
        "role": "gold",
        "skin": "goblin_a",
        "aspeed": "slow",
        "id": "goldnpc"
    },
    "shrine": {
        "type": "static",
        "role": "shrine",
        "id": "shrine",
        "skin": "shrine"
    },
    "items7": {
        "name": "Janet",
        "color": "#E0D8A5",
        "role": "items",
        "skin": "lady2",
        "type": "fullstatic",
        "id": "items7",
        "pack": "items7"
    },
    "citizen8": {
        "says": [
            "How are you",
            "*wipes snow off himself*",
            "It's cold here",
            "*shivers*",
            "This is a pretty small village",
            "I've meet a real elf",
            "Don't go swimming here it's cold"
        ],
        "hp": 16000,
        "skin": "frozenrogue",
        "speed": 38,
        "id": "citizen8",
        "interaction": [
            "Are you here to kill Stompy too? Well I guess let the best adventurer get to him first!",
            "My hair was actually black, before it happened."
        ],
        "name": "Wyr",
        "level": 78,
        "delay": 1200,
        "role": "citizen",
        "type": "fullstatic"
    },
    "princess": {
        "says": [
            "Oh, Hello!"
        ],
        "hp": 6000,
        "skin": "princess",
        "speed": 24,
        "id": "princess",
        "interaction": [
            "Wanna taste my daggers?"
        ],
        "name": "Princess",
        "level": 72,
        "delay": 5000,
        "role": "citizen",
        "type": "fullstatic"
    },
    "premium": {
        "says": "MMM",
        "name": "Garwyn",
        "items": [
            "xpbooster",
            "goldbooster",
            "luckbooster",
            null,
            null,
            "xptome",
            "offering",
            null,
            null,
            null,
            "qubics",
            null,
            null,
            null,
            null
        ],
        "old_role": "premium",
        "atype": "flow",
        "role": "merchant",
        "skin": "pflow",
        "id": "premium"
    },
    "scrolls": {
        "says": "Good Luck",
        "name": "Lucas",
        "items": [
            "scroll0",
            "cscroll0",
            "strscroll",
            "intscroll",
            "dexscroll",
            "scroll1",
            "cscroll1",
            null,
            null,
            null,
            "scroll2",
            "cscroll2",
            null,
            null
        ],
        "role": "merchant",
        "skin": "scrolls",
        "id": "scrolls"
    },
    "exchange": {
        "id": "exchange",
        "says": "Good Luck!",
        "role": "exchange",
        "name": "Xyn",
        "skin": "magic"
    },
    "holo1": {
        "says": [
            "rbin"
        ],
        "hp": 6000,
        "skin": "pinkie",
        "speed": 24,
        "id": "holo1",
        "interaction": [
            "rbin"
        ],
        "name": "Pink",
        "level": 0,
        "delay": 5000,
        "role": "citizen",
        "type": "fullstatic"
    },
    "holo0": {
        "says": [
            "rbin"
        ],
        "hp": 6000,
        "skin": "greengreen",
        "speed": 24,
        "id": "holo0",
        "interaction": [
            "rbin"
        ],
        "name": "Green",
        "level": 0,
        "delay": 5000,
        "role": "citizen",
        "type": "fullstatic"
    },
    "holo3": {
        "says": [
            "rbin"
        ],
        "hp": 6000,
        "skin": "scarf",
        "speed": 24,
        "id": "holo3",
        "interaction": [
            "rbin"
        ],
        "name": "Scarf",
        "level": 0,
        "delay": 3000,
        "role": "citizen",
        "type": "fullstatic"
    },
    "holo2": {
        "says": [
            "rbin"
        ],
        "hp": 6000,
        "skin": "purpo",
        "speed": 30,
        "id": "holo2",
        "interaction": [
            "rbin"
        ],
        "name": "Purple",
        "level": 0,
        "delay": 7000,
        "role": "citizen",
        "type": "fullstatic"
    },
    "holo5": {
        "says": [
            "rbin"
        ],
        "hp": 6000,
        "skin": "bobo",
        "speed": 16,
        "id": "holo5",
        "interaction": [
            "rbin"
        ],
        "name": "Bobo",
        "level": 0,
        "delay": 8000,
        "role": "citizen",
        "type": "fullstatic"
    },
    "holo4": {
        "says": [
            "rbin"
        ],
        "hp": 6000,
        "skin": "twig",
        "speed": 48,
        "id": "holo4",
        "interaction": [
            "rbin"
        ],
        "name": "Twig",
        "level": 0,
        "delay": 24000,
        "role": "citizen",
        "type": "fullstatic"
    },
    "holo": {
        "says": "△ ▽ ▲ ▼",
        "name": "Z",
        "color": "#EBECEE",
        "role": "resort",
        "skin": "holo",
        "type": "fullstatic",
        "id": "holo"
    },
    "bean": {
        "name": "Bean",
        "type": "full",
        "hp": 3200,
        "role": "daily_events",
        "allow": false,
        "skin": "lionsuit",
        "speed": 30,
        "id": "bean"
    },
    "witch": {
        "says": "Brew Brew Brew",
        "color": "#AF6AE2",
        "role": "witch",
        "skin": "brewingwitch",
        "aspeed": "slow",
        "id": "witch"
    },
    "secondhands": {
        "says": "There's some good stuff in here",
        "name": "Ponty",
        "color": "#7E65D3",
        "role": "secondhands",
        "skin": "blingbling",
        "type": "fullstatic",
        "id": "secondhands"
    },
    "santa": {
        "says": "Ho Ho Ho",
        "name": "Santa",
        "color": "#DF2A2F",
        "quest": "candycane",
        "role": "santa",
        "skin": "santa",
        "id": "santa"
    },
    "dailytask": {
        "says": "Hi!",
        "name": "Daisy",
        "color": "#B4FAA0",
        "token": "monstertoken",
        "role": "monstertokens",
        "skin": "daisy",
        "type": "fullstatic",
        "id": "dailytask"
    },
    "transporter": {
        "says": "Woo",
        "name": "Alia",
        "places": {
            "test": 0,
            "winterland": 1,
            "main": 9,
            "halloween": 1,
            "desertland": 1
        },
        "color": "#7965C6",
        "role": "transport",
        "skin": "spell",
        "id": "transporter"
    },
    "items4": {
        "name": "Christie",
        "color": "#E0D8A5",
        "role": "items",
        "skin": "lady4",
        "type": "fullstatic",
        "id": "items4",
        "pack": "items4"
    },
    "xmas_tree": {
        "says": "*Tin* *Tin* *Tin* *Tin*",
        "name": "Xmas Tree",
        "color": "#B7161F",
        "atype": "flow",
        "role": "xmas_tree",
        "skin": "xmas_tree",
        "aspeed": "fast",
        "id": "xmas_tree"
    },
    "beans": {
        "delay": 4000,
        "type": "full",
        "role": "announcer",
        "name": "Bean",
        "skin": "lionsuit",
        "moving": true,
        "hp": 3200,
        "speed": 30,
        "id": "beans"
    },
    "basics": {
        "says": "Blades, blades, blades",
        "name": "Gabriel",
        "items": [
            "helmet",
            "shoes",
            "gloves",
            "pants",
            "coat",
            "blade",
            "claw",
            "staff",
            "bow",
            "wshield"
        ],
        "atype": "flow",
        "role": "merchant",
        "skin": "daggers",
        "id": "basics"
    },
    "pwincess": {
        "says": "eek",
        "name": "Wynifreed",
        "color": "#FECDF7",
        "quest": "lostearring",
        "role": "quest",
        "skin": "pwincess",
        "type": "fullstatic",
        "id": "pwincess"
    },
    "citizen3": {
        "says": [
            "Do you even lift bro",
            "Broooo",
            "Yah I work out",
            "Sup",
            "I need to buy some protein",
            "Lap 203",
            "Grind 24/7 all day everyday",
            "You like my headband",
            "Where are my shoes at",
            "Where is the gym at",
            "Nice day to work out",
            "Wanna work out",
            "Red headband for the win",
            "Winners are not losers and I'm a winner",
            "No I never give up"
        ],
        "hp": 3200,
        "skin": "renaldo",
        "speed": 55,
        "id": "citizen3",
        "interaction": [
            "I Grind 24 hours a day! 7 days a week! Never Stop! Never Give up! Always Training!!",
            "My body fat ratio is just 18%. Can you believe it? Yes!",
            "Do you even lift Bro.",
            "Hi, I do laps around this town all the time. Gotta stay in shape."
        ],
        "name": "Reny",
        "level": 32,
        "delay": 3600,
        "role": "citizen",
        "type": "fullstatic"
    },
    "tavern": {
        "says": "Hi",
        "name": "Jaqk",
        "color": "#EBECEE",
        "role": "tavern",
        "skin": "showoffi",
        "type": "fullstatic",
        "id": "tavern"
    },
    "pvpblocker": {
        "says": "I will leave when there are* 4 people around.",
        "type": "fullstatic",
        "role": "blocker",
        "id": "pvpblocker",
        "skin": "thehelmet"
    },
    "appearance": {
        "says": "Soon",
        "name": "Haila",
        "color": "#D95CB4",
        "role": "tease",
        "skin": "zengirl",
        "aspeed": "slow",
        "id": "appearance"
    },
    "bouncer": {
        "interaction": [
            "Wanna taste my daggers? One move out of line. And you will!",
            "Come on! One sexist word out of your mouth. Just one. Let's see what your tombstone looks like."
        ],
        "says": [
            "What?",
            "BOUNCE"
        ],
        "name": "Wogue",
        "level": 88,
        "role": "bouncer",
        "skin": "bouncer",
        "type": "fullstatic",
        "id": "bouncer"
    },
    "items2": {
        "name": "Ledia",
        "color": "#E0D8A5",
        "role": "items",
        "skin": "lady3",
        "type": "fullstatic",
        "id": "items2",
        "pack": "items2"
    },
    "items3": {
        "name": "Lidia",
        "color": "#E0D8A5",
        "role": "items",
        "skin": "lady3",
        "type": "fullstatic",
        "id": "items3",
        "pack": "items3"
    },
    "items0": {
        "name": "Gabrielle",
        "color": "#E0D8A5",
        "role": "items",
        "skin": "gabrielle",
        "type": "fullstatic",
        "id": "items0",
        "pack": "items0"
    },
    "wizardrepeater": {
        "says": "SHELLS!",
        "name": "Wizard",
        "color": "#66BB52",
        "interval": 3000,
        "role": "repeater",
        "skin": "wizard",
        "type": "fullstatic",
        "id": "wizardrepeater"
    },
    "fisherman": {
        "says": "Beautiful",
        "name": "Tristian",
        "color": "#429DDF",
        "quest": "seashell",
        "role": "quest",
        "skin": "fisherman",
        "type": "fullstatic",
        "id": "fisherman",
        "direction": 1
    },
    "standmerchant": {
        "says": "Huu Huu",
        "name": "Divian",
        "color": "#3FEEA2",
        "items": [
            "stand0"
        ],
        "role": "standmerchant",
        "skin": "purplelady",
        "type": "fullstatic",
        "id": "standmerchant"
    },
    "craftsman": {
        "says": "Give it to me",
        "name": "Leo",
        "color": "#9EACAE",
        "role": "craftsman",
        "skin": "npcc",
        "type": "fullstatic",
        "id": "craftsman"
    },
    "items5": {
        "name": "Christina",
        "color": "#E0D8A5",
        "role": "items",
        "skin": "lady4",
        "type": "fullstatic",
        "id": "items5",
        "pack": "items5"
    },
    "lotterylady": {
        "says": "Hi Dear",
        "name": "Rose",
        "color": "#DF5AC5",
        "role": "lottery",
        "skin": "llady",
        "type": "fullstatic",
        "id": "lotterylady"
    },
    "wnpc": {
        "says": "Help",
        "name": "Wizard",
        "color": "#D96643",
        "quest": "glitch",
        "role": "thesearch",
        "skin": "wizard",
        "type": "fullstatic",
        "id": "wnpc"
    },
    "tbartender": {
        "says": "Hello there",
        "role": "merchant",
        "name": "Jaqk",
        "side_interaction": {
            "auto": true,
            "message": "Hello there, partner! Care for a drink? Good luck on the games! Don't lose all your gold at once, heh.",
            "skin": "showoffi"
        },
        "skin": "showoffi",
        "color": "#EBECEE",
        "items": [
            "whiskey",
            "wine",
            "ale",
            null,
            null,
            "pico",
            "blue",
            null,
            null,
            null,
            "espresso",
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
        "type": "fullstatic",
        "id": "tbartender"
    },
    "lichteaser": {
        "says": "Soon",
        "color": "#5A1D7F",
        "role": "tease",
        "skin": "lichteaser",
        "type": "static",
        "id": "lichteaser"
    }
}
//Classes
let class_ref = {
    "merchant": {
        "mp_cost": 10,
        "doublehand": [
            "great_staff",
            "axe",
            "basher"
        ],
        "stats": {
            "dex": 4,
            "int": 12,
            "vit": 1,
            "str": 1
        },
        "offhand": [
            "shield",
            "source",
            "quiver",
            "misc_offhand"
        ],
        "armor": 20,
        "base_slots": {
            "mainhand": {
                "name": "staff",
                "gift": 1,
                "level": 0
            }
        },
        "hp": 40,
        "resistance": 20,
        "skins": {
            "unknown": "",
            "male": "mmerchant",
            "female": "fmerchant"
        },
        "mainhand": [
            "mace",
            "staff",
            "bow",
            "spear",
            "short_sword",
            "fist",
            "dart"
        ],
        "attack": 1,
        "lstats": {
            "dex": 0.4,
            "int": 1,
            "vit": 0.25,
            "str": 0.1
        },
        "frequency": 0.2,
        "mp": 200,
        "range": 20,
        "speed": 55,
        "main_stat": "int",
        "damage_type": "none"
    },
    "warrior": {
        "mp_cost": 1,
        "doublehand": [
            "axe",
            "basher"
        ],
        "brave": true,
        "stats": {
            "dex": 2,
            "int": 2,
            "vit": 4,
            "str": 10
        },
        "offhand": [
            "shield",
            "short_sword",
            "misc_offhand",
            "fist",
            "mace"
        ],
        "armor": 20,
        "base_slots": {
            "mainhand": {
                "name": "blade",
                "gift": 1,
                "level": 0
            }
        },
        "hp": 200,
        "resistance": 2,
        "skins": {
            "unknown": "",
            "male": "mwarrior2",
            "female": "fwarrior"
        },
        "mainhand": [
            "spear",
            "short_sword",
            "fist",
            "mace"
        ],
        "attack": 60,
        "lstats": {
            "dex": 0.25,
            "int": 0.25,
            "vit": 0.4,
            "str": 1
        },
        "frequency": 0.5,
        "mp": 20,
        "range": 18,
        "speed": 55,
        "main_stat": "str",
        "damage_type": "physical"
    },
    "rogue": {
        "mp_cost": 1,
        "doublehand": [
            "short_sword"
        ],
        "stats": {
            "dex": 10,
            "int": 3,
            "vit": 3,
            "str": 4
        },
        "offhand": [
            "fist",
            "dagger",
            "stars",
            "misc_offhand"
        ],
        "armor": 15,
        "base_slots": {
            "mainhand": {
                "name": "claw",
                "gift": 1,
                "level": 0
            }
        },
        "hp": 120,
        "resistance": 10,
        "skins": {
            "unknown": "",
            "male": "mrogue",
            "female": "frogue"
        },
        "mainhand": [
            "fist",
            "dagger",
            "stars"
        ],
        "attack": 45,
        "lstats": {
            "dex": 1,
            "int": 0.2,
            "vit": 0.3,
            "str": 0.2
        },
        "frequency": 0.45,
        "mp": 30,
        "range": 15,
        "speed": 50,
        "main_stat": "dex",
        "damage_type": "physical"
    },
    "ranger": {
        "mp_cost": 2,
        "doublehand": [
            "fist"
        ],
        "stats": {
            "dex": 10,
            "int": 8,
            "vit": 2,
            "str": 3
        },
        "offhand": [
            "quiver"
        ],
        "armor": 10,
        "base_slots": {
            "mainhand": {
                "name": "bow",
                "gift": 1,
                "level": 0
            }
        },
        "hp": 160,
        "resistance": 80,
        "skins": {
            "unknown": "",
            "male": "mranger2",
            "female": "franger"
        },
        "mainhand": [
            "bow"
        ],
        "attack": 45,
        "lstats": {
            "dex": 1,
            "int": 0.25,
            "vit": 0.3,
            "str": 0.2
        },
        "frequency": 0.4,
        "mp": 60,
        "range": 15,
        "speed": 45,
        "main_stat": "dex",
        "damage_type": "physical"
    },
    "priest": {
        "mp_cost": 5,
        "doublehand": [
            "great_staff"
        ],
        "stats": {
            "dex": 3,
            "int": 10,
            "vit": 4,
            "str": 2
        },
        "offhand": [
            "shield",
            "source",
            "misc_offhand"
        ],
        "armor": 2,
        "base_slots": {
            "mainhand": {
                "name": "staff",
                "gift": 1,
                "level": 0
            }
        },
        "hp": 70,
        "resistance": 5,
        "skins": {
            "unknown": "",
            "male": "mpriest",
            "female": "fpriest"
        },
        "mainhand": [
            "mace",
            "staff"
        ],
        "attack": 30,
        "lstats": {
            "dex": 0.2,
            "int": 1,
            "vit": 0.4,
            "str": 0.2
        },
        "frequency": 0.35,
        "mp": 300,
        "range": 120,
        "speed": 45,
        "main_stat": "int",
        "damage_type": "magical"
    },
    "mage": {
        "mp_cost": 5,
        "doublehand": [
            "great_staff"
        ],
        "stats": {
            "dex": 3,
            "int": 10,
            "vit": 3,
            "str": 2
        },
        "offhand": [
            "source",
            "misc_offhand"
        ],
        "armor": 2,
        "base_slots": {
            "mainhand": {
                "name": "staff",
                "gift": 1,
                "level": 0
            }
        },
        "hp": 70,
        "resistance": 5,
        "skins": {
            "unknown": "",
            "male": "mmage",
            "female": "fmage"
        },
        "mainhand": [
            "staff",
            "wblade"
        ],
        "attack": 30,
        "lstats": {
            "dex": 0.2,
            "int": 1,
            "vit": 0.3,
            "str": 0.2
        },
        "frequency": 0.35,
        "mp": 300,
        "range": 120,
        "speed": 45,
        "main_stat": "int",
        "damage_type": "magical"
    }
}
//Conditions
let conditions_ref = {
    "tarot_5swords": {
        "name": "Tarot Card",
        "ui": true,
        "card": "Swords of 5",
        "str": 5,
        "skin": "tarot",
        "type": "tarot",
        "minor": "5_swords"
    },
    "tarot_3cups": {
        "dex": 3,
        "name": "Tarot Card",
        "ui": true,
        "card": "Cups of 3",
        "skin": "tarot",
        "type": "tarot",
        "minor": "3_cups"
    },
    "tarot_devil": {
        "major": "devil",
        "name": "Tarot Card",
        "ui": true,
        "str": 10,
        "vit": 10,
        "skin": "tarot",
        "xp": -99,
        "type": "tarot",
        "card": "Devil",
        "luck": -99
    },
    "tarot_hangman": {
        "major": "hangman",
        "name": "Tarot Card",
        "ui": true,
        "skin": "tarot",
        "type": "tarot",
        "card": "Hangman"
    },
    "tarot_judgment": {
        "major": "judgment",
        "name": "Tarot Card",
        "ui": true,
        "skin": "tarot",
        "type": "tarot",
        "card": "Judgment"
    },
    "tarot_4cups": {
        "dex": 4,
        "name": "Tarot Card",
        "ui": true,
        "card": "Cups of 4",
        "skin": "tarot",
        "type": "tarot",
        "minor": "4_cups"
    },
    "darkblessing": {
        "name": "Dark Blessing",
        "ui": true,
        "skin": "skill_dbuff",
        "duration": 8000,
        "output": 25,
        "buff": true
    },
    "tarot_death": {
        "major": "death",
        "name": "Tarot Card",
        "speed": -20,
        "frequency": -30,
        "ui": true,
        "vit": -30,
        "skin": "tarot",
        "type": "tarot",
        "card": "Death"
    },
    "sugarrush": {
        "name": "Sugar Rush",
        "mp_cost": -200,
        "frequency": 240,
        "ui": true,
        "skin": "candycanesword",
        "duration": 10000,
        "buff": true
    },
    "tarot_8wands": {
        "name": "Tarot Card",
        "int": 8,
        "ui": true,
        "card": "Wands of 8",
        "skin": "tarot",
        "type": "tarot",
        "minor": "8_wands"
    },
    "tarot_6cups": {
        "dex": 6,
        "name": "Tarot Card",
        "ui": true,
        "card": "Cups of 6",
        "skin": "tarot",
        "type": "tarot",
        "minor": "6_cups"
    },
    "tarot_kingpentacles": {
        "name": "Tarot Card",
        "ui": true,
        "card": "Pentacles of King",
        "vit": -15,
        "skin": "tarot",
        "type": "tarot",
        "minor": "king_pentacles"
    },
    "weakness": {
        "dexterity": -40,
        "name": "Weakness",
        "bad": true,
        "ui": true,
        "str": -10,
        "skin": "weakness"
    },
    "tarot_priestess": {
        "major": "priestess",
        "name": "Tarot Card",
        "ui": true,
        "skin": "tarot",
        "type": "tarot",
        "card": "Priestess"
    },
    "tarot_kingcups": {
        "dex": 15,
        "name": "Tarot Card",
        "ui": true,
        "card": "Cups of King",
        "skin": "tarot",
        "type": "tarot",
        "minor": "king_cups"
    },
    "tarot_6swords": {
        "name": "Tarot Card",
        "ui": true,
        "card": "Swords of 6",
        "str": 6,
        "skin": "tarot",
        "type": "tarot",
        "minor": "6_swords"
    },
    "tarot_lovers": {
        "major": "lovers",
        "name": "Tarot Card",
        "ui": true,
        "skin": "tarot",
        "type": "tarot",
        "card": "Lovers"
    },
    "tarot_9pentacles": {
        "name": "Tarot Card",
        "ui": true,
        "card": "Pentacles of 9",
        "vit": -9,
        "skin": "tarot",
        "type": "tarot",
        "minor": "9_pentacles"
    },
    "tarot_pagecups": {
        "dex": 12,
        "name": "Tarot Card",
        "ui": true,
        "card": "Cups of Page",
        "skin": "tarot",
        "type": "tarot",
        "minor": "page_cups"
    },
    "tarot_3swords": {
        "name": "Tarot Card",
        "ui": true,
        "card": "Swords of 3",
        "str": 3,
        "skin": "tarot",
        "type": "tarot",
        "minor": "3_swords"
    },
    "tarot_moon": {
        "major": "moon",
        "name": "Tarot Card",
        "ui": true,
        "skin": "tarot",
        "type": "tarot",
        "card": "Moon"
    },
    "withdrawal": {
        "dex": -20,
        "bad": true,
        "frequency": -30,
        "ui": true,
        "name": "Withdrawal",
        "str": -5,
        "skin": "withdrawal",
        "duration": 10800000,
        "speed": -20,
        "mp": -300
    },
    "eheal": {
        "name": "Rejuvenate",
        "heal": 200,
        "interval": 320,
        "ui": true,
        "skin": "essenceoflife",
        "duration": 4000
    },
    "poisoned": {
        "healm": 0.25,
        "name": "Poisoned",
        "frequencym": 0.8,
        "potionsm": 0.5,
        "skin": "poison",
        "duration": 5000
    },
    "tarot_kingwands": {
        "name": "Tarot Card",
        "int": 15,
        "ui": true,
        "card": "Wands of King",
        "skin": "tarot",
        "type": "tarot",
        "minor": "king_wands"
    },
    "xmas": {
        "ui": true,
        "name": "Blessing of 2018",
        "gold": 200,
        "skin": "xmas",
        "duration": 86400000,
        "xp": 200,
        "buff": true,
        "luck": 200
    },
    "tarot_2pentacles": {
        "name": "Tarot Card",
        "ui": true,
        "card": "Pentacles of 2",
        "vit": -2,
        "skin": "tarot",
        "type": "tarot",
        "minor": "2_pentacles"
    },
    "tarot_10pentacles": {
        "name": "Tarot Card",
        "ui": true,
        "card": "Pentacles of 10",
        "vit": -10,
        "skin": "tarot",
        "type": "tarot",
        "minor": "10_pentacles"
    },
    "warcry": {
        "duration": 8000,
        "frequency": 10,
        "ui": true,
        "name": "War Cry",
        "skin": "skill_warcry",
        "armor": 160,
        "speed": 20,
        "resistance": 160,
        "buff": true
    },
    "mcourage": {
        "name": "Merchant's Courage",
        "evasion": 40,
        "ui": true,
        "skin": "skill_mcourage",
        "duration": 5000,
        "speed": 25
    },
    "tarot_queenswords": {
        "name": "Tarot Card",
        "ui": true,
        "card": "Swords of Queen",
        "str": 14,
        "skin": "tarot",
        "type": "tarot",
        "minor": "queen_swords"
    },
    "tarot_2wands": {
        "name": "Tarot Card",
        "int": 2,
        "ui": true,
        "card": "Wands of 2",
        "skin": "tarot",
        "type": "tarot",
        "minor": "2_wands"
    },
    "tarot_7swords": {
        "name": "Tarot Card",
        "ui": true,
        "card": "Swords of 7",
        "str": 7,
        "skin": "tarot",
        "type": "tarot",
        "minor": "7_swords"
    },
    "poisonous": {
        "ui": true,
        "name": "Poisonous",
        "skin": "skill_pcoat"
    },
    "tarot_empress": {
        "major": "empress",
        "name": "Tarot Card",
        "ui": true,
        "skin": "tarot",
        "type": "tarot",
        "card": "Empress"
    },
    "tarot_7wands": {
        "name": "Tarot Card",
        "int": 7,
        "ui": true,
        "card": "Wands of 7",
        "skin": "tarot",
        "type": "tarot",
        "minor": "7_wands"
    },
    "notverified": {
        "name": "Not Verified",
        "gold": -25,
        "explanation": "Reduced luck and gold until the associated email address is verified.",
        "bad": true,
        "ui": true,
        "skin": "notverified",
        "luck": -25
    },
    "tarot_aceswords": {
        "name": "Tarot Card",
        "ui": true,
        "card": "Swords of Ace",
        "str": 20,
        "skin": "tarot",
        "type": "tarot",
        "minor": "ace_swords"
    },
    "stun": {
        "bad": true,
        "name": "Stunned",
        "blocked": true
    },
    "tarot_kingswords": {
        "name": "Tarot Card",
        "ui": true,
        "card": "Swords of King",
        "str": 15,
        "skin": "tarot",
        "type": "tarot",
        "minor": "king_swords"
    },
    "tarot_theworld": {
        "major": "theworld",
        "name": "Tarot Card",
        "ui": true,
        "skin": "tarot",
        "type": "tarot",
        "card": "Theworld"
    },
    "tarot_queencups": {
        "dex": 14,
        "name": "Tarot Card",
        "ui": true,
        "card": "Cups of Queen",
        "skin": "tarot",
        "type": "tarot",
        "minor": "queen_cups"
    },
    "tarot_4wands": {
        "name": "Tarot Card",
        "int": 4,
        "ui": true,
        "card": "Wands of 4",
        "skin": "tarot",
        "type": "tarot",
        "minor": "4_wands"
    },
    "tarot_queenpentacles": {
        "name": "Tarot Card",
        "ui": true,
        "card": "Pentacles of Queen",
        "vit": -14,
        "skin": "tarot",
        "type": "tarot",
        "minor": "queen_pentacles"
    },
    "tarot_10cups": {
        "dex": 10,
        "name": "Tarot Card",
        "ui": true,
        "card": "Cups of 10",
        "skin": "tarot",
        "type": "tarot",
        "minor": "10_cups"
    },
    "tarot_justice": {
        "major": "justice",
        "name": "Tarot Card",
        "ui": true,
        "skin": "tarot",
        "type": "tarot",
        "card": "Justice"
    },
    "tarot_5wands": {
        "name": "Tarot Card",
        "int": 5,
        "ui": true,
        "card": "Wands of 5",
        "skin": "tarot",
        "type": "tarot",
        "minor": "5_wands"
    },
    "tarot_9swords": {
        "name": "Tarot Card",
        "ui": true,
        "card": "Swords of 9",
        "str": 9,
        "skin": "tarot",
        "type": "tarot",
        "minor": "9_swords"
    },
    "tarot_temperance": {
        "major": "temperance",
        "name": "Tarot Card",
        "ui": true,
        "skin": "tarot",
        "type": "tarot",
        "card": "Temperance"
    },
    "tarot_5pentacles": {
        "name": "Tarot Card",
        "ui": true,
        "card": "Pentacles of 5",
        "vit": -5,
        "skin": "tarot",
        "type": "tarot",
        "minor": "5_pentacles"
    },
    "tarot_magician": {
        "major": "magician",
        "name": "Tarot Card",
        "ui": true,
        "skin": "tarot",
        "type": "tarot",
        "card": "Magician"
    },
    "tarot_hierophant": {
        "major": "hierophant",
        "name": "Tarot Card",
        "ui": true,
        "skin": "tarot",
        "type": "tarot",
        "card": "Hierophant"
    },
    "mluck": {
        "name": "Good Luck",
        "ui": true,
        "skin": "buff_luck",
        "duration": 3600000,
        "buff": true,
        "luck": 12
    },
    "tarot_pagewands": {
        "name": "Tarot Card",
        "int": 12,
        "ui": true,
        "card": "Wands of Page",
        "skin": "tarot",
        "type": "tarot",
        "minor": "page_wands"
    },
    "tarot_fool": {
        "major": "fool",
        "name": "Tarot Card",
        "miss": 50,
        "ui": true,
        "skin": "tarot",
        "type": "tarot",
        "card": "Fool"
    },
    "tarot_8swords": {
        "name": "Tarot Card",
        "ui": true,
        "card": "Swords of 8",
        "str": 8,
        "skin": "tarot",
        "type": "tarot",
        "minor": "8_swords"
    },
    "tarot_acecups": {
        "dex": 20,
        "name": "Tarot Card",
        "ui": true,
        "card": "Cups of Ace",
        "skin": "tarot",
        "type": "tarot",
        "minor": "ace_cups"
    },
    "tarot_knightswords": {
        "name": "Tarot Card",
        "ui": true,
        "card": "Swords of Knight",
        "str": 17,
        "skin": "tarot",
        "type": "tarot",
        "minor": "knight_swords"
    },
    "tarot_fortune": {
        "major": "fortune",
        "name": "Tarot Card",
        "ui": true,
        "skin": "tarot",
        "type": "tarot",
        "card": "Fortune"
    },
    "tarot_8pentacles": {
        "name": "Tarot Card",
        "ui": true,
        "card": "Pentacles of 8",
        "vit": -8,
        "skin": "tarot",
        "type": "tarot",
        "minor": "8_pentacles"
    },
    "phasedout": {
        "name": "Phased Out",
        "evasion": 64,
        "frequency": -40,
        "ui": true,
        "skin": "skill_phaseout",
        "duration": 5000,
        "speed": -16
    },
    "licenced": {
        "explanation": "A special, temporary immunity",
        "ui": true,
        "name": "Licenced to Kill",
        "skin": "licence"
    },
    "tarot_2swords": {
        "name": "Tarot Card",
        "ui": true,
        "card": "Swords of 2",
        "str": 2,
        "skin": "tarot",
        "type": "tarot",
        "minor": "2_swords"
    },
    "rspeed": {
        "name": "Rogue Swiftness",
        "frequency": 8,
        "ui": true,
        "skin": "buff_speed",
        "duration": 2700000,
        "speed": 7,
        "buff": true
    },
    "tarot_7cups": {
        "dex": 7,
        "name": "Tarot Card",
        "ui": true,
        "card": "Cups of 7",
        "skin": "tarot",
        "type": "tarot",
        "minor": "7_cups"
    },
    "tarot_3pentacles": {
        "name": "Tarot Card",
        "ui": true,
        "card": "Pentacles of 3",
        "vit": -3,
        "skin": "tarot",
        "type": "tarot",
        "minor": "3_pentacles"
    },
    "tarot_6pentacles": {
        "name": "Tarot Card",
        "ui": true,
        "card": "Pentacles of 6",
        "vit": -6,
        "skin": "tarot",
        "type": "tarot",
        "minor": "6_pentacles"
    },
    "tarot_star": {
        "major": "star",
        "name": "Tarot Card",
        "ui": true,
        "skin": "tarot",
        "type": "tarot",
        "card": "Star"
    },
    "fingered": {
        "bad": true,
        "name": "Deep Meditation",
        "evasion": 96,
        "resistance": 1600
    },
    "tarot_emperor": {
        "major": "emperor",
        "name": "Tarot Card",
        "ui": true,
        "skin": "tarot",
        "type": "tarot",
        "card": "Emperor"
    },
    "tarot_acepentacles": {
        "name": "Tarot Card",
        "ui": true,
        "card": "Pentacles of Ace",
        "vit": -20,
        "skin": "tarot",
        "type": "tarot",
        "minor": "ace_pentacles"
    },
    "tarot_9wands": {
        "name": "Tarot Card",
        "int": 9,
        "ui": true,
        "card": "Wands of 9",
        "skin": "tarot",
        "type": "tarot",
        "minor": "9_wands"
    },
    "tarot_knightwands": {
        "name": "Tarot Card",
        "int": 17,
        "ui": true,
        "card": "Wands of Knight",
        "skin": "tarot",
        "type": "tarot",
        "minor": "knight_wands"
    },
    "slowness": {
        "ui": true,
        "bad": true,
        "speed": -30,
        "name": "Slowness",
        "skin": "slowness"
    },
    "hardshell": {
        "armor": 800,
        "set_speed": 10,
        "duration": 8000,
        "name": "Hard Shell",
        "skin": "skill_hardshell"
    },
    "tarot_knightpentacles": {
        "name": "Tarot Card",
        "ui": true,
        "card": "Pentacles of Knight",
        "vit": -17,
        "skin": "tarot",
        "type": "tarot",
        "minor": "knight_pentacles"
    },
    "tarot_9cups": {
        "dex": 9,
        "name": "Tarot Card",
        "ui": true,
        "card": "Cups of 9",
        "skin": "tarot",
        "type": "tarot",
        "minor": "9_cups"
    },
    "tarot_8cups": {
        "dex": 8,
        "name": "Tarot Card",
        "ui": true,
        "card": "Cups of 8",
        "skin": "tarot",
        "type": "tarot",
        "minor": "8_cups"
    },
    "tarot_4swords": {
        "name": "Tarot Card",
        "ui": true,
        "card": "Swords of 4",
        "str": 4,
        "skin": "tarot",
        "type": "tarot",
        "minor": "4_swords"
    },
    "tarot_knightcups": {
        "dex": 17,
        "name": "Tarot Card",
        "ui": true,
        "card": "Cups of Knight",
        "skin": "tarot",
        "type": "tarot",
        "minor": "knight_cups"
    },
    "tarot_tower": {
        "major": "tower",
        "name": "Tarot Card",
        "ui": true,
        "skin": "tarot",
        "type": "tarot",
        "card": "Tower"
    },
    "tarot_4pentacles": {
        "name": "Tarot Card",
        "ui": true,
        "card": "Pentacles of 4",
        "vit": -4,
        "skin": "tarot",
        "type": "tarot",
        "minor": "4_pentacles"
    },
    "tarot_sun": {
        "major": "sun",
        "name": "Tarot Card",
        "ui": true,
        "skin": "tarot",
        "type": "tarot",
        "card": "Sun"
    },
    "xmas2": {
        "evasion": 10,
        "note": "Technically our third new year, second year of our tree and the buff :)",
        "ui": true,
        "name": "Blessing of 2019",
        "gold": 50,
        "skin": "xmas",
        "duration": 172800000,
        "xp": 50,
        "buff": true,
        "luck": 50
    },
    "tarot_3wands": {
        "name": "Tarot Card",
        "int": 3,
        "ui": true,
        "card": "Wands of 3",
        "skin": "tarot",
        "type": "tarot",
        "minor": "3_wands"
    },
    "eburn": {
        "intensity": "burnd",
        "ui": true,
        "name": "Burn",
        "skin": "essenceoffire",
        "duration": 12000,
        "bad": true,
        "interval": 200,
        "speed": 5,
        "damage": 50
    },
    "tarot_10swords": {
        "name": "Tarot Card",
        "ui": true,
        "card": "Swords of 10",
        "str": 10,
        "skin": "tarot",
        "type": "tarot",
        "minor": "10_swords"
    },
    "tarot_hermit": {
        "major": "hermit",
        "name": "Tarot Card",
        "ui": true,
        "skin": "tarot",
        "type": "tarot",
        "card": "Hermit"
    },
    "tarot_10wands": {
        "name": "Tarot Card",
        "int": 10,
        "ui": true,
        "card": "Wands of 10",
        "skin": "tarot",
        "type": "tarot",
        "minor": "10_wands"
    },
    "tarot_strength": {
        "major": "strength",
        "name": "Tarot Card",
        "ui": true,
        "skin": "tarot",
        "type": "tarot",
        "card": "Strength"
    },
    "tarot_6wands": {
        "name": "Tarot Card",
        "int": 6,
        "ui": true,
        "card": "Wands of 6",
        "skin": "tarot",
        "type": "tarot",
        "minor": "6_wands"
    },
    "tarot_chariot": {
        "major": "chariot",
        "name": "Tarot Card",
        "speed": 16,
        "ui": true,
        "skin": "tarot",
        "type": "tarot",
        "card": "Chariot"
    },
    "tarot_pagepentacles": {
        "name": "Tarot Card",
        "ui": true,
        "card": "Pentacles of Page",
        "vit": -12,
        "skin": "tarot",
        "type": "tarot",
        "minor": "page_pentacles"
    },
    "stack": {
        "explanation": "Bonus damage for each rogue attack",
        "name": "Pure Damage",
        "skin": "skill_stack"
    },
    "energized": {
        "duration": 800,
        "frequency": 80,
        "ui": true,
        "name": "Energized",
        "skin": "skill_energize"
    },
    "tarot_pageswords": {
        "name": "Tarot Card",
        "ui": true,
        "card": "Swords of Page",
        "str": 12,
        "skin": "tarot",
        "type": "tarot",
        "minor": "page_swords"
    },
    "tarot_queenwands": {
        "name": "Tarot Card",
        "int": 14,
        "ui": true,
        "card": "Wands of Queen",
        "skin": "tarot",
        "type": "tarot",
        "minor": "queen_wands"
    },
    "tarot_7pentacles": {
        "name": "Tarot Card",
        "ui": true,
        "card": "Pentacles of 7",
        "vit": -7,
        "skin": "tarot",
        "type": "tarot",
        "minor": "7_pentacles"
    },
    "tarot_2cups": {
        "dex": 2,
        "name": "Tarot Card",
        "ui": true,
        "card": "Cups of 2",
        "skin": "tarot",
        "type": "tarot",
        "minor": "2_cups"
    },
    "tarot_acewands": {
        "name": "Tarot Card",
        "int": 20,
        "ui": true,
        "card": "Wands of Ace",
        "skin": "tarot",
        "type": "tarot",
        "minor": "ace_wands"
    },
    "tarot_5cups": {
        "dex": 5,
        "name": "Tarot Card",
        "ui": true,
        "card": "Cups of 5",
        "skin": "tarot",
        "type": "tarot",
        "minor": "5_cups"
    }
}
//Craft
let craft_ref = {
    "stealthcape": {
    "items": [
        [
            1,
            "bcape"
        ],
        [
            5,
            "shadowstone"
        ],
        [
            200,
            "essenceofnature"
        ],
        [
            1000,
            "cscale"
        ]
    ],
        "cost": 2000000
},
    "fclaw": {
    "items": [
        [
            1,
            "claw"
        ],
        [
            2,
            "essenceoffrost"
        ]
    ],
        "cost": 80000
},
    "wblade": {
    "items": [
        [
            1,
            "stick",
            9
        ],
        [
            1,
            "blade"
        ],
        [
            800,
            "essenceoffrost"
        ]
    ],
        "cost": 24000000
},
    "computer": {
    "items": [
        [
            1,
            "networkcard"
        ],
        [
            8,
            "qubics"
        ],
        [
            100,
            "electronics"
        ]
    ],
        "cost": 12000000
},
    "merry": {
    "items": [
        [
            1,
            "bow"
        ],
        [
            1,
            "candycane"
        ],
        [
            1,
            "mistletoe"
        ]
    ],
        "cost": 480000
},
    "candycanesword": {
    "items": [
        [
            1,
            "blade",
            7
        ],
        [
            1,
            "candycane"
        ]
    ],
        "cost": 480000
},
    "dartgun": {
    "items": [
        [
            1,
            "blade",
            9
        ],
        [
            12,
            "qubics"
        ],
        [
            4,
            "platinumnugget"
        ],
        [
            20,
            "goldnugget"
        ]
    ],
        "cost": 32000000
},
    "basketofeggs": {
    "items": [
        [
            1,
            "egg0"
        ],
        [
            1,
            "egg1"
        ],
        [
            1,
            "egg2"
        ],
        [
            1,
            "egg3"
        ],
        [
            1,
            "egg4"
        ],
        [
            1,
            "egg5"
        ],
        [
            1,
            "egg6"
        ],
        [
            1,
            "egg7"
        ],
        [
            1,
            "egg8"
        ]
    ],
        "cost": 100
},
    "wingedboots": {
    "items": [
        [
            1,
            "shoes"
        ],
        [
            20,
            "feather0"
        ]
    ],
        "cost": 120000
},
    "xbox": {
    "items": [
        [
            1,
            "x0"
        ],
        [
            1,
            "x1"
        ],
        [
            1,
            "x2"
        ],
        [
            1,
            "x3"
        ],
        [
            1,
            "x4"
        ],
        [
            1,
            "x5"
        ],
        [
            1,
            "x6"
        ],
        [
            1,
            "x7"
        ],
        [
            1,
            "x8"
        ]
    ],
        "cost": 1200
},
    "fireblade": {
    "items": [
        [
            1,
            "blade"
        ],
        [
            1,
            "essenceoffire"
        ]
    ],
        "cost": 20000
},
    "ornamentstaff": {
    "items": [
        [
            1,
            "staff"
        ],
        [
            1,
            "ornament"
        ],
        [
            20,
            "confetti"
        ]
    ],
        "cost": 120000
},
    "froststaff": {
    "items": [
        [
            1,
            "staff"
        ],
        [
            6,
            "essenceoffrost"
        ]
    ],
        "cost": 80000
},
    "firestaff": {
    "items": [
        [
            1,
            "staff"
        ],
        [
            1,
            "essenceoffire"
        ]
    ],
        "cost": 20000
}
}
//Functions
let functions_ref = [
    "accept_party_invite",
    "accept_party_request",
    "activate",
    "attack",
    "auto_reload",
    "bank_deposit",
    "bank_store",
    "bank_withdraw",
    "buy",
    "buy_with_gold",
    "buy_with_shells",
    "can_attack",
    "can_heal",
    "can_move_to",
    "can_transport",
    "can_use",
    "can_walk",
    "change_server",
    "change_target",
    "clear_drawings",
    "command_character",
    "compound",
    "craft",
    "cruise",
    "destroy_item",
    "distance",
    "draw_circle",
    "draw_line",
    "equip",
    "exchange",
    "game_log",
    "get_active_characters",
    "get_map",
    "get_nearest_hostile",
    "get_nearest_monster",
    "get_player",
    "get_socket",
    "get_target",
    "get_target_of",
    "get_targeted_monster",
    "handle_command",
    "handle_death",
    "heal",
    "in_attack_range",
    "is_array",
    "is_character",
    "is_disabled",
    "is_function",
    "is_monster",
    "is_moving",
    "is_npc",
    "is_number",
    "is_object",
    "is_paused",
    "is_pvp",
    "is_string",
    "is_transporting",
    "item_grade",
    "item_properties",
    "item_value",
    "load_code",
    "loot",
    "map_key",
    "move",
    "on_cm",
    "on_combined_damage",
    "on_destroy",
    "on_disappear",
    "on_draw",
    "on_game_event",
    "on_party_invite",
    "on_party_request",
    "pause",
    "performance_trick",
    "pget",
    "pm",
    "preview_item",
    "pset",
    "quantity",
    "reset_mappings",
    "respawn",
    "say",
    "sell",
    "send_cm",
    "send_gold",
    "send_item",
    "send_party_invite",
    "send_party_request",
    "set_keymap",
    "set_message",
    "set_skillbar",
    "shift",
    "show_json",
    "smart_move",
    "start_character",
    "stop",
    "stop_character",
    "swap",
    "trade",
    "trade_buy",
    "transport",
    "unequip",
    "unfriend",
    "unmap_key",
    "upgrade",
    "use",
    "use_hp_or_mp",
    "use_skill",
    "xmove"
]
//Parent
let parent_ref = [
    "postMessage",
    "blur",
    "focus",
    "close",
    "frames",
    "self",
    "window",
    "parent",
    "top",
    "length",
    "closed",
    "location",
    "document",
    "origin",
    "name",
    "history",
    "locationbar",
    "menubar",
    "personalbar",
    "scrollbars",
    "statusbar",
    "toolbar",
    "status",
    "frameElement",
    "navigator",
    "applicationCache",
    "customElements",
    "external",
    "screen",
    "innerWidth",
    "innerHeight",
    "scrollX",
    "pageXOffset",
    "scrollY",
    "pageYOffset",
    "screenX",
    "screenY",
    "outerWidth",
    "outerHeight",
    "devicePixelRatio",
    "clientInformation",
    "screenLeft",
    "screenTop",
    "defaultStatus",
    "defaultstatus",
    "styleMedia",
    "onanimationend",
    "onanimationiteration",
    "onanimationstart",
    "onsearch",
    "ontransitionend",
    "onwebkitanimationend",
    "onwebkitanimationiteration",
    "onwebkitanimationstart",
    "onwebkittransitionend",
    "isSecureContext",
    "onabort",
    "onblur",
    "oncancel",
    "oncanplay",
    "oncanplaythrough",
    "onchange",
    "onclick",
    "onclose",
    "oncontextmenu",
    "oncuechange",
    "ondblclick",
    "ondrag",
    "ondragend",
    "ondragenter",
    "ondragleave",
    "ondragover",
    "ondragstart",
    "ondrop",
    "ondurationchange",
    "onemptied",
    "onended",
    "onerror",
    "onfocus",
    "oninput",
    "oninvalid",
    "onkeydown",
    "onkeypress",
    "onkeyup",
    "onload",
    "onloadeddata",
    "onloadedmetadata",
    "onloadstart",
    "onmousedown",
    "onmouseenter",
    "onmouseleave",
    "onmousemove",
    "onmouseout",
    "onmouseover",
    "onmouseup",
    "onmousewheel",
    "onpause",
    "onplay",
    "onplaying",
    "onprogress",
    "onratechange",
    "onreset",
    "onresize",
    "onscroll",
    "onseeked",
    "onseeking",
    "onselect",
    "onstalled",
    "onsubmit",
    "onsuspend",
    "ontimeupdate",
    "ontoggle",
    "onvolumechange",
    "onwaiting",
    "onwheel",
    "onauxclick",
    "ongotpointercapture",
    "onlostpointercapture",
    "onpointerdown",
    "onpointermove",
    "onpointerup",
    "onpointercancel",
    "onpointerover",
    "onpointerout",
    "onpointerenter",
    "onpointerleave",
    "onafterprint",
    "onbeforeprint",
    "onbeforeunload",
    "onhashchange",
    "onlanguagechange",
    "onmessage",
    "onmessageerror",
    "onoffline",
    "ononline",
    "onpagehide",
    "onpageshow",
    "onpopstate",
    "onrejectionhandled",
    "onstorage",
    "onunhandledrejection",
    "onunload",
    "performance",
    "stop",
    "open",
    "alert",
    "confirm",
    "prompt",
    "print",
    "requestAnimationFrame",
    "cancelAnimationFrame",
    "requestIdleCallback",
    "cancelIdleCallback",
    "captureEvents",
    "releaseEvents",
    "getComputedStyle",
    "matchMedia",
    "moveTo",
    "moveBy",
    "resizeTo",
    "resizeBy",
    "getSelection",
    "find",
    "webkitRequestAnimationFrame",
    "webkitCancelAnimationFrame",
    "fetch",
    "btoa",
    "atob",
    "setTimeout",
    "clearTimeout",
    "setInterval",
    "clearInterval",
    "createImageBitmap",
    "scroll",
    "scrollTo",
    "scrollBy",
    "onappinstalled",
    "onbeforeinstallprompt",
    "crypto",
    "ondevicemotion",
    "ondeviceorientation",
    "ondeviceorientationabsolute",
    "indexedDB",
    "webkitStorageInfo",
    "sessionStorage",
    "localStorage",
    "visualViewport",
    "speechSynthesis",
    "webkitRequestFileSystem",
    "webkitResolveLocalFileSystemURL",
    "openDatabase",
    "caches",
    "global",
    "process",
    "Buffer",
    "setImmediate",
    "clearImmediate",
    "opener",
    "require",
    "module",
    "__filename",
    "__dirname",
    "PIXI",
    "pixi_display",
    "__extends",
    "__filters",
    "io",
    "jQuery",
    "$",
    "HowlerGlobal",
    "Howler",
    "Howl",
    "Sound",
    "bowser",
    "convexhull",
    "Cookies",
    "CodeMirror",
    "c_version",
    "EPS",
    "ZEPS",
    "REPS",
    "CINF",
    "colors",
    "trade_slots",
    "check_slots",
    "i",
    "bank_packs",
    "character_slots",
    "booster_items",
    "can_buy",
    "process_game_data",
    "test_logic",
    "hardcore_logic",
    "can_stack",
    "can_add_item",
    "can_add_items",
    "object_sort",
    "direction_logic",
    "within_xy_range",
    "distance",
    "random_away",
    "can_transport",
    "can_walk",
    "is_disabled",
    "calculate_item_grade",
    "calculate_item_value",
    "prop_cache",
    "damage_multiplier",
    "calculate_item_properties",
    "random_one",
    "floor_f2",
    "to_pretty_float",
    "to_pretty_num",
    "e_array",
    "set_xy",
    "get_xy",
    "get_x",
    "get_y",
    "simple_distance",
    "calculate_vxy",
    "recalculate_vxy",
    "is_in_front",
    "calculate_movex",
    "get_height",
    "get_width",
    "set_base",
    "calculate_move_v2",
    "m_calculate",
    "m_line_x",
    "m_line_y",
    "line_hit_x",
    "line_hit_y",
    "m_dx",
    "m_dy",
    "calculate_move",
    "point_distance",
    "recalculate_move",
    "bsearch_start",
    "can_move",
    "closest_line",
    "unstuck_logic",
    "stop_logic",
    "is_door_close",
    "can_use_door",
    "trigger",
    "to_number",
    "is_number",
    "is_string",
    "is_array",
    "is_function",
    "is_object",
    "clone",
    "safe_stringify",
    "smart_eval",
    "is_substr",
    "seed0",
    "seed1",
    "to_title",
    "ascending_comp",
    "delete_indices",
    "array_delete",
    "in_arr",
    "in_arrD2",
    "c_round",
    "round",
    "sq",
    "sqrt",
    "floor",
    "ceil",
    "eps_equal",
    "abs",
    "min",
    "max",
    "shuffle",
    "random_binary",
    "random_binaries",
    "randomStr",
    "lstack",
    "html_escape",
    "he",
    "future_ms",
    "future_s",
    "mssince",
    "ssince",
    "msince",
    "hsince",
    "log_trace",
    "rough_size",
    "auto_api_methods",
    "base_url",
    "sounds",
    "draw_timeouts",
    "timers",
    "ping_sent",
    "modal_count",
    "is_hidden",
    "last_id_sent",
    "send_target_logic",
    "is_npc",
    "is_monster",
    "is_player",
    "is_character",
    "cfocus",
    "ping",
    "reset_ms_check",
    "ms_check",
    "cached",
    "preview_all",
    "disappearing_clone",
    "fade_out_blink",
    "fade_out_magiport",
    "fade_away_teleport",
    "fade_away",
    "booster_modal_logic",
    "snip_wl_code",
    "snip_esc_code",
    "keymap_modal_logic",
    "show_game_guide",
    "show_shells_info",
    "show_terms",
    "show_privacy",
    "hide_modal",
    "show_modal",
    "show_alert",
    "position_modals",
    "set_status",
    "show_json",
    "json_to_html",
    "add_invite",
    "add_request",
    "add_frequest",
    "add_update_notes",
    "game_logs",
    "game_chats",
    "clear_game_logs",
    "add_log",
    "add_xmas_log",
    "add_greenlight_log",
    "add_chat",
    "cpm_window",
    "add_pmchat",
    "add_partychat",
    "refresh_page",
    "item_position",
    "can_use",
    "send_code_message",
    "get_nearby_hostiles",
    "input_onclicks",
    "get_input",
    "show_confirm",
    "use_skill",
    "on_skill",
    "on_skill_up",
    "map_keys_and_skills",
    "last_move",
    "move",
    "arrow_movement_logic",
    "focus_chat",
    "gallery_click",
    "condition_click",
    "inventory_click",
    "sh_click",
    "lf_click",
    "wishlist_item_click",
    "wishlist_click",
    "slot_click",
    "get_player",
    "get_entity",
    "target_player",
    "travel_p",
    "party_click",
    "attack_click",
    "code_button_click",
    "npc_focus",
    "locate_item",
    "show_configure",
    "list_soon",
    "transport_to",
    "show_transports",
    "hide_transports",
    "execute_codemirror",
    "eval_snippet",
    "show_snippet",
    "eval_character_snippet",
    "show_character_snippet",
    "get_active_characters",
    "character_code_eval",
    "character_window_eval",
    "character_load_code",
    "code_eval",
    "code_eval_s",
    "code_travel",
    "direct_travel",
    "start_character_runner",
    "stop_character_runner",
    "start_runner",
    "stop_runner",
    "set_setting",
    "get_settings",
    "free_character",
    "code_persistence_logic",
    "toggle_runner",
    "last_hint",
    "code_logic",
    "listen_for_hints",
    "load_code",
    "remove_code_fx",
    "toggle_code",
    "start_timer",
    "stop_timer",
    "the_door",
    "the_lever",
    "v_shake_minor",
    "v_shake",
    "v_shake_i",
    "v_shake_i2",
    "v_shake_i_minor",
    "v_dive",
    "v_dive_i",
    "no_no_no",
    "sway",
    "mojo",
    "flurry",
    "h_minor",
    "h_shake",
    "bump_up",
    "set_direction",
    "free_children",
    "remove_sprite",
    "destroy_sprite",
    "wishlist",
    "trade",
    "trade_buy",
    "trade_sell",
    "secondhand_buy",
    "lostandfound_buy",
    "buy_shells",
    "buy",
    "buy_with_shells",
    "buy_with_gold",
    "sell",
    "call_code_function",
    "code_eval_if_r",
    "get_code_function",
    "private_say",
    "party_say",
    "last_say",
    "say",
    "activate",
    "shift",
    "open_merchant",
    "close_merchant",
    "donate",
    "dice",
    "upgrade",
    "lock_item",
    "seal_item",
    "unlock_item",
    "deposit",
    "withdraw",
    "exchange_animations",
    "last_excanim",
    "exclast",
    "exccolors1",
    "exccolorsl",
    "exccolorsg",
    "exccolorsgray",
    "exccolorsc",
    "exccolorssea",
    "exchange_animation_logic",
    "poof",
    "exchange",
    "exchange_buy",
    "compound",
    "craft",
    "dismantle",
    "u_retain",
    "reopen",
    "esc_pressed",
    "toggle_stats",
    "toggle_character",
    "reset_inventory",
    "close_chests",
    "open_chest",
    "generate_textures",
    "restore_dimensions",
    "set_texture",
    "new_sprite",
    "recreate_dtextures",
    "water_frame",
    "new_map_tile",
    "assassin_smoke",
    "confetti_shower",
    "firecrackers",
    "start_emblem",
    "stop_emblem",
    "start_animation",
    "stop_animation",
    "set_base_rectangle",
    "dirty_fix",
    "restore_base",
    "rotate",
    "rotated_texture",
    "drag_logic",
    "draw_timeouts_logic",
    "draw_timeout",
    "draw_trigger",
    "tint_logic",
    "restart_skill_tints",
    "get_tint",
    "add_tint",
    "use",
    "tint_c",
    "attack_timeout",
    "pot_timeout",
    "pvp_timeout",
    "next_skill",
    "skill_timeout",
    "disappearing_circle",
    "empty_rect",
    "draw_line",
    "draw_circle",
    "add_border",
    "border_logic",
    "player_rclick_logic",
    "regather_filters",
    "rip_logic",
    "name_logic",
    "start_name_tag",
    "stop_name_tag",
    "add_name_tag",
    "add_name_tag_x",
    "add_name_tag_large",
    "add_name_tag_experimental",
    "hp_bar_logic",
    "add_hp_bar",
    "add_hp_bar_x",
    "test_bitmap",
    "d_line",
    "d_text",
    "api_call",
    "api_call_l",
    "game_events_logic",
    "warned",
    "map_info",
    "new_map_logic",
    "new_game_logic",
    "ui_log",
    "ui_error",
    "ui_success",
    "code_list",
    "load_code_s",
    "save_code_s",
    "last_servers_and_characters",
    "update_servers_and_characters",
    "handle_information",
    "add_alert",
    "sfx",
    "pcs",
    "init_sounds",
    "init_fx",
    "performance_trick",
    "init_music",
    "current_music",
    "reflect_music",
    "sound_on",
    "sound_off",
    "sfx_on",
    "sfx_off",
    "gprocess_game_data",
    "BACKUP",
    "reload_data",
    "apply_backup",
    "bc",
    "btc",
    "show_loader",
    "hide_loader",
    "alert_json",
    "game_stringify",
    "syntax_highlight",
    "stkp",
    "stprlink",
    "stpr",
    "clear_ui",
    "clear_ui2",
    "storage_get",
    "storage_set",
    "manifest",
    "electron",
    "path",
    "electron_store",
    "url_factory",
    "electron_reset",
    "electron_dev_tools",
    "fullscreen",
    "electron_fullscreen",
    "electron_screenshot",
    "electron_mas_receipt",
    "electron_steam_ticket",
    "electron_get_data",
    "electron_http_mode",
    "electron_get_http_mode",
    "electron_is_main",
    "electron_add_webview",
    "is_game",
    "is_server",
    "is_code",
    "is_pvp",
    "is_demo",
    "gameplay",
    "inception",
    "log_game_events",
    "scale",
    "round_xy",
    "floor_xy",
    "round_entities_xy",
    "offset_walking",
    "antialias",
    "mode_nearest",
    "gtest",
    "mode",
    "paused",
    "log_flags",
    "ptimers",
    "mdraw_mode",
    "mdraw_border",
    "mdraw_tiling_sprites",
    "manual_stop",
    "manual_centering",
    "high_precision",
    "retina_mode",
    "text_quality",
    "bw_mode",
    "character_names",
    "hp_bars",
    "next_attack",
    "next_potion",
    "next_transport",
    "last_interaction",
    "afk_edge",
    "mm_afk",
    "last_drag_start",
    "last_npc_right_click",
    "block_right_clicks",
    "mouse_only",
    "the_code",
    "rxd",
    "server_region",
    "server_identifier",
    "server_name",
    "ipass",
    "real_id",
    "character",
    "map",
    "resources_loaded",
    "socket_ready",
    "socket_welcomed",
    "game_loaded",
    "friends",
    "ch_disp_x",
    "ch_disp_y",
    "head_x",
    "head_y",
    "tints",
    "entities",
    "future_entities",
    "pull_all",
    "pull_all_next",
    "pulling_all",
    "prepull_target_id",
    "text_layer",
    "monster_layer",
    "player_layer",
    "chest_layer",
    "map_layer",
    "separate_layer",
    "entity_layer",
    "rip",
    "heartbeat",
    "slow_heartbeats",
    "ctarget",
    "textures",
    "C",
    "FC",
    "M",
    "GEO",
    "total_map_tiles",
    "tiles",
    "dtile",
    "map_npcs",
    "map_doors",
    "map_animatables",
    "map_tiles",
    "map_entities",
    "map_machines",
    "dtile_size",
    "dtile_width",
    "dtile_height",
    "water_tiles",
    "last_water_frame",
    "drawings",
    "code_buttons",
    "chests",
    "party_list",
    "party",
    "tile_sprites",
    "sprite_last",
    "first_coords",
    "first_x",
    "first_y",
    "last_refxy",
    "ref_x",
    "ref_y",
    "last_light",
    "current_map",
    "draw_map",
    "transporting",
    "current_status",
    "last_status",
    "topleft_npc",
    "merchant_id",
    "inventory",
    "code",
    "pvp",
    "skillsui",
    "exchange_type",
    "topright_npc",
    "transports",
    "purpose",
    "next_minteraction",
    "abtesting",
    "abtesting_ui",
    "code_run",
    "code_active",
    "actual_code",
    "CC",
    "reload_state",
    "reload_timer",
    "first_entities",
    "blink_pressed",
    "last_blink_pressed",
    "force_draw_on",
    "use_layers",
    "draws",
    "in_draw",
    "keymap",
    "skillbar",
    "secondhands",
    "s_page",
    "lostandfound",
    "l_page",
    "options",
    "S",
    "code_button",
    "log_in",
    "disconnect",
    "position_map",
    "ui_logic",
    "rendered_target",
    "last_target_cid",
    "dialogs_target",
    "reset_topleft",
    "sync_entity",
    "process_entities",
    "on_disappear",
    "asp_skip",
    "adopt_soft_properties",
    "reposition_ui",
    "update_overlays",
    "last_loader",
    "on_load_progress",
    "loader_click",
    "the_game",
    "demo_entity_logic",
    "init_demo",
    "init_socket",
    "npc_right_click",
    "player_click",
    "player_attack",
    "player_heal",
    "player_right_click",
    "monster_click",
    "monster_attack",
    "map_click",
    "old_move",
    "map_click_release",
    "draw_entities",
    "update_sprite",
    "add_monster",
    "update_filters",
    "start_filter",
    "stop_filter",
    "alpha_logic",
    "player_effects_logic",
    "effects_logic",
    "cosmetics_logic",
    "add_character",
    "add_chest",
    "getNpc",
    "add_npc",
    "add_machine",
    "add_door",
    "add_quirk",
    "add_animatable",
    "create_map",
    "retile_the_map",
    "fps_counter",
    "last_count",
    "last_frame",
    "fps",
    "calculate_fps",
    "load_game",
    "launch_game",
    "on_resize",
    "resize",
    "pause",
    "draw",
    "u_item",
    "u_scroll",
    "u_offering",
    "c_items",
    "c_scroll",
    "c_offering",
    "c_last",
    "e_item",
    "p_item",
    "l_item",
    "cr_items",
    "cr_last",
    "ds_item",
    "settings_shown",
    "show_settings",
    "docked",
    "cwindows",
    "close_chat_window",
    "toggle_chat_window",
    "chat_title_click",
    "redock",
    "open_chat_window",
    "hide_settings",
    "prop_line",
    "bold_prop_line",
    "render_party_old",
    "render_party",
    "render_character_sheet",
    "render_conditions",
    "render_info",
    "render_slots",
    "render_transports_npc",
    "render_gold_npc",
    "last_rendered_items",
    "render_items_npc",
    "render_inventory",
    "render_craftsman",
    "render_dismantler",
    "last_lmode",
    "render_locksmith",
    "render_recipe",
    "render_recipes",
    "render_exchange_shrine",
    "render_none_shrine",
    "render_shells_buyer",
    "render_upgrade_shrine",
    "render_compound_shrine",
    "dice_bet",
    "on_dice_change",
    "on_dice_bet",
    "render_dice",
    "render_tavern_info",
    "on_donate_change",
    "render_donate",
    "render_merchant",
    "render_token_exchange",
    "render_computer",
    "render_code_gallery",
    "render_tutorial_stepv1",
    "render_skill",
    "render_computer_network",
    "render_secondhands",
    "render_function_reference",
    "load_documentation",
    "render_functions_directory",
    "open_tutorial",
    "render_code_tutorials",
    "render_useful_links",
    "data_path",
    "render_data_reference",
    "render_code_docs",
    "render_wishlist",
    "last_selector",
    "render_item",
    "render_item_by_name",
    "wishlist_form",
    "render_wishlist_item",
    "render_set",
    "render_condition",
    "render_item_selector",
    "allow_drop",
    "on_drag_start",
    "on_rclick",
    "on_drop",
    "item_container",
    "render_skillbar",
    "skill_click",
    "skills_page",
    "render_skills",
    "render_teleporter",
    "render_travel",
    "render_gmonsters",
    "render_spawns",
    "render_interaction",
    "load_nearby",
    "load_friends",
    "load_server_list",
    "load_servers_list",
    "load_character_list",
    "load_pvp_list",
    "load_coming_soon",
    "friends_inside",
    "render_friends",
    "IID",
    "precompute_image_positions",
    "sprite_image",
    "sprite",
    "load_class_info",
    "stripe_state",
    "pamount",
    "p_log",
    "set_pamount",
    "stripe_pay",
    "stripe_response",
    "stripe_result",
    "shells_click",
    "show_payments",
    "show_ppayments",
    "show_poffers",
    "show_sroffers",
    "up_pressed",
    "down_pressed",
    "left_pressed",
    "right_pressed",
    "z_pressed",
    "x_pressed",
    "y_pressed",
    "cmd_pressed",
    "c_pressed",
    "f_pressed",
    "n_pressed",
    "v_pressed",
    "l_pressed",
    "t_pressed",
    "a_pressed",
    "b_pressed",
    "pressed",
    "last_press",
    "total_mousemoves",
    "last_cmd",
    "K",
    "keyboard_logic",
    "G",
    "inside",
    "user_id",
    "user_auth",
    "server_addr",
    "server_port",
    "server_names",
    "sound_music",
    "sound_sfx",
    "xmas_tunes",
    "music_level",
    "perfect_pixels",
    "screenshot_mode",
    "recording_mode",
    "cached_map",
    "d_lines",
    "sd_lines",
    "is_sdk",
    "is_electron",
    "electron_data",
    "platform",
    "graphics_engine",
    "no_graphics",
    "border_mode",
    "no_html",
    "explicit_code",
    "force_webgl",
    "force_canvas",
    "is_mobile",
    "is_bold",
    "c_enabled",
    "stripe_enabled",
    "auto_reload",
    "reload_times",
    "character_to_load",
    "code_to_load",
    "mstand_to_load",
    "url_ip",
    "url_port",
    "url_character",
    "persist_code",
    "update_notes",
    "server_regions",
    "X",
    "payment_logic",
    "f",
    "lastTouchEnd",
    "GoogleAnalyticsObject",
    "ga",
    "chartype",
    "gendertype",
    "google_tag_data",
    "gaplugins",
    "gaGlobal",
    "gaData",
    "WebView",
    "width",
    "height",
    "renderer",
    "stage",
    "animation_layer",
    "below_layer",
    "above_layer",
    "hp_layer",
    "frame_ms",
    "FM",
    "XYWH",
    "T",
    "loader",
    "socket",
    "codemirror_render",
    "file",
    "drawn_map",
    "element",
    "rtextures",
    "dtextures",
    "npcs",
    "prop",
    "doors",
    "machines",
    "quirks",
    "animatables",
    "last_draw",
    "ms",
    "frequency",
    "last_entities_received",
    "entity",
    "GCACHED",
    "info",
    "mcy",
    "data",
    "call_args",
    "e",
    "rendered_interaction",
    "p",
    "level",
    "codemirror_render3",
    "interval",
    "count",
    "times",
    "chest"
]
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