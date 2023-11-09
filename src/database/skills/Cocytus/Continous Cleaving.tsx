import { ThemeContext } from "../../../theme/theme-context";
import { Amplify } from "../../_effects";
import ISkill, { IRank, Type } from "../_ISkill";

class Skill implements ISkill {
    image = require("../../../assets/characters/[Guardian of the Glacier] Cocytus/skill_1.png");
    name = "Continous Cleaving"
    type = Type.Melee

    ranks = [
        new IRank("ATTACK-SINGLE", 180.0, [Amplify()]),
        new IRank("ATTACK-SINGLE", 270.0, [Amplify()]),
        new IRank("ATTACK-SINGLE", 450.0, [Amplify()])
    ];

    getDescription(rankIndex: number) {
        return (
            <ThemeContext.Consumer>
            {(theme) => (
                <>
                    Inflicts {this.ranks[rankIndex].effect[0].display} damage equal to <span className={`damage ${theme.theme}`}> {`${this.ranks[rankIndex].modifier}%`} </span> of Attack on one enemy.
                </>
            )}
            </ThemeContext.Consumer>
        )
    }
}

export default Skill;