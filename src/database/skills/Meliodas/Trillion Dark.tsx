import { ThemeContext } from "../../../theme/theme-context";
import { MagicBurst, SurpressDamageTaken } from "../../_effects";
import ISkill, { IRank } from "../_ISkill";

class Skill implements ISkill {
    image = require("../../../assets/characters/[Cursed Shackles] Purgatory Meliodas/ultimate.png");
    name = "Trillion Dark";

    ranks = [
        new IRank("ULTIMATE", 500.0, [MagicBurst(),SurpressDamageTaken()], [1]),
        new IRank("ULTIMATE", 550.0, [MagicBurst(),SurpressDamageTaken()], [1]),
        new IRank("ULTIMATE", 600.0, [MagicBurst(),SurpressDamageTaken()], [1]),
        new IRank("ULTIMATE", 650.0, [MagicBurst(),SurpressDamageTaken()], [1]),
        new IRank("ULTIMATE", 700.0, [MagicBurst(),SurpressDamageTaken()], [1]),
        new IRank("ULTIMATE", 750.0, [MagicBurst(),SurpressDamageTaken()], [2]),
    ];

    getDescription(rankIndex: number) {
        return (
            <ThemeContext.Consumer>
            {(theme) => (
                <>
                    Inflicts {this.ranks[rankIndex].effect[0]} damage equal to
                    <span className={`damage ${theme.theme}`}> {`${this.ranks[rankIndex].modifier}%`} </span>
                    of Attack on all enemies, then 
                    {this.ranks[rankIndex].effect[1]} on self for
                    <span className={`damage ${theme.theme}`}> {`${this.ranks[rankIndex].extra[0]} turn(s).`} </span>
                </>
            )}
            </ThemeContext.Consumer>
        )
    }
}

export default Skill;