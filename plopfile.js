module.exports = function (
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  const { createApolloClient } = require("./src/plops/graphqlSetups");
  const { GET_RESOURCE_FIELDS } = require("./src/plops/graphQueries");
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
        console.log("resources", answers.resource);
        console.log("data", data);
        if (data?.__type?.fields) {
          // Do
        }
        const getTableFields = require("./src/plops/rest/getTableFields");
        await getTableFields();
        return "getResource";
      },
      "Done with actions",
    ],
  });
};
