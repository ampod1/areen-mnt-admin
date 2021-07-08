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

export default function RequestAssignList(props: ListProps) {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <NumberField source="code" />
        <ReferenceField source="technician_id" reference="core_user">
          <TextField source="name.full" />
        </ReferenceField>
        <ReferenceField source="request_id" reference="mnt_request">
          <TextField source="code" />
        </ReferenceField>

        <DateField source="created_at" />
      </Datagrid>
    </List>
  );
}
