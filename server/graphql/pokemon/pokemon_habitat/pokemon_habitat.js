exports.resolver = {
  Query: {
    pokemonHabitat: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getPokemonHabitatByNameOrID(id, name);
    }
  },
  PokemonHabitat: {
    pokemonSpecies: ({ pokemon_species }) => pokemon_species
  }
}