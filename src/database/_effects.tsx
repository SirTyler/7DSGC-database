import { Popup } from 'semantic-ui-react'
import { ThemeContext } from '../theme/theme-context';

export const Slash=()=> (
    <ThemeContext.Consumer>
    {(theme) => (
        <Popup content="Additional damage equal to half of the hero's Pierce Rate"
        trigger={<span className={`effect ${theme.theme}`}>Slash</span>} />
    )}
    </ThemeContext.Consumer>
)

export const Frenzy=()=> (
    <ThemeContext.Consumer>
    {(theme) => (
        <Popup content="1% additional damage every hit for every percent of reamining HP on the enemy. 2x Pierce Rate Increase" 
        trigger={<span className={`effect ${theme.theme}`}>Frenzy</span>} />
    )}
    </ThemeContext.Consumer>
)

export const MagicBurst=()=> (
    <ThemeContext.Consumer>
    {(theme) => (
        <Popup content="Ignores 30% of enemy's Crit Resistance and 60% of Crit Defense" 
        trigger={<span className={`effect ${theme.theme}`}>Magic Burst</span>} />
    )}
    </ThemeContext.Consumer>
)

export const SurpressDamageTaken=()=> (
    <ThemeContext.Consumer>
    {(theme) => (
        <Popup content="Damage taken from enemy skills does not exceed 70% of Max HP" 
        trigger={<span className={`effect ${theme.theme}`}>Surpress Damage Tanken</span>} />
    )}
    </ThemeContext.Consumer>
)

export const ShacklesOfPurgatory=()=> (
    <ThemeContext.Consumer>
    {(theme) => (
        <Popup content="Demon allies' damage taken -20%" 
        trigger={<span className={`effect ${theme.theme}`}>Shackles of Purgatory</span>} />
    )}
    </ThemeContext.Consumer>
)

export const TrueMagic=()=> (
    <ThemeContext.Consumer>
    {(theme) => (
        <Popup content="Removes all Debuffs from self. Attack-related stats +50%" 
        trigger={<span className={`effect ${theme.theme}`}>True Magic</span>} />
    )}
    </ThemeContext.Consumer>
)