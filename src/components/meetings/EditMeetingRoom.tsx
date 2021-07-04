import React from 'react';
import {
	Edit,
	SimpleForm,
	NumberInput,
	TextInput,
	DateInput,
	ResourceComponentInjectedProps,
} from 'react-admin';
const EditMeetingRoom = (props: ResourceComponentInjectedProps) => (
	<Edit {...props}>
		<SimpleForm>
			<TextInput source="title.en" />
			<TextInput source="title.ar" />
			<NumberInput source="space" />
			<NumberInput source="guests.theatre" />
			<NumberInput source="guests.conference" />
			<NumberInput source="guests.wedding" />
			<NumberInput source="guests.reception" />
		</SimpleForm>
	</Edit>
);

export default EditMeetingRoom;
