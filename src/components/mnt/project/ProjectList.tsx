import React from "react";
import {
  Datagrid, DateField, List, ListProps, NumberField, ReferenceField, TextField
} from "react-admin";
import { useMyDefaultStyles } from '../../../styles/default';

export default function ProjectList(props: ListProps) {
    const defaultClss = useMyDefaultStyles();

  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <NumberField source="code" headerClassName={defaultClss.header}  />
        <TextField source="label.ar" label="الاسم" headerClassName={defaultClss.header}  />
        <TextField source="label.en" label="Name" headerClassName={defaultClss.header}  />
        <ReferenceField source="site_id" reference="mnt_site" label="Site" headerClassName={defaultClss.header}  >
          <TextField source="label.ar" />
        </ReferenceField>
        <DateField source="created_at" label="Created at" headerClassName={defaultClss.header} />
      </Datagrid>
    </List>
  );
}
