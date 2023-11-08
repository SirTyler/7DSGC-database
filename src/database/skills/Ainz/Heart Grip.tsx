import { ThemeContext } from "../../../theme/theme-context";
import { Verdict, Deathbrand } from "../../_effects";
import ISkill, { IRank, Type } from "../_ISkill";

class Skill implements ISkill {
    image = require("../../../assets/characters/[Ruler of Nazarick] Ainz Ooal Gown/ultimate.png");
    name = "Heart Grip"
    type = Type.Ultimate

    ranks = [
        new IRank("ULTIMATE", 650.0, [Verdict(), Deathbrand()], [2]),
        new IRank("ULTIMATE", 715.0, [Verdict(), Deathbrand()], [2]),
        new IRank("ULTIMATE", 780.0, [Verdict(), Deathbrand()], [2]),
        new IRank("ULTIMATE", 845.0, [Verdict(), Deathbrand()], [3]),
        new IRank("ULTIMATE", 910.0, [Verdict(), Deathbrand()], [5]),
        new IRank("ULTIMATE", 975.0, [Verdict(), Deathbrand()], [7])
    ];

    getDescription(rankIndex: number) {
        return (
            <ThemeContext.Consumer>
            {(theme) => (
                <>
                    Inficts {this.ranks[rankIndex].effect[0]} damage equal to <span className={`damage ${theme.theme}`}> {this.ranks[rankIndex].modifier}% </span> of Attack on one enemy. If the hero is participating in battle in <span className={`subeffect ${theme.theme}`}>PVP</span>, each {this.ranks[rankIndex].effect[1]} on an enemy decreases that enemy's <span className={`effect ${theme.theme}`}>damage dealt</span> and the <span className={`effect ${theme.theme}`}>final damage</span> of that enemy's all-target Ultimate Move by <span className={`damage ${theme.theme}`}> {this.ranks[rankIndex].extra[0]}%</span>.
                </>
            )}
            </ThemeContext.Consumer>
        )
    }
}

export default Skill;