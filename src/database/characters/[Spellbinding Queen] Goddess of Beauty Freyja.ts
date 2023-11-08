import ICharacter from './_ICharacter';

import Passive from '../passives/Kneel Before Me';
import Skill1 from '../skills/Freyja/Elegant Leopard';
import Skill2 from '../skills/Freyja/Fascination Chain';
import Ultimate from '../skills/Freyja/Aesthetic Overflow';

class Character implements ICharacter {
    image = require('../../assets/characters/[Spellbinding Queen] Goddess of Beauty Freyja/portrait.png');
    sort = 'Freyja';
    s_name = 'Freyja';
    name = 'Goddess of Beauty Freyja';
    title = 'Spellbinding Queen';
    attribute = 'Strength';
    rarity = 'SSR';
    race = 'Unknown';
    equipment = [['Attack', 'HP'], ['Crit Damage', 'Defense']]
    basic = [
        520 /* Attack */,
        350 /* Defense */,
        6200 /* HP */,
        60 /* Pierce Rate */,
        50 /* Resistance */,
        5 /* Regeneration */,
        90 /* Crit Chance */,
        180 /* Crit Damage */,
        75 /* Crit Resistance */,
        70 /* Crit Defense */,
        110 /* Recovery Rate */,
        10 /* Lifesteal */
    ]
    stats = [
        5850 /* Attack */,
        3648 /* Defense */,
        63440 /* HP */,
        60 /* Pierce Rate */,
        50 /* Resistance */,
        5 /* Regeneration */,
        90 /* Crit Chance */,
        180 /* Crit Damage */,
        75 /* Crit Resistance */,
        70 /* Crit Defense */,
        110 /* Recovery Rate */,
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
        10 /* Crit Damage */,
        0 /* Crit Resistance */,
        0 /* Crit Defense */,
        0 /* Recovery Rate */,
        0 /* Lifesteal */,
    ], [
        0 /* Attack */,
        0 /* Defense */,
        2400 /* HP */,
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
        4 /* Crit Chance */,
        0 /* Crit Damage */,
        0 /* Crit Resistance */,
        0 /* Crit Defense */,
        0 /* Recovery Rate */,
        0 /* Lifesteal */,
    ], [
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
        2 /* Lifesteal */,
    ], [
        600 /* Attack */,
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
        9 /* Recovery Rate */,
        0 /* Lifesteal */,
    ], [
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
        360 /* Attack */,
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
    skills = [new Skill1(), new Skill2()]
    ultimate = [new Ultimate()]
    unique = new Passive();
    grace = null;
    association = [];
    group = [require('./../group/God'), require('./../group/Ragnarok')];
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