import React from 'react';
import { SimpleForm, TextInput, useLocale } from 'react-admin';
import { useMyDefaultStyles } from '../../../styles/default';

const CustomerTypeForm = (props: any) => {
	const defaultClss = useMyDefaultStyles();
	const lang = useLocale();
	return (
		<SimpleForm {...props}>
			<TextInput
				source={`label.en`}
				label="Name"
				headerClassName={defaultClss.header}
			/>
			<TextInput
				source={`label.ar`}
				label="الاسم"
				headerClassName={defaultClss.header}
			/>
			<TextInput
				source="terms"
				label="custom_root.main.termsNdConditions"
				headerClassName={defaultClss.header}
			/>
		</SimpleForm>
	);
};

export default CustomerTypeForm;
