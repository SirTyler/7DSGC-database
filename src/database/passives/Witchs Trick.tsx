import { ThemeContext } from '../../theme/theme-context'
import { BasicStatsIncrease, PierceRateIncrease, SkillRankIncrease } from '../_effects';
import IPassive from './_IPassive';

class Passive implements IPassive {
    image = require("../../assets/characters/[Witch of the Snow] Truth Seeker Merlin/unique.png");
    name = "Witch's Trick";
    effects = [
        BasicStatsIncrease(),
        PierceRateIncrease(),
        SkillRankIncrease()
    ];

    getDescription() {
        return (
            <ThemeContext.Consumer>
            {(theme) => (
                <div style={{padding: "5px"}}>
                    Increases <span className={`effect ${theme.theme}`}>Unknown race allies'</span> {this.effects[0]} by <span className={`damage ${theme.theme}`}>5%</span> and the hero's {this.effects[1]} by <span className={`damage ${theme.theme}`}>20%</span> for every <span className={`effect ${theme.theme}`}>Unknown race ally</span> participating in battle. If allies participating in battle are all <span className={`effect ${theme.theme}`}>Unknown race allies</span> at the start of the allies' turn, the hero {this.effects[2]} of all skills, and the hero's {this.effects[1]} increases by <span className={`damage ${theme.theme}`}>80%</span> for <span className={`subeffect ${theme.theme}`}>2 turn(s).</span> <span className={`alert ${theme.theme}`}>(Limit Once)</span>.
                </div>
            )}
            </ThemeContext.Consumer>
        )
    }
}

export default Passive;