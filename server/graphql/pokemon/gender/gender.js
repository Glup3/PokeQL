exports.resolver = {
  Query: {
    gender: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getEndpointByNameOrID('gender', id, name);
    }
  },
  Gender: {
    pokemonSpeciesDetails: ({ pokemon_species_details }) => pokemon_species_details,
    requiredForEvolution: ({ required_for_evolution }) => required_for_evolution
  }
}