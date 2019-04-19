exports.resolver = {
  Query: {
    ability: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getEndpointByNameOrID('ability', id, name);
    }
  },
  Ability: {
    isMainSeries: ({ is_main_series }) => is_main_series,
    effectEntries: ({ effect_entries }) => effect_entries,
    effectChanges: ({ effect_changes }) => effect_changes,
    flavorTextEntries: ({ flavor_text_entries }) => flavor_text_entries
  }
}