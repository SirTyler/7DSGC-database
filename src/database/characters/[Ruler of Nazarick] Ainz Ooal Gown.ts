import ICharacter from './_ICharacter';

import Passive from '../passives/Rulers Authority';
import Skill1 from '../skills/Ainz/Death Quartet';
import Skill2 from '../skills/Ainz/Dark Blaster';
import Ultimate from '../skills/Ainz/Heart Grip';

class Character implements ICharacter {
    image = require('../../assets/characters/[Ruler of Nazarick] Ainz Ooal Gown/portrait.png');
    sort = "Ainz";
    s_name = "Ainz";
    name = "Ainz Ooal Gown";
    title = "Ruler of Nazarick";
    attribute = "Speed";
    rarity = "SSR";
    race = "Unknown";
    equipment = [
        ["Attack","Defense"],
        ["Attack","Defense"]
    ]
    basic = [
        550 /* Attack */,
        350 /* Defense */,
        6300 /* HP */,
        60 /* Pierce Rate */,
        60 /* Resistance */,
        10 /* Regeneration */,
        70 /* Crit Chance */,
        180 /* Crit Damage */,
        80 /* Crit Resistance */,
        75 /* Crit Defense */,
        105 /* Recovery Rate */,
        10 /* Lifesteal */
    ]
    stats = [
        5225 /* Attack */,
        4430 /* Defense */,
        61155 /* HP */,
        60 /* Pierce Rate */,
        60 /* Resistance */,
        10 /* Regeneration */,
        70 /* Crit Chance */,
        80 /* Crit Damage */,
        80 /* Crit Resistance */,
        75 /* Crit Defense */,
        105 /* Recovery Rate */,
        10 /* Lifesteal */
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
        360 /* Attack */,
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
        3800 /* HP */,
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
        480 /* Attack */,
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
        600 /* Attack */,
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
        6250 /* HP */,
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
        8750 /* HP */,
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