import { Popup } from 'semantic-ui-react'
import { ThemeContext } from '../theme/theme-context';

export const Poisons=()=> (
    <ThemeContext.Consumer>
    {(theme) => (
        <Popup content="Additional damage equal to 60% of damage dealt at the end of every turn."
        trigger={<span className={`effect ${theme.theme}`}>Poisons</span>} />
    )}
    </ThemeContext.Consumer>
)

export const RemoveDebuffs=()=> (
    <ThemeContext.Consumer>
    {(theme) => (
        <span className={`effect ${theme.theme}`}>Remove Debuffs</span>
    )}
    </ThemeContext.Consumer>
)

export const AttackRelatedStatsIncrease=()=> (
    <ThemeContext.Consumer>
    {(theme) => (
        <Popup content="Attack, Pierce Rate, Crit Chance, and Crit Damage"
        trigger={<span className={`effect ${theme.theme}`}>Attack-related stats</span>} />
    )}
    </ThemeContext.Consumer>
)

export const CritChanceIncrease=()=> (
    <ThemeContext.Consumer>
    {(theme) => (
        <span className={`effect ${theme.theme}`}>Crit Chance</span>
    )}
    </ThemeContext.Consumer>
)

export const CritDamageIncrease=()=> (
    <ThemeContext.Consumer>
    {(theme) => (
        <span className={`effect ${theme.theme}`}>Crit Damage</span>
    )}
    </ThemeContext.Consumer>
)

export const Pierce=()=> (
    <ThemeContext.Consumer>
    {(theme) => (
        <Popup content="3x Pierce Rate Increase."
        trigger={<span className={`effect ${theme.theme}`}>Pierce</span>} />
    )}
    </ThemeContext.Consumer>
)

export const WeakPoint=()=> (
    <ThemeContext.Consumer>
    {(theme) => (
        <Popup content="3x damage against Debuffed enemies."
        trigger={<span className={`effect ${theme.theme}`}>Weak Point</span>} />
    )}
    </ThemeContext.Consumer>
)

export const SecretTechnique=(i: number)=> (
    <ThemeContext.Consumer>
    {(theme) => (
        <Popup content={`+${i}% additional damage per hero skill.`}
        trigger={<span className={`effect ${theme.theme}`}>Secret Technique</span>} />
    )}
    </ThemeContext.Consumer>
)

export const Abyss=(i: number)=> (
    <ThemeContext.Consumer>
    {(theme) => (
        <Popup content={`Inflicts additional damage equal to ${i}% of damage dealt on all enemies at the start of the enemy's turn.`}
        trigger={<span className={`effect ${theme.theme}`}>Abyss</span>} />
    )}
    </ThemeContext.Consumer>
)

export const Wave=(i: number)=> (
    <ThemeContext.Consumer>
    {(theme) => (
        <Popup content={`-${i}% damage dealt for every enemy on the battlefield.`}
        trigger={<span className={`effect ${theme.theme}`}>Wave</span>} />
    )}
    </ThemeContext.Consumer>
)

export const Flood=()=> (
    <ThemeContext.Consumer>
    {(theme) => (
        <Popup content="0.8% additional damage for every percent of remaining HP on self."
        trigger={<span className={`effect ${theme.theme}`}>Flood</span>} />
    )}
    </ThemeContext.Consumer>
)

export const Slash=()=> (
    <ThemeContext.Consumer>
    {(theme) => (
        <Popup content="Additional damage equal to half of the hero's Pierce Rate."
        trigger={<span className={`effect ${theme.theme}`}>Slash</span>} />
    )}
    </ThemeContext.Consumer>
)

export const Frenzy=()=> (
    <ThemeContext.Consumer>
    {(theme) => (
        <Popup content="1% additional damage every hit for every percent of reamining HP on the enemy. 2x Pierce Rate Increase." 
        trigger={<span className={`effect ${theme.theme}`}>Frenzy</span>} />
    )}
    </ThemeContext.Consumer>
)

export const MagicBurst=()=> (
    <ThemeContext.Consumer>
    {(theme) => (
        <Popup content="Ignores 30% of enemy's Crit Resistance and 60% of Crit Defense." 
        trigger={<span className={`effect ${theme.theme}`}>Magic Burst</span>} />
    )}
    </ThemeContext.Consumer>
)

export const SurpressDamageTaken=()=> (
    <ThemeContext.Consumer>
    {(theme) => (
        <Popup content="Damage taken from enemy skills does not exceed 70% of Max HP." 
        trigger={<span className={`effect ${theme.theme}`}>Surpress Damage Tanken</span>} />
    )}
    </ThemeContext.Consumer>
)

export const ShacklesOfPurgatory=()=> (
    <ThemeContext.Consumer>
    {(theme) => (
        <Popup content="Demon allies' damage taken -20%." 
        trigger={<span className={`effect ${theme.theme}`}>Shackles of Purgatory</span>} />
    )}
    </ThemeContext.Consumer>
)

export const TrueMagic=()=> (
    <ThemeContext.Consumer>
    {(theme) => (
        <Popup content="Removes all Debuffs from self. Attack-related stats +50%." 
        trigger={<span className={`effect ${theme.theme}`}>True Magic</span>} />
    )}
    </ThemeContext.Consumer>
)

export const ApplicableAlly=(s: string)=> (
    <ThemeContext.Consumer>
    {(theme) => (
        <Popup content={`${s}`}
        trigger={<span className={`effect ${theme.theme}`}>Applicable ally</span>} />
    )}
    </ThemeContext.Consumer>
)