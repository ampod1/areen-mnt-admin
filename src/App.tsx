import {
  ApolloClient,
  ApolloProvider,
  gql,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import buildHasuraProvider, {
  BuildFields,
  buildFields,
  FetchType,
} from "ra-data-hasura";
import React, { useEffect, useState } from "react";
import { Admin, LegacyDataProvider, ListGuesser, Resource } from "react-admin";
import "./App.css";
import CreateCustomer from "./components/bsc/customer/CreateCustomer";
import CustomersList from "./components/bsc/customer/CustomersList";
import EditCustomer from "./components/bsc/customer/EditCustomer";
import CreateUser from "./components/coreUser/CreateUser";
import EditUser from "./components/coreUser/EditUser";
import { UserList } from "./components/coreUser/UserList";
import CreateUsertype from "./components/coreUsertype/CreateUsertype";
import EditUsertype from "./components/coreUsertype/EditUsertype";
import UsertypeList from "./components/coreUsertype/UsertypeList";
import Dashboard from "./components/dashboard/Dashboard";
import { CreateItem } from "./components/mnt/items/CreateItem";
import { EditItem } from "./components/mnt/items/EditItem";
import ProjectList from "./components/mnt/project/ProjectList";
import RequestCreate from "./components/mnt/request/RequestCreate";
import RequestEdit from "./components/mnt/request/RequestEdit";
import RequestList from "./components/mnt/request/RequestList";
import RequestAssignList from "./components/mnt/requestAssign/RequestAssignList";
import { MyAuthProvider } from "./MyAuthProvider";
import CustomLayout from "./reactAdminCustom/CustomLayout";
import CustomLogin from "./reactAdminCustom/CustomLogin";
import { theme } from "./theme";

const headers = {
  "content-type": "application/json",
  "x-hasura-admin-secret": process.env.REACT_APP_HASURA_GRAPHQL_ADMIN_SECRET,
};

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: "https://caring-labrador-34.hasura.app/v1/graphql",
      headers,
    }),
    cache: new InMemoryCache(),
    defaultOptions: {
      query: { fetchPolicy: "network-only" },
    },
  });
};
const extractFieldsFromQuery = (queryAst: any) => {
  return queryAst.definitions[0].selectionSet.selections;
};

const DELETE_MNT_REQUEST_ASSIGN = gql`
  mutation ($code: Int) {
    delete_mnt_request_assign(where: { code: { _eq: $code } }) {
      affected_rows
    }
  }
`;

const customBuildFields: BuildFields = (type, fetchType) => {
  const resourceName = type.name;
  console.log(resourceName, fetchType);

  if (
    resourceName === "mnt_request_assign" &&
    fetchType === FetchType.DELETE_MANY
  ) {
    console.log("extractFieldsFromQuery mnt_request_assign");
    //return extractFieldsFromQuery(DELETE_MNT_REQUEST_ASSIGN);
  }

  // else return default query fields
  return buildFields(type, fetchType);
};

// Custom data provider

const client = createApolloClient();
function App() {
  const [dataProvider, setDataProvider] = useState<null | Function>(null);

  useEffect(() => {
    const buildDataProvider = async () => {
      const dataProvider = await buildHasuraProvider(
        {
          client,
        }
        //{ buildFields: customBuildFields }
      );
      setDataProvider(() => dataProvider);
    };
    buildDataProvider();
  }, []);

  if (!dataProvider) return <p>Loading...</p>;
  return (
    <>
      <ApolloProvider client={client}>
        <Admin
          authProvider={new MyAuthProvider()}
          theme={theme}
          dataProvider={dataProvider as LegacyDataProvider}
          loginPage={CustomLogin}
          dashboard={Dashboard}
          layout={CustomLayout}
        >
          <Resource
            name="core_user"
            list={UserList}
            create={CreateUser}
            edit={EditUser}
          />
          <Resource
            name="core_usertype"
            list={UsertypeList}
            create={CreateUsertype}
            edit={EditUsertype}
          />
          <Resource
            name="bsc_customer"
            list={CustomersList}
            edit={EditCustomer}
            create={CreateCustomer}
          />
          <Resource
            name="mnt_item"
            list={ListGuesser}
            edit={EditItem}
            create={CreateItem}
          />
          <Resource name="mnt_site" />
          <Resource
            name="mnt_project"
            list={ProjectList}
            edit={EditItem}
            create={CreateItem}
          />
          <Resource
            name="mnt_unit"
            list={ListGuesser}
            edit={EditItem}
            create={CreateItem}
          />
          <Resource
            name="mnt_customer_unit"
            list={ListGuesser}
            edit={EditItem}
            create={CreateItem}
          />
          <Resource
            name="mnt_request"
            list={RequestList}
            edit={RequestEdit}
            create={RequestCreate}
          />
          <Resource
            name="mnt_request_assign"
            list={RequestAssignList}
            edit={EditItem}
            create={CreateItem}
          />
        </Admin>
      </ApolloProvider>
    </>
  );
}

export default App;
