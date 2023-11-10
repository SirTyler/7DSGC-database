import ICharacter from './_ICharacter';

import Passive from '../passives/Please Accept It';
import Skill1 from '../skills/King/Valentines Gift';
import Skill2 from '../skills/King/Rolling Macaroons';
import Ultimate from '../skills/King/Tyrant Tempest';

class Character implements ICharacter {
    image = require('../../assets/characters/[Sweet Jelly] New Wings King/portrait.png');
    sort = 'King, New Wings';
    s_name = 'New Wings King';
    name = 'New Wings King';
    title = 'Sweet Jelly';
    attribute = 'HP';
    rarity = 'SSR';
    race = 'Fairy';
    equipment = [['Attack', 'HP'], ['Crit Damage', 'Defense']]
    basic = [
        515 /* Attack */,
        346 /* Defense */,
        6890 /* HP */,
        60 /* Pierce Rate */,
        50 /* Resistance */,
        15 /* Regeneration */,
        50 /* Crit Chance */,
        150 /* Crit Damage */,
        70 /* Crit Resistance */,
        20 /* Crit Defense */,
        120 /* Recovery Rate */,
        20 /* Lifesteal */
    ]
    stats = [
        4682 /* Attack */,
        3328 /* Defense */,
        61450 /* HP */,
        60 /* Pierce Rate */,
        50 /* Resistance */,
        15 /* Regeneration */,
        50 /* Crit Chance */,
        150 /* Crit Damage */,
        70 /* Crit Resistance */,
        20 /* Crit Defense */,
        120 /* Recovery Rate */,
        20 /* Lifesteal */
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
        7.5 /* Crit Damage */,
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
        3 /* Crit Chance */,
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
    ], [
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
    ], [
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
    ], [
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
    skills = [new Skill1(), new Skill2()]
    ultimate = [new Ultimate()]
    unique = new Passive();
    grace = null;
    association = [];
    group = [require('./../group/The Seven Deadly Sins')];
    gender = 'Male';
    blood = 'AB';
    age = '~1300';
    height = '160 cm';
    weight = '48 kg';
    birthday = new Date(0, 3, 1);

    food = [];
    gift = [];
}

export default Character;