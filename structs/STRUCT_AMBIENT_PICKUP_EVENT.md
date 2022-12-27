# STRUCT_AMBIENT_PICKUP_EVENT

## Fields
* **PICKUP_TYPE** pickupType
* **INT** pickupAmount
* **PLAYER_INDEX** playerIndex
* **MODEL_NAMES** pickupModel
* **BOOL** playerGift
* **BOOL** droppedByPed
* **INT** pickupCollected
* **INT** pickupIndex

## Notes
This structure can be used to retrieve information from these events:
- EVENT_NETWORK_PLAYER_COLLECTED_AMBIENT_PICKUP.
Should be passed in GET_EVENT_DATA() as the data STRUCT member.