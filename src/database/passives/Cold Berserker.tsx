import { ThemeContext } from '../../theme/theme-context'
import { MaxHPIncrease, RemoveDebuffs } from '../_effects';
import IPassive, { Type } from './_IPassive';

class Passive implements IPassive {
    image = require("../../assets/characters/[Guardian of the Glacier] Cocytus/unique.png");
    name = "Cold Berserker";
    effects = [
        RemoveDebuffs(),
        MaxHPIncrease()
    ];
    conditions = [
        Type.EXCEPT_PVP,
        Type.EXCEPT_DEMONICBEAST
    ];

    getDescription() {
        return (
            <ThemeContext.Consumer>
            {(theme) => (
                <div style={{padding: "5px"}}>
                    In <span className={`subeffect ${theme.theme}`}>PVE</span>, when the hero <span className={`effect ${theme.theme}`}>uses a skill and deals damage</span>, {this.effects[0].display} on allies and for <span className={`subeffect ${theme.theme}`}>3 turns</span>, <span className={`effect ${theme.theme}`}>for every debuff removed</span>, increases {this.effects[1].display} by <span className={`damage ${theme.theme}`}>8%</span>, up to <span className={`subeffect ${theme.theme}`}>5 times</span>.
                </div>
            )}
            </ThemeContext.Consumer>
        )
    }
}

export default Passive;