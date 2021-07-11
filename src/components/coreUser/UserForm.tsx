import React from "react";
import {
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput
} from "react-admin";
import { useMyDefaultStyles } from '../../styles/default';

export default function UserForm(props: any) {
  const defaultClss = useMyDefaultStyles();
  return (
    <SimpleForm {...props}>
      <TextInput source="email" label="Email" headerClassName={defaultClss.header} />
      <TextInput source="name.full" label="Name" headerClassName={defaultClss.header} />
      <ReferenceInput
        source="user_type_id"
        label="Core UserType"
        reference="core_usertype"
        headerClassName={defaultClss.header}>
        <SelectInput
         optionText="label.en"   
        />
      </ReferenceInput>
      <ReferenceInput 
        source="customer_id"
        label="Customer Name" 
        reference="bsc_customer" 
        headerClassName={defaultClss.header}>
        <SelectInput optionText="name.full"  />
      </ReferenceInput>
    </SimpleForm>
  );
}
