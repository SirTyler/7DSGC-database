import { ThemeContext } from "../../../theme/theme-context";
import { Frenzy } from "../../_effects";
import ISkill, { IRank, Type } from "../_ISkill";

class Skill implements ISkill {
    image = require("../../../assets/characters/[Cursed Shackles] Purgatory Meliodas/skill_1.png");
    name = "Pierce and Strike"
    type = Type.Melee

    ranks = [
        new IRank("ATTACK-SINGLE", 200.0, [Frenzy()]),
        new IRank("ATTACK-SINGLE", 300.0, [Frenzy()]),
        new IRank("ATTACK-SINGLE", 500.0, [Frenzy()])
    ];

    getDescription(rankIndex: number) {
        return (
            <ThemeContext.Consumer>
            {(theme) => (
                <>
                    Inflicts {this.ranks[rankIndex].effect[0].display} damage equal to
                    <span className={`damage ${theme.theme}`}> {`${this.ranks[rankIndex].modifier}%`} </span>
                    of Attack on one enemies.
                </>
            )}
            </ThemeContext.Consumer>
        )
    }
}

export default Skill;