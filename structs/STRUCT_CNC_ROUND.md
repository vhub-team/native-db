# STRUCT_CNC_ROUND

## Fields
* **INT** matchId1: unique ID for the match, used to connect the two rounds and other metrics
* **INT** matchId2
* **INT** roundNumber: round number
* **INT** team: cops/crooks
* **INT** role: hash, player's role
* **INT** gameRank: player's current rank in GTAO classic
* **INT** progRank: player's current CnC progression rank
* **BOOL** roleChange: whether the player has changed role during this match
* **INT** spawnLoc: hash, spawn location; potentially not necessary
* **INT** escapeLoc: hash, escape variant
* **INT** roundStartTime: timestamp, start of the round from when the player joined
* **INT** endReasonStgOne: stage 1 end reason: ended due to time, enough cop points, player quit etc.
* **INT** endReasonStgTwo: stage 2 end reason: player died, player arrested, banked money, quit, time out etc.
* **INT** escapeResult: how the escape ended: Success (Escaped), CopKill (The Crook was killed by a Cop), Dead (the player died for any other reason), Arrested (The crook was arrested), TimeUp (Stage timer ran out) etc.
* **INT** durationStgOne: stage 1 duration, in milliseconds; round specific, might be shorter if the player quits before the end
* **INT** durationStgTwo: stage 2 duration, in milliseconds; round specific, might be shorter if the player quits before the end
* **INT** launchMethod: how the player launched this, via pause menu, corona, join with friends, on boot etc.
* **BOOL** jip: whether the player joined in progress
* **BOOL** win: at the end of round 2, whether this player's team has won
* **INT** xpEarned: amount of XP earned
* **INT** streetCrimeCount: on crook's round, number of street crimes the player has completed at the end of the round
* **INT** jobCount: on crook's round, number of jobs the player completed at the end of the round
* **INT** jobsRemaining: jobs remaining unattempted in the round
* **INT** copPoints: number of cop points at the end of the round
* **INT** arrests: depending on team, number of times crook was arrested/ number of times cop made arrests
* **INT** moneyEarned: on crook's round, money earned from street crimes and jobs; null if not applicable
* **INT** moneyStashed: on crook's round, money stashed; null if not applicable
* **INT** moneyBanked: on crook's round, money banked; null if not applicable
* **INT** crooksKilled: crooks killed during this round
* **INT** copsKilled: cops killed during this round
* **INT** deaths: number of times the player died
* **BOOL** vOffender: whether the player was marked as a V Offender during the round
* **INT** incapacitations: depending on team, number of times crook was incapacitated/ number of times cop incapacitated a crook
* **INT** moneyMaxHeld: on crook's round, max amount of money held during round that has not been stashed; null if not applicable
* **INT** endurance: depending on team, amount of endurance damage received by crook or damage drained by cop
* **INT** spawnGroup: group number for the group of 4 players the player spawns with
* **INT** escapeTime: escape duration, in milliseconds; individual to the player
* **INT** spectateTime: spectate mode duration, in milliseconds; individual to the player
* **INT** durationVehicleStgOne: stage 1 time spent in any vehicle, in milliseconds
* **INT** durationVehicleStgTwo: stage 2 time spent in any vehicle, in milliseconds