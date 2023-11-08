import ICharacter from './_ICharacter';

import Passive from '../passives/Shadow Assault';
import Skill1 from '../skills/Mono/Slashing Master';
import Skill2 from '../skills/Mono/All Clear';
import Ultimate from '../skills/Mono/Full Ejection';

class Character implements ICharacter {
    image = require('../../assets/characters/[Full Moon Shadow] Iron Blood Mono/portrait.png');
    sort = 'Mono, Iron Blood';
    s_name = 'Iron Blood Mono';
    name = 'Iron Blood Mono';
    title = 'Full Moon Shadow';
    attribute = 'Speed';
    rarity = 'SSR';
    race = 'Human';
    equipment = [['Attack', 'Crit Damage'], ['Attack', 'Crit Damage']]
    basic = [
        540 /* Attack */,
        310 /* Defense */,
        5500 /* HP */,
        40 /* Pierce Rate */,
        45 /* Resistance */,
        5 /* Regeneration */,
        95 /* Crit Chance */,
        170 /* Crit Damage */,
        60 /* Crit Resistance */,
        50 /* Crit Defense */,
        110 /* Recovery Rate */,
        15 /* Lifesteal */
    ]
    stats = [
        4798 /* Attack */,
        3648 /* Defense */,
        62450 /* HP */,
        40 /* Pierce Rate */,
        45 /* Resistance */,
        5 /* Regeneration */,
        95 /* Crit Chance */,
        170 /* Crit Damage */,
        60 /* Crit Resistance */,
        50 /* Crit Defense */,
        110 /* Recovery Rate */,
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
        4.5 /* Recovery Rate */,
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
        3 /* Regeneration */,
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
        3 /* Lifesteal */,
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
        6250 /* HP */,
        0 /* Pierce Rate */,
        0 /* Resistance */,
        0 /* Regeneration */,
        0 /* Crit Chance */,
        0 /* Crit Damage */,
        9 /* Crit Resistance */,
        0 /* Crit Defense */,
        12 /* Recovery Rate */,
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
        8750 /* HP */,
        0 /* Pierce Rate */,
        0 /* Resistance */,
        40 /* Regeneration */,
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
    group = [require('./../group/The Seven Catastrophes')];
    gender = 'Female';
    blood = 'AB';
    age = 'Unknown';
    height = '178 cm';
    weight = '62 kg';
    birthday = new Date(0, 8, 24);

    food = [];
    gift = [];
}

export default Character;