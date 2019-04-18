exports.resolver = {
  Query: {
    itemFlingEffect: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getItemFlingEffectByNameOrID(id, name);
    }
  },
  ItemFlingEffect: {
    effectEntries: ({ effect_entries }) => effect_entries
  }
}