import { ThemeContext } from "../../../theme/theme-context";
import { AllStatsIncrease, Lifesteals } from "../../_effects";
import ISkill, { IRank, Type } from "../_ISkill";

class Skill implements ISkill {
    image = require("../../../assets/characters/[Bloody Valkyrie] Shalltear Bloodfallen/ultimate.png");
    name = "Crimson Valkyrie"
    type = Type.Ultimate

    ranks = [
        new IRank("ULTIMATE", 400.0, [AllStatsIncrease(), Lifesteals()], [5]),
        new IRank("ULTIMATE", 440.0, [AllStatsIncrease(), Lifesteals()], [10]),
        new IRank("ULTIMATE", 480.0, [AllStatsIncrease(), Lifesteals()], [15]),
        new IRank("ULTIMATE", 520.0, [AllStatsIncrease(), Lifesteals()], [20]),
        new IRank("ULTIMATE", 560.0, [AllStatsIncrease(), Lifesteals()], [25]),
        new IRank("ULTIMATE", 600.0, [AllStatsIncrease(), Lifesteals()], [30])
    ];

    getDescription(rankIndex: number) {
        return (
            <ThemeContext.Consumer>
            {(theme) => (
                <>
                    Increases hero's {this.ranks[rankIndex].effect[0].display} by <span className={`damage ${theme.theme}`}>5%</span> for <span className={`subeffect ${theme.theme}`}>2 turn(s)</span>, then inflicts damage equal to <span className={`damage ${theme.theme}`}> {this.ranks[rankIndex].modifier}% </span> of Attack on all enemies and {this.ranks[rankIndex].effect[1].display} for <span className={`damage ${theme.theme}`}>50%</span> of the damage dealt.
                </>
            )}
            </ThemeContext.Consumer>
        )
    }
}

export default Skill;