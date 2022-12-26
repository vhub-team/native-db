# PED::SPAWNPOINTS_START_SEARCH_IN_ANGLED_AREA

## Summary
Same as SPAWNPOINTS_START_SEARCH, except uses the angled area volume definition popular with level-design
vPoint1 & vPoint2 define the start and end points of a rectangle, fWidth in size
Height of the area is defined by raising one point above the other (a little height we be artificially applied in the case of a flat volume)
If optional 'iMaxSearchDurationMS' param is non-zero, search will enter a 'failed' state if this milliseconds duration is exceeded
- if the timeout value is specified, script must check for the failure case via SPAWNPOINTS_IS_SEARCH_FAILED()

## Parameters
* **FLOAT** point1X
* **FLOAT** point1Y
* **FLOAT** point1Z
* **FLOAT** point2X
* **FLOAT** point2Y
* **FLOAT** point2Z
* **FLOAT** width
* **SPAWNPOINTS_FLAGS** flags = 0
* **FLOAT** minimumSpacing = 0
* **INT** maxSearchDurationMS = 0