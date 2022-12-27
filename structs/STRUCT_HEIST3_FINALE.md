# STRUCT_HEIST3_FINALE

## Fields
* **INT** p: playthrough ID, this should appear in all related content, like scopes, preps and finales, and would enable us to track an entire heist playthrough
* **INT** m: mission name
* **TEXT_LABEL_31** p: public content ID
* **INT** p: mac hash
* **INT** b: unique ID of the Boss instance
* **INT** b: unique ID of the Boss instance
* **INT** b: type of org: Securoserv, MC, unaffiliated
* **INT** l: rank of the player launching
* **INT** p: similar to previous metrics, the player's role: CEO, bodyguard, biker prospect etc.
* **INT** e: similar to previous metrics: won, lost, boss_left etc.
* **INT** r: counts how many times this mission was failed, then continued from checkpoint/restarted; resets after the player exits the mission, null if not applicable
* **INT** r: RP earned
* **BOOL** d: whether the mission has increased difficulty
* **INT** t: time taken to complete
* **INT** c: what checkpoint was the heist failed at; null if not applicable
* **INT** p: how many times has the player completed this mission before; first time is 1, then increments of 1 after completing finale, only success matters
* **INT** a: stealth, subterfuge, direct
* **BOOL** a: was the original approach failed, and default to direct; null if the original approach is Direct
* **INT** w: weapon crew member
* **INT** w: loadout 1 or 2
* **INT** d: driver crew member
* **INT** v: getaway vehicle
* **INT** v: vehicle picked for swapping
* **INT** h: hacker crew member
* **INT** o: outfit the player used when entering the casino
* **INT** o: outfit the player used when leaving the casino, if applicable and different to outfitIn
* **INT** m: mask used, null if not applicable
* **INT** v: whether the player used the chosen swap vehicle
* **INT** u: whether the the EMP was used
* **INT** u: whether the player used the Drone
* **INT** u: whether the player used thermite to pass the security keypads
* **INT** u: whether the player used the keycard to pass the security keypads
* **INT** h: whether the player completed the hacking minigame to pass the security keypads
* **INT** c: does the player have the security cameras information
* **INT** a: which access points were used
* **INT** v: diamonds, gold, cash, art
* **INT** v: amount stolen from vault
* **INT** d: amount stolen from daily cash room
* **INT** d: amount stolen from safety deposit boxes
* **INT** p: heist percentage of payout
* **INT** d: how many times the player died
* **INT** t: number of mission critical/aggressive peds killed
* **INT** i: number of innocent peds killed
* **INT** b: buyer's location