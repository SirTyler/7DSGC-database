import { ThemeContext } from "../../../theme/theme-context";
import { WeakPoint } from "../../_effects";
import ISkill, { IRank, Type } from "../_ISkill";

class Skill implements ISkill {
    image = require("../../../assets/characters/[Full Moon Shadow] Iron Blood Mono/skill_1.png")
    name = "Slashing Master";
    type = Type.Melee

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