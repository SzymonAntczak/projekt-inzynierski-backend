import { IResolvers } from "apollo-server";
import { restaurantsResolver } from './restaurants/restaurants.resolver';
  
export default {
    Query: {
        ...restaurantsResolver.queries
    }
} as IResolvers;