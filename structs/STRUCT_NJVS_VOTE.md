# STRUCT_NJVS_VOTE

## Fields
* **TEXT_LABEL_31** m: Public content ID of mission the player is in
* **INT** n: Number of current players in the vote screen
* **TEXT_LABEL_31** v: Which mode the player voted for while on the NJVS; presumably will be the public content ID, null if abstain or equal to field result
* **TEXT_LABEL_31** r: Mode that won the vote; presumably public content ID
* **INT** t: Total time the player has been online
* **BOOL** v: Did the winning vote on the NJVS differ from this player's vote; null if N/A