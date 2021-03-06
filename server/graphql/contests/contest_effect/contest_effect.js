exports.resolver = {
  Query: {
    contestEffect: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getEndpointByNameOrID('contest-effect', id, name);
    }
  },
  ContestEffect: {
    effectEntries: ({ effect_entries }) => effect_entries,
    flavorTextEntries: ({ flavor_text_entries }) => flavor_text_entries
  }
}