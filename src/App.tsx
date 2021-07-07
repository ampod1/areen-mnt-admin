import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { makeStyles } from "@material-ui/core/styles";
//@ts-ignore
import buildHasuraProvider from "ra-data-hasura";
import React, { useEffect, useState } from "react";
import { Admin, ListGuesser, Login, Resource } from "react-admin";
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
import CustLoginPage from "./CustLoginPage";
import { MyAuthProvider } from "./MyAuthProvider";
import CustomLayout from "./reactAdminCustom/CustomLayout";
import { theme } from "./theme";
const headers = {
  "content-type": "application/json",
  "x-hasura-admin-secret": process.env.REACT_APP_HASURA_GRAPHQL_ADMIN_SECRET,
};

const useStyles = makeStyles({
  avatar: {
    display: "none",
  },
  button: { background: "#b02626" },
});

const MyLoginPage = () => {
  const custClss = useStyles();
  return (
    <>
      <Login
        // A random image that changes everyday
        backgroundImage="https://i.imgur.com/aaxvOwJ.jpg"
        classes={custClss}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "3em 1em 1em 1em",
          }}
        >
          <img src="https://i.imgur.com/oZ1qmMo.png" alt="" />
        </div>
        <CustLoginPage />
      </Login>
    </>
  );
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

const client = createApolloClient();
function App() {
  const [dataProvider, setDataProvider] = useState(null);

  useEffect(() => {
    const buildDataProvider = async () => {
      const dataProvider = await buildHasuraProvider({
        client,
      });
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
          dataProvider={dataProvider!}
          loginPage={MyLoginPage}
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
        </Admin>
      </ApolloProvider>
    </>
  );
}

export default App;
