import { Wave, Abyss } from "../_effects";
import { ThemeContext } from '../../theme/theme-context'

export const image = require("../../assets/characters/[Spellbinding Queen] Goddess of Beauty Freyja/ultimate.png");
export const name = "Aesthetic Overflow"
export const ranks = [
    {
        type: "ULTIMATE",
        modifier: 725.0,
        extra: [],
        effect: [
            Wave(20.0),
            Abyss(25.0)
        ]
    },
    {
        type: "ULTIMATE",
        modifier: 850.0,
        extra: [],
        effect: [
            Wave(20.0),
            Abyss(30.0)
        ]
    },
    {
        type: "ULTIMATE",
        modifier: 975.0,
        extra: [],
        effect: [
            Wave(20.0),
            Abyss(35.0)
        ]
    },
    {
        type: "ULTIMATE",
        modifier: 1100.0,
        extra: [],
        effect: [
            Wave(20.0),
            Abyss(40.0)
        ]
    },
    {
        type: "ULTIMATE",
        modifier: 1225.0,
        extra: [],
        effect: [
            Wave(20.0),
            Abyss(45.0)
        ]
    },
    {
        type: "ULTIMATE",
        modifier: 1350.0,
        extra: [],
        effect: [
            Wave(20.0),
            Abyss(50.0)
        ]
    },
]

export function getDescription(rankIndex: number) {
    return (
        <ThemeContext.Consumer>
        {(theme) => (
            <>
                Inflicts {ranks[rankIndex].effect[0]} damage equal to
                <span className={`damage ${theme.theme}`}> {`${ranks[rankIndex].modifier}%`} </span>
                of Attack on all enemies. The hero gains {ranks[rankIndex].effect[1]} effect on self for <span className={`damage ${theme.theme}`}> 2 turn(s). </span>
            </>
        )}
        </ThemeContext.Consumer>
    )
}