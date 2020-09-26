import { IResolvers } from "apollo-server";
import { restaurantsResolver } from './restaurants/restaurants.resolver';

const resolvers: IResolvers = {
    Query: {
        ...restaurantsResolver.queries
    }
}
  
export default resolvers;