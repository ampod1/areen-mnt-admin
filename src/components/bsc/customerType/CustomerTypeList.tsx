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
import { useMyDefaultStyles } from '../../../styles/default';

const CustomerTypeList = (props: ListProps) => {
	const defaultClss = useMyDefaultStyles();
	const lang = useLocale();
	return (
		<List {...props}>
			<Datagrid rowClick="edit">
				<NumberField
					source="code"
					label="custom_root.main.code"
					headerClassName={defaultClss.header}
				/>
				<TextField
					source={`label.${lang}`}
					label="Name"
					headerClassName={defaultClss.header}
				/>
				<TextField
					source={`label.${lang}`}
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
