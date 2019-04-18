exports.resolver = {
  Query: {
    itemAttribute: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getItemAttributeByNameOrID(id, name);
    }
  }
}