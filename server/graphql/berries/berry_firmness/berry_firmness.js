exports.resolver = {
  Query: {
    berryFirmness: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getBerryFirmnessByNameOrID(id, name);
    }
  }
}