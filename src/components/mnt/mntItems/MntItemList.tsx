import React from 'react';
import {
	Datagrid,
	List,
	NumberField,
	TextField,
	useLocale,
	SearchInput,
} from 'react-admin';
import { useMyDefaultStyles } from '../../../styles/default';
import ListActions from './../../../reactAdminCustom/ListActions';

const MntItemList = (props: any) => {
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
					label="custom_root.main.code"
					source="code"
					headerClassName={defaultClss.header}
				/>
				<TextField
					source={`label.ar`}
					label="الاسم العربي"
					headerClassName={defaultClss.header}
				/>
				<TextField
					source={`label.en`}
					label="Name En"
					headerClassName={defaultClss.header}
				/>
				<NumberField
					source="default_month_period"
					label="custom_root.main.default_period"
					headerClassName={defaultClss.header}
				/>
				<NumberField
					source="default_price"
					label="custom_root.main.default_price"
					headerClassName={defaultClss.header}
				/>
			</Datagrid>
		</List>
	);
};

export default MntItemList;
