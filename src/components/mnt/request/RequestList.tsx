import { useState } from "react";
import {
  Datagrid,
  DateField,
  List,
  ListProps,
  NumberField,
  ReferenceField,
  TextField,
  useLocale,
} from "react-admin";
import RequestsFilters from "../../../reactAdminCustom/RequestsFilters";
import { useMyDefaultStyles } from "../../../styles/default";
import { useQuery } from "@apollo/client";
import { GET_REQUEST_FILTERS } from "./../../../query/mnt_projects";

export default function RequestList(props: ListProps) {
  const defaultClss = useMyDefaultStyles();
  const lang = useLocale();
  const [unitsState, setUnitsState] = useState<any[]>([]);
  const [citiesState, setCitiesState] = useState<any[]>([]);
  const [customersState, setCustomersState] = useState<any[]>([]);
  const [reqStatusState, setReqStatusState] = useState<any[]>([]);
  const { data, loading } = useQuery(GET_REQUEST_FILTERS, {
    onError(err) {
      console.log(err.message);
    },
    onCompleted() {
      setUnitsState([...data?.mnt_unit]);
      setCitiesState([...data?.mnt_city]);
      setCustomersState([...data?.bsc_customer]);
      setReqStatusState([...data?.mnt_request_status_type]);
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
          requestsStatus={reqStatusState}
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
          label="custom_root.main.customer_name"
          reference="bsc_customer"
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
        <TextField
          label="custom_root.main.notes"
          source="notes"
          headerClassName={defaultClss.header}
        />
        {/** TODO 
        <ReferenceField
          reference="core_user"
          source="technician_id"
          label="Assigned To"
        >
          <TextField source="name.full" />
        </ReferenceField>
        */}
        <ReferenceField
          source="request_status_id"
          reference="mnt_request_status_type"
          label="custom_root.main.request_status"
          headerClassName={defaultClss.header}
        >
          <TextField source={`label.${lang}`} />
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
