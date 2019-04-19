exports.resolver = {
  Query: {
    berryFlavor: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getEndpointByNameOrID('berry-flavor', id, name);
    },
    berryFlavors: (root, { perPage, page }, { dataSources }, info) => {
      return dataSources.pokeAPI.getEndpointList('berry-flavor', perPage, page);
    },
  },
  BerryFlavor: {
    contestType: ({ contest_type }, idk, { dataSources }) => {
      return dataSources.pokeAPI.resolveAPIResource(contest_type);
    }
  }
}