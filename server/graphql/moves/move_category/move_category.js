exports.resolver = {
  Query: {
    moveCategory: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getMoveCategoryNameOrID(id, name);
    }
  }
}