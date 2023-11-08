import ICharacter from "./characters/_ICharacter"

import iBAlbedo from "./characters/[Pure-White Devil] Albedo";
import iBAinz from "./characters/[Ruler of Nazarick] Ainz Ooal Gown";
import iRShalltear from "./characters/[Bloody Valkyrie] Shalltear Bloodfallen";
import iGCocytus from "./characters/[Guardian of the Glacier] Cocytus";
import iRTruthSeekerMerlin from "./characters/[Witch of the Snow] Truth Seeker Merlin";
import iDHel from "./characters/[Shepherd of Souls] Queen Hel";
import iLMael from "./characters/[The Four Archangels] Mael of Sunshine";
import iGNewWingsKing from "./characters/[Sweet Jelly] New Wings King";
import iRFreyja from "./characters/[Spellbinding Queen] Goddess of Beauty Freyja";
import iDPurgatoryMeliodas from "./characters/[Cursed Shackles] Purgatory Meliodas";
import iBIronBloodMono from "./characters/[Full Moon Shadow] Iron Blood Mono";
import { Type } from "./passives/_IPassive";

export var BAlbedo: ICharacter = new iBAlbedo();
export var BAinz: ICharacter = new iBAinz();
export var RShalltear: ICharacter = new iRShalltear();
export var GCocytus: ICharacter = new iGCocytus();
export var RTruthSeekerMerlin: ICharacter = new iRTruthSeekerMerlin();
export var DHel: ICharacter = new iDHel();
export var LMael: ICharacter = new iLMael();
export var GNewWingsKing: ICharacter = new iGNewWingsKing();
export var RFreyja: ICharacter = new iRFreyja();
export var DPurgatoryMeliodas: ICharacter = new iDPurgatoryMeliodas();
export var BIronBloodMono: ICharacter = new iBIronBloodMono();

export function db_build() {
    BAlbedo = new iBAlbedo();
    BAinz = new iBAinz();
    RShalltear = new iRShalltear();
    GCocytus = new iGCocytus();
    RTruthSeekerMerlin = new iRTruthSeekerMerlin();
    DHel = new iDHel();
    LMael = new iLMael();
    GNewWingsKing = new iGNewWingsKing();
    RFreyja = new iRFreyja();
    DPurgatoryMeliodas = new iDPurgatoryMeliodas();
    BIronBloodMono = new iBIronBloodMono();

    sub_passives.length = 0;
    database.forEach(character => {
        if(character.unique.conditions[0].valueOf() === Type.SUB.valueOf()) {
            sub_passives.push(character);
        }
    });
}

export const sub_passives: ICharacter[] = []

export const latest_database: ICharacter[] = [
    BAlbedo,
    BAinz,
    RShalltear,
    GCocytus
]

export const database: ICharacter[] = [
    BAlbedo,
    BAinz,
    RShalltear,
    GCocytus,
    RTruthSeekerMerlin,
    DHel,
    LMael,
    GNewWingsKing,
    RFreyja,
    DPurgatoryMeliodas,
    BIronBloodMono,
]