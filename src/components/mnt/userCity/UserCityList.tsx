import React from "react";
import {
  ListProps,
  useLocale,
  List,
  Datagrid,
  ReferenceField,
  NumberField,
  TextField,
} from "react-admin";
import { useMyDefaultStyles } from "../../../styles/default";

export default function UserCityList(props: ListProps) {
  const defaultClss = useMyDefaultStyles();
  const lang = useLocale();
  return (
    <List sort={{ field: "code", order: "ASC" }} {...props}>
      <Datagrid rowClick="edit">
        <NumberField
          label="custom_root.main.code"
          source="code"
          headerClassName={defaultClss.header}
        />
        <ReferenceField
          source="user_id"
          reference="core_user"
          label="User"
          headerClassName={defaultClss.header}
        >
          <TextField source="name.full" />
        </ReferenceField>
        <ReferenceField
          source="city_id"
          reference="mnt_city"
          label="City"
          headerClassName={defaultClss.header}
        >
          <TextField source="label.ar" />
        </ReferenceField>
      </Datagrid>
    </List>
  );
}
