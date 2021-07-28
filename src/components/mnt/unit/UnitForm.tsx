import React from 'react';
import {
	NumberInput,
	ReferenceInput,
	SelectInput,
	SimpleForm,
	useLocale,
} from 'react-admin';

export default function UnitForm(props: any) {
	const lang = useLocale();

	return (
		<SimpleForm {...props}>
			<NumberInput label="custom_root.main.unit_number" source="unit_number" />
			<ReferenceInput
				label="custom_root.main.project"
				source="project_id"
				reference="mnt_project"
			>
				<SelectInput optionText={`label.${lang}`} />
			</ReferenceInput>
		</SimpleForm>
	);
}
