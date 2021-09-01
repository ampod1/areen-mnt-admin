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
exports.GET_RESOURCE_FIELDS = GET_RESOURCE_FIELDS;
