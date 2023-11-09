import { ThemeContext } from "../../../theme/theme-context";
import { Verdict } from "../../_effects";
import ISkill, { IRank, Type } from "../_ISkill";

class Skill implements ISkill {
    image = require("../../../assets/characters/[Ruler of Nazarick] Ainz Ooal Gown/skill_1.png");
    name = "Death Quartet"
    type = Type.Ranged

    ranks = [
        new IRank("ATTACK-SINGLE", 200.0, [Verdict()]),
        new IRank("ATTACK-SINGLE", 300.0, [Verdict()]),
        new IRank("ATTACK-SINGLE", 500.0, [Verdict()])
    ];

    getDescription(rankIndex: number) {
        return (
            <ThemeContext.Consumer>
            {(theme) => (
                <>
                    Inflicts {this.ranks[rankIndex].effect[0].display} damage equal to <span className={`damage ${theme.theme}`}> {`${this.ranks[rankIndex].modifier}%`} </span> of Attack on one enemy.
                </>
            )}
            </ThemeContext.Consumer>
        )
    }
}

export default Skill;