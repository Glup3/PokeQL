exports.resolver = {
  Query: {
    moveAilment: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getMoveAilmentByNameOrID(id, name);
    }
  }
}