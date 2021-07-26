import React from "react";
import {
  Datagrid,
  DateField,
  List,
  ListProps,
  NumberField,
  ReferenceField,
  TextField,
} from "react-admin";
import { useMyDefaultStyles } from "../../../styles/default";

const ContractList = (props: ListProps) => {
  const defaultClss = useMyDefaultStyles();
  return (
    <List {...props} sort={{ field: "code", order: "ASC" }}>
      <Datagrid rowClick="edit">
        <NumberField source="code" headerClassName={defaultClss.header} />
        <ReferenceField
          source="unit_id"
          reference="mnt_unit"
          label="Unit Code"
          headerClassName={defaultClss.header}
        >
          <TextField source="unit_number" />
        </ReferenceField>
        <DateField
          source="start_date"
          label="Starts at"
          headerClassName={defaultClss.header}
        />
        <DateField
          source="end_date"
          label="Ends at"
          headerClassName={defaultClss.header}
        />
        <DateField
          source="created_at"
          label="Created at"
          headerClassName={defaultClss.header}
        />
      </Datagrid>
    </List>
  );
};

export default ContractList;
