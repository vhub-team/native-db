# ANIM_DATA

## Fields
* **ANIMATION_PLAYBACK_TYPE** t = 0
* **STRING** d = null: The dictionary name containing the first anim (used in single clip and three way blend)
* **STRING** a = null: The first anim name
* **FLOAT** p = 0: The starting phase
* **FLOAT** r = 1: The rate (speed) to play back the anim at. 1.0 is standard rate
* **FLOAT** w = 1: How blended in the anim will be. When using multiple anims this can be used to affect
* **STRING** d = null: The dictionary name containing the second anim (only used in three way blend)
* **STRING** a = null: The second anim name
* **FLOAT** p = 0: The starting phase
* **FLOAT** r = 1: The rate (speed) to play back the anim at. 1.0 is standard rate
* **FLOAT** w = 1: How blended in the anim will be. When using multiple anims this can be used to affect
* **STRING** d = null: The dictionary name containing the third anim (only used in 3 way blend)
* **STRING** a = null: The third anim name
* **FLOAT** p = 0: The starting phase
* **FLOAT** r = 1: The rate (speed) to play back the anim at. 1.0 is standard rate
* **FLOAT** w = 1: How blended in the anim will be. When using multiple anims this can be used to affect
* **INT** f = 0: The hash of the name of the filter to apply at this priority level
* **FLOAT** b = 0.125: How fast should this priority level be blended in
* **FLOAT** b = 0.125: How fast should this priority level be blended out at the end
* **INT** t = -1: Time (in milliseconds) to play this priority level for
* **ANIMATION_FLAGS** f = 0: Animation flags for this level
* **IK_CONTROL_FLAGS** i = 0: Ik control flags for this level