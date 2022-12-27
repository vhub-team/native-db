# STRUCT_HEIST3_FINALE

## Fields
* **INT** playthroughId: playthrough ID, this should appear in all related content, like scopes, preps and finales, and would enable us to track an entire heist playthrough
* **INT** missionId: mission name
* **TEXT_LABEL_31** publicContentId: public content ID
* **INT** playthroughHashMac: mac hash
* **INT** bossId1: unique ID of the Boss instance
* **INT** bossId2: unique ID of the Boss instance
* **INT** bosstype: type of org: Securoserv, MC, unaffiliated
* **INT** launcherRank: rank of the player launching
* **INT** playerRole: similar to previous metrics, the player's role: CEO, bodyguard, biker prospect etc.
* **INT** endingReason: similar to previous metrics: won, lost, boss_left etc.
* **INT** replay: counts how many times this mission was failed, then continued from checkpoint/restarted; resets after the player exits the mission, null if not applicable
* **INT** rpEarned: RP earned
* **BOOL** difficult: whether the mission has increased difficulty
* **INT** timeTakenToComplete: time taken to complete
* **INT** checkpoint: what checkpoint was the heist failed at; null if not applicable
* **INT** playCount: how many times has the player completed this mission before; first time is 1, then increments of 1 after completing finale, only success matters
* **INT** approachBoard: stealth, subterfuge, direct
* **BOOL** approachDirect: was the original approach failed, and default to direct; null if the original approach is Direct
* **INT** wCrew: weapon crew member
* **INT** wLoadout: loadout 1 or 2
* **INT** dCrew: driver crew member
* **INT** vehicleGetaway: getaway vehicle
* **INT** vehicleSwap: vehicle picked for swapping
* **INT** hCrew: hacker crew member
* **INT** outfitIn: outfit the player used when entering the casino
* **INT** outfitOut: outfit the player used when leaving the casino, if applicable and different to outfitIn
* **INT** mask: mask used, null if not applicable
* **INT** vehicleSwapped: whether the player used the chosen swap vehicle
* **INT** useEMP: whether the the EMP was used
* **INT** useDrone: whether the player used the Drone
* **INT** useThermite: whether the player used thermite to pass the security keypads
* **INT** useKeycard: whether the player used the keycard to pass the security keypads
* **INT** hack: whether the player completed the hacking minigame to pass the security keypads
* **INT** cameras: does the player have the security cameras information
* **INT** accessPoints: which access points were used
* **INT** vaultTarget: diamonds, gold, cash, art
* **INT** vaultAmt: amount stolen from vault
* **INT** dailyCashRoomAmt: amount stolen from daily cash room
* **INT** depositBoxAmt: amount stolen from safety deposit boxes
* **INT** percentage: heist percentage of payout
* **INT** deaths: how many times the player died
* **INT** targetsKilled: number of mission critical/aggressive peds killed
* **INT** innocentsKilled: number of innocent peds killed
* **INT** buyerLocation: buyer's location