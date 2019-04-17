exports.resolver = {
  Query: {
    region: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getRegionByNameOrID(id, name);
    }
  },
  Region: {
    mainGeneration: ({ main_generation }) => main_generation,
    versionGroups: ({ version_groups }) => version_groups
  }
}