import { ThemeContext } from "../../../theme/theme-context";
import { CritChanceIncrease, CritDamageIncrease, RemoveDebuffs } from "../../_effects";
import ISkill, { IRank } from "../_ISkill";

class Skill implements ISkill {
    image = require("../../../assets/characters/[Full Moon Shadow] Iron Blood Mono/skill_2.png")
    name = "All Clear";
    extra = [];

    ranks = [
        new IRank("BUFF", 0, [RemoveDebuffs()]),
        new IRank("BUFF", 0, [RemoveDebuffs(), CritChanceIncrease(), CritDamageIncrease()], [30.0, 50.0, 2]),
        new IRank("BUFF", 0, [RemoveDebuffs(), CritChanceIncrease(), CritDamageIncrease()], [50.0, 80.0, 3])
    ];

    getDescription(rankIndex: number) {
        if(rankIndex > 0) {
            return (
                <ThemeContext.Consumer>
                {(theme) => (
                    <>
                        {this.ranks[rankIndex].effect[0]} from all allies, then increases their {this.ranks[rankIndex].effect[1]} by <span className={`effect ${theme.theme}`}> {`${this.ranks[rankIndex].extra[0]}%`} </span>
                        and {this.ranks[rankIndex].effect[2]} by <span className={`effect ${theme.theme}`}> {`${this.ranks[rankIndex].extra[1]}%`} </span>
                        for <span className={`effect ${theme.theme}`}> {`${this.ranks[rankIndex].extra[2]}%`} turn(s).</span>
                    </>
                )}
                </ThemeContext.Consumer>
            )
        }
        
        return (
            <ThemeContext.Consumer>
            {(theme) => (
                <>
                    {this.ranks[rankIndex].effect[0]} from all allies.
                </>
            )}
            </ThemeContext.Consumer>
        )
    }
}

export default Skill;