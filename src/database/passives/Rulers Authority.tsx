import { ThemeContext } from '../../theme/theme-context'
import { BasicStatsIncrease, DeathSentence, Deathbrand } from '../_effects';
import IPassive, { Type } from './_IPassive';

class Passive implements IPassive {
    image = require("../../assets/characters/[Ruler of Nazarick] Ainz Ooal Gown/unique.png");
    name = "Ruler's Authority";
    effects = [
        BasicStatsIncrease(),
        Deathbrand(),
        DeathSentence()
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
                    Increases the Hero's {this.effects[0].display} by <span className={`damage ${theme.theme}`}>10%</span> for every <span className={`effect ${theme.theme}`}>Unknown race ally</span> participating in battle. When an <span className={`effect ${theme.theme}`}>Unknown race ally</span> uses a skill on an enemy, the target is afflicted with a {this.effects[1].display}. When the hero inflicts damage on an enemy with <span className={`subeffect ${theme.theme}`}>4</span> {this.effects[1].display} effects using a single-target attack in <span className={`subeffect ${theme.theme}`}>PVP</span>, they are afflicted with {this.effects[2].display}, which activates after <span className={`subeffect ${theme.theme}`}>1 turn</span>.
                </div>
            )}
            </ThemeContext.Consumer>
        )
    }
}

export default Passive;