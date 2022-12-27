# STRUCT_CNC_INCAPACITATE

## Fields
* **INT** matchId1: unique ID for the match, used to connect the two rounds and other metrics
* **INT** matchId2: unique ID for the match, used to connect the two rounds and other metrics
* **INT** incType: hash, type of incapacitation: damage from non-lethal weapons, melee weapons, vehicle ejection, vehicle collision, falling etc.
* **INT** crookRole: hash, crook's role
* **INT** crookProgRank: CnC progression rank for crook
* **INT** crookVehicle: hash, the vehicle the crook was in at the time; null if not applicable
* **INT** copId: cop account ID, from SCAdmin; this is the last cop that damaged the player's endurance prior to becoming incapacitated
* **INT** copRole: hash, cop's role
* **INT** copProgRank: CnC progression rank for cop
* **INT** copWeapon: hash, weapon the cop player used to drain the last of the endurance, causing the incapacitation
* **INT** copVehicle: hash, the vehicle the cop was in at the time; null if not applicable
* **BOOL** vOffender: whether the crook was branded a V Offender at the time of the incapacitation
* **INT** wantedLvl: crook's wanted level