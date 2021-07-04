import { Edit } from "react-admin";
import React from "react";
import SettingForm from "./SettingForm";

export default function EditSetting(props: any) {
  return (
    <Edit {...props}>
      <SettingForm {...props} />
    </Edit>
  );
}
