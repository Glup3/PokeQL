exports.resolver = {
  AbilityEffectChange: {
    effectEntries: ({ effect_entries }) => effect_entries,
    versionGroup: ({ version_group }) => version_group
  }
}