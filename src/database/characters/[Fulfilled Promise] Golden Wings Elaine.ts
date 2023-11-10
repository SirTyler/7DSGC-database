import ICharacter from './_ICharacter';

import Passive from '../passives/Fairys Blessing';
import Skill1 from '../skills/Elaine/Lovely Blossom';
import Skill2 from '../skills/Elaine/Flowery Breeze';
import Ultimate from '../skills/Elaine/Tempest Fall';

class Character implements ICharacter {
    image = require('../../assets/characters/[Fulfilled Promise] Golden Wings Elaine/portrait.png');
    sort = 'Golden Wings Elaine';
    s_name = ' Golden Wings Elaine';
    name = 'Golden Wings Elaine';
    title = 'Fulfilled Promise';
    attribute = 'HP';
    rarity = 'SSR';
    race = 'Fairy';
    equipment = [[' HP', ' Defense '], [' HP', ' Defense ']]
    basic = [
        500 /* Attack */,
        346 /* Defense */,
        6890 /* HP */,
        30 /* Pierce Rate */,
        35 /* Resistance */,
        5 /* Regeneration */,
        55 /* Crit Chance */,
        155 /* Crit Damage */,
        55 /* Crit Resistance */,
        30 /* Crit Defense */,
        110 /* Recovery Rate */,
        10 /* Lifesteal */,
    ]
    stats = [
        4829 /* Attack */,
        3558 /* Defense */,
        65250 /* HP */,
        30 /* Pierce Rate */,
        35 /* Resistance */,
        5 /* Regeneration */,
        55 /* Crit Chance */,
        155 /* Crit Damage */,
        55 /* Crit Resistance */,
        30 /* Crit Defense */,
        110 /* Recovery Rate */,
        10 /* Lifesteal */,
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
    ], [
        150 /* Attack */,
        160 /* Defense */,
        0 /* HP */,
        0 /* Pierce Rate */,
        0 /* Resistance */,
        0 /* Regeneration */,
        0 /* Crit Chance */,
        12 /* Crit Damage */,
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
        20 /* Regeneration */,
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
        9 /* Crit Chance */,
        0 /* Crit Damage */,
        0 /* Crit Resistance */,
        0 /* Crit Defense */,
        0 /* Recovery Rate */,
        0 /* Lifesteal */,
    ], [
        0 /* Attack */,
        0 /* Defense */,
        0 /* HP */,
        9 /* Pierce Rate */,
        0 /* Resistance */,
        0 /* Regeneration */,
        0 /* Crit Chance */,
        6 /* Crit Damage */,
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
    group = [];
    gender = 'Female';
    blood = 'A';
    age = '~1000';
    height = '150cm';
    weight = '38kg';
    birthday = new Date(0, 2, 14);

    food = [];
    gift = [];
}

export default Character;