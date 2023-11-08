import IPassive from "../passives/_IPassive";
import ISkill from "../skills/_ISkill";

interface ICharacter {
    image: Node;
    sort: string;
    s_name: string;
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
    grace: IPassive | null;
    group: {name: string, members: ICharacter[]} [];
    association: ICharacter[];

    gender: string;
    blood: string;
    age: string;
    height: string;
    weight: string;
    birthday: Date | null;
    food: any[];
    gift: any[];
}

export default ICharacter;