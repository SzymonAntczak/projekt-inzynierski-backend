export interface Restaurant {
    id: number;
    name: string;
    owner: string;
}

export interface RestaurantQueries {
    restaurants(): Restaurant[];
    restaurant(parent: any, args: any, ): Restaurant | null;
}

export interface RestaurantMutations { }
