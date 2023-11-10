import { ThemeContext } from '../../theme/theme-context'
import { ShacklesOfPurgatory, TrueMagic } from '../_effects';
import IPassive, { Type } from './_IPassive';

class Passive implements IPassive {
    image = require("../../assets/characters/[Cursed Shackles] Purgatory Meliodas/unique.png");
    name = "Curse of Purgatory";
    effects = [
        ShacklesOfPurgatory(),
        TrueMagic(),
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
                    Applies <span className={`subeffect ${theme.theme}`}> 3 </span> {this.effects[0].display} effect(s) on self at the start of the battle. 
                    If an ally takes damage from an enemy's skill use during their turn, or if the hero uses a skill, <span className={`subeffect ${theme.theme}`}> 1 </span> {this.effects[0].display} effect will be removed. 
                    Once the effects are completely removed, the hero applies {this.effects[1].display} on self. {this.effects[1].display}  is removed when the hero uses a skill. 
                    When True Magic is removed, the hero once again applies <span className={`subeffect ${theme.theme}`}> 3 </span> {this.effects[0].display} effect(s) on self, then increases their damage dealt by <span className={`damage ${theme.theme}`}> 40% </span> when attacking 
                    <span className={`effect ${theme.theme}`}> enemies that are either in a Stance or affected by a Debuff, </span>and finally, 
                    applies an effect at the end of the enemy's turn which removes <span className={`subeffect ${theme.theme}`}> 1 </span> orb from Ultimate Move Guage every turn for <span className={`subeffect ${theme.theme}`}> 2 turn(s) </span> on 
                    <span className={`effect ${theme.theme}`}> enemies who have not used a skill </span>during their turn.
                </div>
            )}
            </ThemeContext.Consumer>
        )
    }
}

export default Passive;