exports.resolver = {
  PalParkEncounterSpecies: {
    baseScore: ({ base_score }) => base_score,
    pokemonSpecies: ({ pokemon_species }) => pokemon_species
  }
}