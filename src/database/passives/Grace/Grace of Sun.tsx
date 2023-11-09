import { ThemeContext } from '../../../theme/theme-context'
import { DamageDealtIncrease } from '../../_effects';
import IPassive, { Type } from '../_IPassive';

class Passive implements IPassive {
    image = require("../../../assets/characters/[The Four Archangels] Mael of Sunshine/grace.png");
    name = "Grace of Sun";
    effects = [
        DamageDealtIncrease(20.0)
    ];
    conditions = [
        Type.BATTLE_START,
        Type.ALL
    ];

    getDescription() {
        return (
            <ThemeContext.Consumer>
            {(theme) => (
                <div style={{padding: "5px"}}>
                    {this.effects[0].display}.
                </div>
            )}
            </ThemeContext.Consumer>
        )
    }
}

export default Passive;