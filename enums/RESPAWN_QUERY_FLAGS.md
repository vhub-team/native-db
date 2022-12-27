# RESPAWN_QUERY_FLAGS

## Values
* RESPAWN_QUERY_FLAG_DEFAULT
* RESPAWN_QUERY_FLAG_IGNORE_TARGET_HEADING = 2: instructs query to ignore the target position; returned headings will be in any direction, but facing away from walls if possible
* RESPAWN_QUERY_FLAG_PREFER_CLOSE_TO_SPAWN_ORIGIN = 4: prefer positions which are closer to the origin position passed in
* RESPAWN_QUERY_FLAG_MAY_SPAWN_IN_INTERIOR = 8: allow spawn points to be chosen in interiors
* RESPAWN_QUERY_FLAG_MAY_SPAWN_IN_EXTERIOR = 16: allow spawn points to be chosen in exterior (main map) locations
* RESPAWN_QUERY_FLAG_PREFER_WIDE_FOV = 32: prefer spawn points with wider fovs
* RESPAWN_QUERY_FLAG_PREFER_TEAM_BUNCHING = 64: prefer spawn points closer to friendly bunches and farther away from enemy bunches
* RESPAWN_QUERY_FLAG_PREFER_ENEMY_PLAYERS_FARTHER = 128: prefer spawn points away from enemy players
* RESPAWN_QUERY_FLAG_PREFER_FRIENDLY_PLAYERS_CLOSER = 256: prefer spawn points closer to friendly players (but not too close)
* RESPAWN_QUERY_FLAG_PREFER_ENEMY_AI_FARTHER = 512: prefer spawn points away from enemy ai
* RESPAWN_QUERY_FLAG_PREFER_FRIENDLY_AI_CLOSER = 1024: prefer spawn points closer to friendly ai (but not too close)
* RESPAWN_QUERY_FLAG_PREFER_RANDOMNESS = 2048: adds a bit of randomness