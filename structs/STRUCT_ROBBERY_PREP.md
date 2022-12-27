# STRUCT_ROBBERY_PREP

## Fields
* **INT** playthroughID: playthrough ID, this should appear in all related content for a strand, like preps and finale, and would enable us to track an entire strand playthrough
* **INT** missionName: mission name
* **INT** sessionID: session ID
* **INT** strandID: active strand
* **INT** type: setup, prep
* **INT** bossId1: unique ID of the Boss instance
* **INT** bossId2: unique ID of the Boss instance
* **INT** bosstype: type of org: Securoserv, MC, unaffiliated
* **INT** launcherRank: rank of the player launching
* **INT** playerRole: similar to previous metrics, the player's role: CEO, bodyguard, biker prospect etc.
* **BOOL** playerParticipated: whether the player participated
* **INT** timeTakenToComplete: time taken to complete, in seconds (for consistency)
* **INT** timeLimit: time limit, in seconds (for consistency); null if not applicable
* **INT** endingReason: similar to previous metrics: won, lost, boss_left etc.
* **BOOL** isRivalParty: is the party completing the mission the same as the party that launched it; null if not applicable
* **INT** cashEarned: money earned
* **INT** rpEarned: RP earned
* **INT** location: mission subvariation
* **INT** invitesSent: invites sent
* **INT** invitesAccepted: invites accepted
* **INT** deaths: how many times the player died
* **INT** targetsKilled: number of mission critical/aggressive peds killed
* **INT** innocentsKilled: number of innocent peds killed
* **INT** properties: existing bitset of type of properties owned: casino penthouse, gunrunning bunker, smuggler hangar, terrorbyte, submarine etc.
* **INT** properties2: bitset of type of properties owned; future proofing
* **BOOL** failedStealth: whether the player failed stealth and alerted the enemies
* **INT** deliveryLocation: delivery location
* **INT** hashmac: hash mac
* **INT** vehicleStolen: hash, stolen vehicle in Sewer Schematics, Meth Tanker
* **INT** vehicleCount: count of vehicles delivered in Warehouse Defenses
* **INT** outfits: outfits used, if any, relevant for Scope Transporter, Container Manifest; null otherwise
* **INT** entrance: entrance, relevant for Locate Bunker; null otherwise
* **INT** missionCategory: which set of missions these are (tuner robberies, fixer story missions etc.)
* **BOOL** won: whether the mission was completed successfully