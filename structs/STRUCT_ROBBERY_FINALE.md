# STRUCT_ROBBERY_FINALE

## Fields
* **INT** playthroughID: playthrough ID, this should appear in all related content for a strand, like preps and finale, and would enable us to track an entire strand playthrough
* **INT** missionID: mission name
* **INT** sessionID: session ID
* **INT** strandID: active strand
* **TEXT_LABEL_31** publicContentID: public content ID
* **INT** bossId1: unique ID of the Boss instance
* **INT** bossId2: unique ID of the Boss instance
* **INT** bosstype: type of org: Securoserv, MC, unaffiliated
* **INT** launcherRank: rank of the player launching
* **INT** playerRole: similar to previous metrics, the player's role: CEO, bodyguard, biker prospect etc.
* **INT** endingReason: ending reason
* **INT** replay: counts how many times this mission was failed, then continued from checkpoint/restarted; resets after the player exits the mission, null if not applicable
* **INT** rpEarned: RP earned
* **INT** timeTakenToComplete: time taken to complete, in seconds (for consistency)
* **INT** checkpoint: what checkpoint was the mission failed at; null if not applicable
* **INT** deaths: how many times the player died
* **INT** targetsKilled: number of mission critical/aggressive peds killed
* **INT** innocentsKilled: number of innocent peds killed
* **INT** properties: existing bitset of type of properties owned: casino penthouse, gunrunning bunker, smuggler hangar, terrorbyte, submarine etc.
* **INT** properties2: bitset of type of properties owned; future proofing
* **BOOL** failedStealth: whether the player failed stealth and alerted the enemies
* **INT** wLoadout: weapon loadout the player has picked on the board
* **INT** outfits: outfits chosen on the board
* **INT** moneyEarned: total amount of money earned from the heist
* **INT** vehicleBoard: hash, car chosen on the planning board
* **INT** hashmac: hash mac
* **INT** missionCategory: which set of missions these are (tuner robberies, fixer story missions etc.)
* **BOOL** won: whether the mission was completed successfully