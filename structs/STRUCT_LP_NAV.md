# STRUCT_LP_NAV

## Fields
* **INT** tab: hash, what tab the player left (online, story, create, heists, series modes etc.)
* **INT** hoverTile: bitset, location of tiles the player hovered over
* **INT** leftBy: hash, means by which the player left the current tab: tabbing away, going back, clicking a tile, going to the store, going to settings, loading into MP/SP etc.
* **INT** clickedTile: hash, tile that was clicked to leave the tab; ideally it would have similar values to LP_ONLINE/LP_STORY/LP_CREATE/LP_PERSIST, either location or content, to connect the two
* **BOOL** exitLp: true when leaving the landing page area