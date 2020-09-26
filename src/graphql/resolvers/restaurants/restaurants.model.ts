/* eslint-disable no-unused-vars */
import { Document } from 'mongoose';

export interface GqlRestaurant extends Document {
    _id: string;
    name: string;
    owner: string;
}

export interface GqlRestaurantArgs {
    _id: string;
}

export interface GqlRestaurantsQueries {
    restaurants: () => Promise<GqlRestaurant[]>;
    restaurant: (parent: any, args: GqlRestaurantArgs) => Promise<GqlRestaurant>;
}
