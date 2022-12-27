# STRUCT_HUB_ENTRY

## Fields
* **INT** type: which social hub is the player in: casino nightclub, beach party
* **INT** properties: bitset of the properties owned
* **INT** access: which access route did the player use: main door, elevator etc.
* **INT** cost: price of entrance, should be 0 if free
* **INT** bossId1: unique ID of the Boss instance
* **INT** bossId2: unique ID of the Boss instance
* **INT** playerRole: similar to previous metrics, the player's role: CEO, bodyguard, biker prospect etc.
* **BOOL** bpulled: whether this player was pulled into the social hub (via IM, for example)
* **BOOL** binvited: whether this player joined by accepting an invite
* **INT** properties2: bitset of type of properties owned
* **INT** vehicle: hash of the player-driven vehicle
* **INT** crewId: ID of the social club crew the player belongs to
* **BOOL** private: instance of social hub is private
* **INT** vehicleType: hash of whether the vehicle driven is a personal vehicle, another player's personal vehicle, generic test drive vehicle or Hao's premium vehicle
* **INT** hubId: ID that applies to this instance of the social hub; would be the same for those players inside the social hub