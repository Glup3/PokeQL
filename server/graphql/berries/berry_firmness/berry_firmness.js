exports.resolver = {
  Query: {
    berryFirmness: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getEndpointByNameOrID('berry-firmness', id, name);
    },
    berryFirmnesses: (root, { perPage, page }, { dataSources }, info) => {
      return dataSources.pokeAPI.getEndpointList('berry-firmness', perPage, page);
    },
  },
  BerryFirmness: {
    berries: ({ berries }, idk, { dataSources }) => {
      return dataSources.pokeAPI.resolveAPIResourceList(berries);
    }
  }
}