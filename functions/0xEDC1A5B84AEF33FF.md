# OBJECT::GET_STATE_OF_CLOSEST_DOOR_OF_TYPE

## Summary
Gets the state of the closest door type

## Parameters
* **MODEL_NAMES** objectModelHashKey
* **FLOAT** vecPosX
* **FLOAT** vecPosY
* **FLOAT** vecPosZ
* **BOOL\*** outLockState
* **FLOAT\*** outOpenRatio

## Description
<!-- AUTOGENERATED: Remove this line before editing -->
locked is 0 if no door is found
locked is 0 if door is unlocked
locked is 1 if door is found and unlocked.

-------------
the locked bool is either 0(unlocked)(false) or 1(locked)(true)