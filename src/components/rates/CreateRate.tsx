import { Create } from "react-admin";
import React from "react";
import RateForm from "./RateForm";

export default function CreateRate(props: any) {
  return (
    <Create {...props}>
      <RateForm {...props} />
    </Create>
  );
}
