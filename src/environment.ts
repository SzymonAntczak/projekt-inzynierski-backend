const defaultPort = 4000;

interface Environment {
  apollo: {
    introspection: boolean,
    playground: boolean
  };
  mongoDb: {
    user: string;
    name: string;
    password: string;
  };
  port: number | string;
}

export const environment: Environment = {
  apollo: {
    introspection: process.env.APOLLO_INTROSPECTION === 'true',
    playground: process.env.APOLLO_PLAYGROUND === 'true'
  },
  mongoDb: {
    user: process.env.MONGODB_USER as string,
    name: process.env.MONGODB_NAME as string,
    password: process.env.MONGODB_PASSWORD as string,
  },
  port: process.env.PORT || defaultPort
};