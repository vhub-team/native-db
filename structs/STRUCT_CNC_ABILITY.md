# STRUCT_CNC_ABILITY

## Fields
* **INT** matchId1: unique ID for the match, used to connect the two rounds and other metrics
* **INT** matchId2: unique ID for the match, used to connect the two rounds and other metrics
* **INT** team: cops/crooks
* **INT** role: hash, player's role
* **INT** roundNumber: round number
* **INT** stage: potentially hash; "Stash the Cash" or "the Escape"
* **INT** ability: hash, name of the ability used
* **INT** vehicle: hash, vehicle the player is in; null if not applicable
* **INT** wantedLvl: crook's wanted level