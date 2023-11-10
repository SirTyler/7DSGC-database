import { Popup } from 'semantic-ui-react'
import { ThemeContext } from '../theme/theme-context';

/* Stat Increases */
export const AttackIncrease = () => (
    {
        name: "Attack Increase",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <span className={`effect ${theme.theme}`}>Attack</span>
                )}
            </ThemeContext.Consumer>
        )
    }
)
export const PierceRateIncrease = () => (
    {
        name: "Pierce Rate Increase",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <span className={`effect ${theme.theme}`}>Pierce Rate</span>
                )}
            </ThemeContext.Consumer>
        )
    }
)
export const CritChanceIncrease = () => (
    {
        name: "Crit Chance Increase",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <span className={`effect ${theme.theme}`}>Crit Chance</span>
                )}
            </ThemeContext.Consumer>
        )
    }

)
export const CritDamageIncrease = () => ({
    name: "Crit Damage Increase",
    display: (
        <ThemeContext.Consumer>
            {(theme) => (
                <span className={`effect ${theme.theme}`}>Crit Damage</span>
            )}
        </ThemeContext.Consumer>
    )
}

)
export const CritDefenseIncrease = () => ({
    name: "Crit Defense Increase",
    display: (
        <ThemeContext.Consumer>
            {(theme) => (
                <span className={`effect ${theme.theme}`}>Crit Defense</span>
            )}
        </ThemeContext.Consumer>
    )
}

)
export const DefenseIncrease = () => (
    {
        name: "Defense Increase",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <span className={`effect ${theme.theme}`}>Defense</span>
                )}
            </ThemeContext.Consumer>
        )
    }

)
export const MaxHPIncrease = () => (
    {
        name: "Max HP Increase",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <span className={`effect ${theme.theme}`}>Max HP</span>
                )}
            </ThemeContext.Consumer>
        )
    }

)
export const AttackRelatedStatsIncrease = () => (
    {
        name: "Attack-related Stats Increase",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <Popup content="Attack, Pierce Rate, Crit Chance, and Crit Damage"
                        trigger={<span className={`effect ${theme.theme}`}>Attack-related Stats</span>} />
                )}
            </ThemeContext.Consumer>
        )
    }

)
export const DefenseRelatedStatsIncrease = () => (
    {
        name: "Defense-related Stats Increase",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <Popup content="Defense, Resistance, Crit Resistance, and Crit Defense"
                        trigger={<span className={`effect ${theme.theme}`}>Defense-related Stats</span>} />
                )}
            </ThemeContext.Consumer>
        )
    }
)
export const HPRelatedStatsIncrease = () => (
    {
        name: "HP-related Stats Increase",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <Popup content="Recovery, Regeneration, Lifesteal, and HP"
                        trigger={<span className={`effect ${theme.theme}`}>HP-related Stats</span>} />
                )}
            </ThemeContext.Consumer>
        )
    }
)
export const BasicStatsIncrease = () => (
    {
        name: "Basic Stats Increase",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <Popup content="Attack, Defense, HP"
                        trigger={<span className={`effect ${theme.theme}`}>Basic Stats</span>} />
                )}
            </ThemeContext.Consumer>
        )
    }

)
export const AllStatsIncrease = () => (
    {
        name: "All Stats Increase",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <span className={`effect ${theme.theme}`}>All Stats</span>
                )}
            </ThemeContext.Consumer>
        )
    }
)


