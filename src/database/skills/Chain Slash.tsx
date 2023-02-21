import { Slash } from "../_effects";
import { ThemeContext } from '../../theme/theme-context'

export const image = require("../../assets/characters/[Cursed Shackles] Purgatory Meliodas/skill_2.png");
export const name = "Chain Slash"
export const ranks = [
    {
        type: "ATTACK",
        modifier: 120.0,
        effect: [
            Slash,
        ]
    },
    {
        type: "ATTACK",
        modifier: 180.0,
        effect: [
            Slash,
        ]
    },
    {
        type: "ATTACK",
        modifier: 300.0,
        effect: [
            Slash,
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