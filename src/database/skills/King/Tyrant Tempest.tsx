import { ThemeContext } from "../../../theme/theme-context";
import { Abyss } from "../../_effects";
import ISkill, { IRank, Type } from "../_ISkill";

class Skill implements ISkill {
    image = require("../../../assets/characters/[Sweet Jelly] New Wings King/ultimate.png");
    name = "Tyrant Tempest"
    type = Type.Ultimate

    ranks = [
        new IRank("ULTIMATE", 300.0, [Abyss(30.0)]),
        new IRank("ULTIMATE", 330.0, [Abyss(36.0)]),
        new IRank("ULTIMATE", 360.0, [Abyss(42.0)]),
        new IRank("ULTIMATE", 390.0, [Abyss(48.0)]),
        new IRank("ULTIMATE", 420.0, [Abyss(54.0)]),
        new IRank("ULTIMATE", 450.0, [Abyss(60.0)])
    ];

    getDescription(rankIndex: number) {
        return (
            <ThemeContext.Consumer>
            {(theme) => (
                <>
                    Inflicts damage equal to <span className={`damage ${theme.theme}`}> {`${this.ranks[rankIndex].modifier}%`} </span> of Attack on all enemies.
                    The hero gains {this.ranks[rankIndex].effect[0]} effect on self for <span className={`subeffect ${theme.theme}`}> 2 turn(s). </span>
                </>
            )}
            </ThemeContext.Consumer>
        )
    }
}

export default Skill;