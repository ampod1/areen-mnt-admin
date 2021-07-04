import {
  SimpleForm,
  ReferenceInput,
  SelectInput,
  NumberInput,
  BooleanInput,
} from "react-admin";
import React from "react";

export default function RoomRatesForm(props: any) {
  return (
    <SimpleForm {...props}>
      <ReferenceInput source="rate_id" reference="rates">
        <SelectInput optionText="title.en" />
      </ReferenceInput>
      <NumberInput source="base_price" />
      <NumberInput source="strp_room_id" />
      <BooleanInput source="is_base_pkg" />
    </SimpleForm>
  );
}
