exports.resolver = {
  Query: {
    superContestEffect: (root, { id }, { dataSources }) => {
      return dataSources.pokeAPI.getEndpointByID('super-contest-effect', id);
    }
  },
  SuperContestEffect: {
    flavorTextEntries: ({ flavor_text_entries }) => flavor_text_entries
  }
}