exports.resolver = {
  Query: {
    locationArea: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getEndpointByNameOrID('location-area', id, name);
    }
  },
  LocationArea: {
    gameIndex: ({ game_index }) => game_index,
    encounterMethodRates: ({ encounter_method_rates }) => encounter_method_rates,
    pokemonEncounters: ({ pokemon_encounters }) => pokemon_encounters
  }
}