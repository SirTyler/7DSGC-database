import { ThemeContext } from "../../../theme/theme-context";
import { Flood } from "../../_effects";
import ISkill, { IRank } from "../_ISkill";

class Skill implements ISkill {
    image = require("../../../assets/characters/[Spellbinding Queen] Goddess of Beauty Freyja/skill_1.png");
    name = "Elegant Leopard"

    ranks = [
        new IRank("ATTACK-SINGLE", 200.0, [Flood()]),
        new IRank("ATTACK-SINGLE", 300.0, [Flood()]),
        new IRank("ATTACK-SINGLE", 500.0, [Flood()])
    ];

    getDescription(rankIndex: number) {
        return (
            <ThemeContext.Consumer>
            {(theme) => (
                <>
                    Inflicts {this.ranks[rankIndex].effect[0]} damage equal to
                    <span className={`damage ${theme.theme}`}> {`${this.ranks[rankIndex].modifier}%`} </span>
                    of Attack on one enemy.
                </>
            )}
            </ThemeContext.Consumer>
        )
    }
}

export default Skill;