import React from 'react';
import {
	SimpleForm,
	TextInput,
	ReferenceInput,
	SelectInput,
} from 'react-admin';

export default function CustomerForm(props: any) {
	return (
		<SimpleForm {...props}>
			<TextInput source="name.full" />
		</SimpleForm>
	);
}
