# CAM::SET_CAM_PARAMS

## Summary
Sets the camera's position, rotation and field of view. More info

## Parameters
* **CAMERA_INDEX** cameraIndex
* **FLOAT** posX
* **FLOAT** posY
* **FLOAT** posZ
* **FLOAT** rotX
* **FLOAT** rotY
* **FLOAT** rotZ
* **FLOAT** fov
* **INT** duration = 0: Is set > 0 the camera will interp to the specified settings.
* **CAMERA_GRAPH_TYPE** graphTypePos = 1
* **CAMERA_GRAPH_TYPE** graphTypeRot = 1
* **EULER_ROT_ORDER** rotOrder = 2