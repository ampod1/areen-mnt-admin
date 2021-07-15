import React from 'react';
import { Create, CreateProps } from "react-admin";
import CustomerTypeForm from "./CustomerTypeForm";

const CreateCustomerType = (props: CreateProps) => {
  return (
    <Create {...props}>
      <CustomerTypeForm {...props} />
    </Create>
  )
}

export default CreateCustomerType
