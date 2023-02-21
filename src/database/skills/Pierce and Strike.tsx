import { Frenzy } from "../_effects";
import { ThemeContext } from '../../theme/theme-context'

export const image = require("../../assets/characters/[Cursed Shackles] Purgatory Meliodas/skill_1.png");
export const name = "Pierce and Strike"
export const ranks = [
        {
            type: "ATTACK",
            modifier: 200.0,
            effect: [
                Frenzy,
            ]
        },
        {
            type: "ATTACK",
            modifier: 300.0,
            effect: [
                Frenzy,
            ]
        },
        {
            type: "ATTACK",
            modifier: 500.0,
            effect: [
                Frenzy,
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
                of Attack on one enemies.
            </>
        )}
        </ThemeContext.Consumer>
    )
}