import ICharacter from './_ICharacter';

import Passive from '../passives/Judgement of Light';
import Grace from '../passives/Grace/Grace of Sun';
import Skill1 from '../skills/Mael/Sun Cutter';
import Skill2 from '../skills/Mael/Solar Ray';
import Ultimate from '../skills/Mael/Rising Sun';

class Character implements ICharacter {
    image = require('../../assets/characters/[The Four Archangles] Mael of Sunshine/portrait.png');
    sort = "Mael";
    s_name = "Mael";
    name = "Mael of Sunshine";
    title = "The Four Archangles";
    attribute = "Light";
    rarity = "SSR";
    race = "Goddess";
    equipment = [
        ["Attack","HP"],
        ["Crit Damage","Defense"]
    ]
    basic = [
        680 /* Attack */,
        420 /* Defense */,
        7000 /* HP */,
        90 /* Pierce Rate */,
        55 /* Resistance */,
        0 /* Regeneration */,
        100 /* Crit Chance */,
        190 /* Crit Damage */,
        75 /* Crit Resistance */,
        80 /* Crit Defense */,
        110 /* Recovery Rate */,
        10 /* Lifesteal */
    ]
    stats = [
        5850 /* Attack */,
        3648 /* Defense */,
        64440 /* HP */,
        90 /* Pierce Rate */,
        55 /* Resistance */,
        0 /* Regeneration */,
        100 /* Crit Chance */,
        90 /* Crit Damage */,
        75 /* Crit Resistance */,
        80 /* Crit Defense */,
        110 /* Recovery Rate */,
        10 /* Lifesteal */
    ]
    awakening = [
        [
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
            3 /* Lifesteal */,
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
        ]
    ]
    superawakening = [
        [
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
        ],[
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
        ],[
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
        ],[
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
        ]
    ]
    skills = [
        new Skill1(),
        new Skill2()
    ]
    ultimate = [
        new Ultimate()
    ]
    unique = new Passive();
    grace = new Grace();
    association = [];
    gender = 'Male';
    blood = 'O';
    age = '3500';
    height = '187 cm';
    weight = '90 kg';
    birthday: Date = new Date(0, 0, 14);
    
    food = [];
    gift = [];
}

export default Character;