import React from 'react';
import {
	DateInput,
	NumberInput,
	ReferenceInput,
	SelectInput,
	SimpleForm,
	useLocale,
} from 'react-admin';

export default function ContractItemForm(props: any) {
	const lang = useLocale();
	return (
		<SimpleForm {...props}>
			<ReferenceInput
				label="custom_root.main.contract"
				source="contract_id"
				reference="mnt_contract"
			>
				<SelectInput optionText="code" />
			</ReferenceInput>
			<ReferenceInput
				label="custom_root.main.item"
				source="mnt_item_id"
				reference="mnt_item"
			>
				<SelectInput optionText={`label.${lang}`} />
			</ReferenceInput>
			<NumberInput
				label="custom_root.main.default_period"
				source="period_in_monthes"
			/>
			<DateInput label="custom_root.main.starts_at" source="end_date" />
		</SimpleForm>
	);
}
