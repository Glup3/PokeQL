exports.resolver = {
  VersionEncounterDetail: {
    maxChance: ({ max_chance }) => max_chance,
    encounterDetails: ({ encounter_details }) => encounter_details,
  }
}