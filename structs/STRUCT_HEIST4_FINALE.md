# STRUCT_HEIST4_FINALE

## Fields
* **INT** p: playthrough ID, this should appear in all related content, like scopes, preps, finales and minigames, and would enable us to track an entire heist playthrough
* **INT** m: mission name
* **INT** s: session ID
* **TEXT_LABEL_31** p: public content ID
* **INT** h: hash mac
* **INT** b: unique ID of the Boss instance
* **INT** b: unique ID of the Boss instance
* **INT** b: type of org: Securoserv, MC, unaffiliated
* **INT** l: rank of the player launching
* **INT** p: similar to previous metrics, the player's role: CEO, bodyguard, biker prospect etc.
* **INT** e: similar to previous metrics: won, lost, boss_left etc.
* **INT** r: counts how many times this mission was failed, then continued from checkpoint/restarted; resets after the player exits the mission, null if not applicable
* **INT** r: RP earned
* **BOOL** d: whether the mission has increased difficulty
* **INT** t: time taken to complete, in seconds (for consistency)
* **INT** c: what checkpoint was the heist failed at; null if not applicable
* **INT** p: how many times has the player completed this mission before; first time is 1, then increments of 1 after completing finale, only success matters
* **INT** d: how many times the player died
* **INT** t: number of mission critical/aggressive peds killed
* **INT** i: number of innocent peds killed
* **INT** p: bitset of type of properties owned: casino penthouse, gunrunning bunker, smuggler hangar, terrorbyte, submarine etc.
* **INT** p: bitset of type of properties owned; future proofing
* **INT** p: heist percentage of payout
* **INT** t: time of day chosen (day, night)
* **INT** w: weapon loadout the player has picked on the board
* **INT** o: outfits chosen on the board
* **BOOL** s: whether suppressors were selected on the board
* **INT** s: bitset of support crews selected on the planning board: airstrike, heavy weapon drop, sniper, air support, spy drone, weapon stash
* **INT** i: which approach the players took to infiltrate the island: Stealth Chopper ? North Drop Zone, Gun Boat ? Main Docks etc.
* **INT** i: which approach the players chose on the board to escape the island: airstrip, main docks etc.
* **INT** p: what is the primary target: files, bearer bonds, diamonds etc.
* **INT** w: type of weather during the heist
* **INT** w: level of enemy weapon disruption: none, low, medium, high
* **INT** s: bitset of support crews used during the mission: airstrike, heavy weapon drop, sniper, air support, spy drone, weapon stash
* **INT** m: bitset for miscellaneous actions in the finale: whether the player picked up the golden gun, whether the player picked up the SPAS 12, whether the player looted El Rubio's safe, whether the radar tower has been disabled
* **INT** c: which compound entrance the players used: main gate explosion, side gate left, side gate right, rappel left etc.
* **INT** p: which entrance the players chose to get to the primary target: elevator, underground entrance 1, underground entrance 1
* **INT** c: which exit from the compound the players used: main gate, side gate left etc.
* **INT** i: bitset of equipment used during the finale, on the island: explosives, bolt cutters, side gate codes, trojan horse vehicle, uniform, rappel equipment, jailor keys, glass cutter, double keycard
* **INT** i: which approach the players actually used to escape the island: airstrip, main docks etc.
* **BOOL** f: whether the player failed stealth and alerted the enemies
* **BOOL** s: was this player in spectator cam when the mission ended
* **INT** m: total amount of money earned from the heist
* **INT** s: bitset of secondary loot locations that were hit, minimum of one block stolen: cash, weed, cocaine, gold, paintings
* **INT** s: array for secondary target cash: number of blocks stolen, money value at the end of the mission, number of blocks at the end of the mission, set block value in the bag
* **INT** s: array for secondary target cocaine: number of blocks stolen, money value at the end of the mission, number of blocks at the end of the mission, set block value in the bag
* **INT** s: array for secondary target weed: number of blocks stolen, money value at the end of the mission, number of blocks at the end of the mission, set block value in the bag
* **INT** s: array for secondary target gold: number of blocks stolen, money value at the end of the mission, number of blocks at the end of the mission, set block value in the bag
* **INT** s: array for secondary target paintings: number of blocks stolen, money value at the end of the mission, number of blocks at the end of the mission, set block value in the bag
* **INT** b: player's total bag capacity
* **INT** c: number of blocks of cash stolen
* **INT** c: money value of cash stolen at the end of the mission
* **INT** c: number of blocks of cash held at the end of the mission
* **INT** c: set block value in the bag for cash
* **INT** c: number of blocks of cocaine stolen
* **INT** c: money value of cocaine stolen at the end of the mission
* **INT** c: number of blocks of cocaine held at the end of the mission
* **INT** c: set block value in the bag for cocaine
* **INT** w: number of blocks of weed stolen
* **INT** w: money value of weed stolen at the end of the mission
* **INT** w: number of blocks of weed held at the end of the mission
* **INT** w: set block value in the bag for weed
* **INT** g: number of blocks of gold stolen
* **INT** g: money value of gold stolen at the end of the mission
* **INT** g: number of blocks of gold held at the end of the mission
* **INT** g: set block value in the bag for gold
* **INT** p: number of blocks of paintings stolen
* **INT** p: money value of paintings stolen at the end of the mission
* **INT** p: number of blocks of paintings held at the end of the mission
* **INT** p: set block value in the bag for paintings