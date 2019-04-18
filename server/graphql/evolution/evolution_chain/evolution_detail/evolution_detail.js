exports.resolver = {
  EvolutionDetail: {
    heldItem: ({ held_item }) => held_item,
    knownMove: ({ known_move }) => known_move,
    knownMoveType: ({ known_move_type }) => known_move_type,
    minLevel: ({ min_level }) => min_level,
    minHappiness: ({ min_happiness }) => min_happiness,
    minBeauty: ({ min_beauty }) => min_beauty,
    minAffection: ({ min_affection }) => min_affection,
    needsOverworldRain: ({ needs_overworld_rain }) => needs_overworld_rain,
    partySpecies: ({ party_species }) => party_species,
    partyType: ({ party_type }) => party_type,
    relativePhysicalStats: ({ relative_physical_stats }) => relative_physical_stats,
    timeOfDay: ({ time_of_day }) => time_of_day,
    tradeSpecies: ({ trade_species }) => trade_species,
    turnUpsideDown: ({ turn_upside_down }) => turn_upside_down
  }
}