import React from "react";
import {
  Datagrid,
  DateField,
  List,
  ListProps,
  NumberField,
  ReferenceField,
  TextField
} from "react-admin";
import { useMyDefaultStyles } from '../../../styles/default';

export default function CustomerUnitList(props: ListProps) {
  const defaultClss = useMyDefaultStyles();
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <NumberField source="code" headerClassName={defaultClss.header} />
        <ReferenceField source="customer_id" reference="bsc_customer" label="Customer Name" headerClassName={defaultClss.header} >
          <TextField source="name.full"  />
        </ReferenceField>
        <ReferenceField source="unit_id" reference="mnt_unit" label="Unit Code" headerClassName={defaultClss.header} >
          <TextField source="code" />
        </ReferenceField>
        <DateField source="created_at" label="Created at" headerClassName={defaultClss.header} />
      </Datagrid>
    </List>
  );
}
