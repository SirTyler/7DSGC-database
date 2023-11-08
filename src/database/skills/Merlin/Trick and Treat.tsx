import { ThemeContext } from "../../../theme/theme-context";
import { Pierce } from "../../_effects";
import ISkill, { IRank, Type } from "../_ISkill";

class Skill implements ISkill {
    image = require("../../../assets/characters/[Witch of the Snow] Truth Seeker Merlin/skill_1.png");
    name = "Trick and Treat"
    type = Type.Ranged

    ranks = [
        new IRank("ATTACK-SINGLE", 200.0, [Pierce()]),
        new IRank("ATTACK-SINGLE", 300.0, [Pierce()]),
        new IRank("ATTACK-SINGLE", 500.0, [Pierce()])
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