import { ThemeContext } from '../../theme/theme-context'
import { AttackRelatedStatsIncrease } from '../_effects';
import IPassive from './_IPassive';

class Passive implements IPassive {
    image = require("../../assets/characters/[Spellbinding Queen] Goddess of Beauty Freyja/unique.png");
    name = "Kneel Before Me";
    effects = [
        AttackRelatedStatsIncrease()
    ];

    getDescription() {
        return (
            <ThemeContext.Consumer>
            {(theme) => (
                <div style={{padding: "5px"}}>
                    Increases the hero's {this.effects[0]} by <span className={`damage ${theme.theme}`}> 7% </span> for every ally on the battlefield with the <span className={`effect ${theme.theme}`}>{`<Ragnarok>`} characteristic</span>.
                    Increases allies' Pierce Rate by <span className={`damage ${theme.theme}`}> 4% </span> for every Debuff applied to enemies, up to <span className={`damage ${theme.theme}`}> 5 </span> times.
                </div>
            )}
            </ThemeContext.Consumer>
        )
    }
}

export default Passive;