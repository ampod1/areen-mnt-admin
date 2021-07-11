import React from "react";
import { Edit, EditProps } from "react-admin";
import CustomerUnitForm from "./CustomerUnitForm";

export default function CustomerUnitEdit(props: EditProps) {
  return (
    <Edit {...props}>
      <CustomerUnitForm {...props} />
    </Edit>
  );
}
