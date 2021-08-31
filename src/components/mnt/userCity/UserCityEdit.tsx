import React from "react";
import { Edit, EditProps } from "react-admin";
import UserCityForm from "./UserCityForm";

export default function UserCityEdit(props: EditProps) {
  return (
    <Edit {...props}>
      <UserCityForm {...props} />
    </Edit>
  );
}
