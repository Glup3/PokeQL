exports.resolver = {
  Query: {
    itemCategory: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getItemCategoryByNameOrID(id, name);
    }
  }
}