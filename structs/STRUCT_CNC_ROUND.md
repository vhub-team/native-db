# STRUCT_CNC_ROUND

## Fields
* **INT** m: unique ID for the match, used to connect the two rounds and other metrics
* **INT** m
* **INT** r: round number
* **INT** t: cops/crooks
* **INT** r: hash, player's role
* **INT** g: player's current rank in GTAO classic
* **INT** p: player's current CnC progression rank
* **BOOL** r: whether the player has changed role during this match
* **INT** s: hash, spawn location; potentially not necessary
* **INT** e: hash, escape variant
* **INT** r: timestamp, start of the round from when the player joined
* **INT** e: stage 1 end reason: ended due to time, enough cop points, player quit etc.
* **INT** e: stage 2 end reason: player died, player arrested, banked money, quit, time out etc.
* **INT** e: how the escape ended: Success (Escaped), CopKill (The Crook was killed by a Cop), Dead (the player died for any other reason), Arrested (The crook was arrested), TimeUp (Stage timer ran out) etc.
* **INT** d: stage 1 duration, in milliseconds; round specific, might be shorter if the player quits before the end
* **INT** d: stage 2 duration, in milliseconds; round specific, might be shorter if the player quits before the end
* **INT** l: how the player launched this, via pause menu, corona, join with friends, on boot etc.
* **BOOL** j: whether the player joined in progress
* **BOOL** w: at the end of round 2, whether this player's team has won
* **INT** x: amount of XP earned
* **INT** s: on crook's round, number of street crimes the player has completed at the end of the round
* **INT** j: on crook's round, number of jobs the player completed at the end of the round
* **INT** j: jobs remaining unattempted in the round
* **INT** c: number of cop points at the end of the round
* **INT** a: depending on team, number of times crook was arrested/ number of times cop made arrests
* **INT** m: on crook's round, money earned from street crimes and jobs; null if not applicable
* **INT** m: on crook's round, money stashed; null if not applicable
* **INT** m: on crook's round, money banked; null if not applicable
* **INT** c: crooks killed during this round
* **INT** c: cops killed during this round
* **INT** d: number of times the player died
* **BOOL** v: whether the player was marked as a V Offender during the round
* **INT** i: depending on team, number of times crook was incapacitated/ number of times cop incapacitated a crook
* **INT** m: on crook's round, max amount of money held during round that has not been stashed; null if not applicable
* **INT** e: depending on team, amount of endurance damage received by crook or damage drained by cop
* **INT** s: group number for the group of 4 players the player spawns with
* **INT** e: escape duration, in milliseconds; individual to the player
* **INT** s: spectate mode duration, in milliseconds; individual to the player
* **INT** d: stage 1 time spent in any vehicle, in milliseconds
* **INT** d: stage 2 time spent in any vehicle, in milliseconds