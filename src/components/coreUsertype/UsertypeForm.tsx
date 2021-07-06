import React from "react";
import { SimpleForm, TextInput } from "react-admin";

export default function UsertypeForm(props: any) {
  return (
    <SimpleForm {...props}>
      <TextInput source="label.ar" />
      <TextInput source="label.en" />
    </SimpleForm>
  );
}
