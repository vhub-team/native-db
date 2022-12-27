# STRUCT_FM_MISSION_END

## Fields
* **INT** g: group ID; this would enable us to track those players who play this mission together
* **INT** m: which set of missions these are (security contracts, payphone hits etc.)
* **INT** m: mission name
* **INT** s: session ID
* **INT** t: type of mission, for example, normal or VIP security contracts
* **INT** l: mission variation
* **INT** l: launch method
* **INT** b: unique ID of the Boss instance
* **INT** b: unique ID of the Boss instance
* **INT** b: type of org: Securoserv, MC, unaffiliated
* **INT** l: rank of the player launching
* **INT** p: similar to previous metrics, the player's role: CEO, bodyguard, biker prospect etc.
* **BOOL** p: whether the player participated
* **INT** t: time taken to complete, in seconds, for consistency
* **INT** t: time limit, in seconds (for consistency); null if not applicable
* **BOOL** w: whether the mission was completed successfully
* **INT** e: similar to previous metrics: won, lost, boss_left etc.
* **BOOL** i: is the party completing the mission the same as the party that launched it; null if not applicable
* **INT** c: money earned
* **INT** r: RP earned
* **INT** d: how many times the player died
* **INT** t: number of mission critical/aggressive peds killed
* **INT** i: number of innocent peds killed
* **INT** p: existing bitset of type of properties owned: casino penthouse, gunrunning bunker, smuggler hangar, terrorbyte, submarine etc.
* **INT** p: bitset of type of properties owned; future proofing
* **BOOL** f: whether the player failed stealth and alerted the enemies
* **INT** d: mission difficulty: easy, normal, hard, hardest
* **INT** b: bonus kill method needed on this mission (payphone hits): taxi, golf outfit etc.; null if not applicable
* **INT** b: whether the player completed the bonus kill for this mission; null if not applicable