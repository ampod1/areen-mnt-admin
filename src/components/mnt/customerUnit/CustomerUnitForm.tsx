import React from "react";
import { ReferenceInput, SelectInput, SimpleForm } from "react-admin";

export default function CustomerUnitForm(props: any) {
  return (
    <>
      <SimpleForm {...props}>
        <ReferenceInput
          label="custom_root.main.customer_name"
          source="customer_id"
          reference="bsc_customer"
        >
          <SelectInput optionText="name.full" />
        </ReferenceInput>
        <ReferenceInput
          label="custom_root.main.unit_number"
          source="unit_id"
          reference="mnt_unit"
        >
          <SelectInput optionText="unit_number" />
        </ReferenceInput>
      </SimpleForm>
    </>
  );
}
