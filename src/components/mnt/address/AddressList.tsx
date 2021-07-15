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

const AddressList = (props: ListProps) => {
	const defaultClss = useMyDefaultStyles();

	return (
		<List {...props}>
			<Datagrid>
				<TextField
					source="address"
					label="Address"
					headerClassName={defaultClss.header}
				/>
				<NumberField
					source="lng"
					label="Longitude"
					headerClassName={defaultClss.header}
				/>
				<NumberField
					source="lat"
					label="Latitude"
					headerClassName={defaultClss.header}
				/>
				<ReferenceField
					source="unit_id"
					reference="mnt_unit"
					label="Unit Number"
					headerClassName={defaultClss.header}
				>
					<TextField source="unit_number" />
				</ReferenceField>
				<DateField
					source="created_at"
					label="Created at"
					headerClassName={defaultClss.header}
				/>
			</Datagrid>
		</List>
	);
};

export default AddressList;
