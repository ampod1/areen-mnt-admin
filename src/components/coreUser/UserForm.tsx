import React from 'react';
import {
	ReferenceInput,
	SelectInput,
	SimpleForm,
	TextInput,
	useLocale,
} from 'react-admin';
import { useMyDefaultStyles } from '../../styles/default';

export default function UserForm(props: any) {
	const defaultClss = useMyDefaultStyles();
	const lang = useLocale();
	return (
		<SimpleForm {...props}>
			<TextInput
				source="email"
				label="custom_root.main.email"
				headerClassName={defaultClss.header}
			/>
			<TextInput
				source="name.full"
				label="custom_root.main.name"
				headerClassName={defaultClss.header}
			/>
			<ReferenceInput
				source="user_type_id"
				label="custom_root.main.user_type"
				reference="core_usertype"
				headerClassName={defaultClss.header}
			>
				<SelectInput optionText={`label.${lang}`} />
			</ReferenceInput>
			<ReferenceInput
				source="customer_id"
				label="custom_root.main.customer_name"
				reference="bsc_customer"
				headerClassName={defaultClss.header}
			>
				<SelectInput optionText="name.full" />
			</ReferenceInput>
		</SimpleForm>
	);
}
