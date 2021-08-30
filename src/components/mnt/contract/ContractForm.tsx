import React from 'react';
import {
	Button,
	Datagrid,
	DateField,
	DateInput,
	FormTab,
	NumberField,
	ReferenceField,
	ReferenceInput,
	ReferenceManyField,
	SelectInput,
	TabbedForm,
	TextField,
	useLocale,
	NumberInput,
} from 'react-admin';
import { GiChatBubble } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { useMyDefaultStyles } from '../../../styles/default';

const AddContractItemButton = ({ record }: { record: any }) => (
	// Prefilling with contract id
	<Button
		component={Link}
		to={{
			pathname: '/mnt_contract_item/create',
			state: { record: { contract_id: record.id } },
		}}
		label="Add an Item"
		variant="contained"
		title="Add an Item"
	>
		<GiChatBubble />
	</Button>
);
const ContractForm = (props: any) => {
	const defaultClss = useMyDefaultStyles();
	const lang = useLocale();
	return (
		<TabbedForm {...props}>
			<FormTab label="custom_root.main.basic_info">
				<ReferenceInput
					source="unit_id"
					label="custom_root.main.unit_number"
					reference="mnt_unit"
					headerClassName={defaultClss.header}
				>
					<SelectInput optionText="unit_number" />
				</ReferenceInput>
				<DateInput
					source="start_date"
					label="custom_root.main.starts_at"
					headerClassName={defaultClss.header}
				/>
				<DateInput
					source="end_date"
					label="custom_root.main.ends_at"
					headerClassName={defaultClss.header}
				/>
				<NumberInput label="Monthly Visits" source="monthly_visits_count" />
			</FormTab>
			<FormTab label="custom_root.main.contract_items">
				<ReferenceManyField
					addLabel={false}
					reference="mnt_contract_item"
					target="contract_id"
					sort={{ field: 'code', order: 'ASC' }}
				>
					<Datagrid>
						<ReferenceField
							source="mnt_item_id"
							reference="mnt_item"
							label="custom_root.main.item"
						>
							<TextField source={`label.${lang}`} />
						</ReferenceField>
						<NumberField
							label="custom_root.main.default_period"
							source="period_in_monthes"
						/>
						<DateField label="custom_root.main.ends_at" source="end_date" />
					</Datagrid>
				</ReferenceManyField>
				<br />
				<AddContractItemButton record={{ id: props.id } as any} />
			</FormTab>
		</TabbedForm>
	);
};

export default ContractForm;
