import { ApolloProvider } from "@apollo/client";
import buildHasuraProvider from "ra-data-hasura";
import React, { useEffect, useState } from "react";
import { Admin, LegacyDataProvider, ListGuesser, Resource } from "react-admin";
import { client } from "./apollo/apolloClient";
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
import CityCreate from "./components/mnt/city/CityCreate";
import CityEdit from "./components/mnt/city/CityEdit";
import CityList from "./components/mnt/city/CityList";
import ContractList from "./components/mnt/contract/ContractList";
import CreateContract from "./components/mnt/contract/CreateContract";
import EditContract from "./components/mnt/contract/EditContract";
import ContractItemCreate from "./components/mnt/contractItem/ContractItemCreate";
import ContractItemEdit from "./components/mnt/contractItem/ContractItemEdit";
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
import UserCityCreate from "./components/mnt/userCity/UserCityCreate";
import UserCityEdit from "./components/mnt/userCity/UserCityEdit";
import UserCityList from "./components/mnt/userCity/UserCityList";
import i18nProvider from "./localization/i18n/i18nProvider";
import { MyAuthProvider } from "./MyAuthProvider";
import CustomLayout from "./reactAdminCustom/CustomLayout";
import CustomLogin from "./reactAdminCustom/CustomLogin";
import { theme } from "./theme";

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
          locale="ar"
          i18nProvider={i18nProvider}
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
            name="mnt_user_city"
            list={UserCityList}
            edit={UserCityEdit}
            create={UserCityCreate}
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
            name="mnt_city"
            list={CityList}
            create={CityCreate}
            edit={CityEdit}
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
          <Resource
            name="mnt_contract_item"
            edit={ContractItemEdit}
            list={ListGuesser}
            create={ContractItemCreate}
          />
        </Admin>
      </ApolloProvider>
    </>
  );
}

export default App;
