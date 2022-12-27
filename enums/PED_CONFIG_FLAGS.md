# PED_CONFIG_FLAGS

## Summary
Ped Config flags, used to control ped behaviour/setup match these with the enum in PedFlagsMeta.h

## Values
* PCF_AllowMedicsToAttend = 20: If this ped dies medics will be dispatched, false by default for mission peds, the ped wont be revived
* PCF_DontAllowToBeDraggedOutOfVehicle = 26: Prevents a ped from being able to be dragged out of a car
* PCF_GetOutUndriveableVehicle = 29: Script can stop peds automatically getting out of car when it's upside down or undrivable, defaults to true
* PCF_WillFlyThroughWindscreen = 32: Ped will fly through the vehicle windscreen upon a forward impact at high velocity
* PCF_HasHelmet = 34: Ped has a helmet (/ The PedHelmetComponent has put the helmet on the ped via "put on" animations)
* PCF_DontTakeOffHelmet = 36: Disable the ped taking off his helmet automatically
* PCF_DontInfluenceWantedLevel = 42: Can do any crime against this character and the cops turn a blind eye (no crime reported)
* PCF_DisableLockonToRandomPeds = 44: Disable lockon to random ambient peds
* PCF_AllowLockonToFriendlyPlayers
* PCF_DisableHornAudioWhenDead: Disable horn audio when the ped dies and rests his head on top of the steering wheel
* PCF_IsAimingGun = 78: Is set when a ped is performing an aim task
* PCF_ForcedAim = 101: If set, we will always behave like we have the aim trigger pressed, also works for AI in cars
* PCF_OpenDoorArmIK = 104: Set if the ped should enable open door arm IK
* PCF_DontActivateRagdollFromVehicleImpact = 106: Blocks ragdoll activation when hit by a vehicle
* PCF_DontActivateRagdollFromBulletImpact: Blocks ragdoll activation when hit by a bullet
* PCF_DontActivateRagdollFromExplosions: Blocks ragdoll activation when hit by an explosive
* PCF_DontActivateRagdollFromFire: Blocks ragdoll activation when set on fire
* PCF_DontActivateRagdollFromElectrocution: Blocks ragdoll activation when electrocuted
* PCF_KeepWeaponHolsteredUnlessFired = 113: Will keep the peds weapon holstered until they shoot or change weapons
* PCF_ForceControlledKnockout: Forces a melee knockout state for the victim ped
* PCF_FallsOutOfVehicleWhenKilled: Forces a ped in a vehicle to collapse out onto the floor (TaskDyingDead launches TaskExitVehicle)
* PCF_GetOutBurningVehicle: If set, a ped will escape a burning vehicle they are inside, defaults to true
* PCF_RunFromFiresAndExplosions = 118: If set, a ped will escape a burning vehicle they are inside, defaults to true
* PCF_TreatAsPlayerDuringTargeting: If set, the ped will be given the same boost a player gets in the targeting scoring system
* PCF_DisableMelee = 122: Disable melee for a ped (only supported for player right now)
* PCF_DisableUnarmedDrivebys: Disable unarmed driveby taunts for a ped
* PCF_JustGetsPulledOutWhenElectrocuted: MP only - if this ped is tased or rubber bulleted in a vehicle and a ped jacks them, the jacker will only pull the ped out
* PCF_WillNotHotwireLawEnforcementVehicle = 126: If set, the ped won't hotwire a lawenforcement vehicle
* PCF_WillCommandeerRatherThanJack: If set, the ped will play commandeering anims rather than jacking if available
* PCF_CanBeAgitated: If set, the ped can be agitated
* PCF_ForcePedToFaceLeftInCover: If set ped will turn to face left in cover
* PCF_ForcePedToFaceRightInCover: If set ped will turn to face right in cover
* PCF_BlockPedFromTurningInCover: If set ped will not turn in cover, unless one of the force flags is set
* PCF_KeepRelationshipGroupAfterCleanUp: Ped keeps their relationship group when the mission is cleaned up or they are marked as no longer needed
* PCF_ForcePedToBeDragged: Ped will loop the try locked door anim when they get to the door in order for them to automatically be dragged along
* PCF_PreventPedFromReactingToBeingJacked: Ped doesn't react when being jacked
* PCF_RemoveDeadExtraFarAway = 137: We must be further away before ped polulation remove this ped when it is dead
* PCF_ArrestResult = 139: If set, the ped arrest task completed successfully
* PCF_CanAttackFriendly: True allows this ped to attack peds they are friendly with
* PCF_WillJackAnyPlayer: MP only, if set this ped will be allowed to jack any player peds, regardless of relationship
* PCF_WillJackWantedPlayersRatherThanStealCar = 144: MP only, True if this player will jack hated players rather than try to steal a car (cops arresting crims)
* PCF_DisableLadderClimbing = 146: If this flag is set on a ped it will not scan for or climb ladders
* PCF_CowerInsteadOfFlee = 150: If set the ped should cower instead of fleeing
* PCF_CanActivateRagdollWhenVehicleUpsideDown: If set the ped will be allowed to ragdoll when the vehicle they are in gets turned upside down if the seat supports it
* PCF_AlwaysRespondToCriesForHelp: If set the ped will respond to cries for help even if not friends with the injured ped.
* PCF_DisableBloodPoolCreation: If set the ped will not create a blood pool when dead
* PCF_ShouldFixIfNoCollision: If set, the ped will be fixed if there is no collision around.
* PCF_CanPerformArrest: If set, the ped can perform arrests on peds that can be arrested
* PCF_CanPerformUncuff: If set, the ped can uncuff peds that are handcuffed
* PCF_CanBeArrested: If set, the ped can be arrested
* PCF_PlayerPreferFrontSeatMP = 159: When true, Prefer the front seat when getting in a car with buddies.
* PCF_DontEnterVehiclesInPlayersGroup = 167: When true, will follow the player around if in their group but wont enter vehicles.
* PCF_CannotBeTargeted = 169: DEPRECATED - Use the reset flag instead
* PCF_PreventAllMeleeTaunts = 169: Disable all melee taunts for this particular ped
* PCF_ForceDirectEntry: Will force this ped to use the direct entry point for any vehicle they try to enter, or warp in
* PCF_AlwaysSeeApproachingVehicles: This ped will always see approaching vehicles (even from behind).
* PCF_CanDiveAwayFromApproachingVehicles: This ped can dive away from approaching vehicles.
* PCF_AllowPlayerToInterruptVehicleEntryExit: Will allow player to interrupt a peds scripted entry/exit task as if they had triggered it themselves
* PCF_OnlyAttackLawIfPlayerIsWanted: This ped will only attack cops if the player is wanted
* PCF_PedsJackingMeDontGetIn = 177: If set the ped will not get in as part of the jack
* PCF_PedIgnoresAnimInterruptEvents = 179: AI peds only, will not early out of anims, default behaviour is to exit as early as possible
* PCF_IsInCustody: Any targeting LoS checks will fail if any materials with 'see through' materials found.
* PCF_ForceStandardBumpReactionThresholds: Setting this on an armed or buddy ped will make him more likely to perform an nm reaction when bumped by a player, friendly vehicle or ragdolling ped.
* PCF_LawWillOnlyAttackIfPlayerIsWanted: If set on a ped, law peds will only attack if the local player is wanted
* PCF_PreventAutoShuffleToDriversSeat = 184: Prevents passenger from auto shuffling over to drivers seat if it becomes free
* PCF_UseKinematicModeWhenStationary: When enabled, the ped will continually set the kinematic mode reset flag when stationary.
* PCF_DisableHurt = 188: Set to disable the combat hurt mode
* PCF_PlayerIsWeird: Should this player ped periodically generate shocking events for being weird
* PCF_DoNothingWhenOnFootByDefault = 193: Do nothing when on foot, by default
* PCF_DontReactivateRagdollOnPedCollisionWhenDead = 198: Peds with this flag set won't be allowed to reactivate their ragdoll when hit by another ragdoll.
* PCF_DontActivateRagdollOnVehicleCollisionWhenDead: Peds with this flag set won't be allowed to reactivate their ragdoll when hit by a vehicle.
* PCF_HasBeenInArmedCombat: True if we've ever been in non-melee combat
* PCF_Avoidance_Ignore_All = 202: True if we never steer around peds
* PCF_Avoidance_Ignored_by_All: True if peds never steer around us
* PCF_Avoidance_Ignore_Group1: True if we steer around peds that are members of group 1
* PCF_Avoidance_Member_of_Group1: True if we are members of avoidance group 1
* PCF_ForcedToUseSpecificGroupSeatIndex: Ped is forced to use specific seat index set by SET_PED_GROUP_MEMBER_PASSENGER_INDEX
* PCF_DisableExplosionReactions = 208: If set, ped will ignore explosion events
* PCF_WaitingForPlayerControlInterrupt = 210: Set when player switches to an ai ped and keeps the scripted task of the ai ped, if unset we won't check for interrupts or time out
* PCF_ForcedToStayInCover: If set, ped will stay in cover (won't come out to fire or move out during combat)
* PCF_GeneratesSoundEvents: Does this ped generate sound events?
* PCF_ListensToSoundEvents: Does this ped have the ability to respond to sound events?
* PCF_AllowToBeTargetedInAVehicle: Ped can be targeting inside a vehicle
* PCF_WaitForDirectEntryPointToBeFreeWhenExiting: When exiting a vehicle, the ped will wait for the direct entry point to be clear before exiting
* PCF_OnlyRequireOnePressToExitVehicle: Player doesn't need to hold exit button to exit vehicles
* PCF_ForceExitToSkyDive: Force the skydive exit if we're exiting the vehicle
* PCF_DisableExitToSkyDive = 221: Disable the skydive exit if we're exiting the vehicle
* PCF_DisablePedAvoidance = 226: This ped will not avoid other peds whilst navigating
* PCF_ForceRagdollUponDeath: When the ped dies, it will ragdoll instead of potentially choosing an animated death
* PCF_DisablePanicInVehicle = 229: Disable panic in vehicle
* PCF_AllowedToDetachTrailer: Allow this ped to detach trailers from vehicles
* PCF_ForceSkinCharacterCloth = 240: ForceSkin character cloth on creation when flag is set
* PCF_LeaveEngineOnWhenExitingVehicles: Player will leave the engine on when exiting a vehicle normally
* PCF_PhoneDisableTextingAnimations: tells taskmobile phone to not texting animations.  Currently don't play these in MP
* PCF_PhoneDisableTalkingAnimations: tells taskmobile phone to not talking animations.  Currently don't play these in MP
* PCF_PhoneDisableCameraAnimations: tells taskmobile phone to not camera animations.  Currently don't play these in SP
* PCF_DisableBlindFiringInShotReactions: Stops the ped from accidentally firing his weapon when shot.
* PCF_AllowNearbyCoverUsage: This makes it so that OTHER peds are allowed to take cover at points that would otherwise be rejected due to proximity
* PCF_CanAttackNonWantedPlayerAsLaw = 249: If this ped is a law enforcement ped then we will NOT quit combat due to a target player no longer having a wanted level
* PCF_WillTakeDamageWhenVehicleCrashes: If set, this ped will take damage if the car they are in crashes
* PCF_AICanDrivePlayerAsRearPassenger: If this ai ped is driving the vehicle, if the player taps to enter, they will enter as a rear passenger, if they hold, they'll jack the driver
* PCF_PlayerCanJackFriendlyPlayers: If a friendly player is driving the vehicle, if the player taps to enter, they will enter as a passenger, if they hold, they'll jack the driver
* PCF_AIDriverAllowFriendlyPassengerSeatEntry = 255: If this ai ped is driving the vehicle, allow players to get in passenger seats
* PCF_AllowMissionPedToUseInjuredMovement = 259: Set the target ped to be allowed to use Injured movement clips
* PCF_PreventUsingLowerPrioritySeats = 261: Don't use certain seats (like hanging on the side of a vehicle)
* PCF_TeleportToLeaderVehicle = 268: If set, teleport if ped is not in the leader's vehicle before TaskEnterVehicle::m_SecondsBeforeWarpToLeader.
* PCF_Avoidance_Ignore_WeirdPedBuffer: Don't walk extra far around weird peds like trevor
* PCF_DontBlipCop = 272: Don't add a blip for this cop
* PCF_KillWhenTrapped = 275: Kill this ped if it becomes trapped and cannot get up
* PCF_AvoidTearGas = 279: If set, this ped will avoid tear gas
* PCF_DisableGoToWritheWhenInjured = 281: If set, CPed::DAMAGED_GOTOWRITHE will no longer get set.  In particular, tazer hits wil no longer kill this ped in one hit
* PCF_OnlyUseForcedSeatWhenEnteringHeliInGroup: If set this ped will only use their forced seat index if the vehicle they're entering is a heli as part of a group
* PCF_DisableWeirdPedEvents = 285: Disables weird ped events
* PCF_ShouldChargeNow: This ped should charge if in combat right away, for use by scripts, cleared once ped charges
* PCF_DisableShockingEvents = 294: This ped should ignore shocking events.
* PCF_NeverReactToPedOnRoof = 296: If true, this ped will not react to a ped standing on the roof
* PCF_DisableShockingDrivingOnPavementEvents = 299: If true, this ped will not react to peds driving on pavement
* PCF_ShouldThrowSmokeGrenadeNow: This ped should throw a smoke grenade in combat right away, for use by scripts, cleared once ped throws
* PCF_ForceInitialPeekInCover = 302: If set, ped will peek once before firing in cover. Cleared upon peeking.
* PCF_DisableJumpingFromVehiclesAfterLeader = 305: If true, disable followers jumping out of cars after their group leader
* PCF_ShoutToGroupOnPlayerMelee = 311: If set, ped will shout target position when melee attacked by a player
* PCF_IgnoredByAutoOpenDoors: Set this for a ped to be ignored by the auto opened doors when checking to see if the door should be opened.
* PCF_ForceIgnoreMeleeActiveCombatant = 314: Purposely ignore the melee active combatant role and push them into a support or inactive combatant role
* PCF_CheckLoSForSoundEvents: If set, ped will ignore sound events generated by entites it can't see.
* PCF_CanSayFollowedByPlayerAudio = 317: If set, ped can play FRIEND_FOLLOWED_BY_PLAYER lines.
* PCF_ActivateRagdollFromMinorPlayerContact: If set, the ped will activate ragdoll much more easily on contact with the player
* PCF_ForcePoseCharacterCloth = 320: Default cloth pose will be applied if is available in the character cloth when the cloth is created
* PCF_HasClothCollisionBounds: Ped has cloth collision bounds
* PCF_DontBehaveLikeLaw = 324: If set on a non-law ped that has law like behavior (i.e. security) then that ped will not use the law like behaviors/logic
* PCF_DisablePoliceInvestigatingBody = 326: If set, police will not perform the CTaskShockingPoliceInvestigate behavior on the ped
* PCF_DisableWritheShootFromGround: If set, the ped will no longer shoot while writhing
* PCF_LowerPriorityOfWarpSeats: If set the ped will only just the warp entry points if there are no animated entry points available
* PCF_DisableTalkTo: If set the ped can't be talked to
* PCF_DontBlip: If set the ped will not be blipped by the wanted system
* PCF_IgnoreLegIkRestrictions = 332: If set, the ped will ignore leg IK request restrictions for non-player peds
* PCF_ForceNoTimesliceIntelligenceUpdate: If set, the ped will never have their intelligence update time sliced across frames.
* PCF_AllowTaskDoNothingTimeslicing = 339: If set, this ped will timeslice it's DoNothing Task when computing default task.
* PCF_NotAllowedToJackAnyPlayers = 342: If set, this ped will not be allowed to jack any other players (not synced)
* PCF_AlwaysLeaveTrainUponArrival = 345: If set, this ped will always exit the train when it stops at a station.
* PCF_OnlyWritheFromWeaponDamage = 347: If set, Only allow ped to wrothe from weapon damage, not from other stuff, like small vehicle impacts
* PCF_UseSloMoBloodVfx: If set, this ped will use slo mo blood vfx instead of the normal ones (these effects must be included in the script particle asset)
* PCF_PreventDraggedOutOfCarThreatResponse = 350: Don't do threat response when dragged out of a car
* PCF_ForceDeepSurfaceCheck = 356: Don't do distance from camera culling of the deep surface check, needed for detecting snow, mud, etc.
* PCF_DisableDeepSurfaceAnims: Disable deep surface anims to prevent them slowing ped down.
* PCF_DontBlipNotSynced: If set the ped will not be blipped by the wanted system, this will not be synced and be set on clones so the behaviour can be changed per player
* PCF_IsDuckingInVehicle: Query only, see if the ped is ducking in a vehicle
* PCF_PreventAutoShuffleToTurretSeat: If set the ped will not automatically shuffle to the turret seat when it becomes free
* PCF_DisableEventInteriorStatusCheck: Disables the ignore events based on interior status check which normally has peds inside ignore events from outside
* PCF_TreatDislikeAsHateWhenInCombat = 364: If the ped this is set on is in combat then any dislike feeling they have towards other peds will be treated as a hate feeling
* PCF_OnlyUpdateTargetWantedIfSeen: Law with this set will only update the WL is the target player is seen. This includes on combat initialization as well as during normal LOS checks (ignoring "last known position" reports)
* PCF_AllowAutoShuffleToDriversSeat: Allows this ped to auto shuffle to the driver seat of a vehicle if the driver is dead (law and MP peds would do this normally)
* PCF_PreventReactingToSilencedCloneBullets = 372: If set prevents the ped from reacting to silenced bullets fired from network clone peds (use for peds where stealth kills are important)
* PCF_DisableInjuredCryForHelpEvents: Blocks ped from creating the injured cry for help events (run over, tazed or melee would usually do this)
* PCF_NeverLeaveTrain: Prevents peds riding trains from getting off them
* PCF_DontDropJetpackOnDeath: Prevents ped dropping jetpack when they die
* PCF_DisableAutoEquipHelmetsInBikes = 380: Prevents ped from auto-equipping helmets when entering a bike (includes quadbikes)
* PCF_DisableAutoEquipHelmetsInAicraft: Prevents ped from auto-equipping helmets when entering an aircraft
* PCF_HasBareFeet = 389: Flag to indicate that player has no shoes(used for first person aiming camera)
* PCF_UNUSED_REPLACE_ME_2
* PCF_GoOnWithoutVehicleIfItIsUnableToGetBackToRoad: It will force the ped to abandon its vehicle (when using TaskGoToPointAnyMeans) if it is unable to get back to road
* PCF_BlockDroppingHealthSnacksOnDeath: This will block health pickups from being created when the ped dies.
* PCF_ForceThreatResponseToNonFriendToFriendMeleeActions = 394: Forces threat response to melee actions from non friend to friend peds.
* PCF_DontRespondToRandomPedsDamage: Do not respond to random peds damage.
* PCF_AllowContinuousThreatResponseWantedLevelUpdates: Shares the same logic of PCF_OnlyUpdateTargetWantedIfSeen but will continue to check even after the initial WL is set
* PCF_KeepTargetLossResponseOnCleanup: The target loss response will not be reset to exit task on cleanup if this is set
* PCF_PlayersDontDragMeOutOfCar: Similar to DontDragMeOutCar except it will still allow AI to drag the ped out of a vehicle
* PCF_BroadcastRepondedToThreatWhenGoingToPointShooting: Whenever the ped starts shooting while going to a point, it trigger a responded to threat broadcast
* PCF_IgnorePedTypeForIsFriendlyWith: If this is set then IsFriendlyWith will ignore the ped type checks (i.e. two PEDTYPE_COP peds are not automatically friendly)
* PCF_TreatNonFriendlyAsHateWhenInCombat: Any non friendly ped will be considered as hated instead when in combat
* PCF_DontLeaveVehicleIfLeaderNotInVehicle: Supresses "LeaderExistedCarAsDriver" events. Ped won't exit vehicle if leader isn't in it as well.
* PCF_AllowMeleeReactionIfMeleeProofIsOn = 404: Allow melee reaction to come through even if proof is on
* PCF_UseNormalExplosionDamageWhenBlownUpInVehicle = 407: If this is set, ped won't be instantly killed if vehicle is blown up. Instead, they will take normal explosive damage and be forced to exit the vehicle if they're still alive.
* PCF_DisableHomingMissileLockForVehiclePedInside: Blocks locking on of the vehicle that the ped is inside.
* PCF_DisableTakeOffScubaGear: Disable taking off the scuba gear. Same as PRF_DisableTakeOffScubaGear but on a config flag.
* PCF_IgnoreMeleeFistWeaponDamageMult: Melee fist weapons (ie knuckle duster) won't apply relative health damage scaler (MeleeRightFistTargetHealthDamageScaler in weapon info).
* PCF_LawPedsCanFleeFromNonWantedPlayer: Law peds will be triggered to flee if player triggers an appropriate event (even if ped is not wanted) instead of entering combat. NB: Only synced over the network when set on players.
* PCF_ForceBlipSecurityPedsIfPlayerIsWanted: Forces security peds (not cop peds) to be blipped on the minimap if the player is wanted. Set this on the local player.
* PCF_UseGoToPointForScenarioNavigation = 414: Don't use nav mesh for navigating to scenario points. DLC Hack for yachts
* PCF_DontClearLocalPassengersWantedLevel: Don't clear local ped's wanted level when remote ped in the same car has his wanted level cleared by script.
* PCF_BlockAutoSwapOnWeaponPickups: Block auto weapon swaps for weapon pickups.
* PCF_ThisPedIsATargetPriorityForAI: Increase AI targeting score for peds with this flag.
* PCF_IsSwitchingHelmetVisor: Indicates ped is using switch helmet visor up/down anim
* PCF_ForceHelmetVisorSwitch: Indicates ped is using switch helmet visor up/down anim
* PCF_UseOverrideFootstepPtFx = 421: Overrides ped footstep particle effects with the overriden footstep effect
* PCF_DisableVehicleCombat: Disables vehicle combat.
* PCF_AllowBikeAlternateAnimations = 424: Allows transition into bike alternate animations (PI menu option)
* PCF_UseLockpickVehicleEntryAnimations = 426: Use Franklin's alternate lockpicking animations for forced entry
* PCF_IgnoreInteriorCheckForSprinting: When set, player will be able to sprint inside interriors even if it is tagged to prevent it.
* PCF_SwatHeliSpawnWithinLastSpottedLocation: When set, swat helicopters will spawn within last spotted location instead of actual ped location (and target is a player)
* PCF_DisableStartEngine: Prevents ped from playing start engine anims (and turning engine on)
* PCF_IgnoreBeingOnFire: Makes ped ignore being on fire (fleeing, reacting to CEventOnFire event)
* PCF_DisableTurretOrRearSeatPreference: Disables turret seat and activity seat preference for vehicle entry for local player
* PCF_DisableWantedHelicopterSpawning: Will not spawn wanted helicopters to chase after this target
* PCF_UseTargetPerceptionForCreatingAimedAtEvents: Will only create aimed at events if player is within normal perception of the target
* PCF_DisableHomingMissileLockon: Will prevent homing lockon on this ped
* PCF_ForceIgnoreMaxMeleeActiveSupportCombatants: Ignore max number of active support combatants and let ped join them as such
* PCF_StayInDefensiveAreaWhenInVehicle: Will try to stay within set defensive area while driving a vehicle
* PCF_DontShoutTargetPosition: Will prevent the ped from communicating target position to all other friendly peds
* PCF_DisableHelmetArmor: Will apply full headshot damage, regardless if ped has a helmet (or armored one)
* PCF_PreventVehExitDueToInvalidWeapon = 441: Will prevent ped from automatically being forced out of vehicle due to weapon being invalid (e.g. turret seats after going into water)
* PCF_IgnoreNetSessionFriendlyFireCheckForAllowDamage: Will ignore the friendly fire setting set by NETWORK_SET_FRIENDLY_FIRE_OPTION when checking if ped can be damaged
* PCF_DontLeaveCombatIfTargetPlayerIsAttackedByPolice: Will make ped stay in combat even if the player hes targeting starts being attacked by cops
* PCF_CheckLockedBeforeWarp: Will check when entering a vehicle if it is locked before warping
* PCF_DontShuffleInVehicleToMakeRoom: Will prevent a player from shuffling across to make room if another player is entering from the same side
* PCF_GiveWeaponOnGetup: Will give the ped a weapon to use once their weapon is removed for getups
* PCF_DontHitVehicleWithProjectiles: Ped fired projectiles will ignore the vehicle they are in
* PCF_DisableForcedEntryForOpenVehiclesFromTryLockedDoor: Will prevent ped from forcing entry into cars that are open from TryLockedDoor state
* PCF_FiresDummyRockets: his ped will fire rockets that explode when close to its target, and won't affect it
* PCF_DecoyPed = 451: Will make this ped a decoy ped that will focus targeting
* PCF_HasEstablishedDecoy: This ped has created a decoy
* PCF_BlockDispatchedHelicoptersFromLanding: Will prevent dispatched helicopters from landing and dropping off peds
* PCF_DontCryForHelpOnStun: Will prevent peds from crying for help when shot with the stun gun
* PCF_CanBeIncapacitated = 456: If set, the ped may be incapacitated
* PCF_DontChangeTargetFromMelee = 458: If set, we wont set a new target after a melee attack
* PCF_RagdollFloatsIndefinitely = 460: Prevents a dead ped from sinking
* PCF_BlockElectricWeaponDamage: Blocks electric weapon damage