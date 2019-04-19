exports.resolver = {
  Query: {
    nature: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getEndpointByNameOrID('nature', id, name);
    }
  },
  Nature: {
    decreasedStat: ({ decreased_stat }) => decreased_stat,
    increasedStat: ({ increased_stat }) => increased_stat,
    hatesFlavor: ({ hates_flavor }) => hates_flavor,
    likesFlavor: ({ likes_flavor }) => likes_flavor,
    pokeathlonStatChanges: ({ pokeathlon_stat_changes }) => pokeathlon_stat_changes,
    moveBattleStylePreferences: ({ move_battle_style_preferences }) => move_battle_style_preferences
  }
}