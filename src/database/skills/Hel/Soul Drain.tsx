import { ThemeContext } from "../../../theme/theme-context";
import { Pain } from "../../_effects";
import ISkill, { IRank, Type } from "../_ISkill";

class Skill implements ISkill {
    image = require("../../../assets/characters/[Shepherd of Souls] Queen Hel/skill_1.png");
    name = "Soul Drain"
    type = Type.Melee

    ranks = [
        new IRank("ATTACK-SINGLE", 200.0, [Pain()]),
        new IRank("ATTACK-SINGLE", 300.0, [Pain()]),
        new IRank("ATTACK-SINGLE", 500.0, [Pain()])
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