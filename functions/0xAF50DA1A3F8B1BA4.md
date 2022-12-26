# NETWORK::NETWORK_CAN_ACCESS_MULTIPLAYER

## Parameters
* **MULTIPLAYER_ACCESS_CODE\*** accessCode

## Returns
* **BOOL**

## Description
<!-- AUTOGENERATED: Remove this line before editing -->
Return TRUE if the game can ACCESS multiplayer.
Check this function once. If FALSE, fall out of MP.
Must be called prior to:
NETWORK_SESSION_ENTER
NETWORK_SESSION_FRIEND_MATCHMAKING
NETWORK_SESSION_SOCIAL_MATCHMAKING
NETWORK_SESSION_CREW_MATCHMAKING
NETWORK_SESSION_ACTIVITY_QUICKMATCH
NETWORK_SESSION_HOST
Code deal with NETWORK_SESSION_JOIN_INVITE

11 - Need to download tunables.
12 - Need to download background script.

Returns 1 if the multiplayer is loaded, otherwhise 0.