const { ApolloServer, gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    pokemons: [Pokemon]
  }

  type Pokemon {
    id: ID!
  }
`;

const resolvers = {
  Query: {
    pokemons: (root, args, context, info) => {
      return null;
    }
  }
}

const schema = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    endpoint: '/graphql'
  }
});

module.exports = schema;