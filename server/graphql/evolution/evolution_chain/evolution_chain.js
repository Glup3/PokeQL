exports.resolver = {
  Query: {
    evolutionChain: (root, { id }, { dataSources }) => {
      return dataSources.pokeAPI.getEvolutionChainByID(id);
    }
  },
  EvolutionChain: {
    babyTriggerItem: ({ baby_trigger_item }) => baby_trigger_item
  }
}