import { useQuery } from '@apollo/client';
import { useState } from 'react';
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
import { GET_PROJECTS } from './../../../query/mnt_projects';
import ProjectFilterList from './../../../reactAdminCustom/ProjectFilter';

export default function UnitList(props: ListProps) {
	const defaultClss = useMyDefaultStyles();
	const lang = useLocale();
	const [projectsState, setProjectsState] = useState<any[]>([]);
	const { data, loading } = useQuery(GET_PROJECTS, {
		onError(err) {
			console.log(err.message);
		},
		onCompleted() {
			setProjectsState([...data?.mnt_project]);
		},
	});
	const Filters = [
		<SearchInput
			source={`unit_number`}
			alwaysOn
			placeholder="Enter customer name"
		/>,
	];

	return (
		<List
			{...props}
			actions={<ListActions />}
			filters={Filters}
			aside={<ProjectFilterList projects={projectsState} />}
		>
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
