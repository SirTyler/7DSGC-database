import ICharacter from './_ICharacter';

import Passive from '../passives/Curse of Purgatory';
import Skill1 from '../skills/Meliodas/Chain Slash';
import Skill2 from '../skills/Meliodas/Pierce and Strike';
import Ultimate from '../skills/Meliodas/Trillion Dark';

class Character implements ICharacter {
    image = require('../../assets/characters/[Cursed Shackles] Purgatory Meliodas/portrait.png');
    sort = 'Meliodas, Purgatory';
    s_name = 'Purgatory Meliodas';
    name = 'Purgatory Meliodas';
    title = 'Cursed Shackles';
    attribute = 'Darkness';
    rarity = 'SSR';
    race = 'Demon';
    equipment = [['HP', 'Attack'], ['Defense', 'Crit Damage']]
    basic = [
        680 /* Attack */,
        395 /* Defense */,
        6700 /* HP */,
        95 /* Pierce Rate */,
        45 /* Resistance */,
        10 /* Regeneration */,
        90 /* Crit Chance */,
        180 /* Crit Damage */,
        80 /* Crit Resistance */,
        70 /* Crit Defense */,
        105 /* Recovery Rate */,
        15 /* Lifesteal */
    ]
    stats = [
        6018 /* Attack */,
        3732 /* Defense */,
        60965 /* HP */,
        95 /* Pierce Rate */,
        45 /* Resistance */,
        10 /* Regeneration */,
        90 /* Crit Chance */,
        180 /* Crit Damage */,
        80 /* Crit Resistance */,
        70 /* Crit Defense */,
        105 /* Recovery Rate */,
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
        3 /* Crit Resistance */,
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
        10 /* Crit Damage */,
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
        7.5 /* Crit Defense */,
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
        3500 /* HP */,
        0 /* Pierce Rate */,
        4.5 /* Resistance */,
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
        12 /* Crit Resistance */,
        0 /* Crit Defense */,
        12 /* Recovery Rate */,
        0 /* Lifesteal */,
    ], [
        180 /* Attack */,
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
        12 /* Crit Defense */,
        0 /* Recovery Rate */,
        0 /* Lifesteal */,
    ], [
        540 /* Attack */,
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
        12 /* Crit Defense */,
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
    group = [require('./../group/The Seven Deadly Sins')];
    gender = 'Male';
    blood = 'B';
    age = '3000+';
    height = '152 cm';
    weight = '50 kg';
    birthday = new Date(0, 6, 25);

    food = [];
    gift = [];
}

export default Character;