import React from "react";
import { Create, CreateProps } from "react-admin";
import CityForm from "./CityForm";

const CityCreate = (props: CreateProps) => {
  return (
    <Create {...props}>
      <CityForm {...props} />
    </Create>
  );
};

export default CityCreate;
