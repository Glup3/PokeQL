exports.resolver = {
  Query: {
    encounterCondition: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getEndpointByNameOrID('encounter-condition', id, name);
    }
  }
}