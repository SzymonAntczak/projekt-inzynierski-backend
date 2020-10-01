import { ApolloServer } from 'apollo-server';
import * as typeDefs from './graphql/type-defs.graphql';
import resolvers from './graphql/resolvers/resolvers';
import Mongoose from 'mongoose';
import { environment } from './environment';

const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: environment.apollo.introspection,
    playground: environment.apollo.playground
});

Mongoose.connect(`mongodb+srv://${environment.mongoDb.user}:${environment.mongoDb.password}@cluster0.tbr7j.mongodb.net/${environment.mongoDb.name}?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => server.listen(environment.port))
    .then(serverInfo => console.log(`Server ready at ${serverInfo.url}. `))
    .catch(err => console.log(err))

if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => server.stop());
}