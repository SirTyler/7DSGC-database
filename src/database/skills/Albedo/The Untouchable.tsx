import { ThemeContext } from "../../../theme/theme-context";
import { Taunt, Amplify } from "../../_effects";
import ISkill, { IRank, Type } from "../_ISkill";

class Skill implements ISkill {
    image = require("../../../assets/characters/[Pure-White Devil] Albedo/skill_2.png");
    name = "The Untouchable"
    type = Type.Melee

    ranks = [
        new IRank("STANCE", 150.0, [Taunt(), Amplify()], [1]),
        new IRank("STANCE", 250.0, [Taunt(), Amplify()], [2]),
        new IRank("STANCE", 450.0, [Taunt(), Amplify()], [2])
    ];

    getDescription(rankIndex: number) {
        return (
            <ThemeContext.Consumer>
            {(theme) => (
                <>
                    Assumes a Stance to {this.ranks[rankIndex].effect[0].display} enemies for <span className={`subeffect ${theme.theme}`}> {`${this.ranks[rankIndex].extra[0]}`} turn(s) </span>
                    inflicting {this.ranks[rankIndex].effect[1].display} damage equal to <span className={`damage ${theme.theme}`}> {`${this.ranks[rankIndex].modifier}%`} </span> via counter when attacked.
                </>
            )}
            </ThemeContext.Consumer>
        )
    }
}

export default Skill;