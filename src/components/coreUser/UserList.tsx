import {
	Datagrid,
	DateField,
	EmailField,
	List,
	NumberField,
	ReferenceField,
	TextField,
	useLocale,
} from 'react-admin';
import { useMyDefaultStyles } from '../../styles/default';

export const UserList = (props: any) => {
	const defaultClss = useMyDefaultStyles();
	const lang = useLocale();
	return (
		<List {...props} sort={{ field: 'code', order: 'ASC' }}>
			<Datagrid rowClick="edit">
				<NumberField
					headerClassName={defaultClss.header}
					label="custom_root.main.code"
					source="code"
				/>
				<EmailField
					source="email"
					headerClassName={defaultClss.header}
					label="custom_root.main.email"
				/>
				<TextField
					source="name.full"
					label="custom_root.main.name"
					headerClassName={defaultClss.header}
				/>
				<TextField
					source="phone"
					label="custom_root.main.phone"
					headerClassName={defaultClss.header}
				/>
				<DateField
					source="created_at"
					label="custom_root.main.created_at"
					headerClassName={defaultClss.header}
				/>

				<ReferenceField
					headerClassName={defaultClss.header}
					source="user_type_id"
					reference="core_usertype"
					label="custom_root.main.user_type"
				>
					<TextField source={`label.${lang}`} />
				</ReferenceField>
			</Datagrid>
		</List>
	);
};
