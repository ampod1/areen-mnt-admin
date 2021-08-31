import React from "react";
import {
  Datagrid,
  DateField,
  List,
  ListProps,
  NumberField,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  TextField,
  TextInput,
  useLocale,
} from "react-admin";
import { useMyDefaultStyles } from "../../../styles/default";
import ListActions from "./../../../reactAdminCustom/ListActions";

const Filters = [
  <ReferenceInput
    label="custom_root.main.city"
    source="city_id"
    reference="mnt_city"
    alwaysOn
  >
    <SelectInput optionText="label.en" />
  </ReferenceInput>,
  <TextInput label="custom_root.main.search" source="fullname" alwaysOn />,
];
export default function CustomerList(props: ListProps) {
  const defaultClss = useMyDefaultStyles();
  const lang = useLocale();
  return (
    <List
      {...props}
      actions={<ListActions />}
      filters={Filters}
      sort={{ field: "code", order: "ASC" }}
    >
      <Datagrid rowClick="edit">
        <NumberField
          source="code"
          label="custom_root.main.code"
          headerClassName={defaultClss.header}
        />
        <TextField
          source="name.full"
          headerClassName={defaultClss.header}
          label="custom_root.main.customer_name"
        />

        <ReferenceField
          source="customer_type_id"
          reference="bsc_customer_type"
          label="custom_root.main.customer_type"
          headerClassName={defaultClss.header}
        >
          <TextField source={`label.${lang}`} />
        </ReferenceField>

        <ReferenceField
          reference="mnt_city"
          source="city_id"
          label="custom_root.main.city"
          headerClassName={defaultClss.header}
        >
          <TextField source={`label.${lang}`} />
        </ReferenceField>

        <DateField
          source="created_at"
          label="custom_root.main.created_at"
          headerClassName={defaultClss.header}
        />
      </Datagrid>
    </List>
  );
}
