# EWAYPOINT_FOLLOW_FLAGS

## Values
* EWAYPOINT_DEFAULT
* EWAYPOINT_TURN_TO_FACE_WAYPOINT_HEADING_AT_END: Turns the ped to face the heading of the final waypoint when the task ends
* EWAYPOINT_NAVMESH_TO_INITIAL_WAYPOINT: If necessary, uses the navmesh to get to the initial waypoint
* EWAYPOINT_NAVMESH_BACK_TO_WAYPOINT_IF_LEFT_ROUTE = 4: If the ped has left the route, will use the navmesh to return to last position
* EWAYPOINT_START_FROM_CLOSEST_POINT = 8: Will start (or resume if interrupted) the waypoint playback from the closest segment to the ped
* EWAYPOINT_VEHICLES_USE_AI_SLOWDOWN = 16: Vehicle AI will calculate speeds for turns instead of using the recorded values
* EWAYPOINT_DO_NOT_RESPOND_TO_COLLISION_EVENTS = 32: Ignore all collisions with other peds, players, objects and vehicles
* EWAYPOINT_DO_NOT_SLOW_FOR_CORNERS = 64: Ped will not slow for corners
* EWAYPOINT_START_TASK_INITIALLY_AIMING = 128: Ped starts the task aiming at a position directly ahead of him. (avoids the ped lowering weapon briefly when first given this task)
* EWAYPOINT_START_TASK_EXACTSTOP = 256: Ped will to an exact stop at the end of the route
* EWAYPOINT_USE_TIGHTER_TURN_SETTINGS = 512: Ped will be able to turn faster than normal, to help negotiate awkward spaces
* EWAYPOINT_ALLOW_STEERING_AROUND_PEDS = 1024: Ped will perform ped/ped avoidance (unless playback is set as non-interruptible)
* EWAYPOINT_SUPPRESS_EXACTSTOP = 2048: Suppress exact stops
* EWAYPOINT_SLOW_MORE_FOR_CORNERS = 4096: Dials up the amount which peds can slow to take corners - helps fix issues with peds running into doorframes, etc