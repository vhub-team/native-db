# CAM_SPLINE_NODE_FORCE_FLAGS

## Summary
Allows for custom options to be specified for the node of a camera spline

## Values
* CAM_SPLINE_NODE_FORCE_NONE
* CAM_SPLINE_NODE_FORCE_LINEAR: Do linear interpolation between this node and the next.
* CAM_SPLINE_NODE_FORCE_CUT: Do not interpolate to next node, cut to it.
* CAM_SPLINE_NODE_FORCE_PAUSE = 4: Force camera to pause before starting this node.
* CAM_SPLINE_NODE_FORCE_LEVEL = 8: Force look at entity offset to be level with camera position.