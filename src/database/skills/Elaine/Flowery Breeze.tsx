import { ThemeContext } from "../../../theme/theme-context";
import { AttackRelatedStatsIncrease } from "../../_effects";
import ISkill, { IRank, Type } from "../_ISkill";

class Skill implements ISkill {
    image = require("../../../assets/characters/[Fulfilled Promise] Golden Wings Elaine/skill_2.png");
    name = "Flowery Breeze"
    type = Type.Ranged

    ranks = [
        new IRank("BUFF", 15.0, [AttackRelatedStatsIncrease()], [2]),
        new IRank("BUFF", 20.0, [AttackRelatedStatsIncrease()], [2]),
        new IRank("BUFF", 35.0, [AttackRelatedStatsIncrease()], [3])
    ];

    getDescription(rankIndex: number) {
        return (
            <ThemeContext.Consumer>
            {(theme) => (
                <>
                    Increases {this.ranks[rankIndex].effect[0].display} of all allies by <span className={`damage ${theme.theme}`}> {`${this.ranks[rankIndex].modifier}%`} </span> for <span className={`subeffect ${theme.theme}`}> {`${this.ranks[rankIndex].extra[0]}`} turn(s)</span>.
                </>
            )}
            </ThemeContext.Consumer>
        )
    }
}

export default Skill;