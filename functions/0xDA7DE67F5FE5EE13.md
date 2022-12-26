# NETWORK::NETWORK_IS_SCRIPT_ACTIVE_BY_HASH

## Summary
Returns true if any scripts with the given hash are running locally or remotely on any other machine involved in the network game

## Parameters
* **INT** scriptHash
* **INT** instanceId = -1
* **BOOL** localOnly = false: If set the command only checks if there are any local instances of the script running, there may not be a script thread running but the code that manages the thread may still be active cleaning up
* **INT** positionHash = 0

## Returns
* **BOOL**