import React from 'react';
import {
	Datagrid,
	DateField,
	List,
	ListProps,
	NumberField,
	TextField,
	useLocale,
} from 'react-admin';

const SiteList = (props: ListProps) => {
	const lang = useLocale();
	return (
		<List {...props}>
			<Datagrid rowClick="edit">
				<NumberField label="custom_root.main.code" source="code" />
				<TextField label="custom_root.main.name" source={`label.${lang}`} />
				<DateField label="custom_root.main.created_at" source="created_at" />
			</Datagrid>
		</List>
	);
};

export default SiteList;
