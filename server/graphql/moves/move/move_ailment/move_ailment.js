exports.resolver = {
  MoveAilment: {
    minHits: ({ min_hits }) => min_hits,
    maxHits: ({ max_hits }) => max_hits,
    minTurns: ({ min_turns }) => min_turns,
    maxTurns: ({ max_turns }) => max_turns,
    critRate: ({ crit_rate }) => crit_rate,
    ailmentChance: ({ ailment_chance }) => ailment_chance,
    flinchChance: ({ flinch_chance }) => flinch_chance,
    statChance: ({ stat_chance }) => stat_chance,
  }
}