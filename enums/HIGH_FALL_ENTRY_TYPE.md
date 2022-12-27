# HIGH_FALL_ENTRY_TYPE

## Summary
High fall task entry behaviour

## Values
* HIGHFALL_IN_AIR: Standard behaviour. Pitches forward in the direction of movement (standard behaviour when a ped is warped into the air and dropped)
* HIGHFALL_VAULT: not for use by script
* HIGHFALL_FROM_CAR_HIT: Normally used when then ped has been hit by a car and falls off.
* HIGHFALL_SLOPE_SLIDE: Used when the ped activates from an animated slide down a slope.
* HIGHFALL_TEETER_EDGE: Will make the ped teeter in the direction of movement (as if at an edge). Best used for knocking peds off of the edge of buildings from standing / etc.
* HIGHFALL_SPRINT_EXHAUSTED: Equivalent to fainting from running out of energy
* HIGHFALL_STUNT_JUMP: Equivalent to the in air stunt jump activation (i.e. pressing circle / B whilst jumping)

## Notes
Affects how the ped will behave when first starting the nm high fall task.
this only affects the starting behaviour of the fall.
ONgoing behaviour will be determined by height from the ground / collisions / etc.