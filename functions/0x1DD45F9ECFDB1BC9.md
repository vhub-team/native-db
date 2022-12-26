# TASK::TASK_GO_TO_COORD_ANY_MEANS_EXTRA_PARAMS

## Summary
Tells a ped to go to a coord by any means

## Parameters
* **PED_INDEX** pedIndex
* **FLOAT** coorsX
* **FLOAT** coorsY
* **FLOAT** coorsZ
* **FLOAT** moveBlendRatio
* **VEHICLE_INDEX** vehicleIndex
* **BOOL** useLongRangeVehiclePathing = false
* **DRIVINGMODE** drivingFlags = 786603
* **FLOAT** maxRangeToShootTargets = -1
* **FLOAT** extraVehToTargetDistToPreferVeh = 0
* **FLOAT** driveStraightLineDistance = 20: Allow script to define the distance at which vehicles switch to straight-line pathfinding; default to same value as in code (20m)
* **TASK_GO_TO_COORD_ANY_MEANS_FLAGS** extraFlags = 0:
Bitset of values from the TASK_GO_TO_COORD_ANY_MEANS_FLAGS enumeration fWarpTimeMS - Warps ped to target position if ped gets stuck for this amount of time (in milliseconds) (only if fWarpTimeMS != -1.0).
Only works for peds on foot or in a car/bike (not aircraft/boats).
Ped will be removed from vehicle on warp.
* **FLOAT** warpTimerMS = -1