import React from "react";
import { Create, CreateProps } from "react-admin";
import UnitForm from "./UnitForm";

export default function CreateUnit(props: CreateProps) {
  return (
    <Create {...props}>
      <UnitForm {...props} />
    </Create>
  );
}
