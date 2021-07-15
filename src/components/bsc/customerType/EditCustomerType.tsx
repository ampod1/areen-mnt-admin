import React from 'react';
import { Edit, EditProps } from "react-admin";
import CustomerTypeForm from "./CustomerTypeForm";

const EditCustomerType = (props: EditProps) => {
  return (
    <Edit {...props}>
      <CustomerTypeForm {...props} />
    </Edit>
  )
}

export default EditCustomerType
