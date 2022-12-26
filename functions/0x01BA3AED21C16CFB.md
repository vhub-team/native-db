# PHYSICS::SET_DISABLE_FRAG_DAMAGE

## Summary
Prevent a specific prop from damaging, or, allow a specific prop to break when all other of its type cannot.

## Parameters
* **ENTITY_INDEX** entityId:
Id of prop entity.
This functionality could be used on vehicles but isn't intended for that and will assert and fail at the moment.
* **BOOL** disableDamage:
If true, the given entity won't be allowed to damage ever.
If false, it will override the flag that prevents all fragments of this type from damaging.