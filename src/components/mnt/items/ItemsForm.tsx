import React from 'react';
import { NumberInput, SimpleForm, TextInput } from 'react-admin';

const ItemsForm = (props: any) => {
	return (
		<SimpleForm {...props}>
			<TextInput source="label.ar" label="الاسم العربي " />
			<TextInput source="label.en" label="Name En" />
			<NumberInput source="default_month_period" label="period (months)" />
			<NumberInput source="default_price" label="price" />
		</SimpleForm>
	);
};

export default ItemsForm;
