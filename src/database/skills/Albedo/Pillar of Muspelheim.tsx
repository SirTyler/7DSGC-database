import { ThemeContext } from "../../../theme/theme-context";
import ISkill, { IRank } from "../_ISkill";

class Skill implements ISkill {
    image = require("../../../assets/characters/[Pure-White Devil] Albedo/skill_1.png");
    name = "Pillar of Muspelheim"

    ranks = [
        new IRank("DEBUFF-SINGLE", 180.0, [], [30,1]),
        new IRank("DEBUFF-SINGLE", 270.0, [], [50,1]),
        new IRank("DEBUFF-SINGLE", 450.0, [], [80,2])
    ];

    getDescription(rankIndex: number) {
        return (
            <ThemeContext.Consumer>
            {(theme) => (
                <>
                    Inflicts damage equal to
                    <span className={`damage ${theme.theme}`}> {`${this.ranks[rankIndex].modifier}%`} </span>
                    of Attack on one enemy, then decreases their damage dealt by <span className={`effect ${theme.theme}`}> {`${this.ranks[rankIndex].extra[0]}`}%</span> for <span className={`subeffect ${theme.theme}`}> {`${this.ranks[rankIndex].extra[1]}`} turn(s).</span>
                </>
            )}
            </ThemeContext.Consumer>
        )
    }
}

export default Skill;