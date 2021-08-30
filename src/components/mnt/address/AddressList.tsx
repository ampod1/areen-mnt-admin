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
} from 'react-admin';
import { useMyDefaultStyles } from '../../../styles/default';
import ListActions from './../../../reactAdminCustom/ListActions';

const AddressList = (props: ListProps) => {
	const defaultClss = useMyDefaultStyles();
	const Filters = [<TextInput source={`address`} alwaysOn label="Search" />];
	return (
		<List {...props} actions={<ListActions />} filters={Filters}>
			<Datagrid rowClick="edit">
				<TextField
					source="address"
					label="custom_root.main.address"
					headerClassName={defaultClss.header}
				/>
				<NumberField
					source="lng"
					label="custom_root.main.lng"
					headerClassName={defaultClss.header}
				/>
				<NumberField
					source="lat"
					label="custom_root.main.lat"
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
					source="created_at"
					label="custom_root.main.created_at"
					headerClassName={defaultClss.header}
				/>
			</Datagrid>
		</List>
	);
};

export default AddressList;
