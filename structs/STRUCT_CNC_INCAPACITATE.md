# STRUCT_CNC_INCAPACITATE

## Fields
* **INT** m: unique ID for the match, used to connect the two rounds and other metrics
* **INT** m: unique ID for the match, used to connect the two rounds and other metrics
* **INT** i: hash, type of incapacitation: damage from non-lethal weapons, melee weapons, vehicle ejection, vehicle collision, falling etc.
* **INT** c: hash, crook's role
* **INT** c: CnC progression rank for crook
* **INT** c: hash, the vehicle the crook was in at the time; null if not applicable
* **INT** c: cop account ID, from SCAdmin; this is the last cop that damaged the player's endurance prior to becoming incapacitated
* **INT** c: hash, cop's role
* **INT** c: CnC progression rank for cop
* **INT** c: hash, weapon the cop player used to drain the last of the endurance, causing the incapacitation
* **INT** c: hash, the vehicle the cop was in at the time; null if not applicable
* **BOOL** v: whether the crook was branded a V Offender at the time of the incapacitation
* **INT** w: crook's wanted level