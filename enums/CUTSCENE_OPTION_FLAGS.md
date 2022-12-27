# CUTSCENE_OPTION_FLAGS

## Values
* CUTSCENE_NO_OPTIONS
* CUTSCENE_PLAYER_TARGETABLE
* CUTSCENE_PROCGRASS_FORCE_HD
* CUTSCENE_DO_NOT_REPOSITION_PLAYER_TO_SCENE_ORIGIN = 4
* CUTSCENE_NO_WIDESCREEN_BORDERS = 8
* CUTSCENE_DELAY_ENABLING_PLAYER_CONTROL_FOR_UP_TO_DATE_GAMEPLAY_CAMERA = 16
* CUTSCENE_DO_NOT_CLEAR_PICKUPS = 32
* CUTSCENE_CREATE_OBJECTS_AT_SCENE_ORIGIN = 64
* CUTSCENE_PLAYER_EXITS_IN_A_VEHICLE = 128
* CUTSCENE_PLAYER_FP_FLASH_MICHAEL = 256: Use Michael's colour coded first person transition flash if exiting the cutscene into first person (rather than the neutral flash)
* CUTSCENE_PLAYER_FP_FLASH_FRANKLIN = 512: Use Franklin's colour coded first person transition flash if exiting the cutscene into first person (rather than the neutral flash)
* CUTSCENE_PLAYER_FP_FLASH_TREVOR = 1024: Use Trevor's colour coded first person transition flash if exiting the cutscene into first person (rather than the neutral flash)
* CUTSCENE_SUPPRESS_FP_TRANSITION_FLASH = 2048: Disable the first person transition flash at the end of the cutscene (use to disable the auto flash if you're anbout to transition to a scripted cam, etc)
* CUTSCENE_USE_FP_CAMERA_BLEND_OUT_MODE = 4096: Allow the special first person only blend out mode when doing a standard camera blend back to first person mode.
* CUTSCENE_EXITS_INTO_COVER = 8192: Informs the cutscene that the player is exiting into cover, so we can disable the first person flash when appropriate.