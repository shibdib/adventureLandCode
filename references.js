//SKILLS
let skills = {
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