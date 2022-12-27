# STRUCT_FM_MISSION_END

## Fields
* **INT** groupID: group ID; this would enable us to track those players who play this mission together
* **INT** missionCategory: which set of missions these are (security contracts, payphone hits etc.)
* **INT** missionName: mission name
* **INT** sessionID: session ID
* **INT** type: type of mission, for example, normal or VIP security contracts
* **INT** location: mission variation
* **INT** launchMethod: launch method
* **INT** bossId1: unique ID of the Boss instance
* **INT** bossId2: unique ID of the Boss instance
* **INT** bosstype: type of org: Securoserv, MC, unaffiliated
* **INT** launcherRank: rank of the player launching
* **INT** playerRole: similar to previous metrics, the player's role: CEO, bodyguard, biker prospect etc.
* **BOOL** playerParticipated: whether the player participated
* **INT** timeTakenToComplete: time taken to complete, in seconds, for consistency
* **INT** timeLimit: time limit, in seconds (for consistency); null if not applicable
* **BOOL** won: whether the mission was completed successfully
* **INT** endingReason: similar to previous metrics: won, lost, boss_left etc.
* **BOOL** isRivalParty: is the party completing the mission the same as the party that launched it; null if not applicable
* **INT** cashEarned: money earned
* **INT** rpEarned: RP earned
* **INT** deaths: how many times the player died
* **INT** targetsKilled: number of mission critical/aggressive peds killed
* **INT** innocentsKilled: number of innocent peds killed
* **INT** properties: existing bitset of type of properties owned: casino penthouse, gunrunning bunker, smuggler hangar, terrorbyte, submarine etc.
* **INT** properties2: bitset of type of properties owned; future proofing
* **BOOL** failedStealth: whether the player failed stealth and alerted the enemies
* **INT** difficulty: mission difficulty: easy, normal, hard, hardest
* **INT** bonusKillMethod: bonus kill method needed on this mission (payphone hits): taxi, golf outfit etc.; null if not applicable
* **INT** bonusKillComplete: whether the player completed the bonus kill for this mission; null if not applicable