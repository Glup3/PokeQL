exports.resolver = {
  Encounter: {
    minLevel: ({ min_level }) => min_level,
    maxLevel: ({ max_level }) => max_level,
    conditionValues: ({ condition_values }) => condition_values,
  }
}