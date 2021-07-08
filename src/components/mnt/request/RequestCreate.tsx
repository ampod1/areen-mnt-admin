import React from "react";
import { Create, CreateProps } from "react-admin";
import RequestForm from "./RequestForm";

export default function RequestCreate(props: CreateProps) {
  return (
    <Create {...props}>
      <RequestForm {...props} type="create" />
    </Create>
  );
}
