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

const CustomerTypeList = (props: ListProps) => {
  const defaultClss = useMyDefaultStyles();

  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <NumberField
          source="code"
          label="Code"
          headerClassName={defaultClss.header}
        />
        <TextField
          source="label.en"
          label="Name"
          headerClassName={defaultClss.header}
        />
        <TextField
          source="label.ar"
          label="الاسم"
          headerClassName={defaultClss.header}
        />

        <DateField
          source="created_at"
          label="Created at"
          headerClassName={defaultClss.header}
        />
      </Datagrid>
    </List>
  );
};

export default CustomerTypeList;
