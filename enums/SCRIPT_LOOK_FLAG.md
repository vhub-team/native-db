# SCRIPT_LOOK_FLAG

## Values
* SLF_DEFAULT
* SLF_SLOW_TURN_RATE: turn the head toward the target slowly
* SLF_FAST_TURN_RATE: turn the head toward the target quickly
* SLF_EXTEND_YAW_LIMIT = 4: wide yaw head limits
* SLF_EXTEND_PITCH_LIMIT = 8: wide pitch head limit
* SLF_WIDEST_YAW_LIMIT = 16: widest yaw head limit
* SLF_WIDEST_PITCH_LIMIT = 32: widest pitch head limit
* SLF_NARROW_YAW_LIMIT = 64: narrow yaw head limits
* SLF_NARROW_PITCH_LIMIT = 128: narrow pitch head limit
* SLF_NARROWEST_YAW_LIMIT = 256: narrowest yaw head limit
* SLF_NARROWEST_PITCH_LIMIT = 512: narrowest pitch head limit
* SLF_USE_TORSO = 1024: use the torso aswell as the neck and head (currently disabled)
* SLF_WHILE_NOT_IN_FOV = 2048: keep tracking the target even if they are not in the hard coded FOV
* SLF_USE_CAMERA_FOCUS = 4096: use the camera as the target
* SLF_USE_EYES_ONLY = 8192: only track the target with the eyes
* SLF_USE_LOOK_DIR = 16384: use information in look dir DOF
* SLF_FROM_SCRIPT = 32768: internal use only
* SLF_USE_REF_DIR_ABSOLUTE = 65536: use absolute reference direction mode for solver