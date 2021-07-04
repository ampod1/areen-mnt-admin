import { SimpleForm, TextInput } from "react-admin";
import React from "react";

export default function RateForm(props: any) {
  return (
    <SimpleForm {...props}>
      <TextInput source="title.ar" />
      <TextInput source="title.en" />
    </SimpleForm>
  );
}
