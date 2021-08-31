import {
  Datagrid,
  DateField,
  EmailField,
  List,
  NumberField,
  ReferenceField,
  TextField,
  TextInput,
  useLocale,
} from "react-admin";
import { useMyDefaultStyles } from "../../styles/default";
import ListActions from "./../../reactAdminCustom/ListActions";

const Filters = [
  <TextInput
    label="custom_root.main.search"
    source="fullname,email,phone"
    alwaysOn
  />,
];

export const UserList = (props: any) => {
  const defaultClss = useMyDefaultStyles();
  const lang = useLocale();
  return (
    <List
      {...props}
      sort={{ field: "code", order: "ASC" }}
      actions={<ListActions />}
      filters={Filters}
    >
      <Datagrid rowClick="edit">
        <NumberField
          headerClassName={defaultClss.header}
          label="custom_root.main.code"
          source="code"
        />
        <EmailField
          source="email"
          headerClassName={defaultClss.header}
          label="custom_root.main.email"
        />
        <TextField
          source="name.full"
          label="custom_root.main.name"
          headerClassName={defaultClss.header}
        />
        <TextField
          source="phone"
          label="custom_root.main.phone"
          headerClassName={defaultClss.header}
        />
        <DateField
          source="created_at"
          label="custom_root.main.created_at"
          headerClassName={defaultClss.header}
        />

        <ReferenceField
          headerClassName={defaultClss.header}
          source="user_type_id"
          reference="core_usertype"
          label="custom_root.main.user_type"
        >
          <TextField source={`label.${lang}`} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
