# SOCIALCLUB::SC_LICENSEPLATE_CHECK_STRING

## Summary
Submit the given string to license plate checking

## Parameters
* **STRING** textString: String to verify
* **INT\*** outToken: Returned token that can be used to check the status of the pending check

## Returns
* **BOOL**:
True if the request has been been sent to the server for validation.
 Use outToken to
monitor the status.
If this function returns false, something failed to send the string to the server for
validation.