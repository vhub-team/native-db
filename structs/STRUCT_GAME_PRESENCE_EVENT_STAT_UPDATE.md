# STRUCT_GAME_PRESENCE_EVENT_STAT_UPDATE

## Summary
This structure can be use use to retrieve info for

## Fields
* **INT** s: The stat that the update was sent for
* **TEXT_LABEL_63** f: The gamer tag of the gamer from whom the event came from
* **INT** v: Integer version of the stat if it's a integer stat
* **FLOAT** f: FLOAT version of the stat if it's a FLOAT stat
* **INT** v: 
* **TEXT_LABEL_63** s: More DATA!

## Notes
- EVENT_NETWORK_PRESENCE_STAT_UPDATE
Should be passed in GET_EVENT_DATA() as the data STRUCT member.