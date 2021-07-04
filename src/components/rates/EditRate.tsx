import { Edit } from "react-admin";
import React from "react";
import RateForm from "./RateForm";

export default function EditRate(props: any) {
  return (
    <Edit {...props}>
      <RateForm {...props} />
    </Edit>
  );
}
