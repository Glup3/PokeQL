exports.resolver = {
  Query: {
    pokedex: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getPokedexByNameOrID(id, name);
    }
  },
  Pokedex: {
    isMainSeries: ({ is_main_series }) => is_main_series,
    pokemonEntries: ({ pokemon_entries }) => pokemon_entries,
    versionGroups: ({ version_groups }) => version_groups,
  }
}