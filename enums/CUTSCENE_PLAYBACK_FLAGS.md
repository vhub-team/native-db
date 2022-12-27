# CUTSCENE_PLAYBACK_FLAGS

## Values
* CUTSCENE_REQUESTED_FROM_WIDGET = 1
* CUTSCENE_REQUESTED_DIRECTLY_FROM_SKIP
* CUTSCENE_REQUESTED_FROM_Z_SKIP = 4
* CUTSCENE_REQUESTED_IN_MISSION = 8
* CUTSCENE_PLAYBACK_FORCE_LOAD_AUDIO_EVENT = 16: HACK HACK HACK - see B* 3705257. In some rare cases in GTA it's possible for the load audio event to not get sent from the data, which can lead to the cutscene audio failing. This flag can be used to fix that problem in those specific cases. So far this is only for a single scene - bs_2b_mcs_3.