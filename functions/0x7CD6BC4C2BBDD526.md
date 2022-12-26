# NETWORK::NETWORK_CREATE_SYNCHRONISED_SCENE

## Summary
Creates a new networked synchronised scene - this is similar to normal synchronised scenes but a lot more network friendly. Call this on
a one machine only, add any peds (regardless of whether they are locally controlled or not) via the NETWORK_ADD_PED_TO_SYNCHRONISED_SCENE,
and then start it running with the NETWORK_START_SYNCHRONISED_SCENE command. The scene will automatically be synced to all machines.

## Parameters
* **FLOAT** scenePositionX
* **FLOAT** scenePositionY
* **FLOAT** scenePositionZ
* **FLOAT** sceneOrientationX
* **FLOAT** sceneOrientationY
* **FLOAT** sceneOrientationZ
* **EULER_ROT_ORDER** rotOrder = 2
* **BOOL** holdLastFrame = false
* **BOOL** looped = false
* **FLOAT** phaseToStopScene = 1
* **FLOAT** phaseToStartScene = 0
* **FLOAT** startRate = 1

## Returns
* **INT**