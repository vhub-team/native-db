# COMBAT_ATTRIBUTE

## Summary
Set a specific combat attribute

## Values
* CA_INVALID = -1
* CA_USE_COVER: AI will only use cover if this is set
* CA_USE_VEHICLE: AI will only use vehicles if this is set
* CA_DO_DRIVEBYS: AI will only driveby from a vehicle if this is set
* CA_LEAVE_VEHICLES: Will be forced to stay in a ny vehicel if this isn't set
* CA_CAN_USE_DYNAMIC_STRAFE_DECISIONS: This ped can make decisions on whether to strafe or not based on distance to destination, recent bullet events, etc.
* CA_ALWAYS_FIGHT: Ped will always fight upon getting threat response task
* CA_FLEE_WHILST_IN_VEHICLE: If in combat and in a vehicle, the ped will flee rather than attacking
* CA_JUST_FOLLOW_VEHICLE: If in combat and chasing in a vehicle, the ped will keep a distance behind rather than ramming
* CA_PLAY_REACTION_ANIMS: Deprecated
* CA_WILL_SCAN_FOR_DEAD_PEDS: Peds will scan for and react to dead peds found
* CA_IS_A_GUARD: Deprecated
* CA_JUST_SEEK_COVER: The ped will seek cover only
* CA_BLIND_FIRE_IN_COVER: Ped will only blind fire when in cover
* CA_AGGRESSIVE: Ped may advance
* CA_CAN_INVESTIGATE: Ped can investigate events such as distant gunfire, footsteps, explosions etc
* CA_CAN_USE_RADIO: Ped can use a radio to call for backup (happens after a reaction)
* CA_CAN_CAPTURE_ENEMY_PEDS: Deprecated
* CA_ALWAYS_FLEE: Ped will always flee upon getting threat response task
* CA_CAN_TAUNT_IN_VEHICLE = 20: Ped can do unarmed taunts in vehicle
* CA_CAN_CHASE_TARGET_ON_FOOT: Ped will be able to chase their targets if both are on foot and the target is running away
* CA_WILL_DRAG_INJURED_PEDS_TO_SAFETY: Ped can drag injured peds to safety
* CA_REQUIRES_LOS_TO_SHOOT: Ped will require LOS to the target it is aiming at before shooting
* CA_USE_PROXIMITY_FIRING_RATE: Ped is allowed to use proximity based fire rate (increasing fire rate at closer distances)
* CA_DISABLE_SECONDARY_TARGET: Normally peds can switch briefly to a secondary target in combat, setting this will prevent that
* CA_DISABLE_ENTRY_REACTIONS: This will disable the flinching combat entry reactions for peds, instead only playing the turn and aim anims
* CA_PERFECT_ACCURACY: Force ped to be 100% accurate in all situations (added by Jay Reinebold)
* CA_CAN_USE_FRUSTRATED_ADVANCE: If we don't have cover and can't see our target it's possible we will advance, even if the target is in cover
* CA_MOVE_TO_LOCATION_BEFORE_COVER_SEARCH: This will have the ped move to defensive areas and within attack windows before performing the cover search
* CA_CAN_SHOOT_WITHOUT_LOS: Allow shooting of our weapon even if we don't have LOS (this isn't X-ray vision as it only affects weapon firing)
* CA_MAINTAIN_MIN_DISTANCE_TO_TARGET: Ped will try to maintain a min distance to the target, even if using defensive areas (currently only for cover finding + usage)
* CA_CAN_USE_PEEKING_VARIATIONS = 34: Allows ped to use steamed variations of peeking anims
* CA_DISABLE_PINNED_DOWN: Disables pinned down behaviors
* CA_DISABLE_PIN_DOWN_OTHERS: Disables pinning down others
* CA_OPEN_COMBAT_WHEN_DEFENSIVE_AREA_IS_REACHED: When defensive area is reached the area is cleared and the ped is set to use defensive combat movement
* CA_DISABLE_BULLET_REACTIONS: Disables bullet reactions
* CA_CAN_BUST: Allows ped to bust the player
* CA_IGNORED_BY_OTHER_PEDS_WHEN_WANTED: This ped is ignored by other peds when wanted
* CA_CAN_COMMANDEER_VEHICLES: Ped is allowed to "jack" vehicles when needing to chase a target in combat
* CA_CAN_FLANK: Ped is allowed to flank
* CA_SWITCH_TO_ADVANCE_IF_CANT_FIND_COVER: Ped will switch to advance if they can't find cover
* CA_SWITCH_TO_DEFENSIVE_IF_IN_COVER: Ped will switch to defensive if they are in cover
* CA_CLEAR_PRIMARY_DEFENSIVE_AREA_WHEN_REACHED: Ped will clear their primary defensive area when it is reached
* CA_CAN_FIGHT_ARMED_PEDS_WHEN_NOT_ARMED: Ped is allowed to fight armed peds when not armed
* CA_ENABLE_TACTICAL_POINTS_WHEN_DEFENSIVE: Ped is not allowed to use tactical points if set to use defensive movement (will only use cover)
* CA_DISABLE_COVER_ARC_ADJUSTMENTS: Ped cannot adjust cover arcs when testing cover safety (atm done on corner cover points when  ped usingdefensive area + no LOS)
* CA_USE_ENEMY_ACCURACY_SCALING: Ped may use reduced accuracy with large number of enemies attacking the same local player target
* CA_CAN_CHARGE: Ped is allowed to charge the enemy position
* CA_REMOVE_AREA_SET_WILL_ADVANCE_WHEN_DEFENSIVE_AREA_REACHED: When defensive area is reached the area is cleared and the ped is set to use will advance movement
* CA_USE_VEHICLE_ATTACK: Use the vehicle attack mission during combat (only works on driver)
* CA_USE_VEHICLE_ATTACK_IF_VEHICLE_HAS_MOUNTED_GUNS: Use the vehicle attack mission during combat if the vehicle has mounted guns (only works on driver)
* CA_ALWAYS_EQUIP_BEST_WEAPON: Always equip best weapon in combat
* CA_CAN_SEE_UNDERWATER_PEDS: Ignores in water at depth visibility check
* CA_DISABLE_AIM_AT_AI_TARGETS_IN_HELIS: Will prevent this ped from aiming at any AI targets that are in helicopters
* CA_DISABLE_SEEK_DUE_TO_LINE_OF_SIGHT: Disables peds seeking due to no clear line of sight
* CA_DISABLE_FLEE_FROM_COMBAT: To be used when releasing missions peds if we don't want them fleeing from combat (mission peds already prevent flee)
* CA_DISABLE_TARGET_CHANGES_DURING_VEHICLE_PURSUIT: Disables target changes during vehicle pursuit
* CA_CAN_THROW_SMOKE_GRENADE: Ped may throw a smoke grenade at player loitering in combat
* CA_CLEAR_AREA_SET_DEFENSIVE_IF_DEFENSIVE_CANNOT_BE_REACHED = 62: Will clear a set defensive area if that area cannot be reached
* CA_DISABLE_BLOCK_FROM_PURSUE_DURING_VEHICLE_CHASE = 64: Disable block from pursue during vehicle chases
* CA_DISABLE_SPIN_OUT_DURING_VEHICLE_CHASE: Disable spin out during vehicle chases
* CA_DISABLE_CRUISE_IN_FRONT_DURING_BLOCK_DURING_VEHICLE_CHASE: Disable cruise in front during block during vehicle chases
* CA_CAN_IGNORE_BLOCKED_LOS_WEIGHTING: Makes it more likely that the ped will continue targeting a target with blocked los for a few seconds
* CA_DISABLE_REACT_TO_BUDDY_SHOT: Disables the react to buddy shot behaviour.
* CA_PREFER_NAVMESH_DURING_VEHICLE_CHASE: Prefer pathing using navmesh over road nodes
* CA_ALLOWED_TO_AVOID_OFFROAD_DURING_VEHICLE_CHASE: Ignore road edges when avoiding
* CA_PERMIT_CHARGE_BEYOND_DEFENSIVE_AREA: Permits ped to charge a target outside the assigned defensive area.
* CA_USE_ROCKETS_AGAINST_VEHICLES_ONLY: This ped will switch to an RPG if target is in a vehicle, otherwise will use alternate weapon.
* CA_DISABLE_TACTICAL_POINTS_WITHOUT_CLEAR_LOS: Disables peds moving to a tactical point without clear los
* CA_DISABLE_PULL_ALONGSIDE_DURING_VEHICLE_CHASE: Disables pull alongside during vehicle chase
* CA_DISABLE_ALL_RANDOMS_FLEE = 78: If set on a ped, they will not flee when all random peds flee is set to TRUE (they are still able to flee due to other reasons)
* CA_WILL_GENERATE_DEAD_PED_SEEN_SCRIPT_EVENTS: This ped will send out a script DeadPedSeenEvent when they see a dead ped
* CA_USE_MAX_SENSE_RANGE_WHEN_RECEIVING_EVENTS: This will use the receiving peds sense range rather than the range supplied to the communicate event
* CA_RESTRICT_IN_VEHICLE_AIMING_TO_CURRENT_SIDE: When aiming from a vehicle the ped will only aim at targets on his side of the vehicle
* CA_USE_DEFAULT_BLOCKED_LOS_POSITION_AND_DIRECTION: LOS to the target is blocked we return to our default position and direction until we have LOS (no aiming)
* CA_REQUIRES_LOS_TO_AIM: LOS to the target is blocked we return to our default position and direction until we have LOS (no aiming)
* CA_CAN_CRUISE_AND_BLOCK_IN_VEHICLE: Allow vehicles spawned infront of target facing away to enter cruise and wait to block approaching target
* CA_PREFER_AIR_COMBAT_WHEN_IN_AIRCRAFT: Peds flying aircraft will prefer to target other aircraft over entities on the ground
* CA_ALLOW_DOG_FIGHTING: Allow peds flying aircraft to use dog fighting behaviours
* CA_PREFER_NON_AIRCRAFT_TARGETS: This will make the weight of targets who aircraft vehicles be reduced greatly compared to targets on foot or in ground based vehicles
* CA_PREFER_KNOWN_TARGETS_WHEN_COMBAT_CLOSEST_TARGET: When peds are tasked to go to combat, they keep searching for a known target for a while before forcing an unknown one
* CA_FORCE_CHECK_ATTACK_ANGLE_FOR_MOUNTED_GUNS: Only allow mounted weapons to fire if within the correct attack angle (default 25-degree cone). On a flag in order to keep exiting behaviour and only fix in specific cases.
* CA_BLOCK_FIRE_FOR_VEHICLE_PASSENGER_MOUNTED_GUNS: Blocks the firing state for passenger-controlled mounted weapons. Existing flags CA_USE_VEHICLE_ATTACK and CA_USE_VEHICLE_ATTACK_IF_VEHICLE_HAS_MOUNTED_GUNS only work for drivers.