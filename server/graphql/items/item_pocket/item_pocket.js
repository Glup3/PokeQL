exports.resolver = {
  Query: {
    itemPocket: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getItemPocketByNameOrID(id, name);
    }
  }
}