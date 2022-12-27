# STRUCT_ROBBERY_PREP

## Fields
* **INT** p: playthrough ID, this should appear in all related content for a strand, like preps and finale, and would enable us to track an entire strand playthrough
* **INT** m: mission name
* **INT** s: session ID
* **INT** s: active strand
* **INT** t: setup, prep
* **INT** b: unique ID of the Boss instance
* **INT** b: unique ID of the Boss instance
* **INT** b: type of org: Securoserv, MC, unaffiliated
* **INT** l: rank of the player launching
* **INT** p: similar to previous metrics, the player's role: CEO, bodyguard, biker prospect etc.
* **BOOL** p: whether the player participated
* **INT** t: time taken to complete, in seconds (for consistency)
* **INT** t: time limit, in seconds (for consistency); null if not applicable
* **INT** e: similar to previous metrics: won, lost, boss_left etc.
* **BOOL** i: is the party completing the mission the same as the party that launched it; null if not applicable
* **INT** c: money earned
* **INT** r: RP earned
* **INT** l: mission subvariation
* **INT** i: invites sent
* **INT** i: invites accepted
* **INT** d: how many times the player died
* **INT** t: number of mission critical/aggressive peds killed
* **INT** i: number of innocent peds killed
* **INT** p: existing bitset of type of properties owned: casino penthouse, gunrunning bunker, smuggler hangar, terrorbyte, submarine etc.
* **INT** p: bitset of type of properties owned; future proofing
* **BOOL** f: whether the player failed stealth and alerted the enemies
* **INT** d: delivery location
* **INT** h: hash mac
* **INT** v: hash, stolen vehicle in Sewer Schematics, Meth Tanker
* **INT** v: count of vehicles delivered in Warehouse Defenses
* **INT** o: outfits used, if any, relevant for Scope Transporter, Container Manifest; null otherwise
* **INT** e: entrance, relevant for Locate Bunker; null otherwise
* **INT** m: which set of missions these are (tuner robberies, fixer story missions etc.)
* **BOOL** w: whether the mission was completed successfully