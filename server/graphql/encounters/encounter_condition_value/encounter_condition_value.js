exports.resolver = {
  Query: {
    encounterConditionValue: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getEndpointByNameOrID('encounter-condition-value', id, name);
    }
  }
}