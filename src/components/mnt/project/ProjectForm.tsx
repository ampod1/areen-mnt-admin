import React from 'react';
import {
	ReferenceInput,
	SelectInput,
	SimpleForm,
	TextInput,
	useLocale,
} from 'react-admin';

export default function ProjectForm(props: any) {
	const lang = useLocale();
	return (
		<SimpleForm {...props}>
			<TextInput label="name" source={`label.en`} />
			<TextInput label="الاسم" source={`label.ar`} />
			<ReferenceInput
				label="custom_root.main.site"
				source="site_id"
				reference="mnt_site"
			>
				<SelectInput optionText={`label.${lang}`} />
			</ReferenceInput>
		</SimpleForm>
	);
}
