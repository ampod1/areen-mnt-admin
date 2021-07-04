import { SimpleForm, TextField, TextInput } from "react-admin";
import React from "react";

export default function SettingForm(props:any) {
  return (
    <SimpleForm {...props}>
      <TextInput source="title.ar" />
      <TextInput source="title.en" />
      <TextInput source="name" />
      <TextField source="ext_data.type" />
      <TextInput source="value" />
    </SimpleForm>
  );
}
