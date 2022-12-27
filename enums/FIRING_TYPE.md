# FIRING_TYPE

## Summary
These are now mapped (as closely as possible) to firing patterns defined in commands_ped.sch

## Values
* FIRING_TYPE_DEFAULT: Some of these don't translate to firing patterns so we'll just not use those ones
* FIRING_TYPE_1_BURST = 0: Uses FIRING_TYPE_DEFAULT as it's no longer a valid type
* FIRING_TYPE_1_THEN_AIM = 1566631136: Fire 1 bullet then aim for the duration
* FIRING_TYPE_RANDOM_BURSTS = -687903391: Fire random bursts for the time, can change the frequency using SET_PED_SHOOT_RATE
* FIRING_TYPE_CLIP = 0: Uses FIRING_TYPE_DEFAULT as it's no longer a valid type
* FIRING_TYPE_CONTINUOUS = -957453492: Fires at the maximum rate for the duration, reloading if the clips empty