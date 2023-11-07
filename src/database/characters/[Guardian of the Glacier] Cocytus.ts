import ICharacter from './_ICharacter';

import Passive from '../passives/Cold Berserker';
import Skill1 from '../skills/Cocytus/Continous Cleaving';
import Skill2 from '../skills/Cocytus/Breath of Niflheim';
import Ultimate from '../skills/Cocytus/Guillotine';

class Character implements ICharacter {
    image = require('../../assets/characters/[Guardian of the Glacier] Cocytus/portrait.png');
    sort = "Cocytus";
    s_name = "Cocytus";
    name = "Cocytus";
    title = "Guardian of the Glacier";
    attribute = "HP";
    rarity = "SSR";
    race = "Unknown";
    equipment = [
        ["Attack","Crit Damage"],
        ["Attack","Crit Damage"]
    ]
    basic = [
        590 /* Attack */,
        320 /* Defense */,
        6800 /* HP */,
        60 /* Pierce Rate */,
        50 /* Resistance */,
        5 /* Regeneration */,
        75 /* Crit Chance */,
        180 /* Crit Damage */,
        65 /* Crit Resistance */,
        70 /* Crit Defense */,
        100 /* Recovery Rate */,
        5 /* Lifesteal */
    ]
    stats = [
        4838 /* Attack */,
        3796 /* Defense */,
        60365 /* HP */,
        60 /* Pierce Rate */,
        50 /* Resistance */,
        5 /* Regeneration */,
        75 /* Crit Chance */,
        80 /* Crit Damage */,
        65 /* Crit Resistance */,
        70 /* Crit Defense */,
        100 /* Recovery Rate */,
        5 /* Lifesteal */
    ]
    awakening = [[
        0 /* Attack */,
        0 /* Defense */,
        2100 /* HP */,
        0 /* Pierce Rate */,
        0 /* Resistance */,
        0 /* Regeneration */,
        0 /* Crit Chance */,
        0 /* Crit Damage */,
        2 /* Crit Resistance */,
        0 /* Crit Defense */,
        3 /* Recovery Rate */,
        0 /* Lifesteal */,
    ],[
        300 /* Attack */,
        144 /* Defense */,
        0 /* HP */,
        0 /* Pierce Rate */,
        0 /* Resistance */,
        0 /* Regeneration */,
        0 /* Crit Chance */,
        7.5 /* Crit Damage */,
        0 /* Crit Resistance */,
        0 /* Crit Defense */,
        0 /* Recovery Rate */,
        0 /* Lifesteal */,
    ],[
        0 /* Attack */,
        0 /* Defense */,
        2800 /* HP */,
        0 /* Pierce Rate */,
        0 /* Resistance */,
        2 /* Regeneration */,
        0 /* Crit Chance */,
        0 /* Crit Damage */,
        0 /* Crit Resistance */,
        5 /* Crit Defense */,
        0 /* Recovery Rate */,
        0 /* Lifesteal */,
    ],[
        400 /* Attack */,
        192 /* Defense */,
        0 /* HP */,
        0 /* Pierce Rate */,
        0 /* Resistance */,
        0 /* Regeneration */,
        3 /* Crit Chance */,
        0 /* Crit Damage */,
        0 /* Crit Resistance */,
        0 /* Crit Defense */,
        0 /* Recovery Rate */,
        0 /* Lifesteal */,
    ],[
        0 /* Attack */,
        0 /* Defense */,
        3500 /* HP */,
        0 /* Pierce Rate */,
        3 /* Resistance */,
        0 /* Regeneration */,
        0 /* Crit Chance */,
        0 /* Crit Damage */,
        0 /* Crit Resistance */,
        0 /* Crit Defense */,
        0 /* Recovery Rate */,
        2 /* Lifesteal */,
    ],[
        500 /* Attack */,
        240 /* Defense */,
        0 /* HP */,
        4.5 /* Pierce Rate */,
        0 /* Resistance */,
        0 /* Regeneration */,
        0 /* Crit Chance */,
        0 /* Crit Damage */,
        0 /* Crit Resistance */,
        0 /* Crit Defense */,
        0 /* Recovery Rate */,
        0 /* Lifesteal */,
    ]]
    superawakening = [[
        0 /* Attack */,
        0 /* Defense */,
        5650 /* HP */,
        0 /* Pierce Rate */,
        0 /* Resistance */,
        0 /* Regeneration */,
        0 /* Crit Chance */,
        0 /* Crit Damage */,
        9 /* Crit Resistance */,
        0 /* Crit Defense */,
        9 /* Recovery Rate */,
        0 /* Lifesteal */,
    ],[
        150 /* Attack */,
        160 /* Defense */,
        0 /* HP */,
        0 /* Pierce Rate */,
        0 /* Resistance */,
        0 /* Regeneration */,
        0 /* Crit Chance */,
        16 /* Crit Damage */,
        0 /* Crit Resistance */,
        0 /* Crit Defense */,
        0 /* Recovery Rate */,
        0 /* Lifesteal */,
    ],[
        0 /* Attack */,
        0 /* Defense */,
        8150 /* HP */,
        0 /* Pierce Rate */,
        0 /* Resistance */,
        30 /* Regeneration */,
        0 /* Crit Chance */,
        0 /* Crit Damage */,
        0 /* Crit Resistance */,
        9 /* Crit Defense */,
        0 /* Recovery Rate */,
        0 /* Lifesteal */,
    ],[
        450 /* Attack */,
        480 /* Defense */,
        0 /* HP */,
        0 /* Pierce Rate */,
        0 /* Resistance */,
        0 /* Regeneration */,
        12 /* Crit Chance */,
        0 /* Crit Damage */,
        0 /* Crit Resistance */,
        0 /* Crit Defense */,
        0 /* Recovery Rate */,
        0 /* Lifesteal */,
    ],[
        0 /* Attack */,
        0 /* Defense */,
        0 /* HP */,
        12 /* Pierce Rate */,
        0 /* Resistance */,
        0 /* Regeneration */,
        0 /* Crit Chance */,
        8 /* Crit Damage */,
        0 /* Crit Resistance */,
        9 /* Crit Defense */,
        0 /* Recovery Rate */,
        0 /* Lifesteal */,
    ],[
        300 /* Attack */,
        320 /* Defense */,
        11000 /* HP */,
        0 /* Pierce Rate */,
        0 /* Resistance */,
        0 /* Regeneration */,
        0 /* Crit Chance */,
        0 /* Crit Damage */,
        0 /* Crit Resistance */,
        0 /* Crit Defense */,
        0 /* Recovery Rate */,
        0 /* Lifesteal */,
    ]]
    skills = [
        new Skill1(),
        new Skill2()
    ]
    ultimate = [
        new Ultimate()
    ]
    unique = new Passive();
    grace = null;
    association = [];
    gender = 'Male';
    blood = 'Unkown';
    age = 'Unknown';
    height = 'Unknown';
    weight = 'Unknown';
    birthday = null;
    
    food = [];
    gift = [];
}

export default Character;