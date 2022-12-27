# STRUCT_DUPE_DETECTION

## Fields
* **INT** locationBlocked: Where they were blocked (vehicle entry, mod shop entry, selling option)
* **INT** reasonBlocked: Why they were blocked (which of the 3 lists. previous 5 veh sold, last 5 plates to be changed, plates of last 10 ‘known dupes’)
* **INT** vehicleModel: Vehicle model
* **INT** dupesSold: If a limited number of allowed dupes had been sold, and if so, how many.
* **INT** blockedVehicles: Number of vehicles owned by player which match blocked vehicle’s license plate
* **INT** ownedVehicles: Total number of owned vehicles
* **INT** garageSpace: Total number of personal garage spaces
* **INT** exploitLevel: Exploit Level of player
* **INT** levelIncrease: Did we apply an exploit level increase? If so, how much
* **BOOL** iFruit: Does the player have the iFruit app?
* **INT** spareSlot1: spare slot
* **INT** spareSlot2: spare slot