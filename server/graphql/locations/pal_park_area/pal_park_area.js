exports.resolver = {
  Query: {
    palParkArea: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getEndpointByNameOrID('pal-park-area', id, name);
    }
  },
  PalParkArea: {
    pokemonEncounters: ({ pokemon_encounters }) => pokemon_encounters
  }
}