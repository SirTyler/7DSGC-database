import { ThemeContext } from "../../../theme/theme-context";
import { CritChanceDecrease, CritDamageDecrease } from "../../_effects";
import ISkill, { IRank, Type } from "../_ISkill";

class Skill implements ISkill {
    image = require("../../../assets/characters/[Shepherd of Souls] Queen Hel/skill_2.png");
    name = "Reaping Death"
    type = Type.Ranged

    ranks = [
        new IRank("DEBUFF-ALL", 140.0, [CritChanceDecrease(), CritDamageDecrease()], [30, 2]),
        new IRank("DEBUFF-ALL", 210.0, [CritChanceDecrease(), CritDamageDecrease()], [50, 2]),
        new IRank("DEBUFF-ALL", 350.0, [CritChanceDecrease(), CritDamageDecrease()], [80, 3])
    ];

    getDescription(rankIndex: number) {
        return (
            <ThemeContext.Consumer>
            {(theme) => (
                <>
                    Inficts damage equal to <span className={`damage ${theme.theme}`}> {`${this.ranks[rankIndex].modifier}%`} </span> of Attack on all enemies and decreases their {this.ranks[rankIndex].effect[0]} and {this.ranks[rankIndex].effect[1]} by <span className={`damage ${theme.theme}`}>{this.ranks[rankIndex].extra[0]}%</span> for <span className={`subeffect ${theme.theme}`}>{this.ranks[rankIndex].extra[1]} turn(s)</span>.
                </>
            )}
            </ThemeContext.Consumer>
        )
    }
}

export default Skill;