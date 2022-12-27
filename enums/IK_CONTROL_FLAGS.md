# IK_CONTROL_FLAGS

## Values
* AIK_NONE: No Ik control during the task
* AIK_DISABLE_LEG_IK: Disable leg ik during the task
* AIK_DISABLE_ARM_IK: Disable arm ik during the task
* AIK_DISABLE_HEAD_IK = 4: Disable head ik during the task
* AIK_DISABLE_TORSO_IK = 8: Disable torso ik during the task
* AIK_DISABLE_TORSO_REACT_IK = 16: Disable torso react ik during the task
* AIK_USE_LEG_ALLOW_TAGS = 32: Use anim leg allow tags to determine when leg ik is enabled
* AIK_USE_LEG_BLOCK_TAGS = 64: Use anim leg block tags to determine when leg ik is disabled
* AIK_USE_ARM_ALLOW_TAGS = 128: Use anim arm allow tags to determine when ik is enabled
* AIK_USE_ARM_BLOCK_TAGS = 256: Use anim arm block tags to determine when ik is disabled
* AIK_PROCESS_WEAPON_HAND_GRIP = 512: Process the left hand weapon grip ik during the task
* AIK_USE_FP_ARM_LEFT = 1024: Use first person ik setup for left arm (cannot be used with AIK_DISABLE_ARM_IK)
* AIK_USE_FP_ARM_RIGHT = 2048: Use first person ik setup for right arm (cannot be used with AIK_DISABLE_ARM_IK)
* AIK_DISABLE_TORSO_VEHICLE_IK = 4096: Disable torso vehicle ik during the task
* AIK_LINKED_FACIAL = 8192: Searches the dictionary of the clip being played for another clip with the _facial suffix to be played as a facial animation.