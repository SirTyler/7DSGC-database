import ICharacter from "./characters/_ICharacter"

import cMael from "./characters/[The Four Archangles] Mael of Sun";
import cValentinesKing from "./characters/[Sweet Jelly] New Wings King";
import cFreyja from "./characters/[Spellbinding Queen] Goddess of Beauty Freyja";
import cPurgatoryMeliodas from "./characters/[Cursed Shackles] Purgatory Meliodas";
import cIronBloodMono from "./characters/[Full Moon Shadow] Iron Blood Mono";

export const latest_database: ICharacter[] = [
    new cMael(),
    new cValentinesKing()
]

export const database: ICharacter[] = [
    new cMael(),
    new cValentinesKing(),
    new cFreyja(),
    new cPurgatoryMeliodas(),
    new cIronBloodMono(),
]