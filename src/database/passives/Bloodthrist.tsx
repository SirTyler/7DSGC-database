import { ThemeContext } from '../../theme/theme-context'
import { BasicStatsIncrease, Berserk, Bleeds, HPRelatedStatsIncrease } from '../_effects';
import IPassive from './_IPassive';

class Passive implements IPassive {
    image = require("../../assets/characters/[Bloody Valkyrie] Shalltear Bloodfallen/unique.png");
    name = "Bloodthrist";
    effects = [
        BasicStatsIncrease(),
        HPRelatedStatsIncrease(),
        Berserk(),
        Bleeds()
    ];

    getDescription() {
        return (
            <ThemeContext.Consumer>
            {(theme) => (
                <div style={{padding: "5px"}}>
                    Increases the Hero's {this.effects[0]} by <span className={`damage ${theme.theme}`}>7%</span> for every <span className={`effect ${theme.theme}`}>Unknown ally</span> in battle. <span className={`effect ${theme.theme}`}>When the hero deals damage</span>, or if an <span className={`effect ${theme.theme}`}>ally takes damage</span> from a skill during the enemy's turn, the hero's {this.effects[1]} increase by <span className={`damage ${theme.theme}`}>7%</span>, up to <span className={`subeffect ${theme.theme}`}>3 times</span>. If there are <span className={`subeffect ${theme.theme}`}>3</span> of this effect at the start of the allies' turn, they are removed and the hero gains the {this.effects[2]} effect for <span className={`subeffect ${theme.theme}`}>1 turn</span>. In addition, targets {this.effects[3]} for <span className={`subeffect ${theme.theme}`}>2 turns</span> when the hero inflicts damage using an <span className={`effect ${theme.theme}`}>all-target Attack Skill</span>.
                </div>
            )}
            </ThemeContext.Consumer>
        )
    }
}

export default Passive;