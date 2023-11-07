import { ThemeContext } from "../../../theme/theme-context";
import { HPRelatedStatsDecrease } from "../../_effects";
import ISkill, { IRank } from "../_ISkill";

class Skill implements ISkill {
    image = require("../../../assets/characters/[Witch of the Snow] Truth Seeker Merlin/ultimate.png");
    name = "Frost Blast"

    ranks = [
        new IRank("ULTIMATE", 400.0, [HPRelatedStatsDecrease()], [2]),
        new IRank("ULTIMATE", 440.0, [HPRelatedStatsDecrease()], [2]),
        new IRank("ULTIMATE", 480.0, [HPRelatedStatsDecrease()], [2]),
        new IRank("ULTIMATE", 520.0, [HPRelatedStatsDecrease()], [2]),
        new IRank("ULTIMATE", 560.0, [HPRelatedStatsDecrease()], [2]),
        new IRank("ULTIMATE", 600.0, [HPRelatedStatsDecrease()], [3])
    ];

    getDescription(rankIndex: number) {
        return (
            <ThemeContext.Consumer>
            {(theme) => (
                <>
                    Decreases {this.ranks[rankIndex].effect[0]} of all enemies by <span className={`damage ${theme.theme}`}>30%</span> for <span className={`subeffect ${theme.theme}`}>{this.ranks[rankIndex].extra[0]} turn(s)</span> and inflicts <span className={`damage ${theme.theme}`}> {this.ranks[rankIndex].modifier}% </span> of Attack on one enemy.
                </>
            )}
            </ThemeContext.Consumer>
        )
    }
}

export default Skill;