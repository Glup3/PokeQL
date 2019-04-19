exports.resolver = {
  Query: {
    itemAttribute: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getEndpointByNameOrID('item-attribute', id, name);
    }
  }
}