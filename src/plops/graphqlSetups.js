const { ApolloClient, HttpLink, InMemoryCache } = require("@apollo/client");
function createApolloClient() {
  const fetch = require("cross-fetch");
  const headers = {
    "content-type": "application/json",
    "x-hasura-admin-secret":
      "bzVu3Vj5YcCqqCMilt0oro4Dg1bWeMWVJQlazLaQiJRhxnfjFI2IdjHJjJzKaxug",
  };

  return new ApolloClient({
    link: new HttpLink({
      uri: "https://caring-labrador-34.hasura.app/v1/graphql",
      fetch,
      headers,
    }),
    cache: new InMemoryCache(),
    defaultOptions: {
      query: { fetchPolicy: "network-only" },
    },
  });
}

exports.createApolloClient = createApolloClient;
