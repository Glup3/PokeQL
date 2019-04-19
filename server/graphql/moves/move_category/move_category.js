exports.resolver = {
  Query: {
    moveCategory: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getEndpointByNameOrID('move-category', id, name);
    }
  }
}