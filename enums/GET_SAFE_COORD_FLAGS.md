# GET_SAFE_COORD_FLAGS

## Values
* GSC_FLAG_DEFAULT: Default
* GSC_FLAG_ONLY_PAVEMENT: Only navmesh polygons marked as pavement
* GSC_FLAG_NOT_ISOLATED: Only navmesh polygons not marked as "isolated"
* GSC_FLAG_NOT_INTERIOR = 4: No navmesh polygons created from interiors
* GSC_FLAG_NOT_WATER = 8: No navmesh polygons marked as water
* GSC_FLAG_ONLY_NETWORK_SPAWN = 16: Only navmesh polygons marked as "network spawn candidate"
* GSC_FLAG_USE_FLOOD_FILL = 32: Specify whether to use a flood-fill from the starting position, as opposed to scanning all polygons within the search volume