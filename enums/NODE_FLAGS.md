# NODE_FLAGS

## Summary
This enum primarily filters the return results of GetNode functions

## Values
* NF_NONE: No flags
* NF_INCLUDE_SWITCHED_OFF_NODES: Include switched off nodes in any search
* NF_INCLUDE_BOAT_NODES: Include boat nodes
* NF_IGNORE_SLIPLANES = 4: Ignore sliplanes
* NF_IGNORE_SWITCHED_OFF_DEADENDS = 8: Ignore dead-ends, only if they're switched off. If NF_INCLUDE_SWITCHED_OFF_NODES is false this won't find anything to ignore