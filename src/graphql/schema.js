const { gql } = require('apollo-server');
const restaurantsResolver = require('./resolvers/restaurants.resolver');

const typeDefs = gql`
    type Restaurant {
        id: ID!
        name: String!
        owner: String!
    }

    type Query {
        restaurants: [Restaurant!]!
        restaurant(id: ID!): Restaurant
    }

    # type Mutation { }
`;

const resolvers = {
    Query: {
        ...restaurantsResolver.queries
    }
}

module.exports = { typeDefs, resolvers };