"use strict";
exports.__esModule = true;
var client_1 = require("@apollo/client");
var deepmerge_1 = require("deepmerge");
var apolloClient;
var headers = {
    'content-type': 'application/json',
    'x-hasura-admin-secret': process.env.REACT_APP_HASURA_GRAPHQL_ADMIN_SECRET
};
function createApolloClient() {
    return new client_1.ApolloClient({
        link: new client_1.HttpLink({
            uri: 'https://caring-labrador-34.hasura.app/v1/graphql',
            headers: headers
        }),
        cache: new client_1.InMemoryCache(),
        defaultOptions: {
            query: { fetchPolicy: 'network-only' }
        }
    });
}
function initializeApollo(initialState) {
    if (initialState === void 0) { initialState = null; }
    var _apolloClient = apolloClient !== null && apolloClient !== void 0 ? apolloClient : createApolloClient();
    // If your page has Next.js data fetching methods that use Apollo Client, the initial state
    // gets hydrated here
    if (initialState) {
        // Get existing cache, loaded during client side data fetching
        var existingCache = _apolloClient.extract();
        // Merge the existing cache into data passed from getStaticProps/getServerSideProps
        var data = deepmerge_1["default"](initialState, existingCache);
        // Restore the cache with the merged data
        _apolloClient.cache.restore(data);
    }
    // For SSG and SSR always create a new Apollo Client
    if (typeof window === 'undefined')
        return _apolloClient;
    // Create the Apollo Client once in the client
    if (!apolloClient)
        apolloClient = _apolloClient;
    return _apolloClient;
}
exports.initializeApollo = initializeApollo;
exports.client = createApolloClient();
