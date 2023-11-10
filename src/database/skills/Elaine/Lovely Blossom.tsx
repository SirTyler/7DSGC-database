import { ThemeContext } from "../../../theme/theme-context";
import { WeakPoint } from "../../_effects";
import ISkill, { IRank, Type } from "../_ISkill";

class Skill implements ISkill {
    image = require("../../../assets/characters/[Fulfilled Promise] Golden Wings Elaine/skill_1.png");
    name = "Lovely Blossom"
    type = Type.Ranged
    
    ranks = [
        new IRank("ATTACK-SINGLE", 120.0, [WeakPoint()], []),
        new IRank("ATTACK-SINGLE", 180.0, [WeakPoint()], []),
        new IRank("ATTACK-SINGLE", 300.0, [WeakPoint()], [])
    ];

    getDescription(rankIndex: number) {
        return (
            <ThemeContext.Consumer>
            {(theme) => (
                <>
                    Inflicts {this.ranks[rankIndex].effect[0].display} damage equal to<span className={`damage ${theme.theme}`}> {`${this.ranks[rankIndex].modifier}%`} </span>of Attack on one enemy.
                </>
            )}
            </ThemeContext.Consumer>
        )
    }
}

export default Skill;