exports.resolver = {
  Query: {
    pokemonSpecies: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getPokemonSpeciesByNameOrID(id, name);
    }
  },
  PokemonSpecies: {
    genderRate: ({ gender_rate }) => gender_rate,
    captureRate: ({ capture_rate }) => capture_rate,
    baseHappiness: ({ base_happiness }) => base_happiness,
    isBaby: ({ is_baby }) => is_baby,
    hatchCounter: ({ hatch_counter }) => hatch_counter,
    hasGenderDifferences: ({ has_gender_differences }) => has_gender_differences,
    formsSwitchable: ({ forms_switchable }) => forms_switchable,
    growthRate: ({ growth_rate }) => growth_rate,
    pokedexNumbers: ({ pokedex_numbers }) => pokedex_numbers,
    eggGroups: ({ egg_groups }) => egg_groups,
    evolvesFromSpecies: ({ evolves_from_species }) => evolves_from_species,
    evolutionChain: ({ evolution_chain }) => evolution_chain,
    palParkEncounters: ({ pal_park_encounters }) => pal_park_encounters,
    flavorTextEntries: ({ flavor_text_entries }) => flavor_text_entries,
    formDescriptions: ({ form_descriptions }) => form_descriptions
  }
}