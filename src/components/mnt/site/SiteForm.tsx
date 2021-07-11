import React from 'react';
import { NumberInput, SimpleForm, TextInput } from 'react-admin';
import { useMyDefaultStyles } from '../../../styles/default';
const SiteForm = (props: any) => {
  const defaultClss = useMyDefaultStyles();
  return (
    <SimpleForm {...props}>
      <NumberInput source="code" label="Code" headerClassName={defaultClss.header} />
      <TextInput source="label.en" label="Name" headerClassName={defaultClss.header} />
      <TextInput source="label.ar" label="الاسم" headerClassName={defaultClss.header} />
    </SimpleForm>
  )
}

export default SiteForm
