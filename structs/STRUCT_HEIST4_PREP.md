# STRUCT_HEIST4_PREP

## Fields
* **INT** playthroughId: playthrough ID, this should appear in all related content, like scopes, preps, finales and minigames, and would enable us to track an entire heist playthrough
* **INT** missionName: mission name
* **INT** sessionId: session ID
* **INT** hashmac: hash mac
* **INT** playCount: number of preps completed
* **INT** type: setup/scope, vehicle prep, equipment prep, weapon prep, disruption prep
* **INT** bossId1: unique ID of the Boss instance
* **INT** bossId2: unique ID of the Boss instance
* **INT** bosstype: type of org: Securoserv, MC, unaffiliated
* **INT** launcherRank: rank of the player launching
* **INT** playerRole: similar to previous metrics, the player's role: CEO, bodyguard, biker prospect etc.
* **BOOL** playerParticipated: whether the player participated
* **BOOL** difficult: whether the mission has increased difficulty
* **INT** timeTakenToComplete: time taken to complete, in seconds (for consistency)
* **INT** endingReason: similar to previous metrics: won, lost, boss_left etc.
* **BOOL** isRivalParty: is the party completing the mission the same as the party that launched it, null if not applicable
* **INT** cashEarned: money earned
* **INT** rpEarned: RP earned
* **INT** location: mission subvariation
* **INT** invitesSent: invites sent
* **INT** invitesAccepted: invites accepted
* **INT** deaths: how many times the player died
* **INT** targetsKilled: number of mission critical/aggressive peds killed
* **INT** innocentsKilled: number of innocent peds killed
* **BOOL** mandatory: true if this is a mandatory mission, false if it's optional
* **INT** primTar: what is the primary target: files, bearer bonds, diamonds etc.; null if not applicable to this mission
* **INT** properties: bitset of properties owned: casino penthouse, gunrunning bunker, smuggler hangar, terrorbyte, submarine etc.
* **INT** entrances: bitset of entrances scoped: main gate, side gate left, side gate right etc.; null if not applicable to this mission
* **INT** approaches: bitset of approaches unlocked: Stealth Chopper ? North Drop Zone, Gun Boat ? Main Docks etc.; null if not applicable to this mission
* **INT** grappleLoc: bitset of grapple equipment locations scoped; null if not applicable to this mission
* **INT** uniLoc: bitset of uniform locations scoped; null if not applicable to this mission
* **INT** cutterLoc: bitset of bolt cutter locations scoped; null if not applicable to this mission
* **INT** secLootLoc: bitset of secondary loot locations scoped: cash, weed, cocaine, gold, paintings; null if not applicable to this mission
* **INT** miscActions: bitset to account for miscellaneous actions: poison water supply, enemies armour disruption, enemies helicopter disruption, power station scoped, trojan vehicle scoped, control tower scoped, golden gun drawer key, double key cards, acetylene torch; null if not applicable to this mission
* **INT** properties2: bitset of type of properties owned