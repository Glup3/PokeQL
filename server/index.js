const express = require('express');
const { makeExecutableSchema } = require('graphql-tools');
const { ApolloServer } = require('apollo-server-express');
const PokeAPI = require('./api/pokeapi');

const glue = require('schemaglue');
const { schema, resolver } = glue('server/graphql');

const port = 4000;
const app = express();

const executableSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers: resolver,
});

const server = new ApolloServer({ 
  schema: executableSchema,
  dataSources: () => ({
    pokeAPI: new PokeAPI()
  }),
  playground: {
    endpoint: '/graphql'
  },
});

server.applyMiddleware({ app });

app.listen(port, () => {
  console.log('Server ist running');
});