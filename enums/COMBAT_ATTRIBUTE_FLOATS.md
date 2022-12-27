# COMBAT_ATTRIBUTE_FLOATS

## Summary
Defaults are taken from gta5\build\dev\common\data\ai\combatbehaviour.meta

## Values
* CCF_BLIND_FIRE_CHANCE: Chance to blind fire from cover, range is 0.0-1.0 (default is 0.05 for civilians, law doesn't blind fire)
* CCF_BURST_DURATION_IN_COVER: How long each burst from cover should last (default is 2.0)
* CCF_MAX_SHOOTING_DISTANCE: The maximum distance the ped will try to shoot from (will override weapon range if set to anything > 0.0, default is -1.0)
* CCF_TIME_BETWEEN_BURSTS_IN_COVER: How long to wait, in cover, between firing bursts (< 0.0 will disable firing, unless cover fire is requested, default is 1.25)
* CCF_TIME_BETWEEN_PEEKS: How long to wait before attempting to peek again (default is 10.0)
* CCF_STRAFE_WHEN_MOVING_CHANCE: A chance to strafe to cover, range is 0.0-1.0 (0.0 will force them to run, 1.0 will force strafe and shoot, default is 1.0)
* CCF_WEAPON_ACCURACY: default is 0.4
* CCF_FIGHT_PROFICIENCY: How well an opponent can melee fight, range is 0.0-1.0 (default is 0.5)
* CCF_WALK_WHEN_STRAFING_CHANCE: The possibility of a ped walking while strafing rather than jog/run, range is 0.0-1.0 (default is 0.0)
* CCF_HELI_SPEED_MODIFIER: The speed modifier when driving a heli in combat
* CCF_HELI_SENSES_RANGE: The range of the ped's senses (sight, identification, hearing) when in a heli
* CCF_ATTACK_WINDOW_DISTANCE_FOR_COVER: The distance we'll use for cover based behaviour in attack windows Default is -1.0 (disabled), range is -1.0 to 150.0
* CCF_TIME_TO_INVALIDATE_INJURED_TARGET: How long to stop combat an injured target if there is no other valid target, if target is player in singleplayer
* CCF_MIN_DISTANCE_TO_TARGET: this will happen indefinitely unless explicitly disabled by setting to 0.0, default = 10.0 range = 0-50
Min distance the ped will use if CA_MAINTAIN_MIN_DISTANCE_TO_TARGET is set, default 5.0 (currently only for cover search + usage)
* CCF_BULLET_IMPACT_DETECTION_RANGE: The range at which the ped will detect the bullet impact event
* CCF_AIM_TURN_THRESHOLD: The threshold at which the ped will perform an aim turn
* CCF_OPTIMAL_COVER_DISTANCE
* CCF_AUTOMOBILE_SPEED_MODIFIER: The speed modifier when driving an automobile in combat
* CCF_SPEED_TO_FLEE_IN_VEHICLE
* CCF_TRIGGER_CHARGE_TIME_NEAR: How long to wait before charging a close target hiding in cover
* CCF_TRIGGER_CHARGE_TIME_FAR: How long to wait before charging a distant target hiding in cover
* CCF_MAX_DISTANCE_TO_HEAR_EVENTS: Max distance peds can hear an event from, even if the sound is louder
* CCF_MAX_DISTANCE_TO_HEAR_EVENTS_USING_LOS: Max distance peds can hear an event from, even if the sound is louder if the ped is using LOS to hear events (CPED_CONFIG_FLAG_CheckLoSForSoundEvents)
* CCF_HOMING_ROCKET_BREAK_LOCK_ANGLE: Angle between the rocket and target where lock-on will stop, range is 0.0-1.0, (default is 0.2), the bigger the number the easier to break lock
* CCF_HOMING_ROCKET_BREAK_LOCK_ANGLE_CLOSE: Angle between the rocket and target where lock-on will stop, when rocket is within CCF_HOMING_ROCKET_BREAK_LOCK_CLOSE_DISTANCE, range is 0.0-1.0, (default is 0.6), the bigger the number the easier to break lock
* CCF_HOMING_ROCKET_BREAK_LOCK_CLOSE_DISTANCE: Distance at which we check CCF_HOMING_ROCKET_BREAK_LOCK_ANGLE_CLOSE rather than CCF_HOMING_ROCKET_BREAK_LOCK_ANGLE
* CCF_HOMING_ROCKET_TURN_RATE_MODIFIER: Alters homing characteristics defined for the weapon (1.0 is default, <1.0 slow turn rates, >1.0 speed them up
* CCF_TIME_BETWEEN_AGGRESSIVE_MOVES_DURING_VEHICLE_CHASE: Sets the time delay between aggressive moves during vehicle chases. -1.0 means use random values, 0.0 means never
* CCF_MAX_VEHICLE_TURRET_FIRING_RANGE: Max firing range for a ped in vehicle turret seat
* CCF_WEAPON_DAMAGE_MODIFIER: Multiplies the weapon damage dealt by the ped, range is 0.0-10.0 (default is 1.0)
* MAX_COMBAT_FLOATS