import { ThemeContext } from "../../../theme/theme-context";
import { MarkOfBlackDot, Spike } from "../../_effects";
import ISkill, { IRank } from "../_ISkill";

class Skill implements ISkill {
    image = require("../../../assets/characters/[The Four Archangles] Mael of Sun/skill_2.png");
    name = "Solar Ray"

    ranks = [
        new IRank("ATTACK-ALL", 100.0, [Spike(), MarkOfBlackDot()], [2]),
        new IRank("ATTACK-ALL", 150.0, [Spike(), MarkOfBlackDot()], [2]),
        new IRank("ATTACK-ALL", 250.0, [Spike(), MarkOfBlackDot()], [3])
    ];

    getDescription(rankIndex: number) {
        return (
            <ThemeContext.Consumer>
            {(theme) => (
                <>
                    Inflicts {this.ranks[rankIndex].effect[0]} damage equal to
                    <span className={`damage ${theme.theme}`}> {`${this.ranks[rankIndex].modifier}%`} </span>
                    of Attack on all enemies. Applies {this.ranks[rankIndex].effect[1]} for <span className={`effect ${theme.theme}`}> {`${this.ranks[rankIndex].extra[0]}`} turn(s).</span>
                </>
            )}
            </ThemeContext.Consumer>
        )
    }
}

export default Skill;