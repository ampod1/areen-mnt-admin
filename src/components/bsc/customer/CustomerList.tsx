import React from 'react';
import {
	Datagrid,
	DateField,
	List,
	ListProps,
	NumberField,
	ReferenceField,
	TextField,
	TextInput,
	useLocale,
} from 'react-admin';
import { useMyDefaultStyles } from '../../../styles/default';
import ListActions from './../../../reactAdminCustom/ListActions';

const Filters = [<TextInput label="Search" source="fullname" alwaysOn />];
export default function CustomerList(props: ListProps) {
	const defaultClss = useMyDefaultStyles();
	const lang = useLocale();
	return (
		<List {...props} actions={<ListActions />} filters={Filters}>
			<Datagrid rowClick="edit">
				<NumberField
					source="code"
					label="custom_root.main.code"
					headerClassName={defaultClss.header}
				/>
				<TextField
					source="name.full"
					headerClassName={defaultClss.header}
					label="custom_root.main.customer_name"
				/>

				<ReferenceField
					source="customer_type_id"
					reference="bsc_customer_type"
					label="custom_root.main.customer_type"
					headerClassName={defaultClss.header}
				>
					<TextField source={`label.${lang}`} />
				</ReferenceField>
				<DateField
					source="created_at"
					label="custom_root.main.created_at"
					headerClassName={defaultClss.header}
				/>
			</Datagrid>
		</List>
	);
}
