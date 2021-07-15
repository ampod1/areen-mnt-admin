import React from 'react';
import { Create, CreateProps } from "react-admin";
import AddressForm from "./AddressForm";

const CreateAddress = (props: CreateProps) => {
  return (
    <Create {...props}>
      <AddressForm {...props} />
    </Create>
  )
}

export default CreateAddress
