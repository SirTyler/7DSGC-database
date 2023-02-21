import { Flood } from "../_effects";
import { ThemeContext } from '../../theme/theme-context'

export const image = require("../../assets/characters/[Spellbinding Queen] Goddess of Beauty Freyja/skill_1.png");
export const name = "Elegant Leopard"
export const ranks = [
    {
        type: "ATTACK-SINGLE",
        modifier: 200.0,
        effect: [
            Flood,
        ]
    },
    {
        type: "ATTACK-SINGLE",
        modifier: 300.0,
        effect: [
            Flood,
        ]
    },
    {
        type: "ATTACK-SINGLE",
        modifier: 500.0,
        effect: [
            Flood,
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
                of Attack on one enemy.
            </>
        )}
        </ThemeContext.Consumer>
    )
}