interface IPassive {
    image: Node;
    name: string;
    effects: {name: string, display: JSX.Element}[];
    conditions: Type[];

    getDescription(): JSX.Element;
}

export enum Type {
    SUB = require("../../assets/icons/passive/slot_sub.png"),
    BATTLE_START = require("../../assets/icons/passive/slot_battle_start.png"),
    ALL = require("../../assets/icons/passive/active_all.png"),
    DEATHMATCH = require("../../assets/icons/passive/active_deathmatch.png"),
    PVP = require("../../assets/icons/passive/active_pvp.png"),
    EXCEPT_PVP = require("../../assets/icons/passive/active_except_pvp.png"),
    EXCEPT_DEMONICBEAST = require("../../assets/icons/passive/active_except_demonic_beast.png")
}

export default IPassive;