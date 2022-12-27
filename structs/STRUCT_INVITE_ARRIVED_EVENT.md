# STRUCT_INVITE_ARRIVED_EVENT

## Fields
* **INT** inviteIndex
* **INT** gameMode
* **BOOL** isFriend

## Notes
This structure can be used to retrieve information from these events:
- EVENT_NETWORK_INVITE_ARRIVED.
Should be passed in GET_EVENT_DATA() as the data STRUCT member.