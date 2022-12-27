# PAUSE_MENU_STATE

## Summary
numbers are weird in case we need to add intermediate states later

## Values
* PM_INACTIVE: not initialized at all
* PM_STARTING_UP = 5: in the process of starting up (loading assets, etc. May enter this state during a restart)
* PM_RESTARTING = 10: restarting (or has a restart queued)
* PM_READY = 15: ready to have commands sent to it
* PM_IN_STORE = 20: in the store screen
* PM_IN_SC_MENU = 25: in social club screen
* PM_SHUTTING_DOWN = 30: is closing down (example, waiting up to 3 seconds for streaming to finish)
* PM_IN_VIDEOEDITOR = 35: in video editor