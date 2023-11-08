import { ThemeContext } from "../../../theme/theme-context";
import { Slash } from "../../_effects";
import ISkill, { IRank, Type } from "../_ISkill";

class Skill implements ISkill {
    image = require("../../../assets/characters/[Cursed Shackles] Purgatory Meliodas/skill_2.png")
    name = "Chain Slash";
    type = Type.Melee

    ranks = [
        new IRank("ATTACK-ALL", 120.0, [Slash()]),
        new IRank("ATTACK-ALL", 180.0, [Slash()]),
        new IRank("ATTACK-ALL", 300.0, [Slash()])
    ];

    getDescription(rankIndex: number) {
        return (
            <ThemeContext.Consumer>
            {(theme) => (
                <>
                    Inflicts {this.ranks[rankIndex].effect[0]} damage equal to
                    <span className={`damage ${theme.theme}`}> {`${this.ranks[rankIndex].modifier}%`} </span>
                    of Attack on all enemies.
                </>
            )}
            </ThemeContext.Consumer>
        )
    }
}

export default Skill;