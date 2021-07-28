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

const ContractList = (props: ListProps) => {
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
					source="unit_id"
					reference="mnt_unit"
					label="custom_root.main.unit_number"
					headerClassName={defaultClss.header}
				>
					<TextField source="unit_number" />
				</ReferenceField>
				<DateField
					source="start_date"
					label="custom_root.main.starts_at"
					headerClassName={defaultClss.header}
				/>
				<DateField
					source="end_date"
					label="custom_root.main.ends_at"
					headerClassName={defaultClss.header}
				/>
				<DateField
					source="created_at"
					label="custom_root.main.created_at"
					headerClassName={defaultClss.header}
				/>
			</Datagrid>
		</List>
	);
};

export default ContractList;
