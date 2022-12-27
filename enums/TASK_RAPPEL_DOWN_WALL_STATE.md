# TASK_RAPPEL_DOWN_WALL_STATE

## Values
* RAPPEL_STATE_INVALID = -1: The ped isn't currently running this task
* RAPPEL_STATE_CLIMBING_WALL = 1: Playing the initial climb intro animation
* RAPPEL_STATE_IDLE = 3: Not moving or jumping, just hanging idle
* RAPPEL_STATE_IDLE_AT_DESTINATION_Z: At the lowest point allowed and waiting to smash the window
* RAPPEL_STATE_DESCENDING: Moving down
* RAPPEL_STATE_JUMPING: Jumping outwards (can also be moving down based on player stick input)
* RAPPEL_STATE_SMASHINGWINDOW: Playing the window smash animation