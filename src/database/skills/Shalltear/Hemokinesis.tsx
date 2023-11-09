import { ThemeContext } from "../../../theme/theme-context";
import { Infects } from "../../_effects";
import ISkill, { IRank, Type } from "../_ISkill";

class Skill implements ISkill {
    image = require("../../../assets/characters/[Bloody Valkyrie] Shalltear Bloodfallen/skill_2.png");
    name = "Hemokinesis"
    type = Type.Ranged

    ranks = [
        new IRank("DEBUFF-ALL", 110.0, [Infects()], [1]),
        new IRank("DEBUFF-ALL", 180.0, [Infects()], [1]),
        new IRank("DEBUFF-ALL", 280.0, [Infects()], [2])
    ];

    getDescription(rankIndex: number) {
        return (
            <ThemeContext.Consumer>
            {(theme) => (
                <>
                    Inficts damage equal to <span className={`damage ${theme.theme}`}> {`${this.ranks[rankIndex].modifier}%`} </span> of Attack on all enemies. {this.ranks[rankIndex].effect[0].display} for <span className={`subeffect ${theme.theme}`}>{this.ranks[rankIndex].extra[0]} turn(s)</span>.
                </>
            )}
            </ThemeContext.Consumer>
        )
    }
}

export default Skill;