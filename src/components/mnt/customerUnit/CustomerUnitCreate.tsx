import React from "react";
import { Create, CreateProps } from "react-admin";
import CustomerUnitForm from "./CustomerUnitForm";

export default function CustomerUnitCreate(props: CreateProps) {
  return (
    <Create {...props}>
      <CustomerUnitForm {...props} />
    </Create>
  );
}
