# MIGRATE_SAVE

## Summary
Status for the migrate save operations

## Values
* MIGRATE_SAVE_NONE
* MIGRATE_SAVE_FAILED_SOURCE_IN_USE: The source account is currently in-use, must log out in order to transfer it.
* MIGRATE_SAVE_FAILED_ALREADY_DONE: The source account has already been transferred elsewhere.
* MIGRATE_SAVE_FAILED_IN_PROGRESS: The source account is in the process of being transferred elsewhere.
* MIGRATE_SAVE_FAILED_UNLOCK_ALREADY_USED: (ConsumeContentUnlock) The source account has already been used to unlock this content for another account.
* MIGRATE_SAVE_FAILED_INSUFFICIENT_PRIVILEGES: The account does not have sufficient privileges to migrate.
* MIGRATE_SAVE_FAILED_CHEATER: Can not transfer due to being flagged as a cheater.
* MIGRATE_SAVE_FAILED_BANNED: Can not transfer due to the account being banned.
* MIGRATE_SAVE_FAILED_MAINTENANCE: Transfers are currently disabled for maintenance.
* MIGRATE_SAVE_FAILED_ACCT_CREATION_DATE: Transfer not allowed due to account being created after a certain date.
* MIGRATE_SAVE_FAILED_ACCT_AGE: Transfer not allowed due to account not being old enough.
* MIGRATE_SAVE_ERROR_DEST_ALREADY_DONE: Dest account has already been transferred to
* MIGRATE_SAVE_ERROR_TOO_RICH: Source account isn't eligible for transfer because cash balances are too high
* MIGRATE_SAVE_PENDING: End of errors
* MIGRATE_SAVE_FINISHED
* MIGRATE_SAVE_FAILED: Catch all error