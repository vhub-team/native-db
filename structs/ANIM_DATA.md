# ANIM_DATA

## Fields
* **ANIMATION_PLAYBACK_TYPE** type = 0
* **STRING** dictionary0 = null: The dictionary name containing the first anim (used in single clip and three way blend)
* **STRING** anim0 = null: The first anim name
* **FLOAT** phase0 = 0: The starting phase
* **FLOAT** rate0 = 1: The rate (speed) to play back the anim at. 1.0 is standard rate
* **FLOAT** weight0 = 1: How blended in the anim will be. When using multiple anims this can be used to affect
* **STRING** dictionary1 = null: The dictionary name containing the second anim (only used in three way blend)
* **STRING** anim1 = null: The second anim name
* **FLOAT** phase1 = 0: The starting phase
* **FLOAT** rate1 = 1: The rate (speed) to play back the anim at. 1.0 is standard rate
* **FLOAT** weight1 = 1: How blended in the anim will be. When using multiple anims this can be used to affect
* **STRING** dictionary2 = null: The dictionary name containing the third anim (only used in 3 way blend)
* **STRING** anim2 = null: The third anim name
* **FLOAT** phase2 = 0: The starting phase
* **FLOAT** rate2 = 1: The rate (speed) to play back the anim at. 1.0 is standard rate
* **FLOAT** weight2 = 1: How blended in the anim will be. When using multiple anims this can be used to affect
* **INT** filter = 0: The hash of the name of the filter to apply at this priority level
* **FLOAT** blendInDelta = 0.125: How fast should this priority level be blended in
* **FLOAT** blendOutDelta = 0.125: How fast should this priority level be blended out at the end
* **INT** timeToPlay = -1: Time (in milliseconds) to play this priority level for
* **ANIMATION_FLAGS** flags = 0: Animation flags for this level
* **IK_CONTROL_FLAGS** ikFlags = 0: Ik control flags for this level