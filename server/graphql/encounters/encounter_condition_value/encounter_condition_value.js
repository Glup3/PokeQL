exports.resolver = {
  Query: {
    encounterConditionValue: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getEncounterConditionValueByNameOrID(id, name);
    }
  }
}