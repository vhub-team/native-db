# PED::SET_DRIVER_RACING_MODIFIER

## Parameters
* **PED_INDEX** pedIndex
* **FLOAT** racingModifier:
Must be between 0 and 1 or the value will be rejected 0 = No extra lookahead, try to get back onto the route as quick as possible 1 = No matter how far off the path I am, use the same lookahead as if I were on the path.
Increasing RacingModifier can reduce fishtailing in racing missions

## Description
<!-- AUTOGENERATED: Remove this line before editing -->
Sets a driver's racing modifiera value between 0 and 1 that
adjusts the lookahead when steering along a vehicle path.
Ambient vehicles will have a value of 0 for this unless overridden by script.

Scripts use 0.2, 0.5 and 1.0. Value must be >= 0.0 && <= 1.0