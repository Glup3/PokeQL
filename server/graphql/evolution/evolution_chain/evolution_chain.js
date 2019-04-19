exports.resolver = {
  Query: {
    evolutionChain: (root, { id }, { dataSources }) => {
      return dataSources.pokeAPI.getEndpointByID('evolution-chain', id);
    }
  },
  EvolutionChain: {
    babyTriggerItem: ({ baby_trigger_item }) => baby_trigger_item
  }
}