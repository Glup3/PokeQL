exports.resolver = {
  Query: {
    moveDamageClass: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getEndpointByNameOrID('move-damage-class', id, name);
    }
  }
}