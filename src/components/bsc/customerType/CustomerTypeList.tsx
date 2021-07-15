import React from 'react';
import { Datagrid, DateField, List, ListProps, ReferenceField, TextField } from 'react-admin';
import { useMyDefaultStyles } from "../../../styles/default";

const CustomerTypeList = (props: ListProps) => {
  const defaultClss = useMyDefaultStyles();

  return (
    <List {...props}>
      <Datagrid>  
          <TextField source="label.en" label="Name" headerClassName={defaultClss.header} />
          <TextField source="label.ar" label="الاسم" headerClassName={defaultClss.header} />
          <TextField source="terms" label="Terms & Conditions" headerClassName={defaultClss.header} />
          <ReferenceField source="customer_id" reference="bsc_customer" label="Customer" headerClassName={defaultClss.header} >
            <TextField source="name.full" />
          </ReferenceField>
          <DateField source="created_at" label="Created at" headerClassName={defaultClss.header} />
      </Datagrid>
    </List>
  )
}

export default CustomerTypeList
