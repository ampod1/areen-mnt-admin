import { useState } from "react";
import {
  Datagrid,
  DateField,
  List,
  ListProps,
  NumberField,
  ReferenceField,
  TextField,
} from "react-admin";
import { useMyDefaultStyles } from "../../../styles/default";
import RequestsFilters from "./../../../reactAdminCustom/RequestsFilters";
import { useQuery } from "@apollo/client";
import { GET_REQUEST_FILTERS } from "./../../../query/mnt_projects";

export default function CustomerUnitList(props: ListProps) {
  const defaultClss = useMyDefaultStyles();
  const [unitsState, setUnitsState] = useState<any[]>([]);
  const [citiesState, setCitiesState] = useState<any[]>([]);
  const [customersState, setCustomersState] = useState<any[]>([]);
  const { data, loading } = useQuery(GET_REQUEST_FILTERS, {
    onError(err) {
      console.log(err.message);
    },
    onCompleted() {
      console.log(data);
      setUnitsState([...data?.mnt_unit]);
      setCitiesState([...data?.mnt_city]);
      setCustomersState([...data?.bsc_customer]);
    },
  });
  return (
    <List
      {...props}
      sort={{ field: "code", order: "ASC" }}
      aside={
        <RequestsFilters
          cities={citiesState}
          units={unitsState}
          customers={customersState}
          requestsStatus={[]}
        />
      }
    >
      <Datagrid rowClick="edit">
        <NumberField
          label="custom_root.main.code"
          source="code"
          headerClassName={defaultClss.header}
        />
        <ReferenceField
          source="customer_id"
          reference="bsc_customer"
          label="custom_root.main.customer_name"
          headerClassName={defaultClss.header}
        >
          <TextField source="name.full" />
        </ReferenceField>
        <ReferenceField
          source="unit_id"
          reference="mnt_unit"
          label="custom_root.main.unit_number"
          headerClassName={defaultClss.header}
        >
          <TextField source="unit_number" />
        </ReferenceField>
        <DateField
          source="created_at"
          label="custom_root.main.created_at"
          headerClassName={defaultClss.header}
        />
      </Datagrid>
    </List>
  );
}
