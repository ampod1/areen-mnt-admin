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
} from 'react-admin';
import { useMyDefaultStyles } from '../../../styles/default';

export default function UnitList(props: ListProps) {
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
				<ReferenceField
					source="project_id"
					reference="mnt_project"
					label="custom_root.main.project"
					headerClassName={defaultClss.header}
				>
					<TextField source={`label.${lang}`} />
				</ReferenceField>
				<NumberField
					source="unit_number"
					label="custom_root.main.unit_number"
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
}
