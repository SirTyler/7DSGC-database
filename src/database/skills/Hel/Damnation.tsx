import { ThemeContext } from "../../../theme/theme-context";
import { DamageDealtIncrease, DamageTakenIncrease, UndyingShepherd } from "../../_effects";
import ISkill, { IRank, Type } from "../_ISkill";

class Skill implements ISkill {
    image = require("../../../assets/characters/[Shepherd of Souls] Queen Hel/ultimate.png");
    name = "Damnation"
    type = Type.Ultimate

    ranks = [
        new IRank("ULTIMATE", 500.0, [DamageDealtIncrease(10), DamageTakenIncrease(10), UndyingShepherd(1)], [2, 1]),
        new IRank("ULTIMATE", 550.0, [DamageDealtIncrease(15), DamageTakenIncrease(15), UndyingShepherd(1)], [2, 1]),
        new IRank("ULTIMATE", 600.0, [DamageDealtIncrease(20), DamageTakenIncrease(20), UndyingShepherd(1)], [2, 1]),
        new IRank("ULTIMATE", 650.0, [DamageDealtIncrease(30), DamageTakenIncrease(30), UndyingShepherd(2)], [2, 2]),
        new IRank("ULTIMATE", 700.0, [DamageDealtIncrease(40), DamageTakenIncrease(40), UndyingShepherd(2)], [2, 2]),
        new IRank("ULTIMATE", 750.0, [DamageDealtIncrease(50), DamageTakenIncrease(50), UndyingShepherd(3)], [2, 3])
    ];

    getDescription(rankIndex: number) {
        return (
            <ThemeContext.Consumer>
            {(theme) => (
                <>
                    {this.ranks[rankIndex].effect[0]} and {this.ranks[rankIndex].effect[1]} for <span className={`subeffect ${theme.theme}`}> {this.ranks[rankIndex].extra} turn(s)</span>, then inflicts damage equal to <span className={`damage ${theme.theme}`}> {this.ranks[rankIndex].modifier}% </span> of Attack.
                    If the hero is participating in battle and a <span className={`subeffect ${theme.theme}`}>[Ragnarok]</span> or <span className={`subeffect ${theme.theme}`}>Unknown race ally</span> dies, {this.ranks[rankIndex].effect[2]} is applied to the hero stacking up to <span className={`subeffect ${theme.theme}`}>{this.ranks[rankIndex].extra[1]}</span> times.
                </>
            )}
            </ThemeContext.Consumer>
        )
    }
}

export default Skill;