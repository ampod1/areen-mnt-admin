import React from "react";
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

export default function RequestList(props: ListProps) {
  const defaultClss = useMyDefaultStyles();
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <NumberField source="code" headerClassName={defaultClss.header} />
        <ReferenceField
          source="customer_id"
          label="Customer Name"
          reference="bsc_customer"
          headerClassName={defaultClss.header}
        >
          <TextField source="name.full" />
        </ReferenceField>
        <ReferenceField
          source="unit_id"
          reference="mnt_unit"
          label="Unit number"
          headerClassName={defaultClss.header}
        >
          <TextField source="unit_number" />
        </ReferenceField>
        <TextField source="notes" headerClassName={defaultClss.header} />
        {/** TODO 
        <ReferenceField
          reference="core_user"
          source="technician_id"
          label="Assigned To"
        >
          <TextField source="name.full" />
        </ReferenceField>
        */}
        <DateField
          source="created_at"
          label="Created at"
          headerClassName={defaultClss.header}
        />
      </Datagrid>
    </List>
  );
}
