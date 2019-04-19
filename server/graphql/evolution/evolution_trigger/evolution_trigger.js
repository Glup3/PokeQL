exports.resolver = {
  Query: {
    evolutionTrigger: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getEndpointByNameOrID('evolution-trigger', id, name);
    }
  },
  EvolutionTrigger: {
    pokemonSpecies: ({ pokemon_species }) => pokemon_species
  }
}