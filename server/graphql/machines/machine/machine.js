exports.resolver = {
  Query: {
    machine: (root, { id }, { dataSources }) => {
      return dataSources.pokeAPI.getEndpointByID('machine', id);
    }
  },
  Machine: {
    versionGroup: ({ version_group }) => version_group
  }
}