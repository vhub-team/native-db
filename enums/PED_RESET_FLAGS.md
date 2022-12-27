# PED_RESET_FLAGS

## Summary
These flags are reset every frame match these with the enum in PedFlagsMeta.h

## Values
* PRF_DisablePlayerJumping = 46: Disable jumping (exclusive from climbing).
* PRF_DisablePlayerVaulting: Disable climbing / vaulting (but not auto-vault, that's a seperate flag).
* PRF_AllowUpdateIfNoCollisionLoaded = 55: Don't freeze this ped for not having bounds loaded around it
* PRF_DisableSecondaryAnimationTasks = 58: Disable upper body animtion tasks such as shove ped and open door anims
* PRF_SearchForClosestDoor = 60: Will check for the closest door in proximity and store it off
* PRF_SupressGunfireEvents = 62: Supresses AI generating fire events, so civilians wont be shocked or react, for use in a shooting range for example
* PRF_InfiniteStamina: Currently just for mounts, but could be expanded to anything with stamina
* PRF_BlockWeaponReactionsUnlessDead: Stops the ped from reacting to damage events (such as shots / fires, etc). The ped will still take damage while this flag is active. Note: this does not block explosion reactions.
* PRF_ForcePlayerFiring: Forces player to fire even if they aren't pressing fire
* PRF_ForcePeekFromCover = 67: Forces an actor that is in cover to continue (or start if they haven't yet) peeking
* PRF_ForcePedToStrafe = 69: Forces an actor to strafe
* PRF_UseKinematicPhysics = 71: Enables kinematic physics mode on this ped. This stops other physical objects from pushing the ped around, and causes the ped to push any physical objects out of its way when it moves into them.
* PRF_ClearLockonTarget: Clear the players lockon target next frame
* PRF_ForcePedToUseScripCamHeading = 77: forces a ped to the scripted camera heading instead of gameplay
* PRF_IgnoreTargetsCoverForLOS = 85: When doing LOS checks to other peds we won't use the cover vantage position as the "target" position
* PRF_DisableCrouchWhileInCover = 88: Force the crouch flag to return true while in cover.
* PRF_ForceRunningSpeedForFragSmashing = 91: Forces a ped to apply forces to frags as if running on contact, to guarantee peds will smash through frag objects when playing custom anims
* PRF_ExtraLongWeaponRange = 95: Force the bullets gun range to increase to 250m
* PRF_ForcePlayerToEnterVehicleThroughDirectDoorOnly: Forces the player to only use direct access when entering vehicles
* PRF_TaskCullExtraFarAway: Disable a ped getting cull from a vehicle from pretend occupants.
* PRF_DisablePlayerAutoVaulting = 102: If this flag is set on a ped it will not attempt to autovault
* PRF_UseBulletPenetration = 107: If this flag is set on a ped it will use the bullet shoot through code
* PRF_ForceAimAtHead: Force all attackers to target the head of this ped
* PRF_IsInStationaryScenario: Inform avoidance code that this ped isn't going anywhere and should be steered around rather than waited for
* PRF_DisableSeeThroughChecksWhenTargeting = 112: Any targeting LoS checks will fail if any materials with 'see through' materials found.
* PRF_PuttingOnHelmet: When set, the ped is putting on a helmet. DONT SET THIS only query it
* PRF_PanicInVehicle = 120: When set, the ped will play panic animations if in a vehicle
* PRF_CannotBeTargetedByAI = 124: When set, this ped cannot be added to the targeting list of AI peds, will be removed if already in the list and is thought of as not able to be attacked
* PRF_ForceInjuryAfterStunned = 126: Forces this ped to the injured state after being stunned
* PRF_BlockWeaponFire = 128: Prevent the ped from shooting a weapon
* PRF_ExpandPedCapsuleFromSkeleton: Set the ped capsule radius based on skeleton
* PRF_DisableWeaponLaserSight: Toggle the weapon laser sight off for this frame
* PRF_SuspendInitiatedMeleeActions = 149: Temporarily suspend any melee actions this frame (does not include hit reactions). Use PCF_DisableMelee to turn it off completely
* PRF_SuppressInAirEvent: Prevents ped from getting the in air event the next frame
* PRF_AllowTasksIncompatibleWithMotion: If set, allows ped to have tasks incompatible with its current motion
* PRF_SuppressLethalMeleeActions = 155: This will suppress any melee action that is considered lethal (RA_IS_LETHAL, defined in action_table.meta)
* PRF_InstantBlendToAim: Blend straight into an aim instantly, if starting a gun task this frame
* PRF_MakeHeadInvisble = 166: If set, scale the head of the ped to 0.001
* PRF_NoAutoRunWhenFiring: Don't auto run when NoAutoRunWhenFiring is set
* PRF_DisableSteeringAroundNavMeshEdges = 172: Don't let this ped take navmesh edges into account when performing their low-level steering/avoidance code
* PRF_DisableTakeOffParachutePack = 177: Disable taking off the parachute pack
* PRF_ForceCombatTaunt = 179: If this ped has the INSULT special ability, and this flag is set, he will always use the combat taunt when the special is activated
* PRF_IgnoreCombatTaunts: This ped will ignore combat taunts
* PRF_PreventAllMeleeTakedowns = 187: Will temporarily prevent any takedown from being performed on this ped
* PRF_PreventFailedMeleeTakedowns: Will temporarily prevent any failed takedown from being performed on this ped
* PRF_UseTighterAvoidanceSettings = 190: Will temporarily force min avoidance on this ped.  will brush other peds but avoid a bit
* PRF_DisableDropDowns = 195: Disable drop downs for this ped
* PRF_DisableTakeOffScubaGear = 197: Disable taking off the scuba gear
* PRF_DisableActionMode = 200: Disable combat anims for ped.
* PRF_UseHeadOrientationForPerception = 206: Use the ped's head orientation for perception tests
* PRF_DisableJumpRagdollOnCollision = 210: The player will no longer auto-ragdoll when colliding with objects, peds, etc. while jumping
* PRF_DisableParachuting = 217: Disable parachuting for the ped
* PRF_KeepParachutePackOnAfterTeleport = 222: Keep the parachute pack on after a teleport
* PRF_DontRaiseFistsWhenLockedOn: Whether or not you want the player ped to use the new front melee logic in TODO #981120
* PRF_PreferMeleeBodyIkHitReaction: This will prefer all melee hit reactions to use body ik hit reactions if ragdoll is not selected
* PRF_DisableFriendlyGunReactAudio = 227: If set, disables friendly responses to gunshots/being aimed at.
* PRF_DisableAgitationTriggers: Disables agitation triggers
* PRF_DisableNMForRiverRapids = 234: Disable NM reactions to fast moving water for this ped
* PRF_PreventGoingIntoStillInVehicleState = 236: If set, the ped will not go into the still in vehicle pose
* PRF_UseFastEnterExitVehicleRates: If set, the ped will get in and out of vehicles faster (same as in mp)
* PRF_DisableAgitation = 239: Disables agitation
* PRF_DisableTalk: Disables talking
* PRF_UseProbeSlopeStairsDetection = 247: Uses more expensive slope/stairs detection
* PRF_DisableVehicleDamageReactions: Disables vehicle damage reactions
* PRF_DisablePotentialBlastReactions: Disables potential blast reactions
* PRF_OnlyAllowLeftArmDoorIk: When set along side open door ik, will only use the left hand
* PRF_OnlyAllowRightArmDoorIk: When set along side open door ik, will only use the left hand
* PRF_DisableFlashLight = 253: When set, the flash light on a Ai weapon will be turned off
* PRF_ForceEnableFlashLightForAI = 258: When set, the ai ped will enable their flash light
* PRF_DisableCombatAudio = 262: Disables combat audio
* PRF_DisableCoverAudio: Disables cover audio
* PRF_EnablePressAndReleaseDives = 271: Player has to press and hold dive button to dive in water
* PRF_OnlyExitVehicleOnButtonRelease: Only allows player to exit vehicle when button is released rather than pressed or held
* PRF_ConsiderAsPlayerCoverThreatWithoutLOS = 282: Considered as a threat as part of player cover search even if they can't see the player
* PRF_BlockCustomAIEntryAnims: Disables ped from using custom ai cover entry animations
* PRF_IgnoreVehicleEntryCollisionTests: Ignore the vehicle entry collision tests for this ped
* PRF_PreventGoingIntoShuntInVehicleState = 287: If set, the ped will not go into the shunt in vehicle pose
* PRF_EnableVoiceDrivenMouthMovement = 302: If set, turn on the voice driven mouth movement
* PRF_UseTighterEnterVehicleSettings = 304: To have peds do better vehicle entries when in a group and interfered by other peds, use carefully though
* PRF_InRaceMode: Set when the player is in the races to make the player more interesting to look at.
* PRF_DisableAmbientMeleeMoves: Disable ambient (initial) melee moves
* PRF_AllowSpecialAbilityInVehicle = 308: Allows the player to trigger the special ability while in a vehicle
* PRF_DisableInVehicleActions: Prevents ped from doing in vehicle actions like closing door, hotwiring, starting engine, putting on helmet etc
* PRF_ForceInstantSteeringWheelIkBlendIn: Forces ped to blend in steering wheel ik instantly rather than over time
* PRF_IgnoreThreatEngagePlayerCoverBonus: Ignores the bonus score for selecting cover that the player can engage the enemy at
* PRF_DontCloseVehicleDoor = 313: Prevents the ped from closing the vehicle door of the car they're inside
* PRF_SkipExplosionOcclusion: Explosions can't be blocked by map collision when damaging this ped
* PRF_MeleeStrikeAgainstNonPed = 316: Set when the ped has performed a melee strike and hit any non ped material
* PRF_IgnoreNavigationForDoorArmIK: We will not attempt to walk around doors when using arm IK
* PRF_DisableAimingWhileParachuting: Disable aiming while parachuting
* PRF_DisablePedCollisionWithPedEvent: Disable hit reaction due to colliding with a ped
* PRF_IgnoreVelocityWhenClosingVehicleDoor: Will ignore the vehicle speed threshold and close the door anyway
* PRF_SkipOnFootIdleIntro: Skip idle intro
* PRF_DontWalkRoundObjects: Don't walk round objects that we collide with whilst moving
* PRF_DisablePedEnteredMyVehicleEvents: Disable ped entered my vehicle events
* PRF_DisableInVehiclePedVariationBlocking = 326: Will allow ped variations to be rendered in vehicles, even if marked otherwise
* PRF_ReduceEffectOfVehicleRamControlLoss: When on a mission this reset flag will slightly reduce the amount of time the player loses control of their vehicle when hit by an AI ped
* PRF_DisablePlayerMeleeFriendlyAttacks: Another flag to disable friendly attack from the player. Set on the opponent you would like it to be disabled on.
* PRF_IsMeleeTargetUnreachable = 330: Set when the melee target has been deemed unreachable (AI only)
* PRF_DisableAutoForceOutWhenBlowingUpCar: Disable automatically forcing player to exit a vehicle in a network game when blowing up vehicle
* PRF_DisableDustOffAnims = 334: Disable amient dust off animations
* PRF_DisableMeleeHitReactions: This ped will refrain from ever performing a melee hit reaction
* PRF_AllowHeadPropInVehicle = 337: This overrides PV_FLAG_NOT_IN_CAR set on any head prop and stops it from being removed when getting into the vehicle
* PRF_DontQuitMotionAiming = 339
* PRF_OpenDoorArmIK = 342: Reset version of PCF_OpenDoorArmIK, which sets if the ped should enable open door arm IK.
* PRF_UseTighterTurnSettingsForScript: Force use of tighter turn settings in locomotion task
* PRF_DisableVoiceDrivenMouthMovement = 346: If set, turn off the voice driven mouth movement (overrides EnableVoiceDrivenMouthMovement)
* PRF_SteerIntoSkids: If set, steer into skids while driving
* PRF_AllowOpenDoorIkBeforeFullMovement: When set, code will ignore the logic that requires the ped to be in CTaskHumanLocomotion::State_Moving
* PRF_AllowHomingMissileLockOnInVehicle: When set, code will bypass rel settings and allow a homing lock on to this ped when they are in a vehicle
* PRF_AllowCloneForcePostCameraAIUpdate
* PRF_DisableHighHeels: Force the high heels DOF to be 0
* PRF_DontUseSprintEnergy = 353: Player does not get tired when sprinting
* PRF_DisableMaterialCollisionDamage = 355: Don't be damaged by touching dangerous material (e.g. electic generator)
* PRF_DisableMPFriendlyLockon: Don't target friendly players in MP
* PRF_DisableMPFriendlyLethalMeleeActions: Don't melee kill friendly players in MP
* PRF_IfLeaderStopsSeekCover: If our leader stops, try and seek cover if we can
* PRF_UseInteriorCapsuleSettings = 362: Use Interior capsule settings
* PRF_IsClosingVehicleDoor: Ped is closing a vehicle door
* PRF_DisableWallHitAnimation = 371: Disable stuck wall hit animation for the ped this frame
* PRF_PlayAgitatedAnimsInVehicle: When set, the ped will play panic animations if in a vehicle
* PRF_IsSeatShuffling: Ped is shuffling seat
* PRF_AllowControlRadioInAnySeatInMP = 376: Allows ped in any seat to control the radio (in MP only)
* PRF_DisableSpycarTransformation: Blocks ped from manually transforming spycar to/from car/sub modes
* PRF_BlockHeadbobbingToRadio = 379: Blocks ped from headbobbing to radio music in vehicles
* PRF_ForceExtraLongBlendInForPedSkipIdleCoverTransition = 381: When putting a ped directly into cover, the ped will blend in the new cover anims slowly to prevent a pose pop, see B*1788366
* PRF_DisableAssistedAimLockon = 390: Don't ever try to lock on to this ped with cinematic aim
* PRF_NoCollisionDamageFromOtherPeds = 394: Any ped this is set on won't register damage from collisions against other peds.
* PRF_DontSuppressUseNavMeshToNavigateToVehicleDoorWhenVehicleInWater = 398: For thing that inherit from boats only
* PRF_InstantBlendToAimNoSettle = 401: If true it avoids playing the settle anim when aiming
* PRF_ForceScriptedCameraLowCoverAngleWhenEnteringCover = 406: For first person mode, when the player enters low cover, will orientate camera to face left or right rather than into cover
* PRF_DisableMeleeWeaponSelection = 417
* PRF_WaypointPlaybackSlowMoreForCorners: Allows peds following waypoint recordings to slow down more for corners. (Achieves same effect as the EWAYPOINT_SUPPRESS_EXACTSTOP flag, which is passed into TASK_FOLLOW_WAYPOINT_RECORDING).
* PRF_UseBulletPenetrationForGlass = 420: Ped will use bullet penetration code when glass material is hit.
* PRF_CanBePinnedByFriendlyBullets = 423: If set on a ped then they are allowed to be pinned by bullets from friendly peds
* PRF_DisableSpikeStripRoadBlocks = 425: Blocks road blocks with spike strips from spawning
* PRF_IsLowerPriorityMeleeTarget = 428: Peds marked with this flag will only be able to be hit by the player if the player explicitly presses the melee button
* PRF_ForceScanForEventsThisFrame: Disable timeslicing of event scanning this frame (see url:bugstar:2100836 for an example situation where this is useful)
* PRF_ForceAutoEquipHelmetsInAicraft = 432: Forces ped to auto-equip a helmet when entering an aircraft. Overrides PCF_DisableAutoEquipHelmetsInAicraft which is set in the interaction menu.
* PRF_BlockRemotePlayerRecording: Flag used by replay editor to disable recording specified remote players (for url:bugstar:2218297).
* PRF_UseFirstPersonVehicleAnimsIfFPSCamNotDominant = 435: allow FPS vehicle anims even if FPS camera isn't dominant
* PRF_ForceIntoStandPoseOnJetski: allow FPS vehicle anims even if FPS camera isn't dominant
* PRF_SuppressTakedownMeleeActions = 438: This will suppress all takedown melee actions (RA_IS_TAKEDOWN or RA_IS_STEALTH_KILL, defined in action_table.meta)
* PRF_InvertLookAroundControls: Inverts lookaround controls (right stick / mouse) for this player
* PRF_IgnoreCombatManager: Allows attacking ped to engage another entity without waiting for its turn (if there's multiple attackers)
* PRF_UseBlendedCamerasOnUpdateFpsCameraRelativeMatrix: Check if there is an active camera blending and use the blended camera frame when compute the FPS camera relative matrix.
* PRF_ForceMeleeCounter: Forces the ped to perform a dodge and a counter move if it's attacked.
* PRF_SuppressNavmeshForEnterVehicleTask = 444: Suppress navmesh navigation in TaskEnterVehicle. Will use gotopoint or bail if cant use that
* PRF_DisableShallowWaterBikeJumpOutThisFrame: Prevents the ped from jumping out of the vehicle in shallow water if the bike is submerged
* PRF_DisablePlayerCombatRoll: Prevents the player from performing a combat roll.
* PRF_IgnoreDetachSafePositionCheck: Will ignore safe position check on detaching the ped
* PRF_DisableEasyLadderConditions: Prevents the more forgiving MP ladder detection settings from being used, and forces SP settings.
* PRF_PlayerIgnoresScenarioSpawnRestrictions: Makes local player ignore certain scenario spawn restrictions on scenarios that respect this flag
* PRF_UsingDrone: Indicates player is using Drone from Battle DLC
* PRF_UseScriptedWeaponFirePosition = 452: Will use scripted firing position on the clones of this ped on other machines
* PRF_UseExtendedRagdollCollisionCalculator = 454: Use extended logic for determining damage instigator for ragdoll collisions
* PRF_PreventLockonToFriendlyPlayers: Prevent the player locking on to friendly players
* PRF_OnlyAbortScriptedAnimOnMovementByInput: Modifies AF_ABORT_ON_PED_MOVEMENT to only trigger an abort when movement would be caused by player input
* PRF_PreventAllStealthKills: Prevents stealth take downs from being preformed on a ped
* PRF_BlockFallTaskFromExplosionDamage: Prevent peds from entering a fall task if affected by explosion damage
* PRF_AllowPedRearEntry: Mimics the behaviour of boss peds by holding the button for entering the rear seats