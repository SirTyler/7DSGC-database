import ICharacter from "./characters/_ICharacter"

import cValentinesKing from "./characters/[Sweet Jelly] New Wings King";
import cFreyja from "./characters/[Spellbinding Queen] Goddess of Beauty Freyja";
import cPurgatoryMeliodas from "./characters/[Cursed Shackles] Purgatory Meliodas";
import cIronBloodMono from "./characters/[Full Moon Shadow] Iron Blood Mono";

export const latest_database: ICharacter[] = [
    new cValentinesKing(),
    new cFreyja()
]

export const database: ICharacter[] = [
    new cValentinesKing(),
    new cFreyja(),
    new cPurgatoryMeliodas(),
    new cIronBloodMono(),
]