exports.resolver = {
  Query: {
    moveCategory: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getMoveCategoryByNameOrID(id, name);
    }
  }
}