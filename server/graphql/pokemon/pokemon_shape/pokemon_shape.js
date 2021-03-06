exports.resolver = {
  Query: {
    pokemonShape: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getEndpointByNameOrID('pokemon-shape', id, name);
    }
  },
  PokemonShape: {
    awesomeNames: ({ awesome_names }) => awesome_names,
    pokemonSpecies: ({ pokemon_species }) => pokemon_species
  }
}