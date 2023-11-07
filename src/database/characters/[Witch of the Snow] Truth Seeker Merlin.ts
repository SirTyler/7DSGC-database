import ICharacter from './_ICharacter';

import Passive from '../passives/Witchs Trick';
import Skill1 from '../skills/Merlin/Trick and Treat';
import Skill2 from '../skills/Merlin/Horrible Blizzard';
import Ultimate from '../skills/Merlin/Frost Blast';

class Character implements ICharacter {
    image = require('../../assets/characters/[Witch of the Snow] Truth Seeker Merlin/portrait.png');
    sort = "Merlin";
    s_name = "Merlin, Truth Seeker";
    name = "Truth Seeker Merlin";
    title = "Witch of the Snow";
    attribute = "Strength";
    rarity = "SSR";
    race = "Unknown";
    equipment = [
        ["Attack","Defense"],
        ["Attack","Defense"]
    ]
    basic = [
        540 /* Attack */,
        420 /* Defense */,
        6800 /* HP */,
        50 /* Pierce Rate */,
        25 /* Resistance */,
        15 /* Regeneration */,
        70 /* Crit Chance */,
        160 /* Crit Damage */,
        65 /* Crit Resistance */,
        30 /* Crit Defense */,
        120 /* Recovery Rate */,
        15 /* Lifesteal */
    ]
    stats = [
        4888 /* Attack */,
        3350 /* Defense */,
        57380 /* HP */,
        50 /* Pierce Rate */,
        25 /* Resistance */,
        15 /* Regeneration */,
        70 /* Crit Chance */,
        60 /* Crit Damage */,
        65 /* Crit Resistance */,
        30 /* Crit Defense */,
        120 /* Recovery Rate */,
        15 /* Lifesteal */
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
        10 /* Crit Damage */,
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
        4 /* Crit Chance */,
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
        6 /* Pierce Rate */,
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
        6250 /* HP */,
        0 /* Pierce Rate */,
        0 /* Resistance */,
        0 /* Regeneration */,
        0 /* Crit Chance */,
        0 /* Crit Damage */,
        9 /* Crit Resistance */,
        0 /* Crit Defense */,
        6 /* Recovery Rate */,
        0 /* Lifesteal */,
    ],[
        150 /* Attack */,
        160 /* Defense */,
        0 /* HP */,
        0 /* Pierce Rate */,
        0 /* Resistance */,
        0 /* Regeneration */,
        0 /* Crit Chance */,
        20 /* Crit Damage */,
        0 /* Crit Resistance */,
        0 /* Crit Defense */,
        0 /* Recovery Rate */,
        0 /* Lifesteal */,
    ],[
        0 /* Attack */,
        0 /* Defense */,
        8750 /* HP */,
        0 /* Pierce Rate */,
        0 /* Resistance */,
        20 /* Regeneration */,
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
        15 /* Crit Chance */,
        0 /* Crit Damage */,
        0 /* Crit Resistance */,
        0 /* Crit Defense */,
        0 /* Recovery Rate */,
        0 /* Lifesteal */,
    ],[
        0 /* Attack */,
        0 /* Defense */,
        0 /* HP */,
        15 /* Pierce Rate */,
        0 /* Resistance */,
        0 /* Regeneration */,
        0 /* Crit Chance */,
        10 /* Crit Damage */,
        0 /* Crit Resistance */,
        9 /* Crit Defense */,
        0 /* Recovery Rate */,
        0 /* Lifesteal */,
    ],[
        300 /* Attack */,
        320 /* Defense */,
        12000 /* HP */,
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
    gender = 'Female';
    blood = 'AB';
    age = 'Unknown';
    height = '177 cm';
    weight = '57 kg';
    birthday: Date = new Date(0, 11, 3);
    
    food = [];
    gift = [];
}

export default Character;