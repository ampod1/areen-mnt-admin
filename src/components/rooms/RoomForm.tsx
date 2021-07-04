import React from "react";
import { TextInput, SimpleForm, BooleanInput, SelectInput, ArrayInput, SimpleFormIterator } from "react-admin";

export default function RoomForm(props: any) {
  return (
    <SimpleForm {...props}>
      <TextInput source="title.ar" />
      <TextInput source="title.en" />
      <BooleanInput source="accessibility" />
      <SelectInput
        source="room_type.type"
        choices={[
          { id: "1bed", name: "1 Bed" },
          { id: "2beds", name: "2 Beds" },
          { id: "suite", name: "Suite" },
        ]}
      />
      <ArrayInput source="media.room_images">
        <SimpleFormIterator>
          <TextInput source="url"/>
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  );
}
