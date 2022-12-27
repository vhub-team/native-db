# STRUCT_CNC_WORK

## Fields
* **INT** m: unique ID for the match, used to connect the two rounds and other metrics
* **INT** m: unique ID for the match, used to connect the two rounds and other metrics
* **INT** j: ID to match more than one player completing the same job; null if not applicable
* **INT** r: round number
* **INT** r: hash, player's role
* **INT** w: hash, street crime or job
* **INT** w: hash, name of the street crime or job
* **INT** e: end reason: complete, died, arrested, time ran out
* **INT** d: drop off location
* **INT** a: money earned
* **BOOL** b: true if this was the last package dropped of a set, resulting in a cash bonus