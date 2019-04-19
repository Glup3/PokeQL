exports.resolver = {
  Query: {
    characteristic: (root, { id }, { dataSources }) => {
      return dataSources.pokeAPI.getEndpointByID('characteristic', id);
    }
  },
  Characteristic: {
    geneModulo: ({ gene_modulo }) => gene_modulo,
    possibleValues: ({ possible_values }) => possible_values
  }
}