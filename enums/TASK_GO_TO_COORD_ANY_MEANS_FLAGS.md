# TASK_GO_TO_COORD_ANY_MEANS_FLAGS

## Values
* TGCAM_DEFAULT
* TGCAM_IGNORE_VEHICLE_HEALTH: Ignore the health of the vehicle (default behaviour is to not use any vehicle with less than 600 health)
* TGCAM_CONSIDER_ALL_NEARBY_VEHICLES: Considers all nearby vehicles for suitability (default behaviour is to consider only the vehicle closest to the ped)
* TGCAM_PROPER_IS_DRIVEABLE_CHECK = 4: Performs the same tests as is done in IS_VEHICLE_DRIVEABLE (default behaviour is to just check the vehicle's health)
* TGCAM_REMAIN_IN_VEHICLE_AT_DESTINATION = 8: Instructs the ped to remain in the vehicle at the end, so that multiple tasks can be chained together (see url:bugstar:1778387)
* TGCAM_NEVER_ABANDON_VEHICLE = 16: Ped will never abandon the vehicle it is in (see url:bugstar:2196034)
* TGCAM_NEVER_ABANDON_VEHICLE_IF_MOVING = 32: Ped will never abandon the vehicle it is in if vehicle is moving (see url:bugstar:2225456)
* TGCAM_USE_AI_TARGETING_FOR_THREATS = 64: Peds will use the targeting system for threats and register any threats they can attack (rather than just using the closest targetable ped)