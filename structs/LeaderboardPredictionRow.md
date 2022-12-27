# LeaderboardPredictionRow

## Fields
* **INT** id: This ID is set in script and needs to be unique so that identifies this cache data.
* **INT** numColumns: Total number of columns used.
* **INT** columnsBitSets: 1 if it is INT 0 if FLOAT.
* **FLOAT[32]** fColumnData: FLOAT[MAX_COLUMNS]
* **INT[32]** columnData: INT[MAX_COLUMNS]