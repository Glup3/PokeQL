exports.resolver = {
  Query: {
    versionGroup: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getVersionGroupByNameOrID(id, name);
    }
  },
  VersionGroup: {
    moveLearnMethods: ({ move_learn_methods }) => move_learn_methods
  }
}