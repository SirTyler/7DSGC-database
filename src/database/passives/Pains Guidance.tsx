import { ThemeContext } from '../../theme/theme-context'
import { AllStatsIncrease, ApplicableAlly, AttackIncrease, BasicStatsIncrease, PierceRateIncrease, SkillRankIncrease, SourceOfPain } from '../_effects';
import IPassive, { Type } from './_IPassive';

class Passive implements IPassive {
    image = require("../../assets/characters/[Shepherd of Souls] Queen Hel/unique.png");
    name = "Pain's Guidance";
    effects = [
        AttackIncrease(),
        AllStatsIncrease(),
        ApplicableAlly("[Ragnarok], Unknown Race"),
        SourceOfPain()
    ];
    conditions = [
        Type.BATTLE_START,
        Type.ALL
    ]

    getDescription() {
        return (
            <ThemeContext.Consumer>
            {(theme) => (
                <div style={{padding: "5px"}}>
                    <span className={`effect ${theme.theme}`}>If the hero uses a skill</span> or {this.effects[2]} takes damage from a skill during the enemy's turn, the enemy who attacked is afflicted with {this.effects[3]} effects for <span className={`subeffect ${theme.theme}`}>2 turn(s)</span>, equal to the number of {this.effects[2]} who took damage Each {this.effects[3]} effect the enemy has increases the hero's {this.effects[1]} by <span className={`damage ${theme.theme}`}>3%</span> up to <span className={`damage ${theme.theme}`}>24%</span>. The hero's {this.effects[0]} by <span className={`damage ${theme.theme}`}>7%</span> for every {this.effects[2]} participating in battle..
                </div>
            )}
            </ThemeContext.Consumer>
        )
    }
}

export default Passive;