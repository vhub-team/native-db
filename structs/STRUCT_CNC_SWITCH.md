# STRUCT_CNC_SWITCH

## Fields
* **INT** matchId1: unique ID for the match, used to connect the two rounds and other metrics
* **INT** matchId2: unique ID for the match, used to connect the two rounds and other metrics
* **INT** roundNumber: round number
* **INT** prevRole: hash, previous role
* **INT** newRole: hash, new role
* **INT** newEmote: hash, emote
* **INT** slot: hash, which slot was the new loadout stored in: either preset/custom, or slot number, depending on how this is set up
* **INT** cashLost: cash lost when switching