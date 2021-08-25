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
import { useMyDefaultStyles } from '../../../styles/default';
import ListActions from './../../../reactAdminCustom/ListActions';

const CustomerTypeList = (props: ListProps) => {
	const defaultClss = useMyDefaultStyles();
	const lang = useLocale();
	const Filters = [
		<SearchInput
			source={`label.${lang}`}
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
					source={`label.en`}
					label="Name"
					headerClassName={defaultClss.header}
				/>
				<TextField
					source={`label.ar`}
					label="الاسم"
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

export default CustomerTypeList;
