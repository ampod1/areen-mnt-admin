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

export default function UnitList(props: ListProps) {
  const defaultClss = useMyDefaultStyles();

  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <NumberField source="code" headerClassName={defaultClss.header}  />
        <ReferenceField source="project_id" reference="mnt_project" label="Project" headerClassName={defaultClss.header} >
          <TextField source="label.ar" />
        </ReferenceField>
        <NumberField source="unit_number" label="Unit Number" headerClassName={defaultClss.header} />
        <DateField source="created_at" label="Created at"  headerClassName={defaultClss.header} />
      </Datagrid>
    </List>
  );
}
