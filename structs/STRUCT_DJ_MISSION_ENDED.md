# STRUCT_DJ_MISSION_ENDED

## Fields
* **INT** missionTypeId: mission name
* **INT** missionId: mission ID
* **INT** matchId: match ID
* **INT** bossId1: unique ID of the Boss instance
* **INT** bossId2: unique ID of the Boss instance
* **INT** bosstype: type of org: Securoserv, MC, unaffiliated
* **INT** playerRole: similar to previous metrics, the player's role: CEO, bodyguard, biker prospect etc.
* **INT** launcherRank: rank of the player launching
* **INT** location: subvariation
* **INT** playerParticipated: whether the player participated
* **BOOL** won: whether the mission was completed successfully
* **INT** endingReason: similar to previous metrics: won, lost, boss_left etc.
* **INT** timeTakenToComplete: time taken to complete, in seconds (for consistency)
* **INT** cashEarned: money earned
* **INT** rpEarned: RP earned
* **INT** chipsEarned: amount of chips earned
* **INT** itemEarned: hash of item earned (t-shirt, vehicle etc.)
* **INT** targetsKilled: number of mission critical/aggressive peds killed
* **INT** innocentsKilled: number of innocent peds killed
* **INT** deaths: how many times the player died
* **INT** bottlesDelivered: amount of tequila/champagne delivered