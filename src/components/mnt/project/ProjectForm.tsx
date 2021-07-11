import React from "react";
import { ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";

export default function ProjectForm(props: any) {
  return (
    <SimpleForm {...props}>
      <TextInput source="label.ar" />
      <TextInput source="label.en" />
      <ReferenceInput source="site_id" reference="mnt_site">
        <SelectInput optionText="label.ar" />
      </ReferenceInput>
    </SimpleForm>
  );
}
