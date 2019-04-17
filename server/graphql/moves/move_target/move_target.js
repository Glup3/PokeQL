exports.resolver = {
  Query: {
    moveTarget: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getMoveTargetByNameOrID(id, name);
    }
  }
}