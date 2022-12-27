# STRUCT_HEIST4_FINALE

## Fields
* **INT** playthroughId: playthrough ID, this should appear in all related content, like scopes, preps, finales and minigames, and would enable us to track an entire heist playthrough
* **INT** missionId: mission name
* **INT** sessionId: session ID
* **TEXT_LABEL_31** publicContentId: public content ID
* **INT** hashmac: hash mac
* **INT** bossId1: unique ID of the Boss instance
* **INT** bossId2: unique ID of the Boss instance
* **INT** bosstype: type of org: Securoserv, MC, unaffiliated
* **INT** launcherRank: rank of the player launching
* **INT** playerRole: similar to previous metrics, the player's role: CEO, bodyguard, biker prospect etc.
* **INT** endingReason: similar to previous metrics: won, lost, boss_left etc.
* **INT** replay: counts how many times this mission was failed, then continued from checkpoint/restarted; resets after the player exits the mission, null if not applicable
* **INT** rpEarned: RP earned
* **BOOL** difficult: whether the mission has increased difficulty
* **INT** timeTakenToComplete: time taken to complete, in seconds (for consistency)
* **INT** checkpoint: what checkpoint was the heist failed at; null if not applicable
* **INT** playCount: how many times has the player completed this mission before; first time is 1, then increments of 1 after completing finale, only success matters
* **INT** deaths: how many times the player died
* **INT** targetsKilled: number of mission critical/aggressive peds killed
* **INT** innocentsKilled: number of innocent peds killed
* **INT** properties: bitset of type of properties owned: casino penthouse, gunrunning bunker, smuggler hangar, terrorbyte, submarine etc.
* **INT** properties2: bitset of type of properties owned; future proofing
* **INT** percentage: heist percentage of payout
* **INT** tod: time of day chosen (day, night)
* **INT** wLoadout: weapon loadout the player has picked on the board
* **INT** outfits: outfits chosen on the board
* **BOOL** suppressors: whether suppressors were selected on the board
* **INT** supCrewBoard: bitset of support crews selected on the planning board: airstrike, heavy weapon drop, sniper, air support, spy drone, weapon stash
* **INT** islApproach: which approach the players took to infiltrate the island: Stealth Chopper ? North Drop Zone, Gun Boat ? Main Docks etc.
* **INT** islEscBoard: which approach the players chose on the board to escape the island: airstrip, main docks etc.
* **INT** primTar: what is the primary target: files, bearer bonds, diamonds etc.
* **INT** weather: type of weather during the heist
* **INT** weapDisrup: level of enemy weapon disruption: none, low, medium, high
* **INT** supCrewActual: bitset of support crews used during the mission: airstrike, heavy weapon drop, sniper, air support, spy drone, weapon stash
* **INT** miscActions: bitset for miscellaneous actions in the finale: whether the player picked up the golden gun, whether the player picked up the SPAS 12, whether the player looted El Rubio's safe, whether the radar tower has been disabled
* **INT** compEntrance: which compound entrance the players used: main gate explosion, side gate left, side gate right, rappel left etc.
* **INT** primTarEntrance: which entrance the players chose to get to the primary target: elevator, underground entrance 1, underground entrance 1
* **INT** compExit: which exit from the compound the players used: main gate, side gate left etc.
* **INT** interestItemUsed: bitset of equipment used during the finale, on the island: explosives, bolt cutters, side gate codes, trojan horse vehicle, uniform, rappel equipment, jailor keys, glass cutter, double keycard
* **INT** islEscActual: which approach the players actually used to escape the island: airstrip, main docks etc.
* **BOOL** failedStealth: whether the player failed stealth and alerted the enemies
* **BOOL** specCam: was this player in spectator cam when the mission ended
* **INT** moneyEarned: total amount of money earned from the heist
* **INT** secLoot: bitset of secondary loot locations that were hit, minimum of one block stolen: cash, weed, cocaine, gold, paintings
* **INT** secTarCash: array for secondary target cash: number of blocks stolen, money value at the end of the mission, number of blocks at the end of the mission, set block value in the bag
* **INT** secTarCocaine: array for secondary target cocaine: number of blocks stolen, money value at the end of the mission, number of blocks at the end of the mission, set block value in the bag
* **INT** secTarWeed: array for secondary target weed: number of blocks stolen, money value at the end of the mission, number of blocks at the end of the mission, set block value in the bag
* **INT** secTarGold: array for secondary target gold: number of blocks stolen, money value at the end of the mission, number of blocks at the end of the mission, set block value in the bag
* **INT** secTarPaint: array for secondary target paintings: number of blocks stolen, money value at the end of the mission, number of blocks at the end of the mission, set block value in the bag
* **INT** bagCapacity: player's total bag capacity
* **INT** cashBlocksStolen: number of blocks of cash stolen
* **INT** cashValueFinal: money value of cash stolen at the end of the mission
* **INT** cashBlocksFinal: number of blocks of cash held at the end of the mission
* **INT** cashBlocksSpace: set block value in the bag for cash
* **INT** cocaBlocksStolen: number of blocks of cocaine stolen
* **INT** cocaValueFinal: money value of cocaine stolen at the end of the mission
* **INT** cocaBlocksFinal: number of blocks of cocaine held at the end of the mission
* **INT** cocaBlocksSpace: set block value in the bag for cocaine
* **INT** weedBlocksStolen: number of blocks of weed stolen
* **INT** weedValueFinal: money value of weed stolen at the end of the mission
* **INT** weedBlocksFinal: number of blocks of weed held at the end of the mission
* **INT** weedBlocksSpace: set block value in the bag for weed
* **INT** goldBlocksStolen: number of blocks of gold stolen
* **INT** goldValueFinal: money value of gold stolen at the end of the mission
* **INT** goldBlocksFinal: number of blocks of gold held at the end of the mission
* **INT** goldBlocksSpace: set block value in the bag for gold
* **INT** paintBlocksStolen: number of blocks of paintings stolen
* **INT** paintValueFinal: money value of paintings stolen at the end of the mission
* **INT** paintBlocksFinal: number of blocks of paintings held at the end of the mission
* **INT** paintBlocksSpace: set block value in the bag for paintings