import React from "react";
import { Create } from "react-admin";
import MntItemForm from "./MntItemForm";

export const CreateMntItem = (props: any) => {
  return (
    <Create {...props}>
      <MntItemForm {...props} />
    </Create>
  );
};
