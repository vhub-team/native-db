# SCRIPT::GET_NUMBER_OF_THREADS_RUNNING_THE_SCRIPT_WITH_THIS_HASH

## Parameters
* **INT** hashOfScriptName

## Returns
* **INT**

## Description
<!-- AUTOGENERATED: Remove this line before editing -->
Replacement for GET_NUMBER_OF_THREADS_RUNNING_THIS_SCRIPT. Should be faster.

Gets the number of instances of the specified script is currently running.

Actually returns numRefs - 1.
if (program)
	v3 = rage::scrProgram::GetNumRefs(program) - 1;
return v3;