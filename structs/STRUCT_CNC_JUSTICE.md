# STRUCT_CNC_JUSTICE

## Fields
* **INT** matchId1: unique ID for the match, used to connect the two rounds and other metrics
* **INT** matchId2: unique ID for the match, used to connect the two rounds and other metrics
* **INT** roundNumber: round number
* **INT** stage: potentially hash; "Stash the Cash" or "the Escape"
* **INT** crookId: crook account ID, from SCAdmin
* **INT** crookRole: hash, crook's role
* **INT** crookProgRank: CnC progression rank for crook
* **INT** copRole: hash, cop's role
* **INT** copProgRank: CnC progression rank for cop
* **INT** crookEndurance: crook's remaining endurance, at the time of the arrest or kill
* **BOOL** vOffender: whether the crook was branded a V Offender at the time of the arrest
* **INT** cashLost: amount of cash the crook lost
* **INT** wantedLvl: crook's wanted level
* **INT** cashPenalty: amount of cash the cop was penalized
* **INT** type: potentially hash; "Arrest" or "Kill"