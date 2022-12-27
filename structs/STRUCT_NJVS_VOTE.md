# STRUCT_NJVS_VOTE

## Fields
* **TEXT_LABEL_31** mid: Public content ID of mission the player is in
* **INT** numPlayers: Number of current players in the vote screen
* **TEXT_LABEL_31** voteChoice: Which mode the player voted for while on the NJVS; presumably will be the public content ID, null if abstain or equal to field result
* **TEXT_LABEL_31** result: Mode that won the vote; presumably public content ID
* **INT** timeOnline: Total time the player has been online
* **BOOL** voteDiff: Did the winning vote on the NJVS differ from this player's vote; null if N/A