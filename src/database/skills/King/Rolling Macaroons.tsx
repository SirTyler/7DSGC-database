import { ThemeContext } from "../../../theme/theme-context";
import { WeakPoint } from "../../_effects";
import ISkill, { IRank } from "../_ISkill";

class Skill implements ISkill {
    image = require("../../../assets/characters/[Sweet Jelly] New Wings King/skill_2.png");
    name = "Rolling Macaroons"

    ranks = [
        new IRank("ATTACK-ALL", 90.0, [WeakPoint()]),
        new IRank("ATTACK-ALL", 120.0, [WeakPoint()]),
        new IRank("ATTACK-ALL", 185.0, [WeakPoint()])
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