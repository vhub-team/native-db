# DRIVINGMODE

## Values
* DF_StopForCars = 1
* DF_StopForPeds
* DF_SwerveAroundAllCars = 4
* DF_SteerAroundStationaryCars = 8
* DF_SteerAroundPeds = 16
* DF_SteerAroundObjects = 32
* DF_DontSteerAroundPlayerPed = 64
* DF_StopAtLights = 128
* DF_GoOffRoadWhenAvoiding = 256
* DF_DriveIntoOncomingTraffic = 512
* DF_DriveInReverse = 1024
* DF_UseWanderFallbackInsteadOfStraightLine = 2048: if pathfinding fails, cruise randomly instead of going on a straight line
* DF_AvoidRestrictedAreas = 4096
* DF_PreventBackgroundPathfinding = 8192: These only work on MISSION_CRUISE
* DF_AdjustCruiseSpeedBasedOnRoadSpeed = 16384
* DF_UseShortCutLinks = 262144
* DF_ChangeLanesAroundObstructions = 524288
* DF_UseSwitchedOffNodes = 2097152: cruise tasks ignore this anyway--only used for goto's
* DF_PreferNavmeshRoute = 4194304: if you're going to be primarily driving off road
* DF_PlaneTaxiMode = 8388608: Only works for planes using MISSION_GOTO, will cause them to drive along the ground instead of fly
* DF_ForceStraightLine = 16777216
* DF_UseStringPullingAtJunctions = 33554432
* DF_AvoidHighways = 536870912
* DF_ForceJoinInRoadDirection = 1073741824
* DRIVINGMODE_STOPFORCARS = 786603: standard driving mode. stops for cars, peds, and lights, goes around stationary obstructions
DF_StopForCars|DF_StopForPeds|DF_SteerAroundObjects|DF_SteerAroundStationaryCars|DF_StopAtLights|DF_UseShortCutLinks|DF_ChangeLanesAroundObstructions,
* DRIVINGMODE_STOPFORCARS_STRICT = 262275: like the above, but doesn't steer around anything in its way--will only wait instead.
DF_StopForCars|DF_StopForPeds|DF_StopAtLights|DF_UseShortCutLinks,
* DRIVINGMODE_AVOIDCARS = 786469: default "alerted" driving mode. drives around everything, doesn't obey lights
DF_SwerveAroundAllCars|DF_SteerAroundObjects|DF_UseShortCutLinks|DF_ChangeLanesAroundObstructions|DF_StopForCars,
* DRIVINGMODE_AVOIDCARS_RECKLESS = 786468: very erratic driving. difference between this and AvoidCars is that it doesn't use the brakes at ALL to help with steering
DF_SwerveAroundAllCars|DF_SteerAroundObjects|DF_UseShortCutLinks|DF_ChangeLanesAroundObstructions,
* DRIVINGMODE_PLOUGHTHROUGH = 262144: smashes through everything
DF_UseShortCutLinks
* DRIVINGMODE_STOPFORCARS_IGNORELIGHTS = 786475: drives normally except for the fact that it ignores lights
DF_StopForCars|DF_SteerAroundStationaryCars|DF_StopForPeds|DF_SteerAroundObjects|DF_UseShortCutLinks|DF_ChangeLanesAroundObstructions
* DRIVINGMODE_AVOIDCARS_OBEYLIGHTS = 786597: try to swerve around everything, but stop for lights if necessary
DF_SwerveAroundAllCars|DF_StopAtLights|DF_SteerAroundObjects|DF_UseShortCutLinks|DF_ChangeLanesAroundObstructions|DF_StopForCars
* DRIVINGMODE_AVOIDCARS_STOPFORPEDS_OBEYLIGHTS = 786599: swerve around cars, be careful around peds, and stop for lights
DF_SwerveAroundAllCars|DF_StopAtLights|DF_StopForPeds|DF_SteerAroundObjects|DF_UseShortCutLinks|DF_ChangeLanesAroundObstructions|DF_StopForCars,