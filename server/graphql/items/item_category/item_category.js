exports.resolver = {
  Query: {
    itemCategory: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getEndpointByNameOrID('item-category', id, name);
    }
  }
}