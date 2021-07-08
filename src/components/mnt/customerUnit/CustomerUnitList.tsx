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

export default function CustomerUnitList(props: ListProps) {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <NumberField source="code" />
        <ReferenceField source="customer_id" reference="bsc_customer">
          <TextField source="name.full" />
        </ReferenceField>
        <ReferenceField source="unit_id" reference="mnt_unit" label="Unit Code">
          <TextField source="code" />
        </ReferenceField>
        <DateField source="created_at" />
      </Datagrid>
    </List>
  );
}
