import React from "react";
import {
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
  useLocale,
} from "react-admin";
import { useMyDefaultStyles } from "../../../styles/default";

export default function CustomerForm(props: any) {
  const defaultClss = useMyDefaultStyles();
  const lang = useLocale();

  return (
    <SimpleForm {...props}>
      <TextInput
        source="name.full"
        label="custom_root.main.name"
        headerClassName={defaultClss.header}
      />
      <ReferenceInput
        source="customer_type_id"
        reference="bsc_customer_type"
        label="custom_root.main.customer_type"
        headerClassName={defaultClss.header}
      >
        <SelectInput optionText={`label.${lang}`} />
      </ReferenceInput>
      <TextInput
        source="phone"
        label="custom_root.main.phone"
        headerClassName={defaultClss.header}
      />
      <ReferenceInput
        source="city_id"
        reference="mnt_city"
        label="custom_root.main.city"
        headerClassName={defaultClss.header}
      >
        <SelectInput optionText={`label.${lang}`} />
      </ReferenceInput>
    </SimpleForm>
  );
}
