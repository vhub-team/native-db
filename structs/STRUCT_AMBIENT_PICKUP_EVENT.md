# STRUCT_AMBIENT_PICKUP_EVENT

## Fields
* **PICKUP_TYPE** p
* **INT** p
* **PLAYER_INDEX** p
* **MODEL_NAMES** p
* **BOOL** p
* **BOOL** d
* **INT** p
* **INT** p

## Notes
This structure can be used to retrieve information from these events:
- EVENT_NETWORK_PLAYER_COLLECTED_AMBIENT_PICKUP.
Should be passed in GET_EVENT_DATA() as the data STRUCT member.