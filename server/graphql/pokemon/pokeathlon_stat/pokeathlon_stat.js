exports.resolver = {
  Query: {
    pokeathlonStat: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getPokeathlonStatByNameOrID(id, name);
    }
  },
  PokeathlonStat: {
    affectingNatures: ({ affecting_natures }) => affecting_natures
  }
}