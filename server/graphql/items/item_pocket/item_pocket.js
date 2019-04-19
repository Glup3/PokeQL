exports.resolver = {
  Query: {
    itemPocket: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getEndpointByNameOrID('item-pocket', id, name);
    }
  }
}