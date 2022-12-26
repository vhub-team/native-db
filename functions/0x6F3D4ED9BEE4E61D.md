# NETWORK::NETWORK_SESSION_HOST

## Summary
Hosts a session

## Parameters
* **INT** gameMode: Gamemode value from script enum
* **INT** maxPlayers: Max players that can join this session, including local player
* **BOOL** isPrivate: If this session is private (closed) or not

## Returns
* **BOOL**

## Description
<!-- AUTOGENERATED: Remove this line before editing -->
Does nothing in online but in offline it will cause the screen to fade to black. Nothing happens past then, the screen will sit at black until you restart GTA. Other stuff must be needed to actually host a session.