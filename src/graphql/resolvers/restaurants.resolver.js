const restaurants = [
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

const resolver = {
    queries: {
        restaurants: () => restaurants,
        restaurant: (parent, args) => restaurants.find(restaurant => restaurant.id === +args.id)
    },
    mutations: { }
};

module.exports = resolver;