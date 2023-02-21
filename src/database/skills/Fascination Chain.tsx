import { Pierce } from "../_effects";
import { ThemeContext } from '../../theme/theme-context'

export const image = require("../../assets/characters/[Spellbinding Queen] Goddess of Beauty Freyja/skill_2.png");
export const name = "Fascination Chain"
export const ranks = [
    {
        type: "ATTACK-ALL",
        modifier: 100.0,
        effect: [
            Pierce,
        ]
    },
    {
        type: "ATTACK-SINGLE",
        modifier: 150.0,
        effect: [
            Pierce,
        ]
    },
    {
        type: "ATTACK-SINGLE",
        modifier: 250.0,
        effect: [
            Pierce,
        ]
    }
]

export function getDescription(rankIndex: number) {
    return (
        <ThemeContext.Consumer>
        {(theme) => (
            <>
                Inflicts {ranks[rankIndex].effect[0]()} damage equal to
                <span className={`damage ${theme.theme}`}> {`${ranks[rankIndex].modifier}%`} </span>
                of Attack on all enemies.
            </>
        )}
        </ThemeContext.Consumer>
    )
}