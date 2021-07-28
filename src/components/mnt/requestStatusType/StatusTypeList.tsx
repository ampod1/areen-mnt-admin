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

const StatusTypeList = (props: ListProps) => {
	const defaultClss = useMyDefaultStyles();
	const lang = useLocale();
	return (
		<List {...props}>
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
				<DateField
					source="created_at"
					label="custom_root.main.created_at"
					headerClassName={defaultClss.header}
				/>
			</Datagrid>
		</List>
	);
};

export default StatusTypeList;
