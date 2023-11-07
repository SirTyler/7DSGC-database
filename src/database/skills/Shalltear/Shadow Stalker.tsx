import { ThemeContext } from "../../../theme/theme-context";
import { Exploit } from "../../_effects";
import ISkill, { IRank } from "../_ISkill";

class Skill implements ISkill {
    image = require("../../../assets/characters/[Bloody Valkyrie] Shalltear Bloodfallen/skill_1.png");
    name = "Shadow Stalker"

    ranks = [
        new IRank("ATTACK-SINGLE", 150.0, [Exploit()]),
        new IRank("ATTACK-SINGLE", 250.0, [Exploit()]),
        new IRank("ATTACK-SINGLE", 450.0, [Exploit()])
    ];

    getDescription(rankIndex: number) {
        return (
            <ThemeContext.Consumer>
            {(theme) => (
                <>
                    Inflicts {this.ranks[rankIndex].effect[0]} damage equal to <span className={`damage ${theme.theme}`}> {`${this.ranks[rankIndex].modifier}%`} </span> of Attack on one enemy.
                </>
            )}
            </ThemeContext.Consumer>
        )
    }
}

export default Skill;