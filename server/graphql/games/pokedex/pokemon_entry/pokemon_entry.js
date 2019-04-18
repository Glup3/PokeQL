exports.resolver = {
  PokemonEntry: {
    entryNumber: ({ entry_number }) => entry_number,
    pokemonSpecies: ({ pokemon_species }) => pokemon_species
  }
}