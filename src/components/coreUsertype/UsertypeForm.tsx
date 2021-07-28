import React from 'react';
import { SimpleForm, TextInput, useLocale } from 'react-admin';
import { useMyDefaultStyles } from '../../styles/default';

export default function UsertypeForm(props: any) {
	const defaultClss = useMyDefaultStyles();
	const lang = useLocale();
	return (
		<SimpleForm {...props}>
			<TextInput
				source={`label.ar`}
				label="الاسم"
				headerClassName={defaultClss.header}
			/>
			<TextInput
				source={`label.en`}
				label="Name"
				headerClassName={defaultClss.header}
			/>
		</SimpleForm>
	);
}
