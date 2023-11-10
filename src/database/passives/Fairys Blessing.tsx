import { ThemeContext } from '../../theme/theme-context'
import { AttackRelatedStatsIncrease, CritDefenseIncrease, DamageDealtIncrease, DefenseRelatedStatsDecrease } from '../_effects';
import IPassive, { Type } from './_IPassive';

class Passive implements IPassive {
    image = require("../../assets/characters/[Fulfilled Promise] Golden Wings Elaine/unique.png");
    name = "Fairy's Blessing";
    effects = [
        CritDefenseIncrease(),
        DamageDealtIncrease(8),
        DefenseRelatedStatsDecrease(),
        AttackRelatedStatsIncrease()
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
                    At the start of battle, increases <span className={`effect ${theme.theme}`}>Fairy allies'</span> {this.effects[0].display} by <span className={`damage ${theme.theme}`}>60%</span> for <span className={`subeffect ${theme.theme}`}>2 turn(s)</span>, then {this.effects[1].display}, up to <span className={`damage ${theme.theme}`}>32%</span>, for every Buff applied to <span className={`effect ${theme.theme}`}>Fairy allies</span>.
                    <br/><br/> At the start of the allies' turn, decreases all enemies' {this.effects[2].display} by <span className={`damage ${theme.theme}`}>20%</span> for <span className={`subeffect ${theme.theme}`}>1 turn(s)</span>, then increases allies' {this.effects[3].display} by <span className={`damage ${theme.theme}`}>5%</span>, up to <span className={`damage ${theme.theme}`}>20%</span>, for every Debuff applied to enemies.
                </div>
            )}
            </ThemeContext.Consumer>
        )
    }
}

export default Passive;