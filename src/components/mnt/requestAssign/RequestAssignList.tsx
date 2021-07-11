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

export default function RequestAssignList(props: ListProps) {
  const defaultClss = useMyDefaultStyles();
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <NumberField source="code" headerClassName={defaultClss.header} />
        <ReferenceField source="technician_id" reference="core_user" headerClassName={defaultClss.header} label="Technician">
          <TextField source="name.full" />
        </ReferenceField>
        <ReferenceField source="request_id" reference="mnt_request" headerClassName={defaultClss.header} label="Request Code">
          <TextField source="code" />
        </ReferenceField>
        <DateField source="created_at" label="Created at" headerClassName={defaultClss.header} />
      </Datagrid>
    </List>
  );
}
