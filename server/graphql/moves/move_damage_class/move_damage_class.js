exports.resolver = {
  Query: {
    moveDamageClass: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getMoveDamageClassByNameOrID(id, name);
    }
  }
}