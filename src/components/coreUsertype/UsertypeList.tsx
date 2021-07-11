import React from "react";
import {
  Datagrid,
  DateField,
  List,
  ListProps,
  NumberField,
  TextField
} from "react-admin";
import { useMyDefaultStyles } from "../../styles/default";

export default function UsertypeList(props: ListProps) {
  const defaultClss = useMyDefaultStyles();
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <NumberField source="code" label="Code" headerClassName={defaultClss.header} />
        <TextField
          source="label.ar"
          label="الاسم العربي"
          headerClassName={defaultClss.header}
        />
        <TextField
          headerClassName={defaultClss.header}
          source="label.en"
          label="Name En"
        />
        <DateField 
          label="Created at"
          headerClassName={defaultClss.header}
          source="created_at" />
      </Datagrid>
    </List>
  );
}
