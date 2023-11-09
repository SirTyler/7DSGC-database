
interface ISkill {
    image: Node;
    name: string;
    type: Type;
    ranks: IRank[]

    getDescription(rankIndex: number): JSX.Element;
}

export enum Type {
    Melee,
    Ranged,
    Ultimate
}

export class IRank {
    type: string = "";
    modifier: number = 0;
    effect: {name: string, display: JSX.Element}[] = [];
    extra: number[] = [];

    constructor(type: string, modifier: number, effect: {name: string, display: JSX.Element}[], extra: number[] = []) {
        this.type = type;
        this.modifier = modifier;
        this.effect = effect;
        this.extra = extra;
    }
}

export default ISkill;