# ENAV_SCRIPT_FLAGS

## Values
* ENAV_DEFAULT
* ENAV_NO_STOPPING: *******************************************************************
ENAV_NO_STOPPING
Will ensure the ped continues to move whilst waiting for the path
to be found, and will not slow down at the end of their route.
* ENAV_ADV_SLIDE_TO_COORD_AND_ACHIEVE_HEADING_AT_END: **********************************************************************
ENAV_SLIDE_TO_COORD_AND_ACHIEVE_HEADING_AT_END
Performs a slide-to-coord at the and of the task. This requires that
the accompanying NAVDATA structure has the 'm_fSlideToCoordHeading'
member set correctly.
* ENAV_GO_FAR_AS_POSSIBLE_IF_TARGET_NAVMESH_NOT_LOADED = 4: ***********************************************************************
ENAV_GO_FAR_AS_POSSIBLE_IF_TARGET_NAVMESH_NOT_LOADED
If the navmesh is not loaded in under the target position, then this
will cause the ped to get as close as is possible on whatever navmesh
is loaded.  The navmesh must still be loaded at the path start.
* ENAV_ALLOW_SWIMMING_UNDERWATER = 8: ********************************************************************
ENAV_ALLOW_SWIMMING_UNDERWATER
Will allow navigation underwater - by default this is not allowed
* ENAV_KEEP_TO_PAVEMENTS = 16: ************************************************************************
ENAV_KEEP_TO_PAVEMENTS
Will only allow navigation on pavements.  If the path starts or ends
off the pavement, the command will fail.  Likewise if no pavement-only
route can be found even although the start and end are on pavement.
* ENAV_NEVER_ENTER_WATER = 32: ******************************************************
ENAV_NEVER_ENTER_WATER
Prevents the path from entering water at all
* ENAV_DONT_AVOID_OBJECTS = 64: ***************************************************************************
ENAV_DONT_AVOID_OBJECTS
Disables object-avoidance for this path.  The ped may still make minor
steering adjustments to avoid objects, but will not pathfind around them.
* ENAV_ADVANCED_USE_MAX_SLOPE_NAVIGABLE = 128: ***************************************************************************
ENAV_ADVANCED_USE_MAX_SLOPE_NAVIGABLE
Specifies that the navmesh route will only be able to traverse up slopes
which are under the angle specified in the m_fMaxSlopeNavigable member of
the accompanying NAVDATA structure.
* ENAV_STOP_EXACTLY = 512: ***************************************************************************
ENAV_STOP_EXACTLY [ DEPRACATED ]
DERPACATED : Peds will always attempt to stop exactly, unless the new
flag ENAV_SUPPRESS_EXACT_STOP is specified..
ENAV_STOP_EXACTLY will do nothing, and at some point will be removed.
* ENAV_ACCURATE_WALKRUN_START = 1024: ***************************************************************************
ENAV_ACCURATE_WALKRUN_START
The entity will look ahead in its path for a longer distance to make the
walk/run start go more in the right direction
Especially useful when ped start from inside an object boundaries
But has to be used carefully, the ped might be more prone to walk into
things during the walk/runstart with this flag set
* ENAV_DONT_AVOID_PEDS = 2048: ***************************************************************************
ENAV_DONT_AVOID_PEDS
Disables ped-avoidance for this path while we move.
* ENAV_DONT_ADJUST_TARGET_POSITION = 4096: **********************************************************************************************
ENAV_DONT_ADJUST_TARGET_POSITION
If target pos is inside the boundingbox of an object it will otherwise be pushed out
TO BE USED WITH EXTREME CAUTION!!! Only if asked specificly to use this
* ENAV_SUPPRESS_EXACT_STOP = 8192: **************************************************************************************
ENAV_SUPPRESS_EXACT_STOP
Turns off the default behaviour, which is to stop exactly at the target position.
Occasionally this can cause footsliding/skating problems.
* ENAV_ADVANCED_USE_CLAMP_MAX_SEARCH_DISTANCE = 16384: ******************************************************************************************
ENAV_ADVANCED_USE_CLAMP_MAX_SEARCH_DISTANCE
Prevents the path-search from finding paths outside of this search distance.
This can be used to prevent peds from finding long undesired routes.
The value 'm_fClampMaxSearchDistance' must be set in the accompanying NAVDATA structure,
and this value must be between 1 and 255 (corresponds to game units).
The seach area is limited to an axis aligned box containing a sphere of the given radius.
* ENAV_PULL_FROM_EDGE_EXTRA = 32768: **************************************************************************************
ENAV_PULL_FROM_EDGE_EXTRA
Pulls out the paths from edges at corners for a longer distance, to prevent peds walking
into stuff. This could in rare cases generate bigger quirks in the paths so use only
when it is necessary