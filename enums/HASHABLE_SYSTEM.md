# HASHABLE_SYSTEM

## Summary
Used to perform CRC checks between players

## Values
* CRC_TUNING_SYSTEM: DO NOT USE DIRECTLY. Use TRIGGER_TUNING_CRC_HACKER_CHECK wrapper instead
* CRC_ITEM_INFO_DATA: subsystem can be any CItemInfo name hash (includes WEAPON_TYPE weapon hash and CAmmoInfo item hash)
* CRC_PICKUP_INFO_DATA: subsystem has to be a PICKUP_TYPE (hash of a CPickupData)
* CRC_EXPLOSION_TAG_DATA: subsystem has to be an EXPLOSION_TAG
* CRC_DATA_FILE_CONTENTS: DO NOT USE DIRECTLY. Use TRIGGER_FILE_CRC_HACKER_CHECK wrapper instead
* CRC_GENERIC_FILE_CONTENTS: DO NOT USE DIRECTLY. Use TRIGGER_FILE_CRC_HACKER_CHECK wrapper instead
* CRC_SCRIPT_RESOURCE: subsystem has to be a a script name hash (for instance HASH("freemode"))

## Notes
On each system check we need to define what part of it is being compared.
For instance, for a Weapons system only one weapon will be compared {system=CRC_ITEM_INFO_DATA, subsystem=hash(weaponName)}.
That's defined as their subsystem into a single INT, which will behave differently depending on the hashable_system required.