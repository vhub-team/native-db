# SET_PLAYER_CONTROL_FLAGS

## Values
* SPC_NONE: No flags set
* SPC_AMBIENT_SCRIPT = 2: whether this was called by an ambient script
* SPC_CLEAR_TASKS = 4: also clears the player's taks
* SPC_REMOVE_FIRES = 8: removes fires in the vicinity of the player
* SPC_REMOVE_EXPLOSIONS = 16: removes explosions in the vicinity of the player
* SPC_REMOVE_PROJECTILES = 32: removes all projectiles
* SPC_DEACTIVATE_GADGETS = 64: deactivates all the player's gadgets
* SPC_REENABLE_CONTROL_ON_DEATH = 128: re-enables the player's controls if they die whilst not under control
* SPC_LEAVE_CAMERA_CONTROL_ON = 256: Leaves the camera control on when disabling player control (Off by default if removing player control, turned back on when resuming control)
* SPC_ALLOW_PLAYER_DAMAGE = 512: Allow the player to be damaged even if his control is turned off.
* SPC_DONT_STOP_OTHER_CARS_AROUND_PLAYER = 1024: Tells nearby vehicles to stop moving or get out of the way
* SPC_PREVENT_EVERYBODY_BACKOFF = 2048: Prevent everybody from backing off when player controls are disabled
* SPC_ALLOW_PAD_SHAKE = 4096: Allows pad to rumble