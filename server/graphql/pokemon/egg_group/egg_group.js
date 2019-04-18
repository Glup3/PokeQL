exports.resolver = {
  Query: {
    eggGroup: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getEggGroupByNameOrID(id, name);
    }
  },
  EggGroup: {
    pokemonSpecies: ({ pokemon_species }) => pokemon_species
  }
}