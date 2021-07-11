import {
  Datagrid,
  DateField,
  EmailField,
  List,
  NumberField,
  ReferenceField,
  TextField
} from "react-admin";
import { useMyDefaultStyles } from "../../styles/default";

export const UserList = (props: any) => {
  const defaultClss = useMyDefaultStyles();
  return (
    <List {...props} sort={{ field: "code", order: "ASC" }}>
      <Datagrid rowClick="edit">
        <NumberField headerClassName={defaultClss.header} label="Code" source="code" />
        <EmailField source="email" headerClassName={defaultClss.header} label="Email" />
        <TextField
          source="name.full"
          label="Name"
          headerClassName={defaultClss.header}
        />
        <TextField source="phone" label="Phone" headerClassName={defaultClss.header} />
        <DateField source="created_at" label="Created at" headerClassName={defaultClss.header} />

        <ReferenceField
          headerClassName={defaultClss.header}
          source="user_type_id"
          reference="core_usertype"
          label="User Type"
        >
          <TextField source="label.en" />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
