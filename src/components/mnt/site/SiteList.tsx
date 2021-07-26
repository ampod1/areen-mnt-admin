import React from 'react';
import { Datagrid, DateField, List, ListProps, NumberField, TextField } from 'react-admin';

const SiteList = (props: ListProps) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <NumberField source="code" />
        <TextField source="label.ar" />
        <TextField source="label.en" />
        <DateField source="created_at" />
      </Datagrid>
    </List>
  );
}

export default SiteList
