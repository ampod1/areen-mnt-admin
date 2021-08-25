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
	SearchInput,
} from 'react-admin';
import { useMyDefaultStyles } from '../../../styles/default';
import ListActions from './../../../reactAdminCustom/ListActions';

export default function ProjectList(props: ListProps) {
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
					label="الاسم"
					headerClassName={defaultClss.header}
				/>
				<TextField
					source={`label.en`}
					label="Name"
					headerClassName={defaultClss.header}
				/>
				<ReferenceField
					source="site_id"
					reference="mnt_site"
					label="custom_root.main.site"
					headerClassName={defaultClss.header}
				>
					<TextField source={`label.${lang}`} />
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
