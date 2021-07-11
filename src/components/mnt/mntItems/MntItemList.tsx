import React from "react";
import { Datagrid, List, NumberField, TextField } from "react-admin";
import { useMyDefaultStyles } from "../../../styles/default";

const MntItemList = (props: any) => {
  const defaultClss = useMyDefaultStyles();

  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <NumberField source="code" headerClassName={defaultClss.header} />
        <TextField
          source="label.ar"
          label="الاسم العربي"
          headerClassName={defaultClss.header}
        />
        <TextField
          source="label.en"
          label="Name En"
          headerClassName={defaultClss.header}
        />
        <NumberField
          source="default_month_period"
          label="Default period (in months)"
          headerClassName={defaultClss.header}
        />
        <NumberField
          source="default_price"
          label="Default price"
          headerClassName={defaultClss.header}
        />
      </Datagrid>
    </List>
  );
};

export default MntItemList;
