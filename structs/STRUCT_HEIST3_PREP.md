# STRUCT_HEIST3_PREP

## Fields
* **INT** playthroughId: playthrough ID, this should appear in all related content, like scopes, preps and finales, and would enable us to track an entire heist playthrough
* **INT** missionName: mission name
* **INT** playthroughHashMac: mac hash
* **INT** playCount: how many times has the player completed this mission before, can be null for Arcade property setup, since it can only be played once; first time is 1, then increments of 1 after completing finale, only success matters
* **INT** approach: stealth, subterfuge, direct, null if not applicable
* **INT** type: arcade setup, scope, weapon prep, vehicle prep, equipment prep
* **INT** bossId1: unique ID of the Boss instance
* **INT** bossId2: unique ID of the Boss instance
* **INT** bosstype: type of org: Securoserv, MC, unaffiliated
* **INT** launcherRank: rank of the player launching
* **INT** playerRole: similar to previous metrics, the player's role: CEO, bodyguard, biker prospect etc.
* **BOOL** playerParticipated: whether the player participated
* **BOOL** difficult: whether the mission has increased difficulty
* **INT** timeTakenToComplete: time taken to complete
* **INT** endingReason: similar to previous metrics: won, lost, boss_left etc.
* **BOOL** isRivalParty: is the party completing the mission the same as the party that launched it, null if not applicable
* **INT** cashEarned: money earned
* **INT** rpEarned: RP earned
* **INT** location: mission subvariation or Arcade property location
* **INT** invitesSent: invites sent
* **INT** invitesAccepted: invites accepted
* **INT** deaths: how many times the player died
* **INT** targetsKilled: number of mission critical/aggressive peds killed
* **INT** innocentsKilled: number of innocent peds killed
* **INT** prepCrewMember: elected crew member for this type of prep, null if not applicable
* **INT** unlockYohan: has this player completed the Nighclub setup, unlocking hacker Yohan?
* **INT** unlockCharlie: has this player completed the Smuggler business setup, unlocking gunman Charlie?
* **INT** unlockChester1: has this player completed the Gunrunning business setup, unlocking driver/gunman Chester McCoy?
* **INT** unlockChester2: does this player own the Weapons Expert Arena Workshop upgrade, unlocking driver/gunman Chester McCoy?
* **INT** unlockZach: does this player have a Biker Business set up, unlocking driver Zach?
* **INT** unlockPatrick: has this player completed the secret Random Event in Freemode, unlocking gunman Packie McReary?
* **INT** unlockAvi: has the player destroyed all 50 hidden signal jammers, unlocking hacker Avi Schwartzman?
* **INT** unlockPaige: has the player completed a Client Job in their Terrorbyte, unlocking hacker Paige Harris?
* **INT** accessPoints: which entry points were captured, for Scope Out Casino; null is not applicable
* **INT** shipmentsDestroyed: number of shipments destroyed, for Disrupt Shipments, null if not applicable
* **INT** vaultTarget: diamonds, gold, cash, art, for Vault Contents