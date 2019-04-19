exports.resolver = {
  Query: {
    location: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getEndpointByNameOrID('location', id, name);
    }
  },
  Location: {
    gameIndices: ({ game_indices }) => game_indices
  }
}