exports.resolver = {
  Query: {
    generation: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getGenerationByNameOrID(id, name);
    }
  },
  Generation: {
    mainRegion: ({ main_region }) => main_region,
    pokemonSpecies: ({ pokemon_species }) => pokemon_species,
    versionGroups: ({ version_groups }) => version_groups
  }
}