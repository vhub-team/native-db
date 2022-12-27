# ITEM_ACTION_TYPES

## Summary
Defines for actions type's

## Values
* NET_SHOP_ACTION_INVALID = hash("NET_SHOP_ACTION_INVALID")
* NET_SHOP_ACTION_ALLOT = hash("NET_SHOP_ACTION_ALLOT"): Action used when we transfer cash from bank account to wallet.
* NET_SHOP_ACTION_RECOUP = hash("NET_SHOP_ACTION_RECOUP"): Action used when we transfer cash from wallet to bank account.
* NET_SHOP_ACTION_EARN = hash("NET_SHOP_ACTION_EARN"): Action used when we earn cash in-game.
* NET_SHOP_ACTION_SPEND = hash("NET_SHOP_ACTION_SPEND"): Action used when we spend cash in-game.
* NET_SHOP_ACTION_PURCH = hash("NET_SHOP_ACTION_PURCH"): Action used when we purchase GTA dolars.
* NET_SHOP_ACTION_GIVE = hash("NET_SHOP_ACTION_GIVE"): Action used when we give cash to another player.
* NET_SHOP_ACTION_USE = hash("NET_SHOP_ACTION_USE"): Action used when we use a certain ineventory item - not sure this will be used at all.
* NET_SHOP_ACTION_DELETE_CHAR = hash("NET_SHOP_ACTION_DELETE_CHAR"): Action used when a character is deleted.
* NET_SHOP_ACTION_ACQUIRE = hash("NET_SHOP_ACTION_ACQUIRE"): Action used to buy an item at cost 0.
* NET_SHOP_ACTION_BUY_VEHICLE = hash("NET_SHOP_ACTION_BUY_VEHICLE"): Action used to buy a vehicle and mods at cost 0.
* NET_SHOP_ACTION_BUY_ITEM = hash("NET_SHOP_ACTION_BUY_ITEM"): Action used to buy a beard, or makeup (really anything that you can only have X out of N different items in the category).
* NET_SHOP_ACTION_BUY_PROPERTY = hash("NET_SHOP_ACTION_BUY_PROPERTY"): Action used to buy a propterty.
* NET_SHOP_ACTION_SELL_VEHICLE = hash("NET_SHOP_ACTION_SELL_VEHICLE"): Action used to sell a vehicle.
* NET_SHOP_ACTION_BUY_VEHICLE_MODS = hash("NET_SHOP_ACTION_BUY_VEHICLE_MODS"): Action used to buy vehicle mods only.
* NET_SHOP_ACTION_CREATE_PLAYER_APPEARANCE = hash("NET_SHOP_ACTION_CREATE_PLAYER_APPEARANCE"): Create initial player appearance character.
* NET_SHOP_ACTION_SPEND_LIMITED_SERVICE = hash("NET_SHOP_ACTION_SPEND_LIMITED_SERVICE"): Spend on limited service.
* NET_SHOP_ACTION_EARN_LIMITED_SERVICE = hash("NET_SHOP_ACTION_EARN_LIMITED_SERVICE"): Spend on limited service.
* NET_SHOP_ACTION_BUY_WAREHOUSE = hash("NET_SHOP_ACTION_BUY_WAREHOUSE"): Buy a warehouse to store contraband
* NET_SHOP_ACTION_BUY_CONTRABAND_MISSION = hash("NET_SHOP_ACTION_BUY_CONTRABAND_MISSION"): deducts money for the purchasing of the mission
* NET_SHOP_ACTION_ADD_CONTRABAND = hash("NET_SHOP_ACTION_ADD_CONTRABAND"): used to change the quantity of contraband in a given warehouse.
* NET_SHOP_ACTION_REMOVE_CONTRABAND = hash("NET_SHOP_ACTION_REMOVE_CONTRABAND"): used to change the quantity of contraband in a given warehouse.
* NET_SHOP_ACTION_RESET_BUSINESS_PROGRESS = hash("NET_SHOP_ACTION_RESET_BUSINESS_PROGRESS"): resets the progress of a business (allows you to change interior and clear supply and product quantities).
* NET_SHOP_ACTION_UPDATE_BUSINESS_GOODS = hash("NET_SHOP_ACTION_UPDATE_BUSINESS_GOODS"): Updates the supply and product quantities appropriately.
* NET_SHOP_ACTION_UPDATE_WAREHOUSE_VEHICLE = hash("NET_SHOP_ACTION_UPDATE_WAREHOUSE_VEHICLE"): Updates the vehicles associated with warehouses, where applicable.
* NET_SHOP_ACTION_BONUS = hash("NET_SHOP_ACTION_BONUS"): Sends anticheat information back to server.
* NET_SHOP_ACTION_BUY_CASINO_CHIPS = hash("NET_SHOP_ACTION_BUY_CASINO_CHIPS"): Action to buy casino chips
* NET_SHOP_ACTION_SELL_CASINO_CHIPS = hash("NET_SHOP_ACTION_SELL_CASINO_CHIPS"): Action to sell casino chips
* NET_SHOP_ACTION_UPDATE_STORAGE_DATA = hash("NET_SHOP_ACTION_UPDATE_STORAGE_DATA"): transaction that stores any INT value in the inventory
* NET_SHOP_ACTION_BUY_UNLOCK = hash("NET_SHOP_ACTION_BUY_UNLOCK"): Support being able to purchase the new unlock items with both GTA$ and tokens.