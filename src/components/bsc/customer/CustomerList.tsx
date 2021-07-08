import React from "react";
import {
  Datagrid,
  DateField,
  List,
  ListProps,
  NumberField,
  TextField,
} from "react-admin";
import { useMyDefaultStyles } from "../../../styles/default";

export default function CustomerList(props: ListProps) {
  const defaultClss = useMyDefaultStyles();
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <NumberField source="code" headerClassName={defaultClss.header} />
        <TextField
          source="name.full"
          headerClassName={defaultClss.header}
          label="Customer's Name"
        />
        <DateField source="created_at" headerClassName={defaultClss.header} />
      </Datagrid>
    </List>
  );
}
