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
import { Admin, LegacyDataProvider, Resource } from "react-admin";
import "./App.css";
import CreateCustomer from "./components/bsc/customer/CreateCustomer";
import CustomerList from "./components/bsc/customer/CustomerList";
import EditCustomer from "./components/bsc/customer/EditCustomer";
import CreateCustomerType from "./components/bsc/customerType/CreateCustomerType";
import CustomerTypeList from "./components/bsc/customerType/CustomerTypeList";
import EditCustomerType from "./components/bsc/customerType/EditCustomerType";
import CreateUser from "./components/coreUser/CreateUser";
import EditUser from "./components/coreUser/EditUser";
import { UserList } from "./components/coreUser/UserList";
import CreateUsertype from "./components/coreUsertype/CreateUsertype";
import EditUsertype from "./components/coreUsertype/EditUsertype";
import UsertypeList from "./components/coreUsertype/UsertypeList";
import Dashboard from "./components/dashboard/Dashboard";
import AddressList from "./components/mnt/address/AddressList";
import CreateAddress from "./components/mnt/address/CreateAddress";
import EditAddress from "./components/mnt/address/EditAddress";
import ContractList from "./components/mnt/contract/ContractList";
import CreateContract from "./components/mnt/contract/CreateContract";
import EditContract from "./components/mnt/contract/EditContract";
import CustomerUnitCreate from "./components/mnt/customerUnit/CustomerUnitCreate";
import CustomerUnitEdit from "./components/mnt/customerUnit/CustomerUnitEdit";
import CustomerUnitList from "./components/mnt/customerUnit/CustomerUnitList";
import { CreateMntItem } from "./components/mnt/mntItems/CreateMntItem";
import { EditMntItem } from "./components/mnt/mntItems/EditMntItem";
import MntItemList from "./components/mnt/mntItems/MntItemList";
import ProjectCreate from "./components/mnt/project/ProjectCreate";
import ProjectEdit from "./components/mnt/project/ProjectEdit";
import ProjectList from "./components/mnt/project/ProjectList";
import RequestCreate from "./components/mnt/request/RequestCreate";
import RequestEdit from "./components/mnt/request/RequestEdit";
import RequestList from "./components/mnt/request/RequestList";
import RequestAssignList from "./components/mnt/requestAssign/RequestAssignList";
import CreateRequestStatus from "./components/mnt/requestStatus/CreateRequestStatus";
import EditRequestStatus from "./components/mnt/requestStatus/EditRequestStatus";
import RequestStatusList from "./components/mnt/requestStatus/RequestStatusList";
import CreateRequestStatusType from "./components/mnt/requestStatusType/CreateRequestStatusType";
import EditRequestStatusType from "./components/mnt/requestStatusType/EditRequestStatusType";
import StatusTypeList from "./components/mnt/requestStatusType/StatusTypeList";
import CreateSite from "./components/mnt/site/CreateSite";
import EditSite from "./components/mnt/site/EditSite";
import SiteList from "./components/mnt/site/SiteList";
import CreateUnit from "./components/mnt/unit/CreateUnit";
import EditUnit from "./components/mnt/unit/EditUnit";
import UnitList from "./components/mnt/unit/UnitList";
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
            list={CustomerList}
            edit={EditCustomer}
            create={CreateCustomer}
          />
          <Resource
            name="mnt_item"
            list={MntItemList}
            edit={EditMntItem}
            create={CreateMntItem}
          />
          <Resource
            name="mnt_site"
            create={CreateSite}
            edit={EditSite}
            list={SiteList}
          />
          <Resource
            name="mnt_project"
            list={ProjectList}
            edit={ProjectEdit}
            create={ProjectCreate}
          />
          <Resource
            name="mnt_unit"
            list={UnitList}
            edit={EditUnit}
            create={CreateUnit}
          />
          <Resource
            name="mnt_customer_unit"
            list={CustomerUnitList}
            edit={CustomerUnitEdit}
            create={CustomerUnitCreate}
          />
          <Resource
            name="mnt_request"
            list={RequestList}
            edit={RequestEdit}
            create={RequestCreate}
          />
          <Resource name="mnt_request_assign" list={RequestAssignList} />
          <Resource
            name="mnt_request_status_type"
            list={StatusTypeList}
            edit={EditRequestStatusType}
            create={CreateRequestStatusType}
          />
          <Resource
            name="mnt_request_status"
            list={RequestStatusList}
            create={CreateRequestStatus}
            edit={EditRequestStatus}
          />
          <Resource
            name="mnt_contract"
            list={ContractList}
            create={CreateContract}
            edit={EditContract}
          />
          <Resource
            name="bsc_customer_type"
            list={CustomerTypeList}
            create={CreateCustomerType}
            edit={EditCustomerType}
          />
          <Resource
            name="mnt_address"
            list={AddressList}
            create={CreateAddress}
            edit={EditAddress}
          />
        </Admin>
      </ApolloProvider>
    </>
  );
}

export default App;
