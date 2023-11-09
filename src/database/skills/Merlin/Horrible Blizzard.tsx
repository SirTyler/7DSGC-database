import { ThemeContext } from "../../../theme/theme-context";
import { SingleTargetLimit } from "../../_effects";
import ISkill, { IRank, Type } from "../_ISkill";

class Skill implements ISkill {
    image = require("../../../assets/characters/[Witch of the Snow] Truth Seeker Merlin/skill_2.png");
    name = "Horrible Blizzard"
    type = Type.Ranged

    ranks = [
        new IRank("ATTACK-ALL", 180.0, []),
        new IRank("DEBUFF-ALL", 180.0, [SingleTargetLimit()], [1]),
        new IRank("DEBUFF-ALL", 270.0, [SingleTargetLimit()], [2])
    ];

    getDescription(rankIndex: number) {
        if(rankIndex > 0) {
            return (
                <ThemeContext.Consumer>
                {(theme) => (
                    <>
                        Inflicts damage equal to <span className={`damage ${theme.theme}`}> {this.ranks[rankIndex].modifier}% </span> of Attack on all enemies and {this.ranks[rankIndex].effect[0].display} for <span className={`subeffect ${theme.theme}`}> {this.ranks[rankIndex].extra[0]} turn(s)</span>.
                    </>
                )}
                </ThemeContext.Consumer>
            )
        }
        
        return (
            <ThemeContext.Consumer>
            {(theme) => (
                <>
                    Inflicts damage equal to <span className={`damage ${theme.theme}`}> {this.ranks[rankIndex].modifier}% </span> of Attack on all enemies.
                </>
            )}
            </ThemeContext.Consumer>
        )
    }
}

export default Skill;