exports.resolver = {
  Query: {
    evolutionTrigger: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getEvolutionTriggerByNameOrID(id, name);
    }
  },
  EvolutionTrigger: {
    pokemonSpecies: ({ pokemon_species }) => pokemon_species
  }
}