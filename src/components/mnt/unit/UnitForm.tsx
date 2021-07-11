import React from "react";
import {
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
} from "react-admin";

export default function UnitForm(props: any) {
  return (
    <SimpleForm {...props}>
      <NumberInput source="unit_number" />
      <ReferenceInput source="project_id" reference="mnt_project">
        <SelectInput optionText="label.ar" />
      </ReferenceInput>
    </SimpleForm>
  );
}
