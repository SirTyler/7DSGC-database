interface IPassive {
    image: Node;
    name: string;
    effects: any[];

    getDescription(): void;
}

export default IPassive;