# STRUCT_CNC_LOBBY

## Fields
* **INT** matchId1: unique ID for the match, used to connect the two rounds and other metrics
* **INT** matchId2: unique ID for the match, used to connect the two rounds and other metrics
* **INT** team: what team does the player fall in round one, cops/crooks
* **INT** gameRank: player's current rank in GTAO classic
* **INT** progRank: player's current CnC progression rank
* **INT** copRole: hash, cop's role
* **INT** copWeapons: hash array, cop weapons: primary lethal weapon, secondary lethal weapon, throwable, melee, non lethal; will also need to take into account modkits
* **INT** copClothing: hash array, cop clothing: outfit, mask
* **INT** copTattoos: hash array, cop tattoos: Head, Left Arm, Right Arm, Torso - Chest, Torso - Stomach, Torso - Back, Right Leg, Left Leg, Torso - Side
* **INT** copEmote: hash, cop emote
* **INT** copVehicle: hash array: cop vehicle, livery, modkit
* **INT** copAbilities: hash array, cop abilities: special ability 1, passive ability 1, vehicle ability 1
* **INT** crookRole: hash, crook's role
* **INT** crookWeapons: hash array, crook weapons: primary lethal weapon, secondary lethal weapon, throwable, melee, non lethal; will also need to take into account modkits
* **INT** crookClothing: hash array, crook clothing: outfit, mask
* **INT** crookTattoos: hash array, crook tattoos: Head, Left Arm, Right Arm, Torso - Chest, Torso - Stomach, Torso - Back, Right Leg, Left Leg, Torso - Side
* **INT** crookEmote: hash, crook emote
* **INT** crookVehicle: hash array: crook vehicle, livery, modkit
* **INT** crookAbilities: hash array, crook abilities: special ability 1, passive ability 1, vehicle ability 1
* **INT** endReason: why did the lobby end for the player (match start, exit, disconnect, lobby disbanded, lobby merge, etc.)
* **INT** joinFrom: where did they join this lobby from? (match end, lobby merge, lobby switch, main menu, join with friends, on boot etc.)
* **INT** copSlot: which slot was used for the cop loadout: either preset/custom, or slot number, depending on how this is set up
* **INT** crookSlot: which slot was used for the crook loadout: either preset/custom, or slot number, depending on how this is set up