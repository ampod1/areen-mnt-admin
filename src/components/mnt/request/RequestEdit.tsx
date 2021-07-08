import React from "react";
import { Edit, EditProps } from "react-admin";
import RequestForm from "./RequestForm";

export default function RequestEdit(props: EditProps) {
  return (
    <Edit {...props}>
      <RequestForm {...props} type="update" />
    </Edit>
  );
}
