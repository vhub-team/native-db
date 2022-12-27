# SAVE_MIGRATION_STATUS

## Summary
Save migration error codes

## Values
* SMS_NONE: This means we can start a check.
* SMS_FAILED
* SMS_CANCELED
* SMS_SUCCEDDED
* SMS_PENDING: This means it is currently in progress.
* SMS_SKIP_ACCOUNT_ALREADY_USED: This means this account already has been used in a save migration and we saved that info in the profile settings. Account is locked from further migrations so no need to check it anymore
* SMS_SKIP_INVALID_STATUS: This means there is an issue and the game is asserting (either not online of profile settings are not valid)