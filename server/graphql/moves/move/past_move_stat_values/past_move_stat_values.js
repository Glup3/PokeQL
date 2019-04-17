exports.resolver = {
  PastMoveStatValues: {
    effectChance: ({ effect_chance }) => effect_chance,
    effectEntries: ({ effect_entries }) => effect_entries,
    versionGroup: ({ version_group }) => version_group,
  }
}