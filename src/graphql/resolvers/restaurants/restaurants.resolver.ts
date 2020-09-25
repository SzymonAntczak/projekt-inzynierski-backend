import { Resolver } from "../resolvers.model";
import { Restaurant, RestaurantMutations, RestaurantQueries } from "./restaurants.model";

const restaurants: Restaurant[] = [
    {
        id: 1,
        name: "McDonald's",
        owner: 'Ronald McDonald'
    },
    {
        id: 2,
        name: 'KFC',
        owner: 'Someone'
    }
];

export const restaurantsResolver: Resolver<RestaurantQueries, RestaurantMutations> = {
    queries: {
        restaurants: () => restaurants,
        restaurant: (parent: any, args: any) => restaurants.find(restaurant => restaurant.id === +args.id) || null
    }
}
