import { ThemeContext } from "../../../theme/theme-context";
import { BasicStatsIncrease } from "../../_effects";
import ISkill, { IRank, Type } from "../_ISkill";

class Skill implements ISkill {
    image = require("../../../assets/characters/[Guardian of the Glacier] Cocytus/ultimate.png");
    name = "Guillotine"
    type = Type.Ultimate

    ranks = [
        new IRank("ULTIMATE", 650.0, [BasicStatsIncrease()]),
        new IRank("ULTIMATE", 715.0, [BasicStatsIncrease()]),
        new IRank("ULTIMATE", 780.0, [BasicStatsIncrease()]),
        new IRank("ULTIMATE", 845.0, [BasicStatsIncrease()]),
        new IRank("ULTIMATE", 910.0, [BasicStatsIncrease()]),
        new IRank("ULTIMATE", 975.0, [BasicStatsIncrease()])
    ];

    getDescription(rankIndex: number) {
        return (
            <ThemeContext.Consumer>
            {(theme) => (
                <>
                    Increases {this.ranks[rankIndex].effect[0]} by <span className={`damage ${theme.theme}`}>50%</span> for <span className={`subeffect ${theme.theme}`}>3 turn(s)</span> and inflicts damage equal to <span className={`damage ${theme.theme}`}> {this.ranks[rankIndex].modifier}% </span> of Attack on all enemies.
                </>
            )}
            </ThemeContext.Consumer>
        )
    }
}

export default Skill;