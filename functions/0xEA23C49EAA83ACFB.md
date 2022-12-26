# NETWORK::NETWORK_RESURRECT_LOCAL_PLAYER

## Summary
Revives our local player who was previously dead. CALL THIS ONCE WHEN YOU WANT TO RESURRECT THE PLAYER (THIS DOES NOT NEED TO BE CALLED EVERY FRAME)

## Parameters
* **FLOAT** posX
* **FLOAT** posY
* **FLOAT** posZ
* **FLOAT** heading
* **INT** invicibilityTime = 0: This is the length of time in millisecs that the player will be invincible for after resurrection
* **BOOL** leaveDeadPed = true
* **BOOL** unpauseRenderPhase = true
* **INT** spawnLocation = -1: Enum PLAYER_SPAWN_LOCATION for telemetry spawnRason - enum for telemetry
* **INT** spawnReason = -1