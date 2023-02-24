import { ThemeContext } from "../../../theme/theme-context";
import { Conflagration } from "../../_effects";
import ISkill, { IRank } from "../_ISkill";

class Skill implements ISkill {
    image = require("../../../assets/characters/[The Four Archangles] Mael of Sun/skill_1.png");
    name = "Sun Cutter"

    ranks = [
        new IRank("ATTACK-SINGLE", 200.0, [Conflagration()]),
        new IRank("ATTACK-SINGLE", 400.0, [Conflagration()]),
        new IRank("ATTACK-SINGLE", 500.0, [Conflagration()])
    ];

    getDescription(rankIndex: number) {
        return (
            <ThemeContext.Consumer>
            {(theme) => (
                <>
                    Inflicts {this.ranks[rankIndex].effect[0]} damage equal to <span className={`damage ${theme.theme}`}> {`${this.ranks[rankIndex].modifier}%`} </span>of Attack on one enemy.
                </>
            )}
            </ThemeContext.Consumer>
        )
    }
}

export default Skill;