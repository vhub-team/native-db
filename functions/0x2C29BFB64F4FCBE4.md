# STATS::STAT_SET_DATE

## Summary
Set the value of an Date stat

## Parameters
* **STATSENUM** keyHash
* **STRUCT\*** data
* **INT** sizeOfData
* **BOOL** coderAssert = true

## Returns
* **BOOL**

## Description
<!-- AUTOGENERATED: Remove this line before editing -->
'value' is a structure to a structure, 'numFields' is how many fields there are in said structure (usually 7).

The structure looks like this:

int year
int month
int day
int hour
int minute
int second
int millisecond

The decompiled scripts use TIME::GET_POSIX_TIME to fill this structure.