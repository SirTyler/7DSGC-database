import { ThemeContext } from "../../../theme/theme-context";
import { SecretTechnique } from "../../_effects";
import ISkill, { IRank } from "../_ISkill";

class Skill implements ISkill {
    image = require("../../../assets/characters/[Full Moon Shadow] Iron Blood Mono/ultimate.png")
    name = "Full Ejection";

    ranks = [
        new IRank("ULTIMATE", 300.0, [SecretTechnique(20)]),
        new IRank("ULTIMATE", 330.0, [SecretTechnique(28)]),
        new IRank("ULTIMATE", 360.0, [SecretTechnique(36)]),
        new IRank("ULTIMATE", 390.0, [SecretTechnique(44)]),
        new IRank("ULTIMATE", 420.0, [SecretTechnique(52)]),
        new IRank("ULTIMATE", 450.0, [SecretTechnique(60)]),
    ];

    getDescription(rankIndex: number) {
        return (
            <ThemeContext.Consumer>
            {(theme) => (
                <>
                    Inflicts {this.ranks[rankIndex].effect[0]} damage equal to
                    <span className={`damage ${theme.theme}`}> {`${this.ranks[rankIndex].modifier}%`} </span>
                    of Attack on all enemies and deals damage with attribute advantage regardless of attribute.
                </>
            )}
            </ThemeContext.Consumer>
        )
    }
}

export default Skill;