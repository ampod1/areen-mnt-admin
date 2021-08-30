module.exports = function (
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  // plop generator code
  plop.setGenerator("list", {
    description: "this is a skeleton plop react admin list file",
    prompts: [
      { type: "input", name: "resource", message: "Enter resource name" },
    ],
    actions: [
      async function getResource(answers) {
        const apolloClient = require("./src/apollo/apolloClient");
        /** @type {import('@apollo/client').ApolloClient} */
        const client = apolloClient.initializeApollo();
        client.query(`hello`);
        client.console.log(answers.resource);
        return "getResource";
      },
      "Done with actions",
    ],
  });
};
