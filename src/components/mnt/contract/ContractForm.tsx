import React from 'react';
import { DateInput, ReferenceInput, SelectInput, SimpleForm } from 'react-admin';
import { useMyDefaultStyles } from '../../../styles/default';

const ContractForm = (props: any) => {
  const defaultClss = useMyDefaultStyles();
  return (
    <SimpleForm {...props}>
      <ReferenceInput
        source="unit_id"
        label="Unit Number"
        reference="mnt_unit"
        headerClassName={defaultClss.header}>
        <SelectInput optionText="unit_number" />
      </ReferenceInput>
      <DateInput source="start_date" label="Start Date" headerClassName={defaultClss.header} />
      <DateInput source="end_date" label="End Date" headerClassName={defaultClss.header} />
    </SimpleForm>
  )
}

export default ContractForm
