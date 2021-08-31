import React from "react";
import { Create, CreateProps } from "react-admin";
import UserCityForm from "./UserCityForm";

export default function UserCityCreate(props: CreateProps) {
  return (
    <Create {...props}>
      <UserCityForm {...props} />
    </Create>
  );
}
