# STRUCT_PORTABLE_PICKUP_EVENT

## Fields
* **OBJECT_INDEX** pickupID
* **NETWORK_INDEX** pickupNetID
* **PLAYER_INDEX** playerIndex
* **MODEL_NAMES** pickupModel

## Notes
This structure can be used to retrieve information from these events:
- EVENT_NETWORK_PLAYER_COLLECTED_PORTABLE_PICKUP.
Should be passed in GET_EVENT_DATA() as the data STRUCT member.