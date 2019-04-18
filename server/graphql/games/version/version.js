exports.resolver = {
  Query: {
    version: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getVersionByNameOrID(id, name);
    }
  },
  Version: {
    versionGroup: ({ version_group }) => version_group
  }
}