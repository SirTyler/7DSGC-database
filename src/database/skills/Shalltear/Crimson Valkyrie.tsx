import { ThemeContext } from "../../../theme/theme-context";
import { Lifesteals } from "../../_effects";
import ISkill, { IRank, Type } from "../_ISkill";

class Skill implements ISkill {
    image = require("../../../assets/characters/[Bloody Valkyrie] Shalltear Bloodfallen/ultimate.png");
    name = "Crimson Valkyrie"
    type = Type.Ultimate

    ranks = [
        new IRank("ULTIMATE", 400.0, [Lifesteals()], [5]),
        new IRank("ULTIMATE", 440.0, [Lifesteals()], [10]),
        new IRank("ULTIMATE", 480.0, [Lifesteals()], [15]),
        new IRank("ULTIMATE", 520.0, [Lifesteals()], [20]),
        new IRank("ULTIMATE", 560.0, [Lifesteals()], [25]),
        new IRank("ULTIMATE", 600.0, [Lifesteals()], [30])
    ];

    getDescription(rankIndex: number) {
        return (
            <ThemeContext.Consumer>
            {(theme) => (
                <>
                    Increases all of the hero's stats by <span className={`damage ${theme.theme}`}>5%</span> for <span className={`subeffect ${theme.theme}`}>2 turn(s)</span>, then inflicts damage equal to <span className={`damage ${theme.theme}`}> {this.ranks[rankIndex].modifier}% </span> of Attack on all enemies and {this.ranks[rankIndex].effect[0]} for <span className={`damage ${theme.theme}`}>50%</span> of the damage dealt.
                </>
            )}
            </ThemeContext.Consumer>
        )
    }
}

export default Skill;