exports.resolver = {
  TypeRelations: {
    noDamageTo: ({ no_damage_to }) => no_damage_to,
    halfDamageTo: ({ half_damage_to }) => half_damage_to,
    doubleDamageTo: ({ double_damage_to }) => double_damage_to,
    noDamageFrom: ({ no_damage_from }) => no_damage_from,
    halfDamageFrom: ({ half_damage_from }) => half_damage_from,
    doubleDamageFrom: ({ double_damage_from }) => double_damage_from
  }
}