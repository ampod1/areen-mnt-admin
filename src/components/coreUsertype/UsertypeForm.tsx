import React from "react";
import { SimpleForm, TextInput } from "react-admin";
import { useMyDefaultStyles } from '../../styles/default';

export default function UsertypeForm(props: any) {
  const defaultClss = useMyDefaultStyles();
  return (
    <SimpleForm {...props}>
      <TextInput source="label.ar" label="الاسم" headerClassName={defaultClss.header} />
      <TextInput source="label.en" labe="Name" headerClassName={defaultClss.header} />
    </SimpleForm>
  );
}
