# STRUCT_CREW_RANK_CHANGED

## Summary
Event data for when recieving EVENT_NETWORK_CLAN_RANK_CHANGE, meaning the local player has received a promotion/demotion within their crew

## Fields
* **INT** clanId
* **INT** rankOrder
* **BOOL** promotion: true if a promotion, othewise, a demotion
* **TEXT_LABEL_31** rankName