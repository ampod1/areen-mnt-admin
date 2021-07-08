import React from "react";
import { Create } from "react-admin";
import UserForm from "./UserForm";

export default function CreateUser(props: any) {
  const transform = (data: any) => ({
    ...data,
    passwired: "0000",
  });
  return (
    <Create {...props} transform={transform} >
      <UserForm {...props} />
    </Create>
  );
}
