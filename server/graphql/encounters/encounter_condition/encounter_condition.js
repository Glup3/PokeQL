exports.resolver = {
  Query: {
    encounterCondition: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getEncounterConditionByNameOrID(id, name);
    }
  }
}