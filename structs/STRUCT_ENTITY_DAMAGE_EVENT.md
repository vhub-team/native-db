# STRUCT_ENTITY_DAMAGE_EVENT

## Fields
* **ENTITY_INDEX** victimIndex
* **ENTITY_INDEX** damagerIndex
* **FLOAT** damage
* **FLOAT** enduranceDamage
* **BOOL** victimIncapacitated
* **BOOL** victimDestroyed
* **INT** weaponUsed
* **FLOAT** victimSpeed
* **FLOAT** damagerSpeed
* **BOOL** isResponsibleForCollision: TRUE if the damager is responsible for the collision - Only set on vehicle collisions.
* **BOOL** isHeadShot: TRUE if the damage is a headshot.
* **BOOL** isWithMeleeWeapon: TRUE if the damage is "with melee" - using a whip will set this to true.
* **INT** hitMaterial: 8 bit material id

## Notes
This structure can be used to retrieve information from these events:
- EVENT_NETWORK_DAMAGE_ENTITY.
Should be passed in GET_EVENT_DATA() as the data STRUCT member.