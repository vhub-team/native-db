# PLACEMENT_FLAG

## Values
* PLACEMENT_FLAG_MAP: only used in MP. This is used for pickups that are created locally on each machine and only networked when collected.
* PLACEMENT_FLAG_FIXED: sets the pickup as fixed so it cannot move
* PLACEMENT_FLAG_REGENERATES: sets the pickup as regenerating
* PLACEMENT_FLAG_SNAP_TO_GROUND: places the pickup on the ground
* PLACEMENT_FLAG_ORIENT_TO_GROUND: orientates the pickup correctly on the ground
* PLACEMENT_FLAG_LOCAL_ONLY: creates the pickup non-networked
* PLACEMENT_FLAG_BLIPPED_SIMPLE: gives the pickup a simple blip
* PLACEMENT_FLAG_BLIPPED_COMPLEX: gives the pickup a complex blip
* PLACEMENT_FLAG_UPRIGHT: Some pickups need to be orientated differently to lie on the ground properly. Use this flag if your pickup is not lying correctly.
* PLACEMENT_FLAG_ROTATE: Pickup will rotate
* PLACEMENT_FLAG_FACEPLAYER: Pickup will always face the player
* PLACEMENT_FLAG_HIDE_IN_PHOTOS: Pickup will be hidden when the player is using the phone camera
* PLACEMENT_FLAG_PLAYER_GIFT: The pickup is being dropped as a gift to another player
* PLACEMENT_FLAG_ON_OBJECT: The pickup is lying on an object and probes for that when snapping or orientating to ground
* PLACEMENT_FLAG_GLOW_IN_TEAM: Set pickups to glow even if pickup can't be picked up because of team checks
* PLACEMENT_CREATION_FLAG_AUTO_EQUIP: if set on a weapon pickup, it will auto equip the picked up weapon. It will ignore autoswap logic
* PLACEMENT_CREATION_FLAG_COLLECTABLE_IN_VEHICLE: if set the pickup can be collected by a ped in a vehicle
* PLACEMENT_CREATION_FLAG_DISABLE_WEAPON_HD_MODEL: if set the weapon pickup will render SD model only (HD<->SD model switch will be disabled)
* PLACEMENT_CREATION_FLAG_FORCE_DEFERRED_MODEL: if set the pickup will render as deferred model (no transparency/alpha blending in this render mode)