import React from "react";
import {
  List,
  Datagrid,
  NumberField,
  DateField,
  TextField,
  ReferenceField,
  ListProps,
} from "react-admin";

export default function ProjectList(props: ListProps) {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <NumberField source="code" />

        <TextField source="label.ar" />
        <ReferenceField source="site_id" reference="mnt_site">
          <TextField source="label.ar" />
        </ReferenceField>
        <DateField source="created_at" />
      </Datagrid>
    </List>
  );
}
