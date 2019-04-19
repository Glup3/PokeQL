exports.resolver = {
  Query: {
    pokemonColor: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getEndpointByNameOrID('pokemon-color', id, name);
    }
  },
  PokemonColor: {
    pokemonSpecies: ({ pokemon_species }) => pokemon_species
  }
}