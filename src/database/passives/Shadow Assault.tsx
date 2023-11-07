import { ThemeContext } from '../../theme/theme-context'
import IPassive from './_IPassive';

class Passive implements IPassive {
    image = require("../../assets/characters/[Full Moon Shadow] Iron Blood Mono/unique.png");
    name = "Shadow Assault";
    effects = [];

    getDescription() {
        return (
            <ThemeContext.Consumer>
            {(theme) => (
                <div style={{padding: "5px"}}>
                    Increases <span className={`effect ${theme.theme}`}>{`<The Seven Catastrophes> allies`}</span> basic stats by <span className={`damage ${theme.theme}`}>6%</span> for each <span className={`effect ${theme.theme}`}>{`<The Seven Catastrophes> ally`}</span> on the battlefield in <span className={`subeffect ${theme.theme}`}>PVP</span>.
                    Increases the hero's damage dealt by their Crit Chance <span className={`effect ${theme.theme}`}>at the start of battle</span>.
                </div>
            )}
            </ThemeContext.Consumer>
        )
    }
}

export default Passive;