import React from 'react';
import { Datagrid, DateField, List, NumberField, TextField } from 'react-admin';
import { useMyDefaultStyles } from '../../../styles/default';

const ItemList = (props: any) => {
  const defaultClss = useMyDefaultStyles();

  return (
    <List {...props}>
      <Datagrid>
        <NumberField source="code" headerClassName={defaultClss.header} />
        <TextField source="label.ar" label="الاسم العربي" headerClassName={defaultClss.header} />
        <TextField source="label.en" label="Name En" headerClassName={defaultClss.header} />
        <NumberField source="default_month_period" label="period (months)" headerClassName={defaultClss.header} />
        <DateField source="default_price" label="price" headerClassName={defaultClss.header} />
      </Datagrid>
    </List>
  )
}

export default ItemList
