import {
  Datagrid,
  DateField,
  EmailField,
  List,
  NumberField,
  ReferenceField,
  TextField,
} from "react-admin";
import { useMyDefaultStyles } from "../../styles/default";

export const UserList = (props: any) => {
  const defaultClss = useMyDefaultStyles();
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <NumberField headerClassName={defaultClss.header} source="code" />
        <EmailField source="email" headerClassName={defaultClss.header} />
        <TextField
          source="name.full"
          label="Name"
          headerClassName={defaultClss.header}
        />
        <TextField source="phone" headerClassName={defaultClss.header} />
        <DateField source="created_at" headerClassName={defaultClss.header} />

        <ReferenceField
          headerClassName={defaultClss.header}
          source="user_type_id"
          reference="core_usertype"
        >
          <TextField source="label.en" />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
