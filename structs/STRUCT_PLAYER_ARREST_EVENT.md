# STRUCT_PLAYER_ARREST_EVENT

## Fields
* **PED_INDEX** arresterIndex
* **PED_INDEX** arresteeIndex
* **ARREST_EVENT_TYPES** arrestEventType

## Notes
This structure can be used to retrieve information from these events:
- EVENT_NETWORK_PLAYER_ARREST.
Should be passed in GET_EVENT_DATA() as the data STRUCT member.