import React from "react";
import {
  useLocale,
  SimpleForm,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { useMyDefaultStyles } from "../../../styles/default";

export default function UserCityForm(props: any) {
  const defaultClss = useMyDefaultStyles();
  const lang = useLocale();
  return (
    <SimpleForm {...props}>
      <ReferenceInput
        label="custom_root.main.city"
        source="city_id"
        reference="mnt_city"
      >
        <SelectInput optionText={`label.${lang}`} />
      </ReferenceInput>
      <ReferenceInput
        label="custom_root.main.user"
        source="user_id"
        reference="core_user"
      >
        <SelectInput optionText={`name.full`} />
      </ReferenceInput>
    </SimpleForm>
  );
}
