import {
	List,
	Datagrid,
	NumberField,
	DateField,
	EmailField,
	TextField,
	ReferenceField,
} from 'react-admin';

export const UserList = (props: any) => (
	<List {...props}>
		<Datagrid rowClick="edit">
			<NumberField source="code" />
			<EmailField source="email" />
			<TextField source="id" />
			<TextField source="name.full" />
			<DateField source="phone" />
			<DateField source="created_at" />
			<DateField source="updated_at" />
			<ReferenceField source="usertype_id" reference="core_usertype">
				<TextField source="label.en" />
			</ReferenceField>
		</Datagrid>
	</List>
);
