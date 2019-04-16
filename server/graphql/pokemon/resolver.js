exports.resolver = {
  Query: {
    pokemons: (root, args, context, info) => {
      return null;
    },
    pokemon: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getPokemonByNameOrID(id, name);
    }
  },
  Pokemon: {
    isDefault: ({ is_default }) => is_default,
    gameIndices: ({ game_indices }) => game_indices,
    heldItems: ({ held_items }) => held_items,
    locationAreaEncounters: ({ location_area_encounters }) => location_area_encounters
  },
  PokemonHeldItems: {
    versionDetails: ({ version_details }) => version_details
  }
}