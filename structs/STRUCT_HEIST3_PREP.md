# STRUCT_HEIST3_PREP

## Fields
* **INT** p: playthrough ID, this should appear in all related content, like scopes, preps and finales, and would enable us to track an entire heist playthrough
* **INT** m: mission name
* **INT** p: mac hash
* **INT** p: how many times has the player completed this mission before, can be null for Arcade property setup, since it can only be played once; first time is 1, then increments of 1 after completing finale, only success matters
* **INT** a: stealth, subterfuge, direct, null if not applicable
* **INT** t: arcade setup, scope, weapon prep, vehicle prep, equipment prep
* **INT** b: unique ID of the Boss instance
* **INT** b: unique ID of the Boss instance
* **INT** b: type of org: Securoserv, MC, unaffiliated
* **INT** l: rank of the player launching
* **INT** p: similar to previous metrics, the player's role: CEO, bodyguard, biker prospect etc.
* **BOOL** p: whether the player participated
* **BOOL** d: whether the mission has increased difficulty
* **INT** t: time taken to complete
* **INT** e: similar to previous metrics: won, lost, boss_left etc.
* **BOOL** i: is the party completing the mission the same as the party that launched it, null if not applicable
* **INT** c: money earned
* **INT** r: RP earned
* **INT** l: mission subvariation or Arcade property location
* **INT** i: invites sent
* **INT** i: invites accepted
* **INT** d: how many times the player died
* **INT** t: number of mission critical/aggressive peds killed
* **INT** i: number of innocent peds killed
* **INT** p: elected crew member for this type of prep, null if not applicable
* **INT** u: has this player completed the Nighclub setup, unlocking hacker Yohan?
* **INT** u: has this player completed the Smuggler business setup, unlocking gunman Charlie?
* **INT** u: has this player completed the Gunrunning business setup, unlocking driver/gunman Chester McCoy?
* **INT** u: does this player own the Weapons Expert Arena Workshop upgrade, unlocking driver/gunman Chester McCoy?
* **INT** u: does this player have a Biker Business set up, unlocking driver Zach?
* **INT** u: has this player completed the secret Random Event in Freemode, unlocking gunman Packie McReary?
* **INT** u: has the player destroyed all 50 hidden signal jammers, unlocking hacker Avi Schwartzman?
* **INT** u: has the player completed a Client Job in their Terrorbyte, unlocking hacker Paige Harris?
* **INT** a: which entry points were captured, for Scope Out Casino; null is not applicable
* **INT** s: number of shipments destroyed, for Disrupt Shipments, null if not applicable
* **INT** v: diamonds, gold, cash, art, for Vault Contents