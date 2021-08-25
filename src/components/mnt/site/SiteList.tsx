import React from 'react';
import ListActions from './../../../reactAdminCustom/ListActions';

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

const SiteList = (props: ListProps) => {
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
				<NumberField label="custom_root.main.code" source="code" />
				<TextField label="custom_root.main.name" source={`label.${lang}`} />
				<DateField label="custom_root.main.created_at" source="created_at" />
			</Datagrid>
		</List>
	);
};

export default SiteList;
