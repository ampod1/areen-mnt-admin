module.exports = function (
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  const { createApolloClient } = require("./src/plops/graphqlSetups");
  const { GET_RESOURCE_FIELDS } = require("./src/plops/graphQueries");
  const { createElementFromColumn } = require("@abdelmomen1985/ra-plop-utils");
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
        const { resource } = answers;
        //console.log("data", data);
        if (data?.__type?.fields) {
          // Do
        }
        // TODO ts types is a must
        const {
          getTableFields,
          getTableComments,
          getTableForeignKeys,
        } = require("./src/plops/rest/tableInfo");

        const { result: fieldsResult } = await getTableFields(resource);
        const { result: commentResult } = await getTableComments(resource);
        const { result: foreignResult } = await getTableForeignKeys(resource);

        const [_ignore_cols, ...cols] = fieldsResult;
        const [_ignore_tableComments, tableComments] = commentResult;
        const [_ignore_foreign, ...foreignKeys] = foreignResult;

        console.log(cols, tableComments, foreignKeys);

        console.log(createElementFromColumn({ column_name: cols[1][0] }));
        return "getResource";
      },
      "Done with actions",
    ],
  });
};
