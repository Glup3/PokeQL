exports.resolver = {
  PokemonMoveVersion: {
    moveLearnMethod: ({ move_learn_method }) => move_learn_method,
    versionGroup: ({ version_group }) => version_group,
    levelLearnedAt: ({ level_learned_at }) => level_learned_at,
  }
}