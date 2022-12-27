# STRUCT_CNC_WORK

## Fields
* **INT** matchId1: unique ID for the match, used to connect the two rounds and other metrics
* **INT** matchId2: unique ID for the match, used to connect the two rounds and other metrics
* **INT** jobId: ID to match more than one player completing the same job; null if not applicable
* **INT** roundNumber: round number
* **INT** role: hash, player's role
* **INT** workType: hash, street crime or job
* **INT** workName: hash, name of the street crime or job
* **INT** endReason: end reason: complete, died, arrested, time ran out
* **INT** dropOff: drop off location
* **INT** amount: money earned
* **BOOL** bonus: true if this was the last package dropped of a set, resulting in a cash bonus