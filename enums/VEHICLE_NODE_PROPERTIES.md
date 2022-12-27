# VEHICLE_NODE_PROPERTIES

## Summary
INFO : The enum defins vehicle node properties as returned by GET_VEHICLE_NODE_PROPERTIES

## Values
* VNP_OFF_ROAD = 1: node has been flagged as 'off road', suitable only for 4x4 vehicles, etc
* VNP_ON_PLAYERS_ROAD: node has been dynamically marked as somewhere ahead, possibly on (or near to) the player's current road
* VNP_NO_BIG_VEHICLES = 4: node has been marked as not suitable for big vehicles
* VNP_SWITCHED_OFF = 8: node is switched off for ambient population
* VNP_TUNNEL_OR_INTERIOR = 16: node is in a tunnel or an interior
* VNP_LEADS_TO_DEAD_END = 32: node is, or leads to, a dead end
* VNP_HIGHWAY = 64: node is marked as highway
* VNP_JUNCTION = 128: node qualifies as junction
* VNP_TRAFFIC_LIGHT = 256: node's special function is traffic-light
* VNP_GIVE_WAY = 512: node's special function is give-way
* VNP_WATER = 1024: node is water/boat