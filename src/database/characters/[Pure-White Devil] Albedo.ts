import ICharacter from './_ICharacter';

import Passive from '../passives/Absolute Defense';
import Skill1 from '../skills/Albedo/Pillar of Muspelheim';
import Skill2 from '../skills/Albedo/The Untouchable';
import Ultimate from '../skills/Albedo/True Hatred';

class Character implements ICharacter {
    image = require('../../assets/characters/[Pure-White Devil] Albedo/portrait.png');
    sort = 'Albedo';
    s_name = 'Albedo';
    name = 'Albedo';
    title = 'Pure-White Devil';
    attribute = 'Speed';
    rarity = 'SSR';
    race = 'Unknown';
    equipment = [['HP', 'Defense'], ['HP', 'Defense']]
    basic = [
        620 /* Attack */,
        360 /* Defense */,
        6200 /* HP */,
        70 /* Pierce Rate */,
        65 /* Resistance */,
        5 /* Regeneration */,
        90 /* Crit Chance */,
        200 /* Crit Damage */,
        70 /* Crit Resistance */,
        80 /* Crit Defense */,
        110 /* Recovery Rate */,
        5 /* Lifesteal */
    ]
    stats = [
        4908 /* Attack */,
        4361 /* Defense */,
        62550 /* HP */,
        70 /* Pierce Rate */,
        65 /* Resistance */,
        5 /* Regeneration */,
        90 /* Crit Chance */,
        200 /* Crit Damage */,
        70 /* Crit Resistance */,
        80 /* Crit Defense */,
        110 /* Recovery Rate */,
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
        3 /* Crit Resistance */,
        0 /* Crit Defense */,
        3 /* Recovery Rate */,
        0 /* Lifesteal */,
    ], [
        300 /* Attack */,
        168 /* Defense */,
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
        7.5 /* Crit Defense */,
        0 /* Recovery Rate */,
        0 /* Lifesteal */,
    ], [
        400 /* Attack */,
        224 /* Defense */,
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
        4.5 /* Resistance */,
        0 /* Regeneration */,
        0 /* Crit Chance */,
        0 /* Crit Damage */,
        0 /* Crit Resistance */,
        0 /* Crit Defense */,
        0 /* Recovery Rate */,
        2 /* Lifesteal */,
    ], [
        500 /* Attack */,
        280 /* Defense */,
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
    ], [
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
    ], [
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
    ], [
        450 /* Attack */,
        540 /* Defense */,
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
    ], [
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
    ], [
        300 /* Attack */,
        360 /* Defense */,
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
    skills = [new Skill1(), new Skill2()]
    ultimate = [new Ultimate()]
    unique = new Passive();
    grace = null;
    association = [];
    group = [require('./../group/Collab')];
    gender = 'Female';
    blood = 'Unknown';
    age = 'Unknown';
    height = 'Unknown';
    weight = 'Unknown';
    birthday = null;

    food = [];
    gift = [];
}

export default Character;