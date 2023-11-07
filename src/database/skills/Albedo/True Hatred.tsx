import { ThemeContext } from "../../../theme/theme-context";
import { Quell, CritChanceIncrease, CritDamageIncrease } from "../../_effects";
import ISkill, { IRank } from "../_ISkill";

class Skill implements ISkill {
    image = require("../../../assets/characters/[Pure-White Devil] Albedo/ultimate.png");
    name = "True Hatred"

    ranks = [
        new IRank("ULTIMATE", 350.0, [Quell(5.0), CritChanceIncrease(), CritDamageIncrease()], [60]),
        new IRank("ULTIMATE", 380.0, [Quell(10.0), CritChanceIncrease(), CritDamageIncrease()], [70]),
        new IRank("ULTIMATE", 410.0, [Quell(15.0), CritChanceIncrease(), CritDamageIncrease()], [80]),
        new IRank("ULTIMATE", 440.0, [Quell(20.0), CritChanceIncrease(), CritDamageIncrease()], [95]),
        new IRank("ULTIMATE", 470.0, [Quell(35.0), CritChanceIncrease(), CritDamageIncrease()], [110]),
        new IRank("ULTIMATE", 500.0, [Quell(50.0), CritChanceIncrease(), CritDamageIncrease()], [130])
    ];

    getDescription(rankIndex: number) {
        return (
            <ThemeContext.Consumer>
            {(theme) => (
                <>
                    Increases the hero's {this.ranks[rankIndex].effect[1]} by <span className={`damage ${theme.theme}`}>50%</span> and {this.ranks[rankIndex].effect[2]} by <span className={`damage ${theme.theme}`}> {this.ranks[rankIndex].extra[0]}%</span> for <span className={`subeffect ${theme.theme}`}>2 turn(s)</span>, 
                    then inflicts {this.ranks[rankIndex].effect[0]} damage equal to <span className={`damage ${theme.theme}`}> {this.ranks[rankIndex].modifier}% </span> of Attack on all enemies.
                </>
            )}
            </ThemeContext.Consumer>
        )
    }
}

export default Skill;