/* Stat Decrease */
export const AttackDecrease = () => (
    {
        name: "Attack Decrease",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <span className={`effect ${theme.theme}`}>Attack</span>
                )}
            </ThemeContext.Consumer>
        )
    }
)
export const CritChanceDecrease = () => (
    {
        name: "Crit Chance Decrease",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <span className={`effect ${theme.theme}`}>Crit Chance</span>
                )}
            </ThemeContext.Consumer>
        )
    }
)
export const CritDamageDecrease = () => (
    {
        name: "Crit Damage Decrease",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <span className={`effect ${theme.theme}`}>Crit Damage</span>
                )}
            </ThemeContext.Consumer>
        )
    }
)
export const DefenseDecrease = () => (
    {
        name: "Defense Decrease",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <span className={`effect ${theme.theme}`}>Defense</span>
                )}
            </ThemeContext.Consumer>
        )
    }

)
export const MaxHPDecrease = () => (
    {
        name: "Max HP Decrease",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <span className={`effect ${theme.theme}`}>Max HP</span>
                )}
            </ThemeContext.Consumer>
        )
    }
)
export const AttackRelatedStatsDecrease = () => (
    {
        name: "Attack-related Stats Decrease",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <Popup content="Attack, Pierce Rate, Crit Chance, and Crit Damage"
                        trigger={<span className={`effect ${theme.theme}`}>Attack-related Stats</span>} />
                )}
            </ThemeContext.Consumer>
        )
    }

)
export const DefenseRelatedStatsDecrease = () => (
    {
        name: "Defense-related Stats Decrease",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <Popup content="Defense, Resistance, Crit Resistance, and Crit Defense"
                        trigger={<span className={`effect ${theme.theme}`}>Defense-related Stats</span>} />
                )}
            </ThemeContext.Consumer>
        )
    }

)
export const HPRelatedStatsDecrease = () => (
    {
        name: "HP-related Stats Decrease",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <Popup content="Recovery, Regeneration, Lifesteal, and HP"
                        trigger={<span className={`effect ${theme.theme}`}>HP-related Stats</span>} />
                )}
            </ThemeContext.Consumer>
        )
    }

)
export const AllStatsDecrease = () => (
    {
        name: "All Stats Decrease",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <span className={`effect ${theme.theme}`}>All Stats</span>
                )}
            </ThemeContext.Consumer>
        )
    }

)

/* Damage Related */
export const DamageDealtIncrease = (i: number) => (
    {
        name: "Damage Dealt Increase",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <>
                        <span className={`effect ${theme.theme}`}>Increase damage dealt</span> by <span className={`damage ${theme.theme}`}>{`${i}%`}</span>
                    </>
                )}
            </ThemeContext.Consumer>
        )
    }

)
export const DamageDealtDecrease = (i: number) => (
    {
        name: "Damage Dealt Decrease",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <>
                        <span className={`effect ${theme.theme}`}>Decreases damage dealt</span> by <span className={`damage ${theme.theme}`}>{`${i}%`}</span>
                    </>
                )}
            </ThemeContext.Consumer>
        )
    }

)
export const DamageTakenDecrease = (i: number) => (
    {
        name: "Damage Taken Decrease",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <>
                        <span className={`effect ${theme.theme}`}>Decrease damage taken</span> by <span className={`damage ${theme.theme}`}>{`${i}%`}</span>
                    </>
                )}
            </ThemeContext.Consumer>
        )
    }

)
export const DamageTakenIncrease = (i: number) => (
    {
        name: "Damage Taken Increase",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <>
                        <span className={`effect ${theme.theme}`}>Increase damage taken of all enemies</span> by <span className={`damage ${theme.theme}`}>{`${i}%`}</span>
                    </>
                )}
            </ThemeContext.Consumer>
        )
    }

)
export const UltimateDamageDecrease = (i: number) => (
    {
        name: "Ultimate Damage Decrease",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <>
                        <span className={`effect ${theme.theme}`}>Decrease Ultimate Move damage</span> by <span className={`damage ${theme.theme}`}>{`${i}%`}</span>
                    </>
                )}
            </ThemeContext.Consumer>
        )
    }

)

/* Skill Ranks / Limits */
export const SkillRankIncrease = () => (
    {
        name: "Skill Rank Up",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <span className={`effect ${theme.theme}`}>Increase Skill Ranks</span>
                )}
            </ThemeContext.Consumer>
        )
    }

)
export const SkillRankDecrease = () => (
    {
        name: "Skill Rank Down",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <span className={`effect ${theme.theme}`}>Decrease Skill Ranks</span>
                )}
            </ThemeContext.Consumer>
        )
    }

)
export const Rank1Limit = () => (
    {
        name: "Rank 1 Skill Limit",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <span className={`effect ${theme.theme}`}>Allow the use of only Rank 1 Skills</span>
                )}
            </ThemeContext.Consumer>
        )
    }

)
export const SingleTargetLimit = () => (
    {
        name: "Single-Target Skill Limit",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <span className={`effect ${theme.theme}`}> allows only single-target skills to be used (Includes Ultimate Moves)</span>
                )}
            </ThemeContext.Consumer>
        )
    }

)

