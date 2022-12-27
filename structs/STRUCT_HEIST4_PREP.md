# STRUCT_HEIST4_PREP

## Fields
* **INT** p: playthrough ID, this should appear in all related content, like scopes, preps, finales and minigames, and would enable us to track an entire heist playthrough
* **INT** m: mission name
* **INT** s: session ID
* **INT** h: hash mac
* **INT** p: number of preps completed
* **INT** t: setup/scope, vehicle prep, equipment prep, weapon prep, disruption prep
* **INT** b: unique ID of the Boss instance
* **INT** b: unique ID of the Boss instance
* **INT** b: type of org: Securoserv, MC, unaffiliated
* **INT** l: rank of the player launching
* **INT** p: similar to previous metrics, the player's role: CEO, bodyguard, biker prospect etc.
* **BOOL** p: whether the player participated
* **BOOL** d: whether the mission has increased difficulty
* **INT** t: time taken to complete, in seconds (for consistency)
* **INT** e: similar to previous metrics: won, lost, boss_left etc.
* **BOOL** i: is the party completing the mission the same as the party that launched it, null if not applicable
* **INT** c: money earned
* **INT** r: RP earned
* **INT** l: mission subvariation
* **INT** i: invites sent
* **INT** i: invites accepted
* **INT** d: how many times the player died
* **INT** t: number of mission critical/aggressive peds killed
* **INT** i: number of innocent peds killed
* **BOOL** m: true if this is a mandatory mission, false if it's optional
* **INT** p: what is the primary target: files, bearer bonds, diamonds etc.; null if not applicable to this mission
* **INT** p: bitset of properties owned: casino penthouse, gunrunning bunker, smuggler hangar, terrorbyte, submarine etc.
* **INT** e: bitset of entrances scoped: main gate, side gate left, side gate right etc.; null if not applicable to this mission
* **INT** a: bitset of approaches unlocked: Stealth Chopper ? North Drop Zone, Gun Boat ? Main Docks etc.; null if not applicable to this mission
* **INT** g: bitset of grapple equipment locations scoped; null if not applicable to this mission
* **INT** u: bitset of uniform locations scoped; null if not applicable to this mission
* **INT** c: bitset of bolt cutter locations scoped; null if not applicable to this mission
* **INT** s: bitset of secondary loot locations scoped: cash, weed, cocaine, gold, paintings; null if not applicable to this mission
* **INT** m: bitset to account for miscellaneous actions: poison water supply, enemies armour disruption, enemies helicopter disruption, power station scoped, trojan vehicle scoped, control tower scoped, golden gun drawer key, double key cards, acetylene torch; null if not applicable to this mission
* **INT** p: bitset of type of properties owned