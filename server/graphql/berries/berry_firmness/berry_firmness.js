exports.resolver = {
  Query: {
    berryFirmness: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getEndpointByNameOrID('berry-firmness', id, name);
    }
  }
}