/* Ultimate Move Gauge */
export const UltimateGaugeIncrease = (i: number) => (
    {
        name: "Ultimate Gauge Increase",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <span className={`effect ${theme.theme}`}>{`Fills Ultimate Move Gauge by ${i} orb(s)`}</span>
                )}
            </ThemeContext.Consumer>
        )
    }

)
export const UltimateGaugeDecrease = (i: number) => (
    {
        name: "Ultimate Gauge Decrease",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <span className={`effect ${theme.theme}`}>{`Depletes ${i} Ultimate Move Gauge orb(s)`}</span>
                )}
            </ThemeContext.Consumer>
        )
    }

)
export const UltimateGaugeDisable = () => (
    {
        name: "Ultimate Gauge Disable",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <span className={`effect ${theme.theme}`}>Prevents Ultimate Move Gauge(s) from filling up</span>
                )}
            </ThemeContext.Consumer>
        )
    }

)

/* Heal / Removal */
export const RemoveDebuffs = () => (
    {
        name: "Remove Debuffs",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <span className={`effect ${theme.theme}`}>Removes all Debuffs</span>
                )}
            </ThemeContext.Consumer>
        )
    }

)
export const RemoveBuffs = () => (
    {
        name: "Remove Buffs",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <span className={`effect ${theme.theme}`}>Removes all Buffs</span>
                )}
            </ThemeContext.Consumer>
        )
    }

)
export const RemoveStances = () => (
    {
        name: "Cancel Stances",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <span className={`effect ${theme.theme}`}>Cancels Stances</span>
                )}
            </ThemeContext.Consumer>
        )
    }

)
export const Heal = () => (
    {
        name: "Heal",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <span className={`effect ${theme.theme}`}>Restores the HP</span>
                )}
            </ThemeContext.Consumer>
        )
    }

)
export const Lifesteals = () => (
    {
        name: "Lifesteal",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <Popup content="Heals for a portion of damage dealt."
                        trigger={<span className={`effect ${theme.theme}`}>Lifesteals</span>} />
                )}
            </ThemeContext.Consumer>
        )
    }

)

/* Immunity */

/* Status */
export const Shocks = () => (
    {
        name: "Shock",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <Popup content="Additional damage equal to 30% of damage dealt at the end of every turn."
                        trigger={<span className={`effect ${theme.theme}`}>Shocks</span>} />
                )}
            </ThemeContext.Consumer>
        )
    }

)
export const Poisons = () => (
    {
        name: "Poison",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <Popup content="Additional damage equal to 50% of damage dealt at the end of every turn."
                        trigger={<span className={`effect ${theme.theme}`}>Poisons</span>} />
                )}
            </ThemeContext.Consumer>
        )
    }

)
export const Bleeds = () => (
    {
        name: "Bleed",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <Popup content="Additional damage equal to 80% of damage dealt at the end of every turn."
                        trigger={<span className={`effect ${theme.theme}`}>Bleeds</span>} />
                )}
            </ThemeContext.Consumer>
        )
    }

)

/* Effects */
export const Amplify = () => (
    {
        name: "Amplify",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <Popup content="Damage dealt +30% per active Buff on self."
                        trigger={<span className={`effect ${theme.theme}`}>Amplify</span>} />
                )}
            </ThemeContext.Consumer>
        )
    }

)
export const Taunt = () => (
    {
        name: "Taunt",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <Popup content="Directs all attacks to self."
                        trigger={<span className={`effect ${theme.theme}`}>Taunt</span>} />
                )}
            </ThemeContext.Consumer>
        )
    }

)
export const Infects = () => (
    {
        name: "Infect",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <Popup content="Restricts Recovery-related stats."
                        trigger={<span className={`effect ${theme.theme}`}>Infects</span>} />
                )}
            </ThemeContext.Consumer>
        )
    }
)
export const Detonate = () => (
    {
        name: "Detonate",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <Popup content="20% additional damage per orb in target's Ultimate Move Gauge."
                        trigger={<span className={`effect ${theme.theme}`}>Detonate</span>} />
                )}
            </ThemeContext.Consumer>
        )
    }

)
export const Release = () => (
    {
        name: "Release",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <Popup content="Deals additional damage using remaining damage in Shock, Poison, and Bleed Debuffs."
                        trigger={<span className={`effect ${theme.theme}`}>Release</span>} />
                )}
            </ThemeContext.Consumer>
        )
    }

)

export const Pierce = () => (
    {
        name: "Pierce",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <Popup content="3x Pierce Rate Increase."
                        trigger={<span className={`effect ${theme.theme}`}>Pierce</span>} />
                )}
            </ThemeContext.Consumer>
        )
    }

)

