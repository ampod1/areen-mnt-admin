import React from 'react';
import { NumberInput, SimpleForm, TextInput } from 'react-admin';
import { useMyDefaultStyles } from '../../../styles/default';

const MntItemForm = (props: any) => {
	  const defaultClss = useMyDefaultStyles();
	return (
		<SimpleForm {...props}>
			<TextInput source="label.ar" label="الاسم العربي" headerClassName={defaultClss.header}  />
			<TextInput source="label.en" label="Name En" headerClassName={defaultClss.header}  />
			<NumberInput source="default_month_period" label="period (months)" headerClassName={defaultClss.header}  />
			<NumberInput source="default_price" label="price" headerClassName={defaultClss.header}  />
		</SimpleForm>
	);
};

export default MntItemForm;
