exports.resolver = {
  NatureStatChange: {
    maxChange: ({ max_change }) => max_change,
    pokeathlonStat: ({ pokeathlon_stat }) => pokeathlon_stat
  }
}