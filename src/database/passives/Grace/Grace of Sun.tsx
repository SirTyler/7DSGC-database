import { ThemeContext } from '../../../theme/theme-context'
import { DamageDealtIncrease } from '../../_effects';
import IPassive from '../_IPassive';

class Passive implements IPassive {
    image = require("../../../assets/characters/[The Four Archangles] Mael of Sunshine/grace.png");
    name = "Grace of Sun";
    effects = [
        DamageDealtIncrease(20.0)
    ];

    getDescription() {
        return (
            <ThemeContext.Consumer>
            {(theme) => (
                <div style={{padding: "5px"}}>
                    {this.effects[0]}.
                </div>
            )}
            </ThemeContext.Consumer>
        )
    }
}

export default Passive;