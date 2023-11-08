import ICharacter from "../characters/_ICharacter";

import iRFreyja from "./../characters/[Spellbinding Queen] Goddess of Beauty Freyja";
import iDHel from "./../characters/[Shepherd of Souls] Queen Hel";

export const name: string = "Ragnarok";
export const members: ICharacter[] = [
    new iRFreyja(),
    new iDHel()
];