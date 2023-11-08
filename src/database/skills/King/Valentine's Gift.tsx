import { ThemeContext } from "../../../theme/theme-context";
import { Poisons } from "../../_effects";
import ISkill, { IRank, Type } from "../_ISkill";

class Skill implements ISkill {
    image = require("../../../assets/characters/[Sweet Jelly] New Wings King/skill_1.png");
    name = "Valentine's Gift"
    type = Type.Ranged
    
    ranks = [
        new IRank("DEBUFF", 150.0, [Poisons()], [3]),
        new IRank("DEBUFF", 225.0, [Poisons()], [3]),
        new IRank("DEBUFF", 375.0, [Poisons()], [3])
    ];

    getDescription(rankIndex: number) {
        return (
            <ThemeContext.Consumer>
            {(theme) => (
                <>
                    Inflicts damage equal to<span className={`damage ${theme.theme}`}> {`${this.ranks[rankIndex].modifier}%`} </span>of Attack on one enemy.
                    {this.ranks[rankIndex].effect[0]} for <span className={`subeffect ${theme.theme}`}> {`${this.ranks[rankIndex].extra[0]}`} turn(s).</span>
                </>
            )}
            </ThemeContext.Consumer>
        )
    }
}

export default Skill;