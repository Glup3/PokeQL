exports.resolver = {
  Query: {
    pokemonForm: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getPokemonFormByNameOrID(id, name);
    }
  },
  PokemonForm: {
    formOrder: ({ form_order }) => form_order,
    isDefault: ({ is_default }) => is_default,
    isBattleOnly: ({ is_battle_only }) => is_battle_only,
    isMega: ({ is_mega }) => is_mega,
    formName: ({ form_name }) => form_name,
    versionGroup: ({ version_group }) => version_group,
    formNames: ({ form_names }) => form_names
  }
}