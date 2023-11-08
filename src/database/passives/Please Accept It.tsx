import { ThemeContext } from '../../theme/theme-context'
import { ApplicableAlly, AttackRelatedStatsIncrease } from '../_effects';
import IPassive, { Type } from './_IPassive';

class Passive implements IPassive {
    image = require("../../assets/characters/[Sweet Jelly] New Wings King/unique.png");
    name = "Please Accept It";
    effects = [
        AttackRelatedStatsIncrease(),
        ApplicableAlly("<The Seven Deadly Sins> with the Strength, HP or Speed Attribute")
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
                    For each <span className={`effect ${theme.theme}`}>Fairy ally</span> on the battlefield, increases the hero's {this.effects[0]} by <span className={`damage ${theme.theme}`}>10%</span> and damage by <span className={`damage ${theme.theme}`}>10%</span>.
                    For each {this.effects[1]}, increase <span className={`effect ${theme.theme}`}>those allies'</span> basic stats by <span className={`damage ${theme.theme}`}>8%</span>.
                    Increase the hero's damage dealt by <span className={`damage ${theme.theme}`}>30%</span> when attacking <span className={`effect ${theme.theme}`}>Debuffed enemies</span>.
                </div>
            )}
            </ThemeContext.Consumer>
        )
    }
}

export default Passive;