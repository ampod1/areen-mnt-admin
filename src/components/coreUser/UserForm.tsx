import React from 'react';
import {
	ReferenceInput,
	SelectInput,
	SimpleForm,
	TextInput,
} from 'react-admin';

export default function UserForm(props: any) {
	return (
		<SimpleForm {...props}>
			<TextInput source="email" />
			<TextInput source="name.full" />
			<ReferenceInput source="user_type_id" reference="core_usertype">
				<SelectInput optionText="label.en" />
			</ReferenceInput>
			<ReferenceInput source="customer_id" reference="bsc_customer">
				<SelectInput optionText="name.full" />
			</ReferenceInput>
		</SimpleForm>
	);
}
