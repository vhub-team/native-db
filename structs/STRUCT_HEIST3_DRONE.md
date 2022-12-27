# STRUCT_HEIST3_DRONE

## Summary
HEIST 3

## Fields
* **INT** missionName: Checkpoint Collection, Assassination, Finale, null if not applicable
* **INT** playthroughId: if used during the finale, null if not applicable; playthrough ID, this should appear in all related content, like scopes, preps and finales, and would enable us to track an entire heist playthrough
* **INT** endReason: reason for stopping
* **INT** time: length of time drone was used
* **INT** totalDroneTases: number of cameras and enemies tased
* **INT** totalDroneTranq: number of enemies tranquilised
* **BOOL** nano: whether this is the nano drone
* **INT** cpCollected: checkpoints collected before exiting, in Checkpoint Collection; null if not applicable
* **INT** targetsKilled: targets killed in Assassination; null if not applicable