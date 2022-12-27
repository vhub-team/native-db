# STRUCT_PLAYER_SCRIPT_EVENTS

## Fields
* **TEXT_LABEL_63** playerName
* **PLAYER_INDEX** playerIndex
* **INT** playerTeam
* **PLAYER_SOURCE** nSource: where did the player come from / going to
* **INT** numThreads
* **THREADID[20]** threads: THREADID[20]
* **GAMER_HANDLE** player: If a player left there was no way script could retrieve this value
* **INT** playerFlags: Bit shifted value for different player flags. BIT 0 = Is Player a Boss
* **INT** bailReason: If a player left this will provide why. -1 = unknown/invalid reason

## Notes
This structure can be used to retrieve information from these events:
- EVENT_NETWORK_PLAYER_JOIN_SCRIPT.
- EVENT_NETWORK_PLAYER_LEFT_SCRIPT.
Should be passed in GET_EVENT_DATA() as the data STRUCT member.