# CUTSCENE_ENTITY_OPTION_FLAGS

## Values
* CEO_NONE
* CEO_PRESERVE_FACE_BLOOD_DAMAGE: If specified, leave facial blood decals when the cutscene starts. These are removed by default.
* CEO_PRESERVE_BODY_BLOOD_DAMAGE: If specified, leave body damage decals when the cutscene starts. By default these are reduced, but not completely removed
* CEO_REMOVE_BODY_BLOOD_DAMAGE = 4: If specified, body damage decals will be completely cleared (instead of just reduced) when the cutscene starts
* CEO_CLONE_DAMAGE_TO_CS_MODEL = 8: If specified, if you have a reposition only entity, then any damage is cloned from that to the animated entity
* CEO_RESET_CAPSULE_AT_END = 16: If specified, the character's capsule will be reset so that it is vertical at the end of cutscenes.
* CEO_IS_CASCADE_SHADOW_FOCUS_ENTITY_DURING_EXIT = 32: If specified, this entity will be used as the focus for the cascade shadow system during seamless exits.  Required when characters get into vehicles at the end of cutscenes.
* CEO_IGNORE_MODEL_NAME = 64: If specified, force the cutscene to animate the registered ped using the given scene handle, even if the model name doesn't match.
* CEO_PRESERVE_HAIR_SCALE = 128: If specified, the characters hair scale is frozen when the cutscene starts.
* CEO_INSTANT_HAIR_SCALE_SETUP = 256: If specified, the characters hair scale will snap to it's new value when the cutscene starts, otherwise it will lerp.
* CEO_DONT_RESET_PED_CAPSULE = 512
* CEO_UPDATE_AS_REAL_DOOR = 1024