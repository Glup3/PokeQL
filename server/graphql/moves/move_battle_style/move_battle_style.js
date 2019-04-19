exports.resolver = {
  Query: {
    moveBattleStyle: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getEndpointByNameOrID('move-battle-style', id, name);
    }
  }
}