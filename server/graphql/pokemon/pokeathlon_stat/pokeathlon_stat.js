exports.resolver = {
  Query: {
    pokeathlonStat: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getEndpointByNameOrID('pokeathlon-stat', id, name);
    }
  },
  PokeathlonStat: {
    affectingNatures: ({ affecting_natures }) => affecting_natures
  }
}