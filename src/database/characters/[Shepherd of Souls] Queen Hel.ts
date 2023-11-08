import ICharacter from './_ICharacter';

import Passive from '../passives/Pains Guidance';
import Skill1 from '../skills/Hel/Soul Drain';
import Skill2 from '../skills/Hel/Reaping Death';
import Ultimate from '../skills/Hel/Damnation';

class Character implements ICharacter {
    image = require('../../assets/characters/[Shepherd of Souls] Queen Hel/portrait.png');
    sort = 'Hel';
    s_name = 'Hel';
    name = 'Queen Hel';
    title = 'Shepherd of Souls';
    attribute = 'Darkness';
    rarity = 'SSR';
    race = 'Unknown';
    equipment = [['HP', 'Defense'], ['HP', 'Crit Damage']]
    basic = [
        670 /* Attack */,
        370 /* Defense */,
        6600 /* HP */,
        85 /* Pierce Rate */,
        65 /* Resistance */,
        5 /* Regeneration */,
        95 /* Crit Chance */,
        200 /* Crit Damage */,
        70 /* Crit Resistance */,
        80 /* Crit Defense */,
        110 /* Recovery Rate */,
        0 /* Lifesteal */
    ]
    stats = [
        6030 /* Attack */,
        3768 /* Defense */,
        64440 /* HP */,
        85 /* Pierce Rate */,
        65 /* Resistance */,
        5 /* Regeneration */,
        95 /* Crit Chance */,
        200 /* Crit Damage */,
        70 /* Crit Resistance */,
        80 /* Crit Defense */,
        110 /* Recovery Rate */,
        0 /* Lifesteal */
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
    ], [
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
    ], [
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
    ], [
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
    ], [
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
    ], [
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
    ], [
        150 /* Attack */,
        140 /* Defense */,
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
    ], [
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
    ], [
        450 /* Attack */,
        420 /* Defense */,
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
    ], [
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
    ], [
        300 /* Attack */,
        280 /* Defense */,
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
    skills = [new Skill1(), new Skill2()]
    ultimate = [new Ultimate()]
    unique = new Passive();
    grace = null;
    association = [];
    group = [require('./../group/God'), require('./../group/Ragnarok')];
    gender = 'Female';
    blood = 'Unknown';
    age = 'Unknown';
    height = '128 cm';
    weight = '37 kg';
    birthday = null;

    food = [];
    gift = [];
}

export default Character;