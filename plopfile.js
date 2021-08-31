module.exports = function (
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  const { ApolloClient, HttpLink, InMemoryCache } = require("@apollo/client");
  const fetch = require("cross-fetch");
  const headers = {
    "content-type": "application/json",
    "x-hasura-admin-secret":
      "bzVu3Vj5YcCqqCMilt0oro4Dg1bWeMWVJQlazLaQiJRhxnfjFI2IdjHJjJzKaxug",
  };

  function createApolloClient() {
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

  const { gql } = require("@apollo/client");
  const GET_RESOURCE_FIELDS = gql`
    {
      __type(name: "core_user") {
        fields {
          name
          type {
            name
            kind
            fields {
              name
            }
          }
        }
      }
    }
  `;

  // plop generator code
  plop.setGenerator("list", {
    description: "this is a skeleton plop react admin list file",
    prompts: [
      { type: "input", name: "resource", message: "Enter resource name" },
    ],
    actions: [
      async function getResource(answers) {
        const client = createApolloClient();
        const { data } = await client.query({ query: GET_RESOURCE_FIELDS });
        console.log(answers.resource);
        if (data?.__type?.fields) {
          // Do
        }
        return "getResource";
      },
      "Done with actions",
    ],
  });
};
