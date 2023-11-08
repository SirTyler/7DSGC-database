import { ThemeContext } from "../../../theme/theme-context";
import { AttackRelatedStatsDecrease } from "../../_effects";
import ISkill, { IRank, Type } from "../_ISkill";

class Skill implements ISkill {
    image = require("../../../assets/characters/[Ruler of Nazarick] Ainz Ooal Gown/skill_2.png");
    name = "The Untouchable"
    type = Type.Ranged

    ranks = [
        new IRank("DEBUFF-ALL", 120.0, [AttackRelatedStatsDecrease()], [2]),
        new IRank("DEBUFF-ALL", 180.0, [AttackRelatedStatsDecrease()], [2]),
        new IRank("DEBUFF-ALL", 300.0, [AttackRelatedStatsDecrease()], [3])
    ];

    getDescription(rankIndex: number) {
        return (
            <ThemeContext.Consumer>
            {(theme) => (
                <>
                    Inficts damage equal to <span className={`damage ${theme.theme}`}> {`${this.ranks[rankIndex].modifier}%`} </span> of Attack on all enemies and decreases their {this.ranks[rankIndex].effect[0]} by 10% for <span className={`subeffect ${theme.theme}`}>{this.ranks[rankIndex].extra[0]} turn(s)</span>.
                </>
            )}
            </ThemeContext.Consumer>
        )
    }
}

export default Skill;