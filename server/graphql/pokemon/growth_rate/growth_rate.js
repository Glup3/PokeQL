exports.resolver = {
  Query: {
    growthRate: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getGrowthRateByNameOrID(id, name);
    }
  },
  GrowthRate: {
    pokemonSpecies: ({ pokemon_species }) => pokemon_species
  }
}