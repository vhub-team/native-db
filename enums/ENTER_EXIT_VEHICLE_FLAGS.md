# ENTER_EXIT_VEHICLE_FLAGS

## Summary
Set of flags to define the behaviour of the enter and exit vehicle tasks

## Values
* ECF_RESUME_IF_INTERRUPTED = 1: If the task is interupted (bumped, shot), dont resume.
* ECF_WARP_ENTRY_POINT: Warps ped to entry point ready to open the door/enter seat
* ECF_JACK_ANYONE = 8: Jack the ped occupying the vehicle, regardless of relationship status
* ECF_WARP_PED = 16: Warp the ped onto the vehicle
* ECF_DONT_WAIT_FOR_VEHICLE_TO_STOP = 64: Dont wait for the vehicle to stop before exiting
* ECF_DONT_CLOSE_DOOR = 256: Dont close the vehicle door
* ECF_WARP_IF_DOOR_IS_BLOCKED = 512: Allow ped to warp to the seat if entry is blocked
* ECF_JUMP_OUT = 4096: Jump out of the vehicle
* ECF_DONT_DEFAULT_WARP_IF_DOOR_BLOCKED = 65536: TASK_LEAVE_ANY_VEHICLE auto defaults the ECF_WARP_IF_DOOR_IS_BLOCKED, set this flag to not set that
* ECF_USE_LEFT_ENTRY = 131072: Use entry/exit point on the left hand side
* ECF_USE_RIGHT_ENTRY = 262144: Use entry/exit point on the right hand side
* ECF_JUST_PULL_PED_OUT = 524288: When jacking just pull the ped out, but don't get in
* ECF_BLOCK_SEAT_SHUFFLING = 1048576: Disable shuffling - forces ped to use direct door only
* ECF_WARP_IF_SHUFFLE_LINK_IS_BLOCKED = 4194304: Allow ped to warp if the shuffle link to that seat is blocked by someone
* ECF_DONT_JACK_ANYONE = 8388608: Never jack anyone when entering/exiting
* ECF_WAIT_FOR_ENTRY_POINT_TO_BE_CLEAR = 16777216: Wait for our entry point to be clear of peds before exiting