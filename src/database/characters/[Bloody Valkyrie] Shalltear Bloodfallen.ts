import ICharacter from './_ICharacter';

import Passive from '../passives/Bloodthrist';
import Skill1 from '../skills/Shalltear/Shadow Stalker';
import Skill2 from '../skills/Shalltear/Hemokinesis';
import Ultimate from '../skills/Shalltear/Crimson Valkyrie';

class Character implements ICharacter {
    image = require('../../assets/characters/[Bloody Valkyrie] Shalltear Bloodfallen/portrait.png');
    sort = "Shalltear";
    s_name = "Shalltear";
    name = "Shalltear Bloodfallen";
    title = "Bloody Valkyrie";
    attribute = "Strength";
    rarity = "SSR";
    race = "Unknown";
    equipment = [
        ["Attack","Crit Damage"],
        ["Attack","Crit Damage"]
    ]
    basic = [
        550 /* Attack */,
        380 /* Defense */,
        6400 /* HP */,
        65 /* Pierce Rate */,
        55 /* Resistance */,
        5 /* Regeneration */,
        100 /* Crit Chance */,
        170 /* Crit Damage */,
        70 /* Crit Resistance */,
        75 /* Crit Defense */,
        105 /* Recovery Rate */,
        10 /* Lifesteal */
    ]
    stats = [
        5453 /* Attack */,
        4232 /* Defense */,
        64435 /* HP */,
        65 /* Pierce Rate */,
        55 /* Resistance */,
        5 /* Regeneration */,
        100 /* Crit Chance */,
        70 /* Crit Damage */,
        70 /* Crit Resistance */,
        75 /* Crit Defense */,
        105 /* Recovery Rate */,
        10 /* Lifesteal */
    ]
    awakening = [[
        0 /* Attack */,
        0 /* Defense */,
        1800 /* HP */,
        0 /* Pierce Rate */,
        0 /* Resistance */,
        0 /* Regeneration */,
        0 /* Crit Chance */,
        0 /* Crit Damage */,
        2 /* Crit Resistance */,
        0 /* Crit Defense */,
        4.5 /* Recovery Rate */,
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
        2400 /* HP */,
        0 /* Pierce Rate */,
        0 /* Resistance */,
        3 /* Regeneration */,
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
        3000 /* HP */,
        0 /* Pierce Rate */,
        3 /* Resistance */,
        0 /* Regeneration */,
        0 /* Crit Chance */,
        0 /* Crit Damage */,
        0 /* Crit Resistance */,
        0 /* Crit Defense */,
        0 /* Recovery Rate */,
        3 /* Lifesteal */,
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
        5650 /* HP */,
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
        180 /* Attack */,
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
        20 /* Regeneration */,
        0 /* Crit Chance */,
        0 /* Crit Damage */,
        0 /* Crit Resistance */,
        9 /* Crit Defense */,
        0 /* Recovery Rate */,
        0 /* Lifesteal */,
    ],[
        540 /* Attack */,
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
        360 /* Attack */,
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
    gender = 'Female';
    blood = 'Unkown';
    age = 'Unknown';
    height = 'Unknown';
    weight = 'Unknown';
    birthday = null;
    
    food = [];
    gift = [];
}

export default Character;