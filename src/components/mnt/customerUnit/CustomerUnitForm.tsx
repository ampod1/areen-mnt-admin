import React from "react";
import { ReferenceInput, SelectInput, SimpleForm } from "react-admin";

export default function CustomerUnitForm(props: any) {
  return (
    <>
      <SimpleForm {...props}>
        <ReferenceInput source="customer_id" reference="bsc_customer">
          <SelectInput optionText="name.full" />
        </ReferenceInput>
        <ReferenceInput source="unit_id" reference="mnt_unit">
          <SelectInput optionText="unit_number" />
        </ReferenceInput>
      </SimpleForm>
    </>
  );
}
