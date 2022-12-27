# STRUCT_INVENTORY

## Fields
* **INT** a: was the item added to or removed from the inventory
* **INT** r: hash, reason for adding/removing: purchase, pick-up, use, drop etc.
* **INT** c: ID of the Social Club Crew the player belongs to
* **INT** l: hash, exact location where the item was purchased (which office, which arcade etc.); null if not applicable
* **INT** s: hash, "shop" type the item was acquired from: vending machine, office desk, convenience store etc.; null if not applicable
* **INT** i: hash, the item category: snack, armor
* **INT** i: hash, the item added/removed
* **INT** i: number of items of this type added/removed
* **INT** p: ID to link the purchases made in the same transaction
* **BOOL** t: whether the player used the option to take all of the items of that type