# RAGDOLL_BLOCKING_FLAGS

## Summary
used to disable ragdoll behaviours from various sources (use with SET_RAGDOLL_BLOCKING_FLAGS and CLEAR_RAGDOLL_BLOCKING_FLAGS)

## Values
* RBF_NONE
* RBF_BULLET_IMPACT
* RBF_VEHICLE_IMPACT
* RBF_FIRE = 4
* RBF_ELECTROCUTION = 8
* RBF_PLAYER_IMPACT = 16: Blocks ragdoll activation from any impact with a ped (player characters running into the ped, or active ragdolls colliding with them)
* RBF_EXPLOSION = 32
* RBF_IMPACT_OBJECT = 64
* RBF_MELEE = 128
* RBF_RUBBER_BULLET = 256
* RBF_FALLING = 512
* RBF_WATER_JET = 1024
* RBF_DROWNING = 2048
* RBF_ALLOW_BLOCK_DEAD_PED = 4096: allow blocking of ragdoll activation for dead peds (by default dead peds' ragdolls are allowed to activate regardless of how these flags have been set)
* RBF_PLAYER_BUMP = 8192: Blocks ragdoll activation from an animated player running into the character (but not from collisions with other ragdolls)
* RBF_PLAYER_RAGDOLL_BUMP = 16384: Blocks ragdoll activation from a ragdolling player colliding with the character (but not from animated player bumps or collisions with active non-player ragdolls)
* RBF_PED_RAGDOLL_BUMP = 32768: Blocks ragdoll activation from a ragdolling non-player colliding with the character (but not from any collisions with players, ragdolling or otherwise)
* RBF_VEHICLE_GRAB = 65536: Blocks ragdoll activation from grabbing a vehicle door whilst it pulls away