import React from "react";
import { Edit, EditProps } from "react-admin";
import CityForm from "./CityForm";

const CityEdit = (props: EditProps) => {
  return (
    <Edit {...props}>
      <CityForm {...props} />
    </Edit>
  );
};

export default CityEdit;
