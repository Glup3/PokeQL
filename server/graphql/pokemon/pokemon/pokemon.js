exports.resolver = {
  Query: {
    pokemons: (root, { perPage, page }, { dataSources }, info) => {
      return dataSources.pokeAPI.getEndpointList('pokemon', perPage, page);
    },
    pokemon: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getEndpointByNameOrID('pokemon', id, name);
    }
  },
  Pokemon: {
    isDefault: ({ is_default }) => is_default,
    gameIndices: ({ game_indices }) => game_indices,
    heldItems: ({ held_items }) => held_items,
    locationAreaEncounters: ({ location_area_encounters }) => location_area_encounters,
    baseExperience: ({ base_experience }) => base_experience,
    forms: ({ forms }, idk, { dataSources }) => {
      return dataSources.pokeAPI.resolveAPIResourceList(forms);
    },
    species: ({ species }, idk, { dataSources }) => {
      return dataSources.pokeAPI.resolveAPIResource(species);
    }
  }
}