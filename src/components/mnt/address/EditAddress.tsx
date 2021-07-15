import React from 'react';
import { Edit, EditProps } from "react-admin";
import AddressForm from "./AddressForm";

const EditAddress = (props: EditProps) => {
  return (
    <Edit {...props}>
      <AddressForm {...props} />
    </Edit>
  )
}

export default EditAddress
