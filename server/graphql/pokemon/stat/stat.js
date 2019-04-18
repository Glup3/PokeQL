exports.resolver = {
  Query: {
    stat: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getStatByNameOrID(id, name);
    }
  },
  Stat: {
    gameIndex: ({ game_index }) => game_index,
    isBattleOnly: ({ is_battle_only }) => is_battle_only,
    affectingMoves: ({ affecting_moves }) => affecting_moves,
    affectingNatures: ({ affecting_natures }) => affecting_natures,
    moveDamageClass: ({ move_damage_class }) => move_damage_class
  }
}