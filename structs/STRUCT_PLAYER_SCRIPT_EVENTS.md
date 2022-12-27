# STRUCT_PLAYER_SCRIPT_EVENTS

## Fields
* **TEXT_LABEL_63** p
* **PLAYER_INDEX** p
* **INT** p
* **PLAYER_SOURCE** n: where did the player come from / going to
* **INT** n
* **THREADID[20]** t: THREADID[20]
* **GAMER_HANDLE** p: If a player left there was no way script could retrieve this value
* **INT** p: Bit shifted value for different player flags. BIT 0 = Is Player a Boss
* **INT** b: If a player left this will provide why. -1 = unknown/invalid reason

## Notes
This structure can be used to retrieve information from these events:
- EVENT_NETWORK_PLAYER_JOIN_SCRIPT.
- EVENT_NETWORK_PLAYER_LEFT_SCRIPT.
Should be passed in GET_EVENT_DATA() as the data STRUCT member.