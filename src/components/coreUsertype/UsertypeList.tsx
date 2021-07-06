import React from "react";
import { Datagrid, DateField, List, NumberField, TextField } from "react-admin";

export default function UsertypeList(props: any) {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <NumberField source="code" />
        <TextField source="label.ar" label="الاسم العربي" />
        <TextField source="label.en" label="Name En"/>
        <DateField source="created_at" />
        <DateField source="updated_at" />
      </Datagrid>
    </List>
  );
}
