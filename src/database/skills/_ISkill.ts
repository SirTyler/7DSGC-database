
interface ISkill {
    image: Node;
    name: string;
    ranks: IRank[]

    getDescription(rankIndex: number): JSX.Element;
}

export class IRank {
    type: string = "";
    modifier: number = 0;
    effect: JSX.Element[] = [];
    extra: number[] = [];

    constructor(type: string, modifier: number, effect: JSX.Element[], extra: number[] = []) {
        this.type = type;
        this.modifier = modifier;
        this.effect = effect;
        this.extra = extra;
    }
}

export default ISkill;