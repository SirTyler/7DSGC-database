import ICharacter from './_ICharacter';

import Passive from '../passives/Please Accept It';
import Skill1 from '../skills/King/Valentine\'s Gift';
import Skill2 from '../skills/King/Rolling Macaroons';
import Ultimate from '../skills/King/Tyrant Tempest';

class Character implements ICharacter {
    image = require('../../assets/characters/[Sweet Jelly] New Wings King/portrait.png');
    name = "New Wings King";
    title = "Sweet Jelly";
    attribute = "HP";
    rarity = "SSR";
    race = "Fairy";
    equipment = [
        ["Attack","HP"],
        ["Crit Damage","Defense"]
    ]
    basic = [
        680     /* Attack */,
        395     /* Defense */,
        6700    /* HP */,
        95      /* Pierce Rate */,
        45      /* Resistance */,
        10      /* Regeneration */,
        90      /* Crit Chance */,
        180     /* Crit Damage */,
        80      /* Crit Resistance */,
        70      /* Crit Defense */,
        105     /* Recovery Rate */,
        15      /* Lifesteal */
    ]
    stats = [
        6018    /* Attack */,
        3732    /* Defense */,
        60965   /* HP */,
        95      /* Pierce Rate */,
        45      /* Resistance */,
        10      /* Regeneration */,
        90      /* Crit Chance */,
        80      /* Crit Damage */,
        80      /* Crit Resistance */,
        70      /* Crit Defense */,
        105     /* Recovery Rate */,
        15      /* Lifesteal */
    ]
    awakening = [
        [
            0       /* Attack */,
            0       /* Defense */,
            2100    /* HP */,
            0       /* Pierce Rate */,
            0       /* Resistance */,
            0       /* Regeneration */,
            0       /* Crit Chance */,
            0       /* Crit Damage */,
            3       /* Crit Resistance */,
            0       /* Crit Defense */,
            4.5     /* Recovery Rate */,
            0       /* Lifesteal */
        ],
        [
            360     /* Attack */,
            144     /* Defense */,
            0       /* HP */,
            0       /* Pierce Rate */,
            0       /* Resistance */,
            0       /* Regeneration */,
            0       /* Crit Chance */,
            10      /* Crit Damage */,
            0       /* Crit Resistance */,
            0       /* Crit Defense */,
            0       /* Recovery Rate */,
            0       /* Lifesteal */ 
        ],
        [
            0       /* Attack */,
            0       /* Defense */,
            2800    /* HP */,
            0       /* Pierce Rate */,
            0       /* Resistance */,
            3       /* Regeneration */,
            0       /* Crit Chance */,
            0       /* Crit Damage */,
            0       /* Crit Resistance */,
            7.5     /* Crit Defense */,
            0       /* Recovery Rate */,
            0       /* Lifesteal */ 
        ],
        [ 
            480     /* Attack */,
            192     /* Defense */,
            0       /* HP */,
            0       /* Pierce Rate */,
            0       /* Resistance */,
            0       /* Regeneration */,
            4       /* Crit Chance */,
            0       /* Crit Damage */,
            0       /* Crit Resistance */,
            0       /* Crit Defense */,
            0       /* Recovery Rate */,
            0       /* Lifesteal */     
        ],
        [
            0       /* Attack */,
            0       /* Defense */,
            3500    /* HP */,
            0       /* Pierce Rate */,
            4.5     /* Resistance */,
            0       /* Regeneration */,
            0       /* Crit Chance */,
            0       /* Crit Damage */,
            0       /* Crit Resistance */,
            0       /* Crit Defense */,
            0       /* Recovery Rate */,
            3       /* Lifesteal */    
        ],
        [ 
            600     /* Attack */,
            240     /* Defense */,
            0       /* HP */,
            6       /* Pierce Rate */,
            0       /* Resistance */,
            0       /* Regeneration */,
            0       /* Crit Chance */,
            0       /* Crit Damage */,
            0       /* Crit Resistance */,
            0       /* Crit Defense */,
            0       /* Recovery Rate */,
            0       /* Lifesteal */
        ]
    ]
    superawakening = [
        [
            0       /* Attack */,
            0       /* Defense */,
            6250    /* HP */,
            0       /* Pierce Rate */,
            0       /* Resistance */,
            0       /* Regeneration */,
            0       /* Crit Chance */,
            0       /* Crit Damage */,
            12       /* Crit Resistance */,
            0       /* Crit Defense */,
            12      /* Recovery Rate */,
            0       /* Lifesteal */
        ],
        [
            180     /* Attack */,
            160     /* Defense */,
            0       /* HP */,
            0       /* Pierce Rate */,
            0       /* Resistance */,
            0       /* Regeneration */,
            0       /* Crit Chance */,
            20      /* Crit Damage */,
            0       /* Crit Resistance */,
            0       /* Crit Defense */,
            0       /* Recovery Rate */,
            0       /* Lifesteal */ 
        ],
        [
            0       /* Attack */,
            0       /* Defense */,
            8750    /* HP */,
            0       /* Pierce Rate */,
            0       /* Resistance */,
            40      /* Regeneration */,
            0       /* Crit Chance */,
            0       /* Crit Damage */,
            0       /* Crit Resistance */,
            12      /* Crit Defense */,
            0       /* Recovery Rate */,
            0       /* Lifesteal */ 
        ],
        [ 
            540     /* Attack */,
            480     /* Defense */,
            0       /* HP */,
            0       /* Pierce Rate */,
            0       /* Resistance */,
            0       /* Regeneration */,
            15      /* Crit Chance */,
            0       /* Crit Damage */,
            0       /* Crit Resistance */,
            0       /* Crit Defense */,
            0       /* Recovery Rate */,
            0       /* Lifesteal */     
        ],
        [
            0       /* Attack */,
            0       /* Defense */,
            0       /* HP */,
            15      /* Pierce Rate */,
            0       /* Resistance */,
            0       /* Regeneration */,
            0       /* Crit Chance */,
            12      /* Crit Damage */,
            0       /* Crit Resistance */,
            12      /* Crit Defense */,
            0       /* Recovery Rate */,
            0       /* Lifesteal */    
        ],
        [ 
            360     /* Attack */,
            320     /* Defense */,
            12000   /* HP */,
            0       /* Pierce Rate */,
            0       /* Resistance */,
            0       /* Regeneration */,
            0       /* Crit Chance */,
            0       /* Crit Damage */,
            0       /* Crit Resistance */,
            0       /* Crit Defense */,
            0       /* Recovery Rate */,
            0       /* Lifesteal */
        ]
    ]
    skills = [
        new Skill1(),
        new Skill2()
    ]
    ultimate = [
        new Ultimate()
    ]
    unique = new Passive();
    association = [];
    gender = 'Male';
    blood = 'AB';
    age = '~1300';
    height = '160 cm';
    weight = '48 kg';
    birthday: Date = new Date(0, 3, 1);
    
    food = [];
    gift = [];
}

export default Character;