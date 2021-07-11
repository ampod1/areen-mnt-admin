import React from "react";
import { SimpleForm, TextInput } from "react-admin";
import { useMyDefaultStyles } from '../../../styles/default';

export default function CustomerForm(props: any) {
    const defaultClss = useMyDefaultStyles();

  return (
    <SimpleForm {...props}>
      <TextInput source="name.full" label="Name" headerClassName={defaultClss.header}  />
    </SimpleForm>
  );
}
