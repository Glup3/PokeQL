exports.resolver = {
  Query: {
    superContestEffect: (root, { id }, { dataSources }) => {
      return dataSources.pokeAPI.getSuperContestEffectByID(id);
    }
  },
  SuperContestEffect: {
    flavorTextEntries: ({ flavor_text_entries }) => flavor_text_entries
  }
}