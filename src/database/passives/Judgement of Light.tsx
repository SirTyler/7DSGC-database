import { ThemeContext } from '../../theme/theme-context'
import { BrillianceOfTheSun } from '../_effects';
import IPassive from './_IPassive';

class Passive implements IPassive {
    image = require("../../assets/characters/[The Four Archangles] Mael of Sun/unique.png");
    name = "Judgment of Light";
    effects = [
        BrillianceOfTheSun()
    ];

    getDescription() {
        return (
            <ThemeContext.Consumer>
            {(theme) => (
                <div style={{padding: "5px"}}>
                    For every <span className={`effect ${theme.theme}`}>Goddess race ally</span> participating in the battle, increases all stats of the hero by 7%, and damage dealt by 10%.
                    If all of the participating allies are of Goddess race, applies {this.effects[0]} on all allies.
                </div>
            )}
            </ThemeContext.Consumer>
        )
    }
}

export default Passive;