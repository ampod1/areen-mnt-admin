import React from 'react'
import { Datagrid, DateField, List, ResourceComponentInjectedProps, TextField } from 'react-admin';

export default function RoomsList(props: ResourceComponentInjectedProps) {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="title.ar" />
        <TextField source="title.en" />
        <TextField source="media.icon" />
        <DateField source="created_at" />
      </Datagrid>
    </List>
  );
}
