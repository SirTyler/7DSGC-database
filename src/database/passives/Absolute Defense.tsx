import { ThemeContext } from '../../theme/theme-context'
import { AbsoluteDefense, AttackRelatedStatsIncrease } from '../_effects';
import IPassive, { Type } from './_IPassive';

class Passive implements IPassive {
    image = require("../../assets/characters/[Pure-White Devil] Albedo/unique.png");
    name = "Absolute Defense";
    effects = [
        AbsoluteDefense(),
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
                    Applies {this.effects[0]} on the hero at the start of battle for <span className={`subeffect ${theme.theme}`}> 1 turn. </span>
                    <span className={`effect ${theme.theme}`}>When assuming a Stance</span>, the hero's basic stats increase by <span className={`damage ${theme.theme}`}>20%</span>. 
                    <span className={`effect ${theme.theme}`}>When hit with a skill during the enemy's turn</span>, the hero's {this.effects[1]} increase by <span className={`damage ${theme.theme}`}>10%</span>, up to <span className={`subeffect ${theme.theme}`}>5 times</span>, for <span className={`subeffect ${theme.theme}`}>3 turns</span>.
                    <span className={`effect ${theme.theme}`}>If the hero does not take damage</span>, all enemies' damage taken increases by <span className={`damage ${theme.theme}`}>40%</span> for <span className={`subeffect ${theme.theme}`}>1 turn</span> at the start of the allies' turn.
                    In addition, when the hero's <span className={`effect ${theme.theme}`}>Stance effect is removed</span>, the Attack-related stats of <span className={`effect ${theme.theme}`}>all Unknown race allies</span> increase by <span className={`damage ${theme.theme}`}>20%</span> for <span className={`subeffect ${theme.theme}`}>2 turns</span>. The hero's basic stats increase by <span className={`damage ${theme.theme}`}>7%</span> for <span className={`effect ${theme.theme}`}>every Unknown race ally</span> participating in battle.
                </div>
            )}
            </ThemeContext.Consumer>
        )
    }
}

export default Passive;