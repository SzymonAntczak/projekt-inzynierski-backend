import { Resolver } from "../resolvers.model";
import { GqlRestaurant, GqlRestaurantArgs, GqlRestaurantsQueries } from "./restaurants.model";
import Restaurant from '../../../mongodb/models/restaurant.model';

async function getRestaurantList() {
    return await Restaurant.find() as GqlRestaurant[];
}

async function getRestaurantListItem({ _id }: GqlRestaurantArgs) {
    return await Restaurant.findById(_id) as GqlRestaurant;
}

export const restaurantsResolver: Resolver<GqlRestaurantsQueries> = {
    queries: {
        restaurants: () => getRestaurantList(),
        restaurant: (parent: any, args: GqlRestaurantArgs) => getRestaurantListItem(args)
    }
}
