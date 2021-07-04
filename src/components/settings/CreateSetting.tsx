import { Create } from "react-admin";
import React from "react";
import SettingForm from "./SettingForm";

export default function CreateSetting(props: any) {
  return (
    <Create {...props}>
      <SettingForm {...props} />
    </Create>
  );
}
