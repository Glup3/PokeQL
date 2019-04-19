exports.resolver = {
  Query: {
    encounterMethod: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getEndpointByNameOrID('encounter-method', id, name);
    }
  }
}