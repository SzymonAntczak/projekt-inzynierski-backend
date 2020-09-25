import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers } from './graphql/schema';
import { environment } from './environment';

const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: environment.apollo.introspection,
    playground: environment.apollo.playground
});

server.listen(environment.port)
    .then(serverInfo => console.log(`Server ready at ${serverInfo.url}. `))
    .catch(err => console.log(err));

if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => server.stop());
}