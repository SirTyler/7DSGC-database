import { ThemeContext } from '../../theme/theme-context'
import { AbsoluteDefense, AttackRelatedStatsIncrease, BasicStatsIncrease, DeathSentence, Deathbrand } from '../_effects';
import IPassive from './_IPassive';

class Passive implements IPassive {
    image = require("../../assets/characters/[Guardian of the Glacier] Cocytus/unique.png");
    name = "Cold Berserker";
    effects = [];

    getDescription() {
        return (
            <ThemeContext.Consumer>
            {(theme) => (
                <div style={{padding: "5px"}}>
                    In <span className={`subeffect ${theme.theme}`}>PVE</span>, when the hero <span className={`effect ${theme.theme}`}>uses a skill and deals damage</span>, removes all debuffs on allies and for <span className={`subeffect ${theme.theme}`}>3 turns</span>, <span className={`effect ${theme.theme}`}>for every debuff removed</span>, increases HP by <span className={`damage ${theme.theme}`}>8%</span>, up to <span className={`subeffect ${theme.theme}`}>5 times</span>.
                </div>
            )}
            </ThemeContext.Consumer>
        )
    }
}

export default Passive;