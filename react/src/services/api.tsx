import { ApolloClient, InMemoryCache } from '@apollo/client';

const api = new ApolloClient({ 
    uri: 'https://laravelgraphql.local/graphql', 
    cache: new InMemoryCache() 
});

export default api;