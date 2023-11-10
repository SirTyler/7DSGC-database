import { ThemeContext } from "../../../theme/theme-context";
import { Release } from "../../_effects";
import ISkill, { IRank, Type } from "../_ISkill";

class Skill implements ISkill {
    image = require("../../../assets/characters/[Fulfilled Promise] Golden Wings Elaine/ultimate.png");
    name = "Tempest Fall"
    type = Type.Ultimate

    ranks = [
        new IRank("ULTIMATE", 420.0, [Release()], [100]),
        new IRank("ULTIMATE", 462.0, [Release()], [100]),
        new IRank("ULTIMATE", 504.0, [Release()], [100]),
        new IRank("ULTIMATE", 546.0, [Release()], [100]),
        new IRank("ULTIMATE", 588.0, [Release()], [100]),
        new IRank("ULTIMATE", 630.0, [Release()], [100])
    ];

    getDescription(rankIndex: number) {
        return (
            <ThemeContext.Consumer>
            {(theme) => (
                <>
                    Inflicts damage equal to <span className={`damage ${theme.theme}`}> {`${this.ranks[rankIndex].modifier}%`} </span> of Attack on all enemies and {this.ranks[rankIndex].effect[0].display} <span className={`damage ${theme.theme}`}>{this.ranks[rankIndex].extra[0]}%</span>.
                </>
            )}
            </ThemeContext.Consumer>
        )
    }
}

export default Skill;