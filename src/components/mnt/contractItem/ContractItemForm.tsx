import React from "react";
import {
  DateInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
} from "react-admin";

export default function ContractItemForm(props: any) {
  return (
    <SimpleForm {...props}>
      <ReferenceInput source="contract_id" reference="mnt_contract">
        <SelectInput optionText="code" />
      </ReferenceInput>
      <ReferenceInput source="mnt_item_id" reference="mnt_item">
        <SelectInput optionText="label.ar" />
      </ReferenceInput>
      <NumberInput source="period_in_monthes" />
      <DateInput source="end_date" />
    </SimpleForm>
  );
}
