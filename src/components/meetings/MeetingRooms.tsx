import React from 'react';
import {
	List,
	Datagrid,
	NumberField,
	TextField,
	DateField,
	ResourceComponentInjectedProps,
} from 'react-admin';

const MeetingRoomsList = (props: ResourceComponentInjectedProps) => (
	<List {...props}>
		<Datagrid rowClick="edit">
			<TextField source="title.ar" />
			<TextField source="title.en" />
			<NumberField source="space" />
			<NumberField source="guests.conference" />
			<NumberField source="guests.theatre" />
			<NumberField source="guests.wedding" />
			<NumberField source="guests.reception" />
			<TextField source="id" />
		</Datagrid>
	</List>
);

export default MeetingRoomsList;
