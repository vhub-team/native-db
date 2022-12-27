# STRUCT_EXTRA_EVENT

## Fields
* **INT** missionName: mission name
* **INT** pursuer: type of pursuer: phantom car, psycho, clown etc.
* **INT** sessionID: session ID
* **INT** endingReason: reason for the event ending: player went inside interior, died, time ran out etc.
* **BOOL** onFoot: whether the player was on foot
* **INT** time: time until the event ended, in milliseconds
* **INT** timeLimit: max time the event can last, in milliseconds
* **FLOAT** pursuerHealth: or int, amount of health left for the pursuer