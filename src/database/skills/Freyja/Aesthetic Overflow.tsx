import { ThemeContext } from "../../../theme/theme-context";
import { Wave, Abyss } from "../../_effects";
import ISkill, { IRank, Type } from "../_ISkill";

class Skill implements ISkill {
    image = require("../../../assets/characters/[Spellbinding Queen] Goddess of Beauty Freyja/ultimate.png");
    name = "Aesthetic Overflow"
    type = Type.Ultimate

    ranks = [
        new IRank("ULTIMATE", 725.0, [Wave(20.0), Abyss(25.0)]),
        new IRank("ULTIMATE", 850.0, [Wave(20.0), Abyss(30.0)]),
        new IRank("ULTIMATE", 975.0, [Wave(20.0), Abyss(35.0)]),
        new IRank("ULTIMATE", 1100.0, [Wave(20.0), Abyss(40.0)]),
        new IRank("ULTIMATE", 1225.0, [Wave(20.0), Abyss(45.0)]),
        new IRank("ULTIMATE", 1350.0, [Wave(20.0), Abyss(50.0)])
    ];

    getDescription(rankIndex: number) {
        return (
            <ThemeContext.Consumer>
            {(theme) => (
                <>
                    Inflicts {this.ranks[rankIndex].effect[0]} damage equal to
                    <span className={`damage ${theme.theme}`}> {`${this.ranks[rankIndex].modifier}%`} </span>
                    of Attack on all enemies. The hero gains {this.ranks[rankIndex].effect[1]} effect on self for <span className={`subeffect ${theme.theme}`}> 2 turn(s). </span>
                </>
            )}
            </ThemeContext.Consumer>
        )
    }
}

export default Skill;