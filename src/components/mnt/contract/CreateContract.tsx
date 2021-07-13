import React from 'react';
import { Create, CreateProps } from 'react-admin';
import ContractForm from './ContractForm';

const CreateContract = (props: CreateProps) => {
  return (
    <Create {...props}>
      <ContractForm {...props} />
    </Create>
  )
}

export default CreateContract
