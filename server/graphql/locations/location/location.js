exports.resolver = {
  Query: {
    location: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getLocationByNameOrID(id, name);
    }
  },
  Location: {
    gameIndices: ({ game_indices }) => game_indices
  }
}