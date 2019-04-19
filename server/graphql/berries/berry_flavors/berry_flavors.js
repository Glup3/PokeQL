exports.resolver = {
  Query: {
    berryFlavor: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getEndpointByNameOrID('berry-flavor', id, name);
    }
  },
  BerryFlavor: {
    contestType: ({ contest_type }) => contest_type
  }
}