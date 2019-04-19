exports.resolver = {
  Query: {
    moveAilment: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getEndpointByNameOrID('move-ailment', id, name);
    }
  }
}