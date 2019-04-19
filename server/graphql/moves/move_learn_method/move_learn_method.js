exports.resolver = {
  Query: {
    moveLearnMethod: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getEndpointByNameOrID('move-learn-method', id, name);
    }
  },
  MoveLearnMethod: {
    versionGroups: ({ version_groups }) => version_groups
  }
}