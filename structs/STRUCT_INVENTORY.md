# STRUCT_INVENTORY

## Fields
* **INT** action: was the item added to or removed from the inventory
* **INT** reason: hash, reason for adding/removing: purchase, pick-up, use, drop etc.
* **INT** crewId: ID of the Social Club Crew the player belongs to
* **INT** location: hash, exact location where the item was purchased (which office, which arcade etc.); null if not applicable
* **INT** shopType: hash, "shop" type the item was acquired from: vending machine, office desk, convenience store etc.; null if not applicable
* **INT** itemCategory: hash, the item category: snack, armor
* **INT** itemHash: hash, the item added/removed
* **INT** itemDelta: number of items of this type added/removed
* **INT** purchaseID: ID to link the purchases made in the same transaction
* **BOOL** takeAll: whether the player used the option to take all of the items of that type