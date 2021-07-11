import React from "react";
import { Edit, EditProps } from "react-admin";
import MntItemForm from "./MntItemForm";

export const EditMntItem = (props: EditProps) => {
  return (
    <Edit {...props}>
      <MntItemForm {...props} />
    </Edit>
  );
};
