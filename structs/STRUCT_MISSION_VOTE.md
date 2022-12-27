# STRUCT_MISSION_VOTE

## Fields
* **TEXT_LABEL_31** mid: Public content ID of mission the player is in
* **INT** numPlayers: Number of current players in the vote screen
* **INT** voteChoice: Restart, continue from checkpoint, quit, abstain; null if equal to field result
* **INT** result: Outcome of the vote
* **INT** timeOnline: Total time the player has been online
* **BOOL** voteDiff: Did the winning vote on the fail alert screen differ from this player's vote
* **BOOL** endBoard: whether this is the leaderboard displayed at the end of the mode or not