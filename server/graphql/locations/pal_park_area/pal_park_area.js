exports.resolver = {
  Query: {
    palParkArea: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getPalParkAreaByNameOrID(id, name);
    }
  },
  PalParkArea: {
    pokemonEncounters: ({ pokemon_encounters }) => pokemon_encounters
  }
}