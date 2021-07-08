import React from "react";
import { Edit, EditProps } from "react-admin";
import RequestForm from "./RequestForm";
import { requestTransform } from "./requestTransform";

export default function RequestEdit(props: EditProps) {
  return (
    <Edit {...props} transform={requestTransform}>
      <RequestForm {...props} type="update" />
    </Edit>
  );
}
