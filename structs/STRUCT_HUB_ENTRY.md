# STRUCT_HUB_ENTRY

## Fields
* **INT** t: which social hub is the player in: casino nightclub, beach party
* **INT** p: bitset of the properties owned
* **INT** a: which access route did the player use: main door, elevator etc.
* **INT** c: price of entrance, should be 0 if free
* **INT** b: unique ID of the Boss instance
* **INT** b: unique ID of the Boss instance
* **INT** p: similar to previous metrics, the player's role: CEO, bodyguard, biker prospect etc.
* **BOOL** b: whether this player was pulled into the social hub (via IM, for example)
* **BOOL** b: whether this player joined by accepting an invite
* **INT** p: bitset of type of properties owned
* **INT** v: hash of the player-driven vehicle
* **INT** c: ID of the social club crew the player belongs to
* **BOOL** p: instance of social hub is private
* **INT** v: hash of whether the vehicle driven is a personal vehicle, another player's personal vehicle, generic test drive vehicle or Hao's premium vehicle
* **INT** h: ID that applies to this instance of the social hub; would be the same for those players inside the social hub