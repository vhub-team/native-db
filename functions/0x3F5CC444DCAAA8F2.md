# HUD::SET_HEALTH_HUD_DISPLAY_VALUES

## Summary
Sets the hud's health display values directly
TURNS OFF REAL-TIME QUERYING. So you'll need to turn this off when you're done
by passing in iHealth = -1

## Parameters
* **INT** health: Health value to display (assumes it's got a deadpoint of 100 HP) passing in -1 turns this override off
* **INT** armour: Armour to display
* **BOOL** showDmg = true