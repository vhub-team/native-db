# STRUCT_MISSION_END

## Fields
* **INT** missionId
* **INT** missionTypeId
* **INT** matchId1
* **INT** matchId2
* **INT** bossId1
* **INT** bossId2
* **INT** starterBossId1
* **INT** starterBossId2
* **INT** playerParticipated = -1: Serialized in the metric name'MISSION_ENDED' as "a"
* **INT** timeStart = -1: Serialized in the metric name'MISSION_ENDED' as "b"
* **INT** timeEnd = -1: Serialized in the metric name'MISSION_ENDED' as "c"
* **INT** won = -1: Serialized in the metric name'MISSION_ENDED' as "d"
* **INT** endingReason = -1: Serialized in the metric name'MISSION_ENDED' as "e"
* **INT** cashEarned = 0: Serialized in the metric name'MISSION_ENDED' as "f"
* **INT** rpEarned = 0: Serialized in the metric name'MISSION_ENDED' as "g"
* **INT** targetsKilled = -1: Serialized in the metric name'MISSION_ENDED' as "h"
* **INT** innocentsKilled = -1: Serialized in the metric name'MISSION_ENDED' as "i"
* **INT** deaths = -1: Serialized in the metric name'MISSION_ENDED' as "j"
* **INT** launcherRank = -1: Serialized in the metric name'MISSION_ENDED' as "k"
* **INT** mCPointsEarnedFromWinning = -1: Serialized in the metric name'MISSION_ENDED' as "l"
* **INT** timeTakenToComplete = -1: Serialized in the metric name'MISSION_ENDED' as "m"
* **INT** timeTakenForObjective = -1: Serialized in the metric name'MISSION_ENDED' as "n"
* **INT** propertyDamageValue = -1: Serialized in the metric name'MISSION_ENDED' as "o"
* **INT** longestWheelieTime = -1: Serialized in the metric name'MISSION_ENDED' as "p"
* **INT** numberOfCarsKicked = -1: Serialized in the metric name'MISSION_ENDED' as "q"
* **INT** playersLeftInProgress = -1: Serialized in the metric name'MISSION_ENDED' as "r"
* **INT** location = -1: Serialized in the metric name'MISSION_ENDED' as "s"
* **INT** invitesSent = -1: Serialized in the metric name'MISSION_ENDED' as "t"
* **INT** invitesAccepted = -1: Serialized in the metric name'MISSION_ENDED' as "u"
* **INT** bossKilled = -1: Serialized in the metric name'MISSION_ENDED' as "v"
* **INT** goonsKilled = -1: Serialized in the metric name'MISSION_ENDED' as "w"
* **INT** packagesGathered = -1: Serialized in the metric name'MISSION_ENDED' as "x"
* **INT** friendlyAiDeaths = -1: Serialized in the metric name'MISSION_ENDED' as "y"
* **INT** raceToLocationLaunched = -1: Serialized in the metric name'MISSION_ENDED' as "z"
* **INT** cratesDestroyed = -1: Serialized in the metric name'MISSION_ENDED' as "ab"
* **INT** aIKilled = -1: Serialized in the metric name'MISSION_ENDED' as "bb"
* **INT** alliesSpawned = -1: Serialized in the metric name'MISSION_ENDED' as "cb"
* **INT** alliesDroppedOff = -1: Serialized in the metric name'MISSION_ENDED' as "db"
* **INT** vansSpawned = -1: Serialized in the metric name'MISSION_ENDED' as "eb"
* **INT** vansDestroyed = -1: Serialized in the metric name'MISSION_ENDED' as "fb"
* **INT** typeOfBusinesS = -1: Serialized in the metric name'MISSION_ENDED' as "gb"
* **INT** otherBusinessOwned = -1: Serialized in the metric name'MISSION_ENDED' as "hb"
* **INT** startVolume = -1: Serialized in the metric name'MISSION_ENDED' as "ib"
* **INT** endVolume = -1: Serialized in the metric name'MISSION_ENDED' as "jb"
* **INT** startSupplyCapacity = -1: Serialized in the metric name'MISSION_ENDED' as "kb"
* **INT** endSupplyCapacity = -1: Serialized in the metric name'MISSION_ENDED' as "lb"
* **INT** suppliesDestroyed = -1: Serialized in the metric name'MISSION_ENDED' as "mb"
* **INT** suppliesDelivered = -1: Serialized in the metric name'MISSION_ENDED' as "nb"
* **INT** isMissionAfterFailedDefend = -1: Serialized in the metric name'MISSION_ENDED' as "ob"
* **INT** cashSpentOnResupplies = -1: Serialized in the metric name'MISSION_ENDED' as "pb"
* **INT** productDestroyed = -1: Serialized in the metric name'MISSION_ENDED' as "qb"
* **INT** productDelivered = -1: Serialized in the metric name'MISSION_ENDED' as "rb"
* **INT** upgradesOwned = -1: Serialized in the metric name'MISSION_ENDED' as "sb"
* **INT** fromHackerTruck = -1: Serialized in the metric name'MISSION_ENDED' as "tb"
* **INT** properties = 0: Serialized in the metric name'MISSION_ENDED' as "ub"
* **INT** properties2 = 0: Serialized in the metric name'MISSION_ENDED' as "vb"

## Notes
Struct for ending missions:
1. Club work
2. Club challenges
3. Member challenges
4. Clubhouse missions
5. Business missions m_missionTypeId - Make sure you set the values 1 to 5, see above.
m_bossId1 and m_bossId2 - this is like in contraband missions.
isBoss - this is set code side.
Set -1 for BLANK values.