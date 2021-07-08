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

export default function UnitList(props: ListProps) {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <NumberField source="code" />
        <ReferenceField source="project_id" reference="mnt_project">
          <TextField source="label.ar" />
        </ReferenceField>
        <NumberField source="unit_number" />
        <DateField source="created_at" />
      </Datagrid>
    </List>
  );
}
