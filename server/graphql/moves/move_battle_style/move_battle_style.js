exports.resolver = {
  Query: {
    moveBattleStyle: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getMoveBattleStyleByNameOrID(id, name);
    }
  }
}