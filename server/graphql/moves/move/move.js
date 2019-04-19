exports.resolver = {
  Query: {
    move: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getEndpointByNameOrID('move', id, name);
    }
  },
  Move: {
    effectChance: ({ effect_chance }) => effect_chance,
    contestCombos: ({ contest_combos }) => contest_combos,
    contestType: ({ contest_type }) => contest_type,
    contestEffect: ({ contest_effect }) => contest_effect,
    damageClass: ({ damage_class }) => damage_class,
    effectEntries: ({ effect_entries }) => effect_entries,
    effectChanges: ({ effect_changes }) => effect_changes,
    flavorTextEntries: ({ flavor_text_entries }) => flavor_text_entries,
    pastValues: ({ past_values }) => past_values,
    statChanges: ({ stat_changes }) => stat_changes,
    superContestEffect: ({ super_contest_effect }) => super_contest_effect,
  }
}