# STRUCT_INST_MISSION_END

## Fields
* **INT** groupID: group ID; this would enable us to track those players who play this mission together
* **INT** missionCategory: which set of missions these are; for now, Franklin and Lamar short trips
* **INT** missionName: mission name
* **INT** sessionID: session ID
* **INT** type: type of mission
* **INT** location: mission variation
* **INT** launchMethod: launch method
* **TEXT_LABEL_31** publicContentID: public content ID
* **INT** bossId1: unique ID of the Boss instance
* **INT** bossId2: unique ID of the Boss instance
* **INT** bosstype: type of org: Securoserv, MC, unaffiliated
* **INT** launcherRank: rank of the player launching
* **INT** playerRole: similar to previous metrics, the player's role: CEO, bodyguard, biker prospect etc.
* **INT** timeTakenToComplete: time taken to complete, in seconds (for consistency)
* **INT** timeLimit: time limit, in seconds (for consistency); null if not applicable
* **BOOL** won: whether the mission was completed successfully
* **INT** endingReason: ending reason
* **INT** cashEarned: money earned
* **INT** rpEarned: RP earned
* **INT** deaths: how many times the player died
* **INT** targetsKilled: number of mission critical/aggressive peds killed
* **INT** innocentsKilled: number of innocent peds killed
* **INT** properties: existing bitset of type of properties owned: casino penthouse, gunrunning bunker, smuggler hangar, terrorbyte, submarine etc.
* **INT** properties2: bitset of type of properties owned; future proofing
* **BOOL** failedStealth: whether the player failed stealth and alerted the enemies
* **INT** difficulty: mission difficulty
* **INT** playerCount: number of players currently on this mission