import React from 'react';
import { NumberInput, SimpleForm, TextInput, useLocale } from 'react-admin';
import { useMyDefaultStyles } from '../../../styles/default';
const SiteForm = (props: any) => {
	const defaultClss = useMyDefaultStyles();
	const lang = useLocale();
	return (
		<SimpleForm {...props}>
			<NumberInput
				source="code"
				label="custom_root.main.code"
				headerClassName={defaultClss.header}
			/>
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
		</SimpleForm>
	);
};

export default SiteForm;
