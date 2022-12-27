# STRUCT_VEHICLE_UNDRIVABLE_EVENT

## Fields
* **VEHICLE_INDEX** vehicleId
* **ENTITY_INDEX** damagerIndex
* **INT** weaponUsed

## Notes
This structure can be used to retrieve information from these events:
- EVENT_NETWORK_DAMAGE_ENTITY.
Should be passed in GET_EVENT_DATA() as the data STRUCT member.