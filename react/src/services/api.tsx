import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({ 
    uri: 'https://laravelgraphql.local/graphql', 
    cache: new InMemoryCache() 
});

export default client;