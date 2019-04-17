exports.resolver = {
  Query: {
    contestType: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getContestTypeByNameOrID(id, name);
    }
  },
  ContestType: {
    berryFlavor: ({ berry_flavor }) => berry_flavor
  }
}