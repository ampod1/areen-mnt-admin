import React from "react";
import { Create, CreateProps } from "react-admin";
import RequestForm from "./RequestForm";
import { requestTransform } from "./requestTransform";

export default function RequestCreate(props: CreateProps) {
  return (
    <Create
      {...props}
      transform={requestTransform}
      onSuccess={(data: any) => {
        console.log(data);
      }}
    >
      <RequestForm {...props} type="create" />
    </Create>
  );
}
