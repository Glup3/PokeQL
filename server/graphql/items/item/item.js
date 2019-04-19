exports.resolver = {
  Query: {
    item: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getEndpointByNameOrID('item', id, name);
    }
  },
  Item: {
    flingPower: ({ fling_power }) => fling_power,
    flingEffect: ({ fling_effect }) => fling_effect,
    effectEntries: ({ effect_entries }) => effect_entries,
    flavorTextEntries: ({ flavor_text_entries }) => flavor_text_entries,
    gameIndices: ({ game_indices }) => game_indices,
    heldByPokemon: ({ held_by_pokemon }) => held_by_pokemon,
    babyTriggerFor: ({ baby_trigger_for }) => baby_trigger_for
  }
}