exports.resolver = {
  MoveBattleStylePreference: {
    lowHpPreference: ({ low_hp_preference }) => low_hp_preference,
    highHpPreference: ({ high_hp_preference }) => high_hp_preference,
    moveBattleStyle: ({ move_battle_style }) => move_battle_style
  }
}