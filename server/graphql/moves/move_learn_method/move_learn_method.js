exports.resolver = {
  Query: {
    moveLearnMethod: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getMoveLearnMethodByNameOrID(id, name);
    }
  },
  MoveLearnMethod: {
    versionGroups: ({ version_groups }) => version_groups
  }
}