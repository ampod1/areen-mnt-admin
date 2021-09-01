module.exports = async function getTableFields() {
  const Axios = require("axios").default;
  const headers = {
    "Content-Type": "application/json",
    "X-Hasura-Role": "admin",
    "x-hasura-admin-secret":
      "bzVu3Vj5YcCqqCMilt0oro4Dg1bWeMWVJQlazLaQiJRhxnfjFI2IdjHJjJzKaxug",
  };

  const postData = {
    type: "run_sql",
    args: {
      sql: "SELECT column_name, data_type FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'core_user';",
    },
  };

  const { data } = await Axios.post(
    "https://caring-labrador-34.hasura.app/v2/query",
    postData,
    { headers }
  );
  console.log(data);
};
