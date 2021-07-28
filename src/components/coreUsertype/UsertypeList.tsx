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
import { useMyDefaultStyles } from '../../styles/default';

export default function UsertypeList(props: ListProps) {
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
					label="الاسم العربي"
					headerClassName={defaultClss.header}
				/>
				<TextField
					headerClassName={defaultClss.header}
					source={`label.${lang}`}
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
