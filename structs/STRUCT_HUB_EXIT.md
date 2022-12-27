# STRUCT_HUB_EXIT

## Fields
* **INT** hubID: ID that applies to this instance of the social hub; would be the same for those players inside the social hub
* **INT** type: which social hub the player left: music studio, smoking room etc.
* **INT** bossId1: unique ID of the Boss instance
* **INT** bossId2: unique ID of the Boss instance
* **INT** playerRole: similar to previous metrics, the player's role: CEO, bodyguard, biker prospect etc.
* **INT** pulled: whether this player was pulled out of the social hub (by a mission starting, for example)
* **INT** crewId: ID of the Social Club Crew the player belongs to
* **INT** duration: time spent in the social hub
* **BOOL** dre: whether Dr Dre was present in the social hub
* **INT** playerCount: number of players in the social hub when exiting