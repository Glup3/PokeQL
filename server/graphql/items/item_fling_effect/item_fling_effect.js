exports.resolver = {
  Query: {
    itemFlingEffect: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getEndpointByNameOrID('item-fling-effect', id, name);
    }
  },
  ItemFlingEffect: {
    effectEntries: ({ effect_entries }) => effect_entries
  }
}