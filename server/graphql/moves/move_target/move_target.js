exports.resolver = {
  Query: {
    moveTarget: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getEndpointByNameOrID('move-target', id, name);
    }
  }
}