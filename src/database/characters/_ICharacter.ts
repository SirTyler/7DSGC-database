import IPassive from "../passives/_IPassive";
import ISkill from "../skills/_ISkill";

interface ICharacter {
    image: Node;
    name: string;
    title: string;
    attribute: string;
    rarity: string;
    race: string;
    equipment: string[][];

    basic: number[];
    stats: number[];
    awakening: number[][];
    superawakening: number[][];

    skills: ISkill[];
    ultimate: ISkill[];
    unique: IPassive;
    association: any[];

    gender: string;
    blood: string;
    age: string;
    height: string;
    weight: string;
    birthday: Date;
    food: any[];
    gift: any[];
}

export default ICharacter;