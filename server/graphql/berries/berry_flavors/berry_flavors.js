exports.resolver = {
  Query: {
    berryFlavor: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getBerryFlavorByNameOrID(id, name);
    }
  },
  BerryFlavor: {
    contestType: ({ contest_type }) => contest_type
  }
}