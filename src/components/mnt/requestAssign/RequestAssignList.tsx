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

export default function RequestAssignList(props: ListProps) {
	const defaultClss = useMyDefaultStyles();
	return (
		<List {...props}>
			<Datagrid rowClick="edit">
				<NumberField
					label="custom_root.main.code"
					source="code"
					headerClassName={defaultClss.header}
				/>
				<ReferenceField
					label="custom_root.main.technician"
					source="technician_id"
					reference="core_user"
					headerClassName={defaultClss.header}
				>
					<TextField source="name.full" />
				</ReferenceField>
				<ReferenceField
					source="request_id"
					reference="mnt_request"
					headerClassName={defaultClss.header}
					label="custom_root.main.req_code"
				>
					<TextField source="code" />
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
