import React from "react";
import {
  BooleanField,
  Datagrid,
  List,
  NumberField,
  ReferenceField,
  ResourceComponentInjectedProps,
  TextField,
} from "react-admin";

export default function RoomRatesList(props: ResourceComponentInjectedProps) {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <ReferenceField source="rate_id" reference="rates">
          <TextField source="title.en" />
        </ReferenceField>
        <NumberField source="base_price" />
        <BooleanField source="is_base_pkg" />
        <NumberField source="strp_room_id" />
      </Datagrid>
    </List>
  );
}
