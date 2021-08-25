import React from 'react';
import {
	Datagrid,
	DateField,
	List,
	ListProps,
	NumberField,
	TextField,
	useLocale,
	SearchInput,
} from 'react-admin';
import { useMyDefaultStyles } from '../../styles/default';
import ListActions from './../../reactAdminCustom/ListActions';

export default function UsertypeList(props: ListProps) {
	const defaultClss = useMyDefaultStyles();
	const lang = useLocale();
	const Filters = [
		<SearchInput
			source={`label.ar`}
			alwaysOn
			placeholder="Enter customer name"
		/>,
	];
	return (
		<List {...props} actions={<ListActions />} filters={Filters}>
			<Datagrid rowClick="edit">
				<NumberField
					source="code"
					label="custom_root.main.code"
					headerClassName={defaultClss.header}
				/>
				<TextField
					source={`label.ar`}
					label="الاسم العربي"
					headerClassName={defaultClss.header}
				/>
				<TextField
					headerClassName={defaultClss.header}
					source={`label.en`}
					label="Name En"
				/>
				<DateField
					label="custom_root.main.created_at"
					headerClassName={defaultClss.header}
					source="created_at"
				/>
			</Datagrid>
		</List>
	);
}
