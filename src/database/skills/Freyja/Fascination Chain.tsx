import { ThemeContext } from "../../../theme/theme-context";
import { Pierce } from "../../_effects";
import ISkill, { IRank, Type } from "../_ISkill";

class Skill implements ISkill {
    image = require("../../../assets/characters/[Spellbinding Queen] Goddess of Beauty Freyja/skill_2.png");
    name = "Fascination Chain"
    type = Type.Ranged

    ranks = [
        new IRank("ATTACK-ALL", 100.0, [Pierce()]),
        new IRank("ATTACK-ALL", 150.0, [Pierce()]),
        new IRank("ATTACK-ALL", 250.0, [Pierce()])
    ];

    getDescription(rankIndex: number) {
        return (
            <ThemeContext.Consumer>
            {(theme) => (
                <>
                    Inflicts {this.ranks[rankIndex].effect[0].display} damage equal to
                    <span className={`damage ${theme.theme}`}> {`${this.ranks[rankIndex].modifier}%`} </span>
                    of Attack on all enemies.
                </>
            )}
            </ThemeContext.Consumer>
        )
    }
}

export default Skill;