import ICharacter from "../characters/_ICharacter";

import iDPurgatoryMeliodas from "./../characters/[Cursed Shackles] Purgatory Meliodas";
import iGNewWingsKing from "./../characters/[Sweet Jelly] New Wings King";
import iRTruthSeekerMerlin from "./../characters/[Witch of the Snow] Truth Seeker Merlin";

export const name = "The Seven Catastrophes"
export const members: ICharacter[] = [
    new iDPurgatoryMeliodas(),
    new iGNewWingsKing(),
    new iRTruthSeekerMerlin()
]