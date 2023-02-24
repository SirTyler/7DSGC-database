import { Popup } from 'semantic-ui-react'
import { ThemeContext } from '../theme/theme-context';

/* Stat Increases */
export const AttackIncrease=()=> (
    <ThemeContext.Consumer>
    {(theme) => (
        <span className={`effect ${theme.theme}`}>Attack</span>
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
export const DefenseIncrease=()=> (
    <ThemeContext.Consumer>
    {(theme) => (
        <span className={`effect ${theme.theme}`}>Defense</span>
    )}
    </ThemeContext.Consumer>
)
export const MaxHPIncrease=()=> (
    <ThemeContext.Consumer>
    {(theme) => (
        <span className={`effect ${theme.theme}`}>Max HP</span>
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
export const DefenseRelatedStatsIncrease=()=> (
    <ThemeContext.Consumer>
    {(theme) => (
        <Popup content="Defense, Resistance, Crit Resistance, and Crit Defense"
        trigger={<span className={`effect ${theme.theme}`}>Defense-related stats</span>} />
    )}
    </ThemeContext.Consumer>
)
export const HPRelatedStatsIncrease=()=> (
    <ThemeContext.Consumer>
    {(theme) => (
        <Popup content="Recovery, Regeneration, Lifesteal, and HP"
        trigger={<span className={`effect ${theme.theme}`}>HP-related stats</span>} />
    )}
    </ThemeContext.Consumer>
)
export const BasicStatsIncrease=()=> (
    <ThemeContext.Consumer>
    {(theme) => (
        <Popup content="Attack, Defense, HP"
        trigger={<span className={`effect ${theme.theme}`}>Basic stats</span>} />
    )}
    </ThemeContext.Consumer>
)
export const AllStatsIncrease=()=> (
    <ThemeContext.Consumer>
    {(theme) => (
        <span className={`effect ${theme.theme}`}>All Stats</span>
    )}
    </ThemeContext.Consumer>
)

/* Stat Decrease */
export const AttackDecrease=()=> (
    <ThemeContext.Consumer>
    {(theme) => (
        <span className={`effect ${theme.theme}`}>Attack</span>
    )}
    </ThemeContext.Consumer>
)
export const CritChanceDecrease=()=> (
    <ThemeContext.Consumer>
    {(theme) => (
        <span className={`effect ${theme.theme}`}>Crit Chance</span>
    )}
    </ThemeContext.Consumer>
)
export const DefenseDecrease=()=> (
    <ThemeContext.Consumer>
    {(theme) => (
        <span className={`effect ${theme.theme}`}>Defense</span>
    )}
    </ThemeContext.Consumer>
)
export const MaxHPDecrease=()=> (
    <ThemeContext.Consumer>
    {(theme) => (
        <span className={`effect ${theme.theme}`}>Max HP</span>
    )}
    </ThemeContext.Consumer>
)
export const AttackRelatedStatsDecrease=()=> (
    <ThemeContext.Consumer>
    {(theme) => (
        <Popup content="Attack, Pierce Rate, Crit Chance, and Crit Damage"
        trigger={<span className={`effect ${theme.theme}`}>Attack-related stats</span>} />
    )}
    </ThemeContext.Consumer>
)
export const DefenseRelatedStatsDecrease=()=> (
    <ThemeContext.Consumer>
    {(theme) => (
        <Popup content="Defense, Resistance, Crit Resistance, and Crit Defense"
        trigger={<span className={`effect ${theme.theme}`}>Defense-related stats</span>} />
    )}
    </ThemeContext.Consumer>
)
export const HPRelatedStatsDecrease=()=> (
    <ThemeContext.Consumer>
    {(theme) => (
        <Popup content="Recovery, Regeneration, Lifesteal, and HP"
        trigger={<span className={`effect ${theme.theme}`}>HP-related stats</span>} />
    )}
    </ThemeContext.Consumer>
)
export const AllStatsDecrease=()=> (
    <ThemeContext.Consumer>
    {(theme) => (
        <span className={`effect ${theme.theme}`}>All Stats</span>
    )}
    </ThemeContext.Consumer>
)

/* Damage Related */
export const DamageDealtIncrease=(i: number)=> (
    <ThemeContext.Consumer>
    {(theme) => (
        <>
            <span className={`effect ${theme.theme}`}>Increase damage dealt</span> by <span className={`effect ${theme.theme}`}>{`${i}%`}</span>
        </>
    )}
    </ThemeContext.Consumer>
)
export const DamageTakenDecrease=(i: number)=> (
    <ThemeContext.Consumer>
    {(theme) => (
        <>
            <span className={`effect ${theme.theme}`}>Decrease damage taken</span> by <span className={`effect ${theme.theme}`}>{`${i}%`}</span>
        </>
    )}
    </ThemeContext.Consumer>
)
export const UltimateDamageDecrease=(i: number)=> (
    <ThemeContext.Consumer>
    {(theme) => (
        <>
            <span className={`effect ${theme.theme}`}>Decrease Ultimate Move damage</span> by <span className={`effect ${theme.theme}`}>{`${i}%`}</span>
        </>
    )}
    </ThemeContext.Consumer>
)

/* Skill Ranks */
export const SkillRankIncrease=()=> (
    <ThemeContext.Consumer>
    {(theme) => (
        <span className={`effect ${theme.theme}`}>Increase Skill Ranks</span>
    )}
    </ThemeContext.Consumer>
)
export const SkillRankDecrease=()=> (
    <ThemeContext.Consumer>
    {(theme) => (
        <span className={`effect ${theme.theme}`}>Decrease Skill Ranks</span>
    )}
    </ThemeContext.Consumer>
)

/* Ultimate Move Gauge */
export const UltimateGaugeIncrease=(i: number)=> (
    <ThemeContext.Consumer>
    {(theme) => (
        <span className={`effect ${theme.theme}`}>{`Fills Ultimate Move Gauge by ${i} orb(s)`}</span>
    )}
    </ThemeContext.Consumer>
)
export const UltimateGaugeDecrease=(i: number)=> (
    <ThemeContext.Consumer>
    {(theme) => (
        <span className={`effect ${theme.theme}`}>{`Depletes ${i} Ultimate Move Gauge orb(s)`}</span>
    )}
    </ThemeContext.Consumer>
)
export const UltimateGaugeDisable=()=> (
    <ThemeContext.Consumer>
    {(theme) => (
        <span className={`effect ${theme.theme}`}>Prevents Ultimate Move Gauge(s) from filling up</span>
    )}
    </ThemeContext.Consumer>
)

/* Heal / Removal */
export const RemoveDebuffs=()=> (
    <ThemeContext.Consumer>
    {(theme) => (
        <span className={`effect ${theme.theme}`}>Removes Debuffs</span>
    )}
    </ThemeContext.Consumer>
)
export const RemoveBuffs=()=> (
    <ThemeContext.Consumer>
    {(theme) => (
        <span className={`effect ${theme.theme}`}>Removes Buffs</span>
    )}
    </ThemeContext.Consumer>
)
export const RemoveStances=()=> (
    <ThemeContext.Consumer>
    {(theme) => (
        <span className={`effect ${theme.theme}`}>Cancels Stances</span>
    )}
    </ThemeContext.Consumer>
)
export const Heal=()=> (
    <ThemeContext.Consumer>
    {(theme) => (
        <span className={`effect ${theme.theme}`}>Restores the HP</span>
    )}
    </ThemeContext.Consumer>
)

/* Immunity */

export const Poisons=()=> (
    <ThemeContext.Consumer>
    {(theme) => (
        <Popup content="Additional damage equal to 60% of damage dealt at the end of every turn."
        trigger={<span className={`effect ${theme.theme}`}>Poisons</span>} />
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

export const Spike=()=> (
    <ThemeContext.Consumer>
    {(theme) => (
        <Popup content="2x Crit Damage Increase."
        trigger={<span className={`effect ${theme.theme}`}>Spike</span>} />
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

export const BrillianceOfTheSun=()=> (
    <ThemeContext.Consumer>
    {(theme) => (
        <Popup content="Damage taken -20%, unaffected by stats decrease effects in PVP." 
        trigger={<span className={`effect ${theme.theme}`}>Brilliance of the Sun</span>} />
    )}
    </ThemeContext.Consumer>
)

export const Conflagration=()=> (
    <ThemeContext.Consumer>
    {(theme) => (
        <Popup content="For every Brilliance of Sun on allies, increases damage by 30%." 
        trigger={<span className={`effect ${theme.theme}`}>Conflagration</span>} />
    )}
    </ThemeContext.Consumer>
)

export const MarkOfBlackDot=()=> (
    <ThemeContext.Consumer>
    {(theme) => (
        <Popup content="Damage dealt -20% (stacks up to 3 times)." 
        trigger={<span className={`effect ${theme.theme}`}>Mark of Black Dot</span>} />
    )}
    </ThemeContext.Consumer>
)

export const BlackDotBurst=(i: number)=> (
    <ThemeContext.Consumer>
    {(theme) => (
        <Popup content={`For every Mark of Black Dot on the enemy, +${i}% damage dealt.`} 
        trigger={<span className={`effect ${theme.theme}`}>Black Dot Burst</span>} />
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