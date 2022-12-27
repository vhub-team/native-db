# LeaderboardCachedDisplayData

## Fields
* **INT** i: This ID is set in script and needs to be unique so that identifies this cache data.
* **TEXT_LABEL_63** g
* **TEXT_LABEL_63** c
* **GAMER_HANDLE** g
* **GAMER_HANDLE** c
* **BOOL** c
* **INT** r
* **INT** r: Script row flags
* **INT** n: Total number of columns used.
* **INT** c: 1 if it is INT 0 if FLOAT.
* **FLOAT[32]** f: FLOAT[MAX_COLUMNS]
* **INT[32]** c: INT[MAX_COLUMNS]