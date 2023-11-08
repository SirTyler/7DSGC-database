import { ThemeContext } from "../../../theme/theme-context";
import { BlackDotBurst, MarkOfBlackDot, RemoveStances } from "../../_effects";
import ISkill, { IRank, Type } from "../_ISkill";

class Skill implements ISkill {
    image = require("../../../assets/characters/[The Four Archangels] Mael of Sunshine/ultimate.png");
    name = "Rising Sun"
    type = Type.Melee

    ranks = [
        new IRank("ULTIMATE", 500.0, [RemoveStances(),MarkOfBlackDot(),BlackDotBurst(5.0)], [1]),
        new IRank("ULTIMATE", 550.0, [RemoveStances(),MarkOfBlackDot(),BlackDotBurst(10.0)], [1]),
        new IRank("ULTIMATE", 600.0, [RemoveStances(),MarkOfBlackDot(),BlackDotBurst(15.0)], [1]),
        new IRank("ULTIMATE", 650.0, [RemoveStances(),MarkOfBlackDot(),BlackDotBurst(20.0)], [2]),
        new IRank("ULTIMATE", 700.0, [RemoveStances(),MarkOfBlackDot(),BlackDotBurst(35.0)], [2]),
        new IRank("ULTIMATE", 750.0, [RemoveStances(),MarkOfBlackDot(),BlackDotBurst(50.0)], [3])
    ];

    getDescription(rankIndex: number) {
        return (
            <ThemeContext.Consumer>
            {(theme) => (
                <>
                    {this.ranks[rankIndex].effect[0]} from all enemies, additionally applies 
                    <span className={`subeffect ${theme.theme}`}> {this.ranks[rankIndex].extra[0]} </span> {this.ranks[rankIndex].effect[1]} and inflicts {this.ranks[rankIndex].effect[2]} damage equal to <span className={`damage ${theme.theme}`}> {this.ranks[rankIndex].modifier}% </span> of Attack on all enemies.
                </>
            )}
            </ThemeContext.Consumer>
        )
    }
}

export default Skill;