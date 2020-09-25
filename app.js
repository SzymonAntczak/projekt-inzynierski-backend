const { typeDefs, resolvers } = require('./src/graphql/schema');
const { ApolloServer } = require('apollo-server');

const server = new ApolloServer({ typeDefs, resolvers });

server.listen();