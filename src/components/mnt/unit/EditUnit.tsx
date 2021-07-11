import React from "react";
import { Edit, EditProps } from "react-admin";
import UnitForm from "./UnitForm";

export default function EditUnit(props: EditProps) {
  return (
    <Edit {...props}>
      <UnitForm {...props} />
    </Edit>
  );
}
