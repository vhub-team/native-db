# STRUCT_ENTITY_DAMAGE_EVENT

## Fields
* **ENTITY_INDEX** v
* **ENTITY_INDEX** d
* **FLOAT** d
* **FLOAT** e
* **BOOL** v
* **BOOL** v
* **INT** w
* **FLOAT** v
* **FLOAT** d
* **BOOL** i: TRUE if the damager is responsible for the collision - Only set on vehicle collisions.
* **BOOL** i: TRUE if the damage is a headshot.
* **BOOL** i: TRUE if the damage is "with melee" - using a whip will set this to true.
* **INT** h: 8 bit material id

## Notes
This structure can be used to retrieve information from these events:
- EVENT_NETWORK_DAMAGE_ENTITY.
Should be passed in GET_EVENT_DATA() as the data STRUCT member.