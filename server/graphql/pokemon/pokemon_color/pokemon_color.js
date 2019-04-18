exports.resolver = {
  Query: {
    pokemonColor: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getPokemonColorByNameOrID(id, name);
    }
  },
  PokemonColor: {
    pokemonSpecies: ({ pokemon_species }) => pokemon_species
  }
}