export const WeakPoint = () => (
    {
        name: "Weak Point",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <Popup content="3x damage against Debuffed enemies."
                        trigger={<span className={`effect ${theme.theme}`}>Weak Point</span>} />
                )}
            </ThemeContext.Consumer>
        )
    }

)

export const Spike = () => (
    {
        name: "Spike",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <Popup content="2x Crit Damage Increase."
                        trigger={<span className={`effect ${theme.theme}`}>Spike</span>} />
                )}
            </ThemeContext.Consumer>
        )
    }

)

export const SecretTechnique = (i: number) => (
    {
        name: "Secret Technique",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <Popup content={`+${i}% additional damage per hero skill.`}
                        trigger={<span className={`effect ${theme.theme}`}>Secret Technique</span>} />
                )}
            </ThemeContext.Consumer>
        )
    }

)

export const Abyss = (i: number) => (
    {
        name: "Abyss",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <Popup content={`Inflicts additional damage equal to ${i}% of damage dealt on all enemies at the start of the enemy's turn.`}
                        trigger={<span className={`effect ${theme.theme}`}>Abyss</span>} />
                )}
            </ThemeContext.Consumer>
        )
    }

)

export const Wave = (i: number) => (
    {
        name: "Wave",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <Popup content={`-${i}% damage dealt for every enemy on the battlefield.`}
                        trigger={<span className={`effect ${theme.theme}`}>Wave</span>} />
                )}
            </ThemeContext.Consumer>
        )
    }

)

export const Flood = () => (
    {
        name: "Flood",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <Popup content="0.8% additional damage for every percent of remaining HP on self."
                        trigger={<span className={`effect ${theme.theme}`}>Flood</span>} />
                )}
            </ThemeContext.Consumer>
        )
    }

)

export const Slash = () => (
    {
        name: "Slash",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <Popup content="Additional damage equal to half of the hero's Pierce Rate."
                        trigger={<span className={`effect ${theme.theme}`}>Slash</span>} />
                )}
            </ThemeContext.Consumer>
        )
    }

)

export const Frenzy = () => (
    {
        name: "Frenzy",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <Popup content="1% additional damage every hit for every percent of reamining HP on the enemy. 2x Pierce Rate Increase."
                        trigger={<span className={`effect ${theme.theme}`}>Frenzy</span>} />
                )}
            </ThemeContext.Consumer>
        )
    }

)

export const MagicBurst = () => (
    {
        name: "Magic Burst",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <Popup content="Ignores 30% of enemy's Crit Resistance and 60% of Crit Defense."
                        trigger={<span className={`effect ${theme.theme}`}>Magic Burst</span>} />
                )}
            </ThemeContext.Consumer>
        )
    }

)

export const SurpressDamageTaken = () => (
    {
        name: "Surpress Damage Taken",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <Popup content="Damage taken from enemy skills does not exceed 70% of Max HP."
                        trigger={<span className={`effect ${theme.theme}`}>Surpress Damage Tanken</span>} />
                )}
            </ThemeContext.Consumer>
        )
    }

)

export const ShacklesOfPurgatory = () => (
    {
        name: "Shackles of Purgatory",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <Popup content="Demon allies' damage taken -20%."
                        trigger={<span className={`effect ${theme.theme}`}>Shackles of Purgatory</span>} />
                )}
            </ThemeContext.Consumer>
        )
    }

)

export const TrueMagic = () => (
    {
        name: "True Magic",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <Popup content="Removes all Debuffs from self. Attack-related stats +50%."
                        trigger={<span className={`effect ${theme.theme}`}>True Magic</span>} />
                )}
            </ThemeContext.Consumer>
        )
    }

)

export const BrillianceOfTheSun = () => (
    {
        name: "Brilliance of the Sun",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <Popup content="Damage taken -20%, unaffected by stats decrease effects in PVP."
                        trigger={<span className={`effect ${theme.theme}`}>Brilliance of the Sun</span>} />
                )}
            </ThemeContext.Consumer>
        )
    }

)

export const Conflagration = () => (
    {
        name: "Conflagration",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <Popup content="For every Brilliance of Sun on allies, increases damage by 30%."
                        trigger={<span className={`effect ${theme.theme}`}>Conflagration</span>} />
                )}
            </ThemeContext.Consumer>
        )
    }

)

