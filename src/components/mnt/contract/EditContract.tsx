import React from 'react';
import { Edit, EditProps } from 'react-admin';
import ContractForm from './ContractForm';

const EditContract = (props: EditProps) => {
  return (
    <Edit {...props}>
      <ContractForm {...props} />
    </Edit>
  )
}

export default EditContract
