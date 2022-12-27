# STRUCT_MISSION_VOTE

## Fields
* **TEXT_LABEL_31** m: Public content ID of mission the player is in
* **INT** n: Number of current players in the vote screen
* **INT** v: Restart, continue from checkpoint, quit, abstain; null if equal to field result
* **INT** r: Outcome of the vote
* **INT** t: Total time the player has been online
* **BOOL** v: Did the winning vote on the fail alert screen differ from this player's vote
* **BOOL** e: whether this is the leaderboard displayed at the end of the mode or not