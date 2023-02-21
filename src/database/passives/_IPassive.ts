interface IPassive {
    image: Node;
    name: string;
    effects: any[];

    getDescription(): JSX.Element;
}

export default IPassive;