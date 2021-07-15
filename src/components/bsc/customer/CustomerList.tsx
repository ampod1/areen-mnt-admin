import React from 'react';
import {
	Datagrid,
	DateField,
	List,
	ListProps,
	NumberField,
	ReferenceField,
	TextField,
} from 'react-admin';
import { useMyDefaultStyles } from '../../../styles/default';

export default function CustomerList(props: ListProps) {
	const defaultClss = useMyDefaultStyles();
	return (
		<List {...props}>
			<Datagrid rowClick="edit">
				<NumberField
					source="code"
					label="Code"
					headerClassName={defaultClss.header}
				/>
				<TextField
					source="name.full"
					headerClassName={defaultClss.header}
					label="Customer's Name"
				/>
				<ReferenceField
					source="customer_type_id"
					reference="bsc_customer_type"
					label="Customer Type"
					headerClassName={defaultClss.header}
				>
					<TextField source="label.ar" />
				</ReferenceField>
				<DateField
					source="created_at"
					label="Created at"
					headerClassName={defaultClss.header}
				/>
			</Datagrid>
		</List>
	);
}