export const MarkOfBlackDot = () => (
    {
        name: "Mark of Black Dots",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <Popup content="Damage dealt -20% (stacks up to 3 times)."
                        trigger={<span className={`effect ${theme.theme}`}>Mark of Black Dot</span>} />
                )}
            </ThemeContext.Consumer>
        )
    }

)

export const BlackDotBurst = (i: number) => (
    {
        name: "Black Dot Burst",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <Popup content={`For every Mark of Black Dot on the enemy, +${i}% damage dealt.`}
                        trigger={<span className={`effect ${theme.theme}`}>Black Dot Burst</span>} />
                )}
            </ThemeContext.Consumer>
        )
    }

)


export const Quell = (i: number) => (
    {
        name: "Quell",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <Popup content={`Damage dealt +${i}% per active Stance on self.`}
                        trigger={<span className={`effect ${theme.theme}`}>Quell</span>} />
                )}
            </ThemeContext.Consumer>
        )
    }

)

export const AbsoluteDefense = () => (
    {
        name: "Absolute Defense",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <Popup content="Taunts enemies and decreases damage taken by 50%."
                        trigger={<span className={`effect ${theme.theme}`}>Absolute Defense</span>} />
                )}
            </ThemeContext.Consumer>
        )
    }

)
export const Verdict = () => (
    {
        name: "Verdict",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <Popup content="+40% damage for every Deathbrand on target."
                        trigger={<span className={`effect ${theme.theme}`}>Verdict</span>} />
                )}
            </ThemeContext.Consumer>
        )
    }

)
export const Deathbrand = () => (
    {
        name: "Deathbrand",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <Popup content="Decreases damage dealt and all-target Ultimate Move final damage in PVP (amount decreased varies based on Ultimate Move level, stacks up to 4 times)."
                        trigger={<span className={`effect ${theme.theme}`}>Deathbrand</span>} />
                )}
            </ThemeContext.Consumer>
        )
    }

)
export const DeathSentence = () => (
    {
        name: "Death Sentence",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <Popup content="Inflicts additional damage equal to 100% of remaining HP at end of the turn, also removes Deathbrand when removed."
                        trigger={<span className={`effect ${theme.theme}`}>Death Sentence</span>} />
                )}
            </ThemeContext.Consumer>
        )
    }

)
export const Exploit = () => (
    {
        name: "Exploit",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <Popup content="2x Damage Dealt and 2x Crit Damage against targets suffering Bleed."
                        trigger={<span className={`effect ${theme.theme}`}>Exploit</span>} />
                )}
            </ThemeContext.Consumer>
        )
    }

)
export const Berserk = () => (
    {
        name: "Berserk",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <Popup content="Attack-related stats +50%, Defense-related stats -30%. Restores 40% Max HP when removed."
                        trigger={<span className={`effect ${theme.theme}`}>Exploit</span>} />
                )}
            </ThemeContext.Consumer>
        )
    }

)
export const Pain = () => (
    {
        name: "Pain",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <Popup content="Attack-related stats +12% for every Source of Pain on the target."
                        trigger={<span className={`effect ${theme.theme}`}>Pain</span>} />
                )}
            </ThemeContext.Consumer>
        )
    }

)
export const SourceOfPain = () => (
    {
        name: "Source of Pain",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <Popup content="5% damage taken, additional damage equal to 10% of remaining HP at the end of the turn. (Stacks up to 5 times)"
                        trigger={<span className={`effect ${theme.theme}`}>Source of Pain</span>} />
                )}
            </ThemeContext.Consumer>
        )
    }

)
export const UndyingShepherd = (i: number) => (
    {
        name: "Undying Shepherd",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <Popup content={`The hero's immunity to Source of Pain is removed and revives with 1 HP when taking fatal damage by consuming all orbs in the Ultimate Move Gauge, removing the Undying shepherd effect. (Does not revive when dying from reflected damage, stacks ${i} times.).`}
                        trigger={<span className={`effect ${theme.theme}`}>Undying Shepherd</span>} />
                )}
            </ThemeContext.Consumer>
        )
    }

)



export const ApplicableAlly = (s: string) => (
    {
        name: "Applicable Ally",
        display: (
            <ThemeContext.Consumer>
                {(theme) => (
                    <Popup content={`${s}`}
                        trigger={<span className={`effect ${theme.theme}`}>Applicable ally</span>} />
                )}
            </ThemeContext.Consumer>
        )
    }

)