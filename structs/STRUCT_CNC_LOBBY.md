# STRUCT_CNC_LOBBY

## Fields
* **INT** m: unique ID for the match, used to connect the two rounds and other metrics
* **INT** m: unique ID for the match, used to connect the two rounds and other metrics
* **INT** t: what team does the player fall in round one, cops/crooks
* **INT** g: player's current rank in GTAO classic
* **INT** p: player's current CnC progression rank
* **INT** c: hash, cop's role
* **INT** c: hash array, cop weapons: primary lethal weapon, secondary lethal weapon, throwable, melee, non lethal; will also need to take into account modkits
* **INT** c: hash array, cop clothing: outfit, mask
* **INT** c: hash array, cop tattoos: Head, Left Arm, Right Arm, Torso - Chest, Torso - Stomach, Torso - Back, Right Leg, Left Leg, Torso - Side
* **INT** c: hash, cop emote
* **INT** c: hash array: cop vehicle, livery, modkit
* **INT** c: hash array, cop abilities: special ability 1, passive ability 1, vehicle ability 1
* **INT** c: hash, crook's role
* **INT** c: hash array, crook weapons: primary lethal weapon, secondary lethal weapon, throwable, melee, non lethal; will also need to take into account modkits
* **INT** c: hash array, crook clothing: outfit, mask
* **INT** c: hash array, crook tattoos: Head, Left Arm, Right Arm, Torso - Chest, Torso - Stomach, Torso - Back, Right Leg, Left Leg, Torso - Side
* **INT** c: hash, crook emote
* **INT** c: hash array: crook vehicle, livery, modkit
* **INT** c: hash array, crook abilities: special ability 1, passive ability 1, vehicle ability 1
* **INT** e: why did the lobby end for the player (match start, exit, disconnect, lobby disbanded, lobby merge, etc.)
* **INT** j: where did they join this lobby from? (match end, lobby merge, lobby switch, main menu, join with friends, on boot etc.)
* **INT** c: which slot was used for the cop loadout: either preset/custom, or slot number, depending on how this is set up
* **INT** c: which slot was used for the crook loadout: either preset/custom, or slot number, depending on how this is set up