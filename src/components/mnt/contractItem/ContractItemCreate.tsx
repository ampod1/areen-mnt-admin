import React from 'react'
import { Create, CreateProps } from 'react-admin';
import ContractItemForm from './ContractItemForm';

export default function ContractItemCreate(props:CreateProps) {
  return <Create {...props}>
    <ContractItemForm {...props} />
  </Create>;
}
