# STRUCT_ROBBERY_FINALE

## Fields
* **INT** p: playthrough ID, this should appear in all related content for a strand, like preps and finale, and would enable us to track an entire strand playthrough
* **INT** m: mission name
* **INT** s: session ID
* **INT** s: active strand
* **TEXT_LABEL_31** p: public content ID
* **INT** b: unique ID of the Boss instance
* **INT** b: unique ID of the Boss instance
* **INT** b: type of org: Securoserv, MC, unaffiliated
* **INT** l: rank of the player launching
* **INT** p: similar to previous metrics, the player's role: CEO, bodyguard, biker prospect etc.
* **INT** e: ending reason
* **INT** r: counts how many times this mission was failed, then continued from checkpoint/restarted; resets after the player exits the mission, null if not applicable
* **INT** r: RP earned
* **INT** t: time taken to complete, in seconds (for consistency)
* **INT** c: what checkpoint was the mission failed at; null if not applicable
* **INT** d: how many times the player died
* **INT** t: number of mission critical/aggressive peds killed
* **INT** i: number of innocent peds killed
* **INT** p: existing bitset of type of properties owned: casino penthouse, gunrunning bunker, smuggler hangar, terrorbyte, submarine etc.
* **INT** p: bitset of type of properties owned; future proofing
* **BOOL** f: whether the player failed stealth and alerted the enemies
* **INT** w: weapon loadout the player has picked on the board
* **INT** o: outfits chosen on the board
* **INT** m: total amount of money earned from the heist
* **INT** v: hash, car chosen on the planning board
* **INT** h: hash mac
* **INT** m: which set of missions these are (tuner robberies, fixer story missions etc.)
* **BOOL** w: whether the mission was completed successfully