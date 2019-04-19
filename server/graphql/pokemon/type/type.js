exports.resolver = {
  Query: {
    type: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getEndpointByNameOrID('type', id, name);
    }
  },
  Type: {
    damageRelations: ({ damage_relations }) => damage_relations,
    gameIndices: ({ game_indices }) => game_indices,
    moveDamageClass: ({ move_damage_class }) => move_damage_class,
  }
}