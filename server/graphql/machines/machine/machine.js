exports.resolver = {
  Query: {
    machine: (root, { id }, { dataSources }) => {
      return dataSources.pokeAPI.getMachineByID(id);
    }
  },
  Machine: {
    versionGroup: ({ version_group }) => version_group
  }
}