exports.resolver = {
  Query: {
    encounterMethod: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getEncounterMethodByNameOrID(id, name);
    }
  }
}