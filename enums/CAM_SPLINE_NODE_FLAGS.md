# CAM_SPLINE_NODE_FLAGS

## Summary
Allows for custom options to be specified for the node of a camera spline

## Values
* CAM_SPLINE_NODE_NO_FLAGS
* CAM_SPLINE_NODE_SMOOTH_ROT: Additional smoothing is applied to the transition in orientation between the previous node and the specified node. This smoothing can reduce the appearance of discontinuities at the nodes, but may not be desirable where a linear transition is required.
* CAM_SPLINE_NODE_SMOOTH_LENS_PARAMS: Additional smoothing is applied to the transition in lens paramaters, such as FOV and motion blur strength, between the previous node and the specified node. This smoothing can reduce the appearance of discontinuities at the nodes, but may not be desirable where a linear transition is required.
* CAM_SPLINE_NODE_EASE_IN = 4: Per-node ease in
* CAM_SPLINE_NODE_EASE_OUT = 8: Per-node ease out
* CAM_SPLINE_NODE_EASE_INOUT = 16: Per-node ease in and out