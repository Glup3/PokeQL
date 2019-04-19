exports.resolver = {
  Query: {
    eggGroup: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getEndpointByNameOrID('egg-group', id, name);
    }
  },
  EggGroup: {
    pokemonSpecies: ({ pokemon_species }) => pokemon_species
  }
}