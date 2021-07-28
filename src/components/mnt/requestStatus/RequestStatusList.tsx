import React from 'react';
import {
	Datagrid,
	DateField,
	List,
	ListProps,
	NumberField,
	ReferenceField,
	TextField,
	useLocale,
} from 'react-admin';
import { useMyDefaultStyles } from '../../../styles/default';

const RequestStatusList = (props: ListProps) => {
	const defaultClss = useMyDefaultStyles();
	const lang = useLocale();
	return (
		<List {...props}>
			<Datagrid rowClick="edit">
				<NumberField
					label="custom_root.main.code"
					source="code"
					headerClassName={defaultClss.header}
				/>
				<ReferenceField
					source="req_status_type_id"
					reference="mnt_request_status_type"
					label="Request Status"
					headerClassName={defaultClss.header}
				>
					<TextField source={`label.en`} />
				</ReferenceField>
				<ReferenceField
					source="req_status_type_id"
					reference="mnt_request_status_type"
					label="حالة الطلب"
					headerClassName={defaultClss.header}
				>
					<TextField source={`label.ar`} />
				</ReferenceField>
				<ReferenceField
					source="request_id"
					reference="mnt_request"
					label="custom_root.main.req_code"
					headerClassName={defaultClss.header}
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
};

export default RequestStatusList;
