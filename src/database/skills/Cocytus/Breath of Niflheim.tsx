import { ThemeContext } from "../../../theme/theme-context";
import { Detonate } from "../../_effects";
import ISkill, { IRank, Type } from "../_ISkill";

class Skill implements ISkill {
    image = require("../../../assets/characters/[Guardian of the Glacier] Cocytus/skill_2.png");
    name = "Breath of Niflheim"
    type = Type.Ranged

    ranks = [
        new IRank("ATTACK-SINGLE", 160.0, [Detonate()]),
        new IRank("ATTACK-SINGLE", 240.0, [Detonate()]),
        new IRank("ATTACK-SINGLE", 400.0, [Detonate()])
    ];

    getDescription(rankIndex: number) {
        return (
            <ThemeContext.Consumer>
            {(theme) => (
                <>
                    Inflicts {this.ranks[rankIndex].effect[0]} damage equal to <span className={`damage ${theme.theme}`}> {`${this.ranks[rankIndex].modifier}%`} </span> of Attack on one enemy.
                </>
            )}
            </ThemeContext.Consumer>
        )
    }
}

export default Skill;