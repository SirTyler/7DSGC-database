import ICharacter from "../characters/_ICharacter";

import iBAlbedo from "./../characters/[Pure-White Devil] Albedo";
import iBAinz from "./../characters/[Ruler of Nazarick] Ainz Ooal Gown";
import iRShalltear from "./../characters/[Bloody Valkyrie] Shalltear Bloodfallen";
import iGCocytus from "./../characters/[Guardian of the Glacier] Cocytus";


export const name: string = "Collab";
export const members: ICharacter[] = [
    new iBAlbedo(),
    new iBAinz(),
    new iRShalltear(),
    new iGCocytus()
];