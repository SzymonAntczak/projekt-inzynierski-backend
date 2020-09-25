import { gql, IResolvers } from 'apollo-server';
import { restaurantsResolver } from './resolvers/restaurants/restaurants.resolver';

export const typeDefs = gql`
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

export const resolvers: IResolvers = {
    Query: {
        ...restaurantsResolver.queries
    }
}
