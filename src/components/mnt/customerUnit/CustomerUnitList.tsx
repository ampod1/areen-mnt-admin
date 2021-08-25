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

export default function CustomerUnitList(props: ListProps) {
	const defaultClss = useMyDefaultStyles();

	return (
		<List {...props} sort={{ field: 'code', order: 'ASC' }}>
			<Datagrid rowClick="edit">
				<NumberField
					label="custom_root.main.code"
					source="code"
					headerClassName={defaultClss.header}
				/>
				<ReferenceField
					source="customer_id"
					reference="bsc_customer"
					label="custom_root.main.customer_name"
					headerClassName={defaultClss.header}
				>
					<TextField source="name.full" />
				</ReferenceField>
				<ReferenceField
					source="unit_id"
					reference="mnt_unit"
					label="custom_root.main.unit_number"
					headerClassName={defaultClss.header}
				>
					<TextField source="unit_number" />
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
