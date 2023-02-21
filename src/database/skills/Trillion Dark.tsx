import { MagicBurst, SurpressDamageTaken } from "../_effects";
import { ThemeContext } from '../../theme/theme-context'

export const image = require("../../assets/characters/[Cursed Shackles] Purgatory Meliodas/ultimate.png");
export const name = "Trillion Dark"
export const ranks = [
    {
        type: "ULTIMATE",
        modifier: 500.0,
        extra: [
            1
        ],
        effect: [
            MagicBurst,
            SurpressDamageTaken
        ]
    },
    {
        type: "ULTIMATE",
        modifier: 550.0,
        extra: [
            1
        ],
        effect: [
            MagicBurst,
            SurpressDamageTaken
        ]
    },
    {
        type: "ULTIMATE",
        modifier: 600.0,
        extra: [
            1
        ],
        effect: [
            MagicBurst,
            SurpressDamageTaken
        ]
    },
    {
        type: "ULTIMATE",
        modifier: 650.0,
        extra: [
            1
        ],
        effect: [
            MagicBurst,
            SurpressDamageTaken
        ]
    },
    {
        type: "ULTIMATE",
        modifier: 700.0,
        extra: [
            1
        ],
        effect: [
            MagicBurst,
            SurpressDamageTaken
        ]
    },
    {
        type: "ULTIMATE",
        modifier: 750.0,
        extra: [
            2
        ],
        effect: [
            MagicBurst,
            SurpressDamageTaken
        ]
    },
]

export function getDescription(rankIndex: number) {
    return (
        <ThemeContext.Consumer>
        {(theme) => (
            <>
                Inflicts {ranks[rankIndex].effect[0]()} damage equal to
                <span className={`damage ${theme.theme}`}> {`${ranks[rankIndex].modifier}%`} </span>
                of Attack on all enemies, then 
                {ranks[rankIndex].effect[1]()} on self for
                <span className={`damage ${theme.theme}`}> {`${ranks[rankIndex].extra[0]} turn(s).`} </span>
            </>
        )}
        </ThemeContext.Consumer>
    )
}