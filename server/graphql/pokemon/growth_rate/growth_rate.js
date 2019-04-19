exports.resolver = {
  Query: {
    growthRate: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getEndpointByNameOrID('growth-rate', id, name);
    }
  },
  GrowthRate: {
    pokemonSpecies: ({ pokemon_species }) => pokemon_species
  